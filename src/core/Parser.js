import showdown from "showdown";
import juice from "juice";

const converter = new showdown.Converter({
    noHeaderId: true,
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    extensions: []
});

export default function parser(content, css) {

    let html = converter.makeHtml(content);

    html = juice(`<style>${css}</style>${html}`);

    return html;
}
