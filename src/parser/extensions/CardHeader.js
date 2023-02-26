var CardHeader = function () {

    var plugin = {
        type: "lang",
        regex: /\[!CardHeader\]((\n|\r|.)*?)\[CardHeader\]/g,
        replace: "<div class='card-header'>$1</div>"
    };

    return [plugin];
};

export default CardHeader;
