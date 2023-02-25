var Strikethrough = function () {

    var plugin = {
        type: "lang",
        regex: /~~(.*)~~/g,
        replace: "<del>$1</del>"
    };

    return [plugin];
};

export default Strikethrough;
