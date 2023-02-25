import core from "@actions/core";
import Pages from "./src/resources/Pages.js";

// most @actions toolkit
// packages have async methods
async function run() {

    try {

        Pages(core.getInput("canvas_pages"));

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
