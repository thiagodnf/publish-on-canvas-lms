var Card = function () {

    var plugin = {
        type: "lang",
        regex: /\[!Card\]((\n|\r|.)*?)\[Card\]/g,
        replace: "<div class='card'>$1</div>"
    };

    return [plugin];
};

export default Card;
