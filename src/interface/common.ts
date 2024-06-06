// 路由组件配置文件格式
export interface iPage {
  path?: string // 用于辅助动态生成时类型检查，各page.ts中不填写
  parent?: string // 父组件path
  name: string // 路由name
  level: number // 路由等级
  title?: string // 所需传参，此处以title为例
}
