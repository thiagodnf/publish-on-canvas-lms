import core from "@actions/core";
import parser from "../parser/Parser.js";
import FileUtils from "../utils/FileUtils.js";
import StringUtils from "../utils/StringUtils.js";
import CanvasApiUtils from "../utils/CanvasApiUtils.js";

/**
 * Process files related to Canvas's Pages
 * @param {string} files the list of all files
 * @returns
 */
export default function Assignments(files, css = "") {

    core.info("Processings Assignments");

    if (StringUtils.isBlank(files)) {
        return;
    }

    if (!StringUtils.isBlank(css)) {

        core.info("Loading .css file");

        css = FileUtils.getFileContent(css);
    }

    core.info("Loading files...");

    files = FileUtils.loadFiles(files);

    core.info(`Found ${files.size} file(s). Processing them:`);

    files.forEach(file => {

        core.info(`Processing: ${file}`);

        core.info(FileUtils);

        let content = FileUtils.getFileContent(file);

        core.info(content);
        core.info(css);

        let { html, metadata } = parser(content, css);

        if (metadata && metadata.id) {

            core.info(`AssignmentId: ${metadata.id}`);

            CanvasApiUtils.updateAssignments(metadata.id, { description: html });
        }
    });
}
