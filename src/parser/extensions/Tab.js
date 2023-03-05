var Tab = function () {

    var plugin = {
        type: "lang",
        filter: function (text, converter, options) {

            var regex = new RegExp(/\[tab\](.*)\[\/tab\]/, "s");

            text = text.replace(regex, function (match1, items) {

                var itemRegex = new RegExp("((?:\\[tabitem\\]\\((.+)\\)((\\n|\\r|.)*?)\\[\/tabitem]))", "gm");

                let navItems = [];
                let tabPane = [];

                let m;

                items = items.trim();

                while ((m = itemRegex.exec(items.trim())) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    let title = m[2];
                    let content = m[3];

                    content = converter.makeHtml(content);

                    const active = navItems.length === 0 ? "active" : "";
                    const showActive = navItems.length === 0 ? "show active" : "";

                    navItems.push(`<li>
                        <a href="#fragment-${navItems.length+1}">${title}</a>
                    </li>`);

                    tabPane.push(`<div id="fragment-${tabPane.length+1}">${content}</div>`);
                }

                const navTabs = `<ul>${navItems.join("")}</ul>`;
                const tabContens = `${tabPane.join("")}`;

                return `<div class="enhanceable_content tabs">${navTabs}${tabContens}</div>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default Tab;
