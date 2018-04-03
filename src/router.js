import { BrowserRouter, Route } from "react-router-dom";
import Search from './pages/search'
import Form from './pages/form'

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Search}/>
      <Route path="/form" component={Form} />
    </div>
  </BrowserRouter>
)

// 1. BrowseRouter 是使用HTML5 的historyAPI实现的
// 2. Route 外层套div是因为 BrowseRouter只接受一个子元素
// 3. exact 表示只有当跳转的路径与此路径完全相等时才会匹配