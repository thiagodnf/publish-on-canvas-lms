var Highlight = function () {

    var plugin = {
        type: "lang",
        regex: /==(.*)==/g,
        replace: "<mark>$1</mark>"
    };

    return [plugin];
};

export default Highlight;
