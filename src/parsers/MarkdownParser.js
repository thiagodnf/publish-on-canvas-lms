import showdown from "showdown";
import core from "@actions/core";
import juice from "juice";

import FileUtils from "../utils/FileUtils.js";

const converter = new showdown.Converter({
    noHeaderId: true,
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    extensions: []
});

export default function MarkdownParser(content = "") {

    let css = FileUtils.getFileContent("bootstrap.min.css");

    let html = converter.makeHtml(content);

    html = juice(`<style>${css}</style>${html}`);

    return html;
}
