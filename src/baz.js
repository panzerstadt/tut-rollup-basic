import catMe from "cat-me";

const out = catMe();

console.log(out);

export default out.replace(/ /g, "&nbsp;");
