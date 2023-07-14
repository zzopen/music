import componentGenerator from './plop-templates/component/prompt.mjs'

export default function (plop) {
  plop.setGenerator('component', componentGenerator)
}
