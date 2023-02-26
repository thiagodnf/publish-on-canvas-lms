var Alert = function () {

    var plugin = {
        type: "lang",
        // regex: /\[!Card\]((\n|\r|.)*?)\[Card\]/g,
        // replace: "<div class='card'>$1</div>"
        filter: function (text, converter) {

            var regex = new RegExp(/\[!Alert\]\{(.*)\}((\n|\r|.)*?)\[Alert\]/, "g");

            text = text.trim().replace(regex, function (match, classes, content) {

                content = converter.makeHtml(content.trim());

                content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                return `<div class="alert alert-${classes}" role="alert">${content}</div>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default Alert;
