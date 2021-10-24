import './footerInfo.scss'

const FooterInfo = props => {
  const { countData, countFavorite, countMoney } = props
  return (
    <div className="footer__info">
      <span className="footer__info-item total">Всего: {countData} </span>
      <span className="footer__info-item love">Избранные: {countFavorite}</span>
      <span className="footer__info-item money">С высокой зарплатой: {countMoney}</span>
    </div>
  )
}

export default FooterInfo