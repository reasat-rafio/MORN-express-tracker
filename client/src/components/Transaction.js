import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { FcDeleteDatabase } from "react-icons/fc";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        <FcDeleteDatabase />
      </button>
    </li>
  );
};

export default Transaction;
