import { Component } from "react";

import Header from "../header/header";
import PersonList from "../personList/personList";
import Footer from "../footer/footer";

import './app.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { id: 1, fio: 'Иманнуил Кант', money: 86000, favorite: false },
        { id: 2, fio: 'Артур Шопенгауэр', money: 84000, favorite: false },
        { id: 3, fio: 'Рене Декарт', money: 73000, favorite: false },
        { id: 4, fio: 'Конфуции', money: 101000, favorite: false },
        { id: 5, fio: 'Георг Гегель', money: 69000, favorite: false }
      ],
      term: '',
      filterValue: 'all'
    }
    this.maxId = this.state.data.length + 1
  }

  onFavorite = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite }
        }
        return item
      })
    }))
  }

  onDeleteItem = id => {
    this.setState(({ data }) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  onAddItem = (fio, money) => {
    const newItem = {
      id: this.maxId++,
      fio,
      money,
      favorite: false
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  onUpdateSearch = (filterValue) => {
    this.setState({ term: filterValue })
  }

  searchWord = (items, filterValue) => {
    if (filterValue.length === 0) {
      return items
    }
    return items.filter(item => item.fio.indexOf(filterValue) > -1)
  }

  onHeaderFilter = (filterWord) => {
    this.setState({ filterValue: filterWord })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'money':
        return items.filter(item => item.money > 100000)
      case 'favorite':
        return items.filter(item => item.favorite)
      case 'all':
        return items
      default:
        console.log('error filter');
    }
  }

  render() {
    const { data, filterValue, term } = this.state
    const countData = data.length
    const countFavorite = data.filter(item => item.favorite).length
    const countMoney = data.filter(item => item.money >= 100000).length
    const visibleData = this.filterPost(this.searchWord(data, term), filterValue)

    return (
      <div className="app">

        <Header
          filterValue={filterValue}
          onUpdateSearch={this.onUpdateSearch}
          onHeaderFilter={this.onHeaderFilter}

          countData={countData}
          countFavorite={countFavorite}
          countMoney={countMoney}
        />

        <div className="container">
          <h1 className="app__title">Ваш список:</h1>

          <PersonList
            data={visibleData}
            onFavorite={this.onFavorite}
            onDeleteItem={this.onDeleteItem}
          />

        </div>

        <Footer
          countData={countData}
          countFavorite={countFavorite}
          countMoney={countMoney}
          onAddItem={this.onAddItem}
        />

      </div>
    )
  }
}