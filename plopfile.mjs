import componentGenerator from "./plop-templates/prompt.mjs";

export default function (plop) {
  plop.setGenerator("component", componentGenerator);
}