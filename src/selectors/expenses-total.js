
const getExpensesTotal = (expenses) => {
    if(expenses.length === 0) {
        return 0;
    }
    else {
        let amounts = expenses.map((expense) => {
            return expense.amount
        })
        
        return amounts.reduce((a, b) => {
            return a + b;
        }, 0)
    }
};

export default getExpensesTotal;