import { TransactionType } from '../components/TransactionTable';
import mockTransactions from '../mocks/transactions.json';

function mockFetch (): Promise<Array<TransactionType>> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(mockTransactions)
    }, 2000);
  })
};

export default mockFetch;