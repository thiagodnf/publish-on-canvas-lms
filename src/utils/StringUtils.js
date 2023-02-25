export default class StringUtils {

    static isString(str) {

        return typeof str === "string" || str instanceof String;
    }

    static isBlank(str) {

        if (!str) {
            return true;
        }

        if (!StringUtils.isString(str)) {
            return false;
        }

        return str.trim().length === 0;
    }

}
