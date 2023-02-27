import axios from "axios";
import core from "@actions/core";

export default class CanvasApiUtils {

    static API_URL = "https://canvas.flint.umich.edu/api/v1";

    static API_TOKEN = process.env.CANVAS_API_TOKEN || "";

    static COURSE_ID = process.env.CANVAS_COURSE_ID || -1;

    static getHeaders() {
        return {
            headers: {
                "Authorization": `Bearer ${CanvasApiUtils.API_TOKEN}`
            }
        };
    }

    static async post(resource, data) {

        resource = resource.replace(":course_id", CanvasApiUtils.COURSE_ID);

        let url = `${CanvasApiUtils.API_URL}${resource}`;

        core.info(`Sending [POST] request to ${url}`);

        return new Promise((resolve, reject) => {

            axios.post(url, data, CanvasApiUtils.getHeaders())
                .then(resolve)
                .catch(reject);
        });
    }

    static async put(resource, data) {

        resource = resource.replace(":course_id", CanvasApiUtils.COURSE_ID);

        let url = `${CanvasApiUtils.API_URL}${resource}`;

        core.info(`Sending [PUT] request to ${url}`);

        return new Promise((resolve, reject) => {

            axios.put(url, data, CanvasApiUtils.getHeaders())
                .then(resolve)
                .catch(reject);
        });
    }

    static async get(resource) {

        resource = resource.replace(":course_id", CanvasApiUtils.COURSE_ID);

        let url = `${CanvasApiUtils.API_URL}${resource}`;

        core?.info(`Sending [GET] request to ${url}`);

        return new Promise((resolve, reject) => {

            axios.get(url, CanvasApiUtils.getHeaders())
                .then(resolve)
                .catch(reject);
        });
    }

    static createOrUpdatePages(pageUrlOrId, fields = {}) {

        const data = {
            wiki_page: fields
        };

        let resource = "/courses/:course_id/pages/:url_or_id";

        resource = resource.replace(":url_or_id", pageUrlOrId);

        return CanvasApiUtils.put(resource, data);
    }

    static updateAssignments(assignmentId, fields = {}) {

        const data = {
            assignment: fields
        };

        let resource = "/courses/:course_id/assignments/:id";

        resource = resource.replace(":id", assignmentId);

        return CanvasApiUtils.put(resource, data);
    }

    static createOrUpdateSyllabusBody(syllabusBody) {

        const data = {
            course: {
                syllabus_body: syllabusBody
            }
        };

        let resource = "/courses/:course_id";

        return CanvasApiUtils.put(resource, data);
    }

    static updateGradingScale(nextScale) {

        CanvasApiUtils.getGradingScale().then(response => {

            const scale = response.data.filter(el => el.title != nextScale.title)[0];

            if (scale) {
                return;
            }

            const data = {
                grading_scheme_entry: nextScale
            };

            let resource = "/courses/:course_id/grading_standards";

            return CanvasApiUtils.post(resource, data);
        });
    }

    static getGradingScale() {

        let resource = "/courses/:course_id/grading_standards";

        return CanvasApiUtils.get(resource);
    }
}
