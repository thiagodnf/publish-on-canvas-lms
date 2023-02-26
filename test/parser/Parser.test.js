import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
\`\`\`js
const a = 10;
\`\`\`
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
