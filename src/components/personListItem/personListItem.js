import { Component } from "react";

import './personListItem.scss'

class PersonListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { fio, money, favorite, onFavorite, onDeleteItem } = this.props
    let activeFavorite = 'person-list__love'
    if (favorite) {
      activeFavorite += ' active'
    }

    return (
      <li
        className="person-list__item"
      >
        <div className="person-list__block">
          <span className="person-list__text">
            <i className="person-list__id"></i>
            {fio}
          </span>
          <span className="person-list__money">{money} ₽</span>
        </div>
        <div className="person-list__block-icon">
          <i
            className={`${activeFavorite} fas fa-heart`}
            onClick={onFavorite}
          ></i>
          <i
            className="person-list__del fas fa-times"
            width="55"
            onClick={onDeleteItem}
          >
          </i>
        </div>
      </li>
    )
  }
}

export default PersonListItem