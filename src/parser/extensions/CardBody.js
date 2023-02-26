var CardBody = function () {

    var plugin = {
        type: "lang",
        // regex: /\[!CardBody\]((\n|\r|.)*?)\[CardBody\]/g,
        // replace: "<div class='card-body'>$1</div>",
        filter: function (text, converter) {

            var regex = new RegExp(/\[!CardBody\]((\n|\r|.)*?)\[CardBody\]/, "g");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                //content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                return `<div class='card-body'>${content}</div>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default CardBody;
