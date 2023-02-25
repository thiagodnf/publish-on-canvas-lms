import core from "@actions/core";

export default function Pages(input = ""){

    core.info("Processings Pages");

    const files = FileUtils.loadFiles([input]);

    core.info(`Found ${files.size} file(s). Checking them:`);

    files.forEach(file => {
        core.info(`Processing: ${file}`);
    });

}
