var CardBody = function () {

    var plugin = {
        type: "lang",
        regex: /\[!CardBody\]((\n|\r|.)*?)\[CardBody\]/g,
        replace: "<div class='card-body'>$1</div>"
    };

    return [plugin];
};

export default CardBody;
