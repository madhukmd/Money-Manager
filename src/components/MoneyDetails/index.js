import './index.css'

const MoneyDetails = props => {
  const {balanceAmt, incomes, expenses} = props

  const balanceImg =
    'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png'
  const incomeImg =
    'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'
  const expensesImg =
    'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png'

  return (
    <>
      <div className="moneydetails-list balance">
        <img src={balanceImg} alt="balance" className="money-details-img" />
        <div className="money-container">
          <p className="moneydetails-heading">Your Balance</p>
          <p className="moneydetails-count" data-testid="balanceAmount">
            Rs.{balanceAmt}
          </p>
        </div>
      </div>
      <div className="moneydetails-list income">
        <img src={incomeImg} alt="income" className="money-details-img" />
        <div className="money-container">
          <p className="moneydetails-heading">Your Income</p>
          <p className="moneydetails-count" data-testid="incomeAmount">
            Rs.{incomes}
          </p>
        </div>
      </div>
      <div className="moneydetails-list expenses">
        <img src={expensesImg} alt="expenses" className="money-details-img" />
        <div className="money-container">
          <p className="moneydetails-heading">Your Expenses</p>
          <p className="moneydetails-count" data-testid="expensesAmount">
            Rs.{expenses}
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
