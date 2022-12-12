
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

const ExpenseItem = ({ amount, date, title, location }) => {

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h3> {location}</h3>
      <ExpenseDetails amount={amount} title={title} />
    </div>
  )
}

export default ExpenseItem