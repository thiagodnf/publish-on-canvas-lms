import core from "@actions/core";
import showdown from "showdown";
import juice from "juice";

import Highlight from "./extensions/Highlight.js";
import Card from "./extensions/Card.js";
import Alert from "./extensions/Alert.js";
import Code from "./extensions/Code.js";
import Tab from "./extensions/Tab.js";
import Icon from "./extensions/Icon.js";
import AddHeadingNumbers from "./extensions/AddHeadingNumbers.js";
import AddClassToHeading from "./extensions/AddClassToHeading.js";

const converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    customizedHeaderId: true,
    metadata: true,
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    strikethrough: true, // Enable support for strikethrough,
    simplifiedAutoLink: true, // Enable automatic linking for plain text URLs.
    extensions: [Highlight, Card, Alert, Code, Tab, Icon, AddHeadingNumbers, AddClassToHeading]
});

export default function parser(content, css) {

    let html = converter.makeHtml(content);
    let metadata = converter.getMetadata();

    Object.keys(metadata).forEach(k => metadata[k] = metadata[k]?.trim());
    metadata = Object.keys(metadata)
        .reduce((c, k) => (c[k.toLowerCase().trim()] = metadata[k], c), {});

    html = juice(`<style>${css}</style>${html}`, { preserveImportant: true });

    return { html, metadata };
}
