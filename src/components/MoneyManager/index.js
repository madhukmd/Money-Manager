import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyItems: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    IncomeAmt: 0,
    ExpensesAmt: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  addHistoryItem = event => {
    const {title, amount, type} = this.state

    const optionObj = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === type,
    )
    const {displayText} = optionObj

    event.preventDefault()
    const addHistoryItemList = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      historyItems: [...prevState.historyItems, addHistoryItemList],
      title: '',
      amount: '',
    }))

    if (type === 'INCOME') {
      this.setState(prevState => ({
        IncomeAmt: prevState.IncomeAmt + parseInt(amount),
      }))
    }
    if (type === 'EXPENSES') {
      this.setState(prevState => ({
        ExpensesAmt: prevState.ExpensesAmt + parseInt(amount),
      }))
    }
  }

  Transaction = id => {
    const {historyItems} = this.state

    this.setState(prevState => ({
      historyItems: prevState.historyItems.filter(
        eachList => eachList.id !== id,
      ),
    }))

    const status = historyItems.filter(eachItem => eachItem.id === id)

    if (status[0].type === 'Income') {
      this.setState(prevState => ({
        IncomeAmt: prevState.IncomeAmt - parseInt(status[0].amount),
      }))
    }
    if (status[0].type === 'Expenses') {
      this.setState(prevState => ({
        ExpensesAmt: prevState.ExpensesAmt - parseInt(status[0].amount),
      }))
    }
  }

  render() {
    const {
      historyItems,
      title,
      amount,
      IncomeAmt,
      ExpensesAmt,
      type,
    } = this.state
    const balanceAmt = IncomeAmt - ExpensesAmt
    return (
      <div className="bg-container">
        <div className="container">
          <div className="header-background-container">
            <h1 className="header-heading">Hi, Richard</h1>
            <p className="header-para">
              Welcome back to your, <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              balanceAmt={balanceAmt}
              incomes={IncomeAmt}
              expenses={ExpensesAmt}
            />
          </div>
          <div className="history-container">
            <form className="form" onSubmit={this.addHistoryItem}>
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="Title" className="label">
                TITLE
              </label>
              <br />
              <input
                type="text"
                name="Title"
                id="Title"
                className="input"
                onChange={this.onChangeTitle}
                value={title}
              />
              <br />
              <label htmlFor="Amount" className="label">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                name="Amount"
                id="Amount"
                className="input"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <br />
              <label htmlFor="Type" className="label">
                TYPE
              </label>
              <br />
              <select
                className="input"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>

            <ul className="Transaction-history-container">
              <h1 className="form-heading">History</h1>
              <li className="Transaction-header">
                <p className="Transaction-header-heading">Title</p>
                <p className="Transaction-header-heading">Amount</p>
                <p className="Transaction-header-heading">Type</p>
              </li>

              {historyItems.map(each => (
                <TransactionItem
                  key={each.id}
                  lists={each}
                  Transaction={this.Transaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
