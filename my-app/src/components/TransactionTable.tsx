import Transaction from "./Transaction";

export type TransactionType = {
  id: string;
  date: string;
  description: string;
  amount: number;
};

type Props = {
  transactions: Array<TransactionType>;
};

function TransactionTable({transactions = []}: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({id, date, description, amount}) => (
          <Transaction
            key={id}
            id={id}
            date={date}
            description={description}
            amount={amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;