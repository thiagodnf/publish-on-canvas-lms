import core from "@actions/core";
import FileUtils from "../utils/FileUtils.js";
import StringUtils from "../utils/StringUtils.js";

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

    const files = FileUtils.loadFiles([input]);

    core.info(`Found ${files.size} file(s). Processing them:`);

    files.forEach(file => {

        core.info(`Processing: ${file}`);

        let content = FileUtils.getContent(file);

        core.info(content);
    });
}
