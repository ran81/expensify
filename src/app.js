import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Our shit
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// CSS
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);  
});

store.dispatch(addExpense({ description: 'Water bill', amount: 200, createdAt: 1514368413000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 1514368413000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1514368413000 }));

// The provider component - allows us a way to pass the store
// functionality to the rest of the application (other components).
// This will prevent us from passing the store down the component tree
// over and over.
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
