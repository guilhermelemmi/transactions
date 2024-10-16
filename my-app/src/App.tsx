import React, {useEffect, useState} from 'react';
import mockFetch from './api/mockFetch';
import TransactionTable, { TransactionType } from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState<Array<TransactionType>>([]);
  const [month, setMonth] = useState<string>('00');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTransactions = await mockFetch();
      setTransactions(fetchedTransactions);
    }
    fetchData();
  }, []);

  const handleMonthChange = (e: any) => {
    setMonth(e.target.value);
  };

  return (
    <div className="App">
      <h1>Transactions:</h1>
      <select onChange={handleMonthChange}>
        <option value="00">Select month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <TransactionTable transactions={transactions.filter((transaction) => {
        if (month !== '00') {
          const dateParts = transaction.date.split('-');
          return dateParts[1] === month ? true : false
        }
        return true;
      })} />
    </div>
  );
}

export default App;
