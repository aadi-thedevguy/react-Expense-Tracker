import { useState } from "react"

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setTitle] = useState('')
  const [enteredAmount, setAmount] = useState('')
  const [enteredDate, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    onSaveExpenseData(obj)
    setTitle('')
    setAmount('')
    setDate('')
  }

  const handleChange = (e) => {
    // console.log(e.target.value)

    if (e.target.name === 'title') setTitle(e.target.value)
    if (e.target.name === 'date') setDate(e.target.value)
    if (e.target.name === 'amount') setAmount(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className="new-expense">
      <div className="new-expense__controls">
      
        <div className="new-expense__control">
          <label htmlFor="title">Title </label>
          <input value={enteredTitle} onChange={handleChange} name="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount </label>
          <input value={enteredAmount} onChange={handleChange} name="amount" type="number" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date"> Date </label>
          <input value={enteredDate} onChange={handleChange} name="date" type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit" > Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm