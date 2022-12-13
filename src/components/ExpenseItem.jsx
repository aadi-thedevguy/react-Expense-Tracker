
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem = ({ amount, date, title, location }) => {
  const handleClick = (e) => {
    // console.log(e.target.style)
    e.target.parentElement.style.display = "none";
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h3> {location}</h3>
      <ExpenseDetails amount={amount} title={title} />
      <button onClick={handleClick}>Delete Expense</button>
    </div>
  )
}

export default ExpenseItem