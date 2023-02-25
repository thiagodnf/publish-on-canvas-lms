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

    static async put(url, data) {

        url = url.replace(":course_id", CanvasApiUtils.COURSE_ID);

        core.debug(`Sending request to ${url}`);

        return new Promise((resolve, reject) => {

            axios.put(`${CanvasApiUtils.API_URL}${url}`, data, CanvasApiUtils.getHeaders())
                .then(resolve)
                .catch(reject);
        });
    }

    static createOrUpdatePages(pageUrlOrId, fields = {}) {

        const data = {
            wiki_page: fields
        };

        let url = "/courses/:course_id/pages/:url_or_id";

        url = url.replace(":url_or_id", pageUrlOrId);

        return CanvasApiUtils.put(url, data);
    }
}
