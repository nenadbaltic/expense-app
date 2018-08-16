import React from 'react';
import { connect } from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseFrom expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);










// const EditExpensePage = (props) => {
//     // console.log(props.history);
//     return (
//         <div>
//             <ExpenseFrom
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     // console.log(props.expense.id)
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }} 
//                 />
//                 <button onClick={ (e) => {
//                     props.dispatch(removeExpense({ id: props.expense.id }));
//                     props.history.push('/');
//                 }}>Remove</button>
//         </div>
//     );
// }

// const mapStateToProps = (state, props) => {
//     return {
//         expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//     }
// // }; => state from store and props from component