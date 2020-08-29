import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { numberWithCommas } from "../utils/formet";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(total);

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>RP {numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
