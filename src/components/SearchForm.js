export default class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <div className="section">
          <label>姓名</label>
          <input name="name"></input>
        </div>
        <div className="section">
          <label>性别</label>
          男：<input name="sex" type="radio" value="1"></input>          
          女：<input name="sex" type="radio" value="0"></input>  
        </div>
        <div className="section">
          <label>班级</label>
          <input name="_class"></input>
        </div>
        <input type="submit"></input>
      </form>
    )
  }
}