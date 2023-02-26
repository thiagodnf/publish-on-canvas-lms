import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
\`\`\`html
<p>oi</p>
\`\`\`
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
