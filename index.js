import core from "@actions/core";
import FileUtils from "./src/utils/FileUtils.js";
import Pages from "./src/resources/Pages.js";

// most @actions toolkit
// packages have async methods
async function run() {

    try {

        Pages(core.getInput("canvas_pages"));

        // const canvas_assignments = core.getInput("canvas_assignments");

        // core.info(canvas_pages);
        // core.info(canvas_assignments);

        // // const files = FileUtils.loadFiles([canvas_pages]);

        // core.info(`Found ${files.size} file(s). Checking them:`);

        // files.forEach(file => {
        //     core.info(`Processing: ${file}`);
        // });

        core.setOutput("time", new Date().toTimeString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
