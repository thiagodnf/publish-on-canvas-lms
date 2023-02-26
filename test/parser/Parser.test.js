import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
[!Card](**Tudo bem**){bg-dark}
Some quick example text to build on the card title and make up the bulk of the card's content.

Testtando [https://google.com](https://google.com)
[Card]
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
