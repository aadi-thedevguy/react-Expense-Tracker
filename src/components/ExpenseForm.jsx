import { useState } from "react"

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState('')
  const [enteredAmount, setAmount] = useState('')
  const [enteredDate, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const handleChange = (e) => {
    console.log(e.target.value)

    if (e.target.name === 'title') setTitle(e.target.value)
    if (e.target.name === 'date') setDate(e.target.value)
    if (e.target.name === 'amount') setAmount(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title </label>
        <input value={enteredTitle} onChange={handleChange} name="title" type="text" />
      </div>
      <div>
        <label htmlFor="amount">Amount </label>
        <input value={enteredAmount} onChange={handleChange} name="amount" type="number" />
      </div>
      <div>
        <label htmlFor="date"> Date </label>
        <input value={enteredDate} onChange={handleChange} name="date" type="date" />
      </div>
      <button type="submit"> Add Expense</button>
    </form>
  )
}

export default ExpenseForm