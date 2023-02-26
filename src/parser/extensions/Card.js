var Card = function () {

    var plugin = {
        type: "lang",
        // regex: /\[!Card\]((\n|\r|.)*?)\[Card\]/g,
        // replace: "<div class='card'>$1</div>"
        filter: function (text, converter) {

            var regex = new RegExp(/\[!Card\]\((.*)\)\{(.*)\}((\n|\r|.)*?)\[Card\]/, "g");

            text = text.trim().replace(regex, function (match, header, classes, content) {

                header = converter.makeHtml(header.trim());
                content = converter.makeHtml(content.trim());

                header = header.replace(/^<p>(.*)<\/p>$/, "$1");

                return `
                    <div class='card ${classes}'>
                        <div class="card-header">${header}</div>
                        <div class="card-body">${content}</div>
                    </div>
                `.trim();
            });

            return text;
        }
    };

    return [plugin];
};

export default Card;
