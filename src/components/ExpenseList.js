import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Unconnected, not a HOC, component.
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map(expense => 
          <ExpenseListItem key={expense.id} {...expense} />
        )
      )
    }
  </div>
);

// The connect function returns a function that returns a HOC.
// So, we need to actually call this function. The connect function
// itself takes a function that returns what part of the store this
// component needs to access.
//
// The function that's passed to connect() takes the store's state, and returns
// and object that will be passed as props to the wrapped component. These props 
// will probably be pieces of the state our component needs.

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// We export a HOC.
// Now our component is reactive -- changes to the store will trigger
// a re-render and an update of the component!
export default connect(mapStateToProps)(ExpenseList);
