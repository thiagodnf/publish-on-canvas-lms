import core from "@actions/core";
import MarkdownParser from "../parsers/MarkdownParser.js";
import FileUtils from "../utils/FileUtils.js";
import StringUtils from "../utils/StringUtils.js";
import CanvasApiUtils from "../utils/CanvasApiUtils.js";

/**
 * Process files related to Canvas's Pages
 * @param {string} input the list of all files
 * @returns
 */
export default function Pages(input = "") {

    if (StringUtils.isBlank(input)) {
        return;
    }

    core.info("Processings Pages");

    const files = FileUtils.loadFiles(input);

    core.info(`Found ${files.size} file(s). Processing them:`);

    files.forEach(file => {

        core.info(`Processing: ${file}`);

        let filename = FileUtils.getFileName(file);
        let content = FileUtils.getContent(file);

        let output = MarkdownParser(content);

        CanvasApiUtils.createUpdatePages(filename, {body: output});
        core.info(output);
    });
}
