import { Component } from "react";

import './headerFilter.scss'

class HeaderFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { filterValue, onHeaderFilter } = this.props
    const filterParam = [
      { type: 'all', label: 'Все' },
      { type: 'favorite', label: 'Избранные' },
      { type: 'money', label: 'Высокая з/п' }
    ]

    const btns = filterParam.map(({ type, label }) => {
      const active = filterValue === type
      let clazz = active ? ' header__icon--active' : ''
      return (
        <span
          className={`header__icon ${clazz}`}
          key={label}
          onClick={() => onHeaderFilter(type)}
        >
          {label}
        </span>
      )
    })

    return (
      <div className="header__filterBtn">
        {btns}
      </div>
    )
  }
}

export default HeaderFilter