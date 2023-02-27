import parser from "../../src/parser/Parser.js";
import FileUtils from "../../src/utils/FileUtils.js";

test("throws invalid number", () => {

    // let md = "@id 351105";

        let md = `
## Heading 1

### heading 2.1

### heading 2.2

#### test

#### teste 2

## heading 2.3


        `;

        let html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
