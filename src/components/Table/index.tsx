import { TableContainer } from "./styles";
import {useTransactions} from "../../hooks/useTransactions";


export function Table() {
  const { transactions } = useTransactions();

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(new Date(transaction.createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
}


