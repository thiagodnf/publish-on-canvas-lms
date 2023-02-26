import showdown from "showdown";
import juice from "juice";
import Highlight from "./extensions/Highlight.js";
import Strikethrough from "./extensions/Strikethrough.js";
import Card from "./extensions/Card.js";
import CardBody from "./extensions/CardBody.js";
import CardHeader from "./extensions/CardHeader.js";

const converter = new showdown.Converter({
    noHeaderId: true,
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    extensions: [Highlight, Strikethrough, Card, CardHeader, CardBody]
});

export default function parser(content, css) {

    let html = converter.makeHtml(content);

    html = juice(`<style>${css}</style>${html}`, { preserveImportant: true });

    return html;
}
