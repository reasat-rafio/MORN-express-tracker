import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { AiFillDelete } from "react-icons/ai";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        <span className="taka">
          {sign}RP {Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction._id)}
          className="delete-btn"
        >
          <AiFillDelete color="white" />
        </button>
      </span>
    </li>
  );
};

export default Transaction;
