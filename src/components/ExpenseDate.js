import './ExpenseDate.css';
function ExpenseDate(props){

    const month = props.date.toLocaleString("de", { month: "long" });
    const day = props.date.toLocaleString("de", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
        <div className="expense-item">
            <div className="expense-date">
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year ">{year}</div>
            </div>
            </div>);
}
export default ExpenseDate ;
