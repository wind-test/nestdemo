/*
 * @Title: 全局中间件
 * @Author: huangjitao
 * @Date: 2022-08-03 18:03:53
 * @Description: 使用函数编写
 */

export function GlobalMiddleware(req: any, res: any, next: () => void) {
  console.log('全局中间件');
  next();
}
