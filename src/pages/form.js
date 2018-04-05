import '../styles/form.css'
export default class Form extends React.Component {
  render() {
    return (
      <div className='container'>
        <form>
          <div className="section">
            <label>姓名</label>
            <input name="name"></input>
          </div>
          <div className="section">
            <label>头像</label>
            <input name="avatar" type="file"></input>
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
          <div className="section">
            <label>生日</label>
            <input name="birth_start" type="date"></input>
            <input name="birth_end" type="date"></input>            
          </div>
          <div className="section">

          </div>
          <div className="section">

          </div>
          <div className="section">

          </div>
          <div className="section">

          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}