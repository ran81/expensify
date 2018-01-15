import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '42',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: '',
    note: '',
    amount: 1000,
    createdAt: moment().valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount: 200,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(200);
});

test('should not edit an expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '42',
    updates: {
      amount: 200,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
