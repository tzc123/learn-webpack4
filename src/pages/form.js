import '../styles/form.css'
import axios from 'axios'

const fields = ['name', 'sex', 'avatar', 'grade', '_class', 'birth']

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      sex: '' ,
      avatar: '',
      image: '',
      grade: '',
      _class: '',
      birth: ''
    }
  }

  handleSumbit(e) {
    e.preventDefault()
    const formData = new FormData()
    const isValid = fields.every(field => {
      if (!this.state[field]) {
        alert(field + '是必填的')
        return false
      } else {
        formData.append(field, this.state[field])
        return true
      }
    })
    if (!isValid) return

    axios.post('http://localhost:3000/add', formData)
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSexChange(e) {
    this.setState({
      sex: e.target.value
    })
  }

  handleAvatarChange(e) {
    const image = window.URL.createObjectURL(e.target.files[0])
    this.setState({
      avatar: e.target.files[0],
      image
    })
  }

  handleGradeChange(e) {
    this.setState({
      grade: e.target.value
    })
  }

  handleClassChange(e) {
    this.setState({
      _class: e.target.value
    })
  }

  handleBirthChange(e) {
    this.setState({
      birth: new Date(e.target.value).getTime()
    })
  }
  
  render() {

    return (
      <div className='container'>
        <form method="post" action="http://localhost:3000/add" onSubmit={this.handleSumbit.bind(this)}>
          <div className="section">
            <label>姓名</label>
            <input name="name" onChange={this.handleNameChange.bind(this)}></input>
          </div>
          <div className="section">
            <label>头像</label>
            <input name="avatar" type="file" onChange={this.handleAvatarChange.bind(this)}></input>
          </div>
          <div className="section">
            <label>性别</label>
            男：<input name="sex" type="radio" value="1" onClick={this.handleSexChange.bind(this)}></input>          
            女：<input name="sex" type="radio" value="0" onClick={this.handleSexChange.bind(this)}></input>  
          </div>
          <div className="section">
            <label>年级</label>
            <input name="grade" onChange={this.handleGradeChange.bind(this)}></input>
          </div>
          <div className="section">
            <label>班级</label>
            <input name="_class" onChange={this.handleClassChange.bind(this)}></input>
          </div>
          <div className="section">
            <label>生日</label>
            <input name="birth" type="date" onChange={this.handleBirthChange.bind(this)}></input>           
          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}