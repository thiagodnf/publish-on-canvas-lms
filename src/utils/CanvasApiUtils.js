import axios from "axios";

export default class CanvasApiUtils {

    static API_URL = "https://canvas.flint.umich.edu/api/v1";

    static API_TOKEN = process.env.CANVAS_API_TOKEN || "";

    static COURSE_ID = process.env.COURSE_ID || -1;

    static getHeaders() {
        return {
            headers: {
                "Authorization": `Bearer ${RestApi.API_TOKEN}`
            }
        };
    }

    static async put(url, data) {

        url = url.replace(":course_id", CanvasApiUtils.COURSE_ID);

        return new Promise((resolve, reject) => {

            axios.put(`${RestApi.API_URL}${url}`, data, RestApi.getHeaders())
                .then(resolve)
                .catch(reject);
        });
    }

    static createUpdatePages(pageUrlOrId, fields = {}) {

        const data = {
            wiki_page: fields
        };

        let url = "/courses/:course_id/pages/:url_or_id";

        url = url.replace(":url_or_id", pageUrlOrId);

        return RestApi.put(url, data);
    }
}
