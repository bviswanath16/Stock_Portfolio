import React from "react";

const watchlistData = [
  { name: "TCS", price: 3250.45, change: +1.24 },
  { name: "INFY", price: 1420.10, change: -0.68 },
  { name: "RELIANCE", price: 2340.00, change: +0.92 },
  { name: "HDFC Bank", price: 1598.30, change: +0.45 },
];

const Watchlist = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Watchlist</h1>
        <button className="btn-primary">+ Add Stock</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {watchlistData.map((stock, i) => (
          <div key={i} className="card flex items-center justify-between glow-card">
            <div>
              <h2 className="text-lg font-semibold text-gray-100">{stock.name}</h2>
              <p className="text-gray-400 text-sm">NSE</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">${stock.price.toFixed(2)}</p>
              <p
                className={`text-sm ${
                  stock.change >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {stock.change >= 0 ? "▲" : "▼"} {Math.abs(stock.change)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;

