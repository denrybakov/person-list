import { Component } from "react";

import HeaderSearch from "../headerSearch/headerSearch";
import HeaderFilter from "../headerFilter/headerFilter";

import './header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { onUpdateSearch, onHeaderFilter, filterValue, countData, countFavorite, countMoney } = this.props

    return (
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">
            <img src="img/logo.png" alt="Логотип приложения" width="300" />
            <p className="header__logo-text">
              Таблица сотрудников
            </p>
          </div>
          <div className="header__filter">
            <HeaderSearch
              onUpdateSearch={onUpdateSearch}
              onHeaderFilter={onHeaderFilter}
            />
            <HeaderFilter
              filterValue={filterValue}
              onHeaderFilter={onHeaderFilter}
              countData={countData}
              countFavorite={countFavorite}
              countMoney={countMoney}
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Header