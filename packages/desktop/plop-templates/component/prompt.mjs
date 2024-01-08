import { notEmpty } from './utils.mjs'

const PREFIX_PATH = 'src/renderer/'

export default {
  description: 'generate vue3 ts component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名',
      validate: notEmpty('name')
    },
    {
      type: 'rawlist',
      name: 'path',
      message: '设置组件生成位置',
      choices: ['src/business/views/components', 'src/business/views', 'src/components'],
      filter(value) {
        if (
          value != 'src/components' &&
          value != 'src/business/views' &&
          value != 'src/business/views/components'
        ) {
          return ''
        }

        return PREFIX_PATH + value
      },
      validate(value) {
        if (!value) {
          return '请选择生成的位置'
        }

        return true
      }
    },
    {
      type: 'rawlist',
      name: 'tpl',
      message: '组件类型,如:gloabl,composition,setup等',
      choices: ['composition', 'global', 'setup', 'options'],
      validate(value) {
        if (!value) {
          return '请选择组件类型'
        }

        return true
      }
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: '组件内部选项,如:template,script,style',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'Components require at least a <script> or <template> tag.'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const { name, path, tpl, blocks } = data

    let templateFileName = 'business'
    if (tpl === 'global') {
      templateFileName = 'global'
    }

    const actions = [
      // src/index.vue
      {
        type: 'add',
        path: `${path}/${name}/src/index.vue`,
        templateFile: `plop-templates/component/${templateFileName}-component/{{ pascalCase tpl }}.vue.hbs`,
        data: {
          component_name: name,
          class_name: name,
          template: blocks.includes('template'),
          script: blocks.includes('script'),
          style: blocks.includes('style')
        }
      },
      // index.ts
      {
        type: 'add',
        path: `${path}/${name}/index.ts`,
        templateFile: `plop-templates/component/${templateFileName}-component/index.ts.hbs`,
        data: {
          component_name: name
        }
      },
      // src/index.scss
      {
        type: 'add',
        path: `${path}/${name}/src/index.scss`,
        templateFile: `plop-templates/component/${templateFileName}-component/index.scss.hbs`,
        data: {
          component_name: name
        }
      },
      // src/props.ts
      {
        type: 'add',
        path: `${path}/${name}/src/props.ts`,
        templateFile: `plop-templates/component/common/props.ts.hbs`,
        data: {
          component_name: name
        }
      }
    ]

    return actions
  }
}
