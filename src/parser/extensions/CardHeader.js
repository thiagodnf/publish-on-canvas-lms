var CardHeader = function () {

    var plugin = {
        type: "lang",
        filter: function (text, converter) {

            var regex = new RegExp(/\[!CardHeader\]((\n|\r|.)*?)\[CardHeader\]/, "g");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                return `<div class='card-header'>${content}</div>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default CardHeader;
