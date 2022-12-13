import { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem = ({ amount, date, title }) => {
  const [newAmount, setNewAmount] = useState(amount)
  const handleClick = () => {
    setNewAmount(100)
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails amount={newAmount} title={title} />
      <button onClick={handleClick}>Change Expense</button>
    </div>
  )
}

export default ExpenseItem