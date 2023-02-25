import core from "@actions/core";
import FileUtils from "./src/utils/FileUtils.js";

// most @actions toolkit packages have async methods
async function run() {
  try {
    const canvas_pages = core.getInput("canvas_pages");
    const canvas_assignments = core.getInput("canvas_assignments");

    core.info(canvas_pages);
    core.info(canvas_assignments);

    const files = FileUtils.loadFiles(yamlFiles);

    core.info(`Found ${files.size} file(s). Checking them:`);

    files.forEach(file => {
      core.debug(`Processing: ${file}`);
    });
    // const ms = core.getInput('milliseconds');

    // core.info(`Waiting ${ms} milliseconds ...`);

    // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // await wait(parseInt(ms));
    // core.info((new Date()).toTimeString());

    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
