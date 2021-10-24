import { Component } from "react";

import PersonListItem from "../personListItem/personListItem";

import './personList.scss'

class PersonList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { data, onFavorite, onDeleteItem } = this.props
    const items = data.map((item, i) => {
      const { ...items } = item
      return (
        <PersonListItem
          key={item.id}
          onFavorite={() => onFavorite(item.id)}
          onDeleteItem={() => onDeleteItem(item.id)}
          {...items}
        />
      )
    })

    return (
      <ul className="person-list">
        {data.length === 0 ? <i className="person-list__zero">Здесь пока ничего нет <i className="emodji">🤷🏼‍♂️</i></i> : items}
      </ul>
    )
  }
}

export default PersonList