import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions, getTransaction } = useContext(GlobalContext);

  useEffect(() => {
    getTransaction();
    //esline-disable-next-line react-hook/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
