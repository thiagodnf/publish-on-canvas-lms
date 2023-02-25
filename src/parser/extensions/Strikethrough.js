var Strikethrough = function () {

    var plugin = {
        type: "lang",
        regex: /~~(.*)~~/g,
        replace: "<s>$1</s>"
    };

    return [plugin];
};

export default Strikethrough;
