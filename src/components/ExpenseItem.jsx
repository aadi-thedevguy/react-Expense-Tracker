import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem = ({ amount, date, title, location }) => {
  const [newAmount, setNewAmount] = useState(amount)
  const handleClick = (e) => {
    setNewAmount(100)
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h3> {location}</h3>
      <ExpenseDetails amount={newAmount} title={title} />
      <button onClick={handleClick}>Change Expense</button>
    </div>
  )
}

export default ExpenseItem