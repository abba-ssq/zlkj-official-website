// const styleguide = require('@vercel/style-guide/prettier');

// module.exports = {
//   plugins: ["prettier-plugin-tailwindcss"],
// };

module.exports = {
  // 指定使用哪种解析器，例如 babel、flow 或 ts
  parser: "babel",

  // 指定需要使用的插件，数组中的插件会按照顺序应用
  plugins: [
    // 这里是您需要使用的插件，例如 prettier-plugin-tailwindcss
    "prettier-plugin-tailwindcss",
  ],

  // 忽略文件的规则，与 .prettierignore 文件中的规则相匹配
  ignoreFiles: ["*.min.js", "node_modules/**/*", "dist/**/*"],

  // 配置规则，例如缩进方式、最大行长度等
  rules: {
    // 缩进风格，可以是 tab 或 space
    tabWidth: 2,

    // 是否使用 tab 作为缩进
    useTabs: false,

    // 最大行长度
    printWidth: 80,

    // 缩进字符数
    indentation: 2,

    // 是否在文件末尾保留空行
    trailingComma: "es5",

    // 是否在对象字面量的属性中使用引号
    quoteProps: "as-needed",

    // 是否使用单引号
    singleQuote: true,

    // 是否在嵌套的模板字符串中保持空白
    templateStrings: {
      singleQuote: true,
    },

    // 箭头函数参数周围的空格
    arrowParens: "avoid",

    // 对象字面量中的属性冒号前后的空格
    objectSpacing: true,

    // 函数参数括号风格
    functionParenNewline: true,

    // 行末是否需要分号
    semi: false,

    // 行开始和行结束是否需要空格
    paddedBlock: false,

    // 函数括号内是否需要空格
    bracketSpacing: true,

    // 是否在 function 的花括号之前和之后放置空格
    functionSpace: true,
  },
};
