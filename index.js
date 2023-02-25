import core from "@actions/core";
import FileUtils from "./src/utils/FileUtils.js";
import Pages from "./src/resources/Pages.js";

// most @actions toolkit
// packages have async methods
async function run() {

    core.info(process.env);
    try {

        Pages(core.getInput("canvas_pages"));

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
