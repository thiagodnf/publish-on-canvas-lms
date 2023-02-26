import showdown from "showdown";
import juice from "juice";
import Highlight from "./extensions/Highlight.js";
import Card from "./extensions/Card.js";
import Alert from "./extensions/Alert.js";
import Code from "./extensions/Code.js";

const converter = new showdown.Converter({
    noHeaderId: true,       // Disable automatic generation of heading IDs.
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    strikethrough: true, // Enable support for strikethrough,
    simplifiedAutoLink: true, // Enable automatic linking for plain text URLs.
    extensions: [Highlight, Card, Alert, Code]
});

export default function parser(content, css) {

    let html = converter.makeHtml(content);

    html = juice(`<style>${css}</style>${html}`, { preserveImportant: true });

    return html;
}
