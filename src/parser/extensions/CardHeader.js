var CardHeader = function () {

    var plugin = {
        type: "lang",
        // regex: /\[!CardHeader\]((\n|\r|.)*?)\[CardHeader\]/g,
        // replace: "<div class='card-header'>$1</div>"
        filter: function (text, converter, options) {

            var regex = /\[!CardHeader\]((\n|\r|.)*?)\[CardHeader\]/g;

            text = text.replace(regex, function (match, content) {

                content = converter.makeHtml(content);

                return `<div class='card'>${content}</div>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default CardHeader;
