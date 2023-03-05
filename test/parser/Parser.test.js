import parser from "../../src/parser/Parser.js";
import CanvasApiUtils from "../../src/utils/CanvasApiUtils.js";
import FileUtils from "../../src/utils/FileUtils.js";

test("throws invalid number", async () => {




        let md = `

[Tab]

[TabItem][Tab 1]
teste
[/TabItem]

[TabItem][Tab 2]
**teste**
[/TabItem]

[/Tab]


        `;

        let html = parser(md, "");

    console.log(html);


});
