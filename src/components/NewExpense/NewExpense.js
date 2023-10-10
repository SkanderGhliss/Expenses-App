
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import './NewExpense.css';
const NewExpense =(props) =>{

const SaveExpenseDataHandler =(enteredExpenseData) =>{

    const expenseData ={
    ...enteredExpenseData,
    id : Math.random.toString()
};
props.onAddExpense(expenseData);
setIsEditing(false);
} ;

const  [isEditing , setIsEditing ] = useState(false);

const startEditHandler=()=>{
setIsEditing(true);
}

const stopEditHandler = ()=>{
    setIsEditing(false);
}

    return ( <div className="new-expense">
        {!isEditing && <button onClick={startEditHandler}>Add new Expense </button>}
{isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}  onCancel={stopEditHandler} />}
    </div>
    );
};

export default NewExpense;