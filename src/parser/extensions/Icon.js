var Icon = function () {

    var plugin = {
        type: "lang",
        regex: /\[icon\]\[(.*)\]/g,
        replace: "<i class=\"icon-$1\"></i>"
    };

    return [plugin];
};

export default Icon;
