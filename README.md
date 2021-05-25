# create-lib-template

脚手架配置解决代码检查、代码格式化、`commit`检查、编译打包等基础设施。使用者只需关注工具库的实现。

- 默认使用`TypeScript`
- 默认开启`eslint`、`commitlint`、`prettier`
- 支持输出`.d.ts`文件
- 输出`esm`和`umd`模块
- 使用[typedoc](https://typedoc.org/)生成`api`文档