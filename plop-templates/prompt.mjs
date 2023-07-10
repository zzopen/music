import { notEmpty } from './utils.mjs'

export default {
  description: "generate vue3 ts component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件名",
      validate: notEmpty("name"),
    },
    {
      type: "rawlist",
      name: "path",
      message: "设置组件生成位置",
      choices: ["src/components", "src/views/components"],
      filter(value) {
        if (value === "src/components") {
          return "src/components";
        }

        if (value === "src/views/components") {
          return "src/views/components";
        }

        return "";
      },
      validate(value) {
        if (!value) {
          return "请选择生成的位置";
        }

        return true;
      },
    },
    {
      type: "rawlist",
      name: "tpl",
      message: "组件类型,如:options,composition,setup等",
      choices: ["setup", "composition", "options", "business"],
      validate(value) {
        if (!value) {
          return "请选择组件类型";
        }

        return true;
      },
    },
    {
      type: "checkbox",
      name: "blocks",
      message: "组件内部选项,如:template,script,style",
      choices: [
        {
          name: "<template>",
          value: "template",
          checked: true,
        },
        {
          name: "<script>",
          value: "script",
          checked: true,
        },
        {
          name: "style",
          value: "style",
          checked: true,
        },
      ],
      validate(value) {
        if (
          value.indexOf("script") === -1 &&
          value.indexOf("template") === -1
        ) {
          return "Components require at least a <script> or <template> tag.";
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    console.log("data:", data);
    let { name, path, tpl, blocks } = data;

    let templateFileName = 'default'
    if (tpl === 'business') {
        templateFileName = 'business'
    }
    
    const actions = [
      {
        type: "add",
        path: `${path}/${name}/src/index.vue`,
        templateFile: `plop-templates/component/src/${tpl}.vue.hbs`,
        data: {
          component_name: name,
          class_name: name,
          template: blocks.includes("template"),
          script: blocks.includes("script"),
          style: blocks.includes("style"),
        },
      },
      {
        type: "add",
        path: `${path}/${name}/src/props.ts`,
        templateFile: "plop-templates/component/src/props.ts.hbs",
        data: {
          component_name: name,
        },
      },
      {
        type: "add",
        path: `${path}/${name}/index.ts`,
        templateFile: `plop-templates/component/${templateFileName}.ts.hbs`,
        data: {
          component_name: name,
        },
      },
    ];

    return actions;
  },
};
