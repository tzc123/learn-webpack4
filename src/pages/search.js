import Table from '../components/Table'
import SearchForm from '../components/SearchForm'
import axios from 'axios'
import '../styles/search.css'

export default class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/list')
      .then(res => {
        if (res.status == 200 && res.data && res.data.success) {
          this.setState({
            data: res.data.data
          })
        }
      })
  }

  render() {
    const { data } = this.state
    return (
      <div className="container">
        <SearchForm/>
        <Table data={data}/>
      </div>
    )
  }
}