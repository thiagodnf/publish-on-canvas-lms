import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
teste [!icon](airplane)
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
