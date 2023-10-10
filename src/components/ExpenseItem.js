import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React, { useState } from 'react';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [backupTitle, setBackupTitle] = useState(null);

  const clickHandler = () => {
    setBackupTitle(title); // Backup the current title
    setTitle("Updated");
  };

  const restoreTitleHandler = () => {
    if (backupTitle !== null) {
      setTitle(backupTitle); // Restore the previous title
      setBackupTitle(null); // Clear the backup
      console.log(backupTitle); 
    }
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Click here to update the title</button>
        <button onClick={restoreTitleHandler}>Restore Previous Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
