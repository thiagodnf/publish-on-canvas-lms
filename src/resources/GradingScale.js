import core from "@actions/core";
import parser from "../parser/Parser.js";
import FileUtils from "../utils/FileUtils.js";
import StringUtils from "../utils/StringUtils.js";
import CanvasApiUtils from "../utils/CanvasApiUtils.js";

/**
 * Process files related to Canvas's Syllabus
 * @param {string} files the list of all files
 * @returns
 */
export default function GradingScale(files, css = "") {

    core.info("Processings Grading Scale");

    if (StringUtils.isBlank(files)) {
        return;
    }

    if (!StringUtils.isBlank(css)) {

        core.info("Loading .css file");

        css = FileUtils.getFileContent(css);
    }

    core.info("Loading files...");

    files = FileUtils.loadFiles(files);

    core.info(`Found ${files.size} file(s). Processing them...`);

    files.forEach(file => {

        core.info(`Processing: ${file}`);

        let fileContent = FileUtils.getFileContent(file);

        let scale = JSON.parse(fileContent);

        CanvasApiUtils.updateGradingScale(scale);
    });
}
