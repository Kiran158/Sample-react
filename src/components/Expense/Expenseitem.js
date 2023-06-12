import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    return(
      setTitle('updated'),
      console.log(title)
      );
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price d-inline-flex p-2">
          <Button variant="primary">${props.amount}</Button>
        </div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </div>
  );
};

export default ExpenseItem;

