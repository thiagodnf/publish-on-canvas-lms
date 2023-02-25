import showdown from "showdown";
import core from "@actions/core";

const converter = new showdown.Converter({
    noHeaderId: true,
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    extensions: []
});

export default function MarkdownParser(content = "") {

    let css = FileUtils.readFile("bootstrap.min.css");

    let html = converter.makeHtml(content);

    core.info(css);

    return html;
}
