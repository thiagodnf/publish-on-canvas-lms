import core from "@actions/core";
import parser from "../core/Parser.js";
import FileUtils from "../utils/FileUtils.js";
import StringUtils from "../utils/StringUtils.js";
import CanvasApiUtils from "../utils/CanvasApiUtils.js";

/**
 * Process files related to Canvas's Pages
 * @param {string} files the list of all files
 * @returns
 */
export default function Pages(files, css = "") {

    core.info("Processings Pages");

    if (StringUtils.isBlank(files)) {
        return;
    }

    if (!StringUtils.isBlank(css)) {

        core.info("Loading .css file");

        css = FileUtils.getFileContent(css);

        core.info(css);
    }

    core.info("Loading files...");

    files = FileUtils.loadFiles(files);

    core.info(`Found ${files.size} file(s). Processing them...`);

    files.forEach(file => {

        core.info(`Processing: ${file}`);

        let filename = FileUtils.getFileName(file);
        let content = FileUtils.getFileContent(file);

        let output = parser(content, css);

        CanvasApiUtils.createOrUpdatePages(filename, { body: output });
    });
}
