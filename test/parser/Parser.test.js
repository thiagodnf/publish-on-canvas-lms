import parser from "../../src/parser/Parser.js";
import FileUtils from "../../src/utils/FileUtils.js";

test("throws invalid number", () => {

    // let md = "@id 351105";

        let md = `
<!--
@id 123
-->

## Hello
        `;

        let assignmentId = /@id\s+(\d+)$/gm.exec(md);

        console.log(assignmentId[1]);

        let html = parser(md, "");

//     const md = `
// teste [!icon](airplane)
//     `;

//     const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
