import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            setEnteredTitle(value);
            console.log(value);
        } else if (identifier === "amount") {
            setEnteredAmount(value);
            console.log(value);
        } else {
            setEnteredDate(value);
            console.log(value);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
          
        console.log("DATA UPDATED : /\n TITLE :${expenseData.title}, \n amount:${expenseData.amount}, \n date :${expenseData.date},");
      
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control ">
                    <label> Title</label>
                    <input type="text" onChange={(event) => inputChangeHandler("title", event.target.value)} value={enteredTitle}></input>
                </div>

                <div className="new-expense__control ">
                    <label> Amount</label>
                    <input type="number" min={0.01} step={0.01} onChange={(event) => inputChangeHandler("amount", event.target.value)} value={enteredAmount}></input>
                </div>

                <div className="new-expense__control ">
                    <label> Date</label>
                    <input type="date" min="01-01-2019" max="31-12-2023" onChange={(event) => inputChangeHandler("date", event.target.value)} value={enteredDate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}> Cancel </button>
                <button type="submit" >Add new Expense </button>
            </div>
        </form>
    );
};
export default ExpenseForm;