import ExpenseItem from "./Expenseitem";

function  Expenses (props){
    return (
        <div className="expenses">
          <ExpenseItem
            title={props.Expenses[0].title}
            amount={props.Expenses[0].amount}
            date={props.Expenses[0].date}
          />
          <ExpenseItem
            title={props.Expenses[1].title}
            amount={props.Expenses[1].amount}
            date={props.Expenses[1].date}
          />
          <ExpenseItem
            title={props.Expenses[2].title}
            amount={props.Expenses[2].amount}
            date={props.Expenses[2].date}
          />
          <ExpenseItem
            title={props.Expenses[3].title}
            amount={props.Expenses[3].amount}
            date={props.Expenses[3].date}
          />
        </div>
      );
};

export default Expenses;