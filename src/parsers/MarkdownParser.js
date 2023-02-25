import showdown from "showdown";

const converter = new showdown.Converter({
    noHeaderId: true,
    tables: true,       // Enable support for tables synta
    tasklists: true,     //  Enable support for GFM tasklists,
    extensions: []
});

export default function MarkdownParser(content = "") {


    return converter.makeHtml(content);;
}
