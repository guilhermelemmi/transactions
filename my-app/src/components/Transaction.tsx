type Props = {
  id: string;
  description: string;
  amount: number;
  date: string;
};

function Transaction({id, description, amount, date}: Props) {
  return (
    <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;