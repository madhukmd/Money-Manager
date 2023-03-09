import './index.css'

const TransactionItem = props => {
  const {lists, Transaction} = props
  const {id, title, amount, type} = lists

  const operation = () => {
    Transaction(id)
  }

  const Delete =
    'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png'

  return (
    <li className="Transaction-header border-top">
      <p className="transaction-history-heading">{title}</p>
      <p className="transaction-history-heading">Rs {amount}</p>
      <p className="transaction-history-heading">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={operation}
        data-testid="delete"
      >
        <img src={Delete} alt="delete" className="delete-img" />
      </button>
    </li>
  )
}
export default TransactionItem
