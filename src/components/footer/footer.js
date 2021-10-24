import { Component } from "react";

import FooterInfo from "../footerInfo/footerInfo";

import './footer.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fio: '',
      money: ''
    }
  }

  onValueChange = (e) => {
    if (e.target.value.length >= 1 && e.target.value.length <= 3 && e.target.name === 'fio') {
      e.target.classList.add('error')
    } else {
      e.target.classList.remove('error')
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onAddItem(this.state.fio, this.state.money)
    this.setState({ fio: '', money: '' })
  }

  render() {
    let btnDisabled = 'btn footer__btn '
    if (this.state.fio.length <= 3 || this.state.money === '') {
      btnDisabled += 'disabled'
    }

    return (
      <footer className="footer">
        <div className="container">
          <FooterInfo
            countData={this.props.countData}
            countFavorite={this.props.countFavorite}
            countMoney={this.props.countMoney}
          />
          <h2 className="footer__title">Добавить сотрудника</h2>
          <form
            action="#"
            className="footer__form"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              className="footer__input footer__input-name"
              placeholder="Введите ФИО..."
              value={this.state.fio}
              onChange={this.onValueChange}
              name='fio'
            />
            <input
              type="text"
              className="footer__input footer__input-money"
              placeholder="Введите сумму..."
              value={this.state.money}
              onChange={this.onValueChange}
              name='money'
            />
            <button
              type="submit"
              className={btnDisabled}
            >
              Добавить</button>
          </form>
        </div>
      </footer>
    )
  }
}

export default Footer