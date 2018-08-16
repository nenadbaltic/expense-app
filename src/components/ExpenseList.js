import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    // console.log(props);
    return (
        <div>
            {
               props.expenses.length === 0 
               ?
               <p>No Expenses</p>
               :
               props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
               })
               
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);

// // Note:
// const mapStateToProps = (ObjFromStore) => {
//     return {
//         expenses: ObjFromStore.expenses,
//         filters: ObjFromStore.filters
//     };
// return vraca objekat kao props
// }
// const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

// // my solution for map;
// props.expenses.map((expense) => {
//     return <ExpenseListItem key={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt}
//         />
// })
