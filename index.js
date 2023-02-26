import core from "@actions/core";
import Pages from "./src/resources/Pages.js";
import Assignments from "./src/resources/Assignments.js";
// most @actions toolkit
// packages have async methods
async function run() {

    const resource = core.getInput("resource");
    const files = core.getInput("files");
    const css = core.getInput("css") || "";

    core.info(`Resource: ${resource}`);
    core.info(`Files: ${files}`);
    core.info(`CSS: ${css}`);

    try {

        if (resource === "pages") {
            Pages(files, css);
        }
        if (resource === "assignments") {
            Assignments(files, css);
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
