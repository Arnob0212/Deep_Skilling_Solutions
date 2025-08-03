import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const exchangeRates = {
      EUR: 90
    };

    const rate = exchangeRates[currency];

    if (!rate || !amount || isNaN(amount)) {
      alert("Enter valid amount and currency");
      return;
    }

    const result = parseFloat(amount) / rate;
    alert(`Converted to EURO: Amount is ${result.toFixed(2)} ${currency}`);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Currency: </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="">--Select--</option>
            <option value="EUR">Euro</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
