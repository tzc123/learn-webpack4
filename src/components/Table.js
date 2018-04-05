export default class Table extends React.Component {
  render() {
    const { data } = this.props 
    const dataComponent = data.length === 0
      ? <h3>'暂无数据'</h3>
      : data.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td><img src={'http://localhost:3000' + item.avatar}></img></td>
          <td>{item.name == 1 ? '男' : '女'}</td>
          <td>{item.sex}</td>
          <td>{item.grade}</td>
          <td>{item._class}</td>
          <td>{new Date(item.birth).toLocaleDateString()}</td>
          <td>{new Date(item.created_at).toLocaleDateString()}</td>
          <td>{item.updated_at ? new Date(item.updated_at).toLocaleDateString() : '无更新'}</td>
        </tr>
        )
      )
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>头像</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年级</th>
            <th>班级</th>
            <th>生日</th>
            <th>创建日期</th> 
            <th>修改日期</th>                                                                                                             
          </tr>
        </thead>
        <tbody>
          {dataComponent}
        </tbody>
      </table>
    )
  }
}