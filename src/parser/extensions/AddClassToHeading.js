var AddClassToHeading = function () {

    var plugin = {
        type: "output",
        regex: "<h2(.*?)>(.*?)</h2>",
        replace: "<h2 class='ui-priority-primary' $1>$2</h2>"
    };

    return [plugin];
};

export default AddClassToHeading;
