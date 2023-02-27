var AddHeadingNumbers = function () {

    let firstLevel = 2;

    let numbering = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    function getNumbering(level) {

        if (level == firstLevel) {
            return numbering[firstLevel] + ".";
        }
        return getNumbering(level - 1) + numbering[level] + ".";
    }

    var plugin = {
        type: "output",
        filter: function (text) {

            var regex = new RegExp(/<h([123456]+)\s+(.*?)>(.*)<\/h([123456]+)>/, "gm");

            text = text.replace(regex, function (match, level, attr, content) {

                level = parseInt(level);

                numbering[level]++;

                if (level == firstLevel) {
                    for (let i = firstLevel + 1; i <= 6; i++) {
                        numbering[i] = 0;
                    }
                }

                let next = getNumbering(level);

                return `<h${level} ${attr}>${next} ${content}</h${level}>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default AddHeadingNumbers;
