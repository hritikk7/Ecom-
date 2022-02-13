import React from 'react';
// import { Header } from './Header';
// import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from '../context/GlobalState';
import './Expense.css'

export const Expense = () => {
  return (
    <GlobalProvider>
    <div className="container">
        {/* <Balance /> */}
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}





// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         {/* <Balance /> */}
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction />
//       </div>
//     </GlobalProvider>
//   );
// }

export default Expense;
