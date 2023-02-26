import hljs from "highlight.js";
import juice from "juice";
import CodeHighlightUtils from "../../utils/CodeHighlightUtils";

var Code = function () {

    var plugin = {
        type: "output",
        filter: function (text, converter) {

            var regex = new RegExp(/<code class="(.*)">((\n|\r|.)*?)<\/code>/, "g");

            text = text.trim().replace(regex, function (match, classes, code) {

                const language = classes.replace(/language-(.*)/g, "").trim();

                let html = hljs.highlight(code, { language }).value;
                let css = CodeHighlightUtils.getDefaultHighlight();

                html = juice(`<style>${css}</style>${html}`, { preserveImportant: true });

                return `<code class='${classes}'>${html}</code>`;
            });

            return text;
        }
    };

    return [plugin];
};

export default Code;
