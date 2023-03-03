import parser from "../../src/parser/Parser.js";
import CanvasApiUtils from "../../src/utils/CanvasApiUtils.js";
import FileUtils from "../../src/utils/FileUtils.js";

test("throws invalid number", async () => {




        let md = `

# teste

## Heading 1

### heading 2.1

### heading 2.2

#### test

#### teste 2

## heading 2.3


        `;

        let html = parser(md, "");

    console.log(html);


});
