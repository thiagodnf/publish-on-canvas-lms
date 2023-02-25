import fs from "fs";
import path from "path";
import process from "process";
import { glob } from "glob";
import core from "@actions/core";

export default class FileUtils {

    static isWorkspaceEmpty() {

        return FileUtils.isEmpty(FileUtils.getWorkspacePath());
    }

    static getWorkspacePath() {

        return process.env["GITHUB_WORKSPACE"] || "";
    }

    static exists(fileOrPath) {

        return fs.existsSync(fileOrPath);
    }

    static loadFiles(input) {

        let array = Array.isArray(input) ? input : [input];

        core.debug("Loading all files");

        const files = new Set();

        array.forEach(el => {

            core.debug(`Processing: ${el}`);

            FileUtils.searchFiles(el).forEach(file => {

                core.debug(`Adding file: ${file}`);

                files.add(file);
            });
        });

        return files;
    }

    static searchFiles(pattern) {

        const options = {
            cwd: FileUtils.getWorkspacePath()
        };

        return glob.sync(pattern, options);
    }

    static isEmpty(path) {

        if (!FileUtils.exists(path)) {
            throw new Error(`${path} does not exist`);
        }

        return fs.readdirSync(path).length === 0;
    }

    static parse(filePath) {
        return path.parse(filePath);
    }

    static getFileName(filePath) {
        return FileUtils.parse(filePath).name;
    }

    static getFileExtension(filePath) {
        return FileUtils.parse(filePath).ext;
    }

    static getFileContent(file, encoding = "utf-8") {

        const filePath = path.join(FileUtils.getWorkspacePath(), file);

        return fs.readFileSync(filePath, { encoding });
    }
}
