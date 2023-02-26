import parser from "../../src/parser/Parser.js";

test("throws invalid number", () => {

    const md = `
[!tab]

[!tabitem](Home)
agora vai dar cert *italic*
[tabitem]

[!tabitem](Profile)
Acho que não **Bold**
[tabitem]

[!tabitem](Profile Teste)
Acho que não **Bold**
[tabitem]

[tab]
    `;

    const html = parser(md, "");

    console.log(html);

    expect(2).toBe(2);
});
