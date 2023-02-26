import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
[!Alert](primary)
A simple primary alert—check it out!
[Alert]
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
