import { Component } from "react";

import './headerSearch.scss'

class HeaderSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueSearch: ''
    }
  }

  onChangeFilter = e => {
    const word = e.target.value
    this.setState({ valueSearch: word })
    this.props.onUpdateSearch(word)
  }

  render() {
    return (
      <input
        className="header__input"
        type="text"
        name="inputFilter"
        placeholder='Поиск...'
        onChange={this.onChangeFilter}
      />
    )
  }
}

export default HeaderSearch