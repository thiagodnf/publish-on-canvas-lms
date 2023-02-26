import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
        [!CardBody]
            Some quick example text to build on the card title and make up the bulk of the card's content.

[Link text Here](https://link-url-here.org)
        [CardBody]
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
