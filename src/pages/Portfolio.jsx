import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Equity", value: 55 },
  { name: "Mutual Funds", value: 25 },
  { name: "Gold", value: 10 },
  { name: "Cash", value: 10 },
];

const COLORS = ["#22c55e", "#3b82f6", "#eab308", "#a855f7"];

const Portfolio = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Portfolio</h1>
        <button className="btn-primary">Add Investment</button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Current Value</h2>
          <p className="text-2xl font-semibold text-green-400">$2,28,000.47</p>
        </div>
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Invested Value</h2>
          <p className="text-2xl font-semibold text-gray-100">$2,15,570.00</p>
        </div>
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Total Returns</h2>
          <p className="text-2xl font-semibold text-green-400">+5.8%</p>
        </div>
        <div className="card glow-card">
          <h2 className="text-sm text-gray-400">Profit / Loss</h2>
          <p className="text-2xl font-semibold text-green-400">+$12,430</p>
        </div>
      </div>

      {/* Holdings and Allocation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Holdings Table */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Holdings Overview
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Avg. Price</th>
                <th>Current</th>
                <th>P/L</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TCS</td>
                <td>15</td>
                <td>$3,100</td>
                <td>$3,250</td>
                <td className="text-green-400">+4.8%</td>
              </tr>
              <tr>
                <td>Infosys</td>
                <td>25</td>
                <td>$1,450</td>
                <td>$1,420</td>
                <td className="text-red-400">-2.0%</td>
              </tr>
              <tr>
                <td>Reliance</td>
                <td>10</td>
                <td>$2,200</td>
                <td>$2,340</td>
                <td className="text-green-400">+6.3%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Asset Allocation Chart */}
        <div className="card flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Asset Allocation
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
