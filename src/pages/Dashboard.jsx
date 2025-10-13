import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Upload,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import StatCard from "../components/StatCard";
import StockCard from "../components/StockCard";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 800 },
  { name: "Wed", value: 600 },
  { name: "Thu", value: 1200 },
  { name: "Fri", value: 900 },
  { name: "Sat", value: 1500 },
];

const pieData = [
  { name: "Stocks", value: 65 },
  { name: "Bonds", value: 20 },
  { name: "Crypto", value: 15 },
];

const COLORS = ["#4f46e5", "#10b981", "#f59e0b"];

const topGainers = [
  { name: "TCS", price: "₹3,560", change: "+2.8%" },
  { name: "Infosys", price: "₹1,490", change: "+1.9%" },
  { name: "HDFC Bank", price: "₹1,620", change: "+1.5%" },
];

const topLosers = [
  { name: "Reliance", price: "₹2,450", change: "-1.8%" },
  { name: "ITC", price: "₹440", change: "-1.3%" },
  { name: "SBI", price: "₹730", change: "-1.1%" },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* ====== Header ====== */}
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>

      {/* ====== Stat Cards ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Portfolio Value"
          value="₹1,25,000"
          icon={<TrendingUp className="text-green-400" />}
        />
        <StatCard
          title="Invested Amount"
          value="₹1,00,000"
          icon={<Upload className="text-blue-400" />}
        />
        <StatCard
          title="Returns"
          value="+₹25,000"
          icon={<ArrowUpRight className="text-green-400" />}
        />
        <StatCard
          title="Withdrawn"
          value="₹5,000"
          icon={<Download className="text-red-400" />}
        />
      </div>

      {/* ====== Charts Section ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="col-span-2 bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Portfolio Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Asset Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ====== Top Gainers & Losers ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-green-400">
            Top Gainers
          </h2>
          <div className="space-y-3">
            {topGainers.map((stock, i) => (
              <StockCard key={i} {...stock} type="gainer" />
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-red-400">
            Top Losers
          </h2>
          <div className="space-y-3">
            {topLosers.map((stock, i) => (
              <StockCard key={i} {...stock} type="loser" />
            ))}
          </div>
        </div>
      </div>

      {/* ====== Extra Dashboard Section (from your 1st version) ====== */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow space-y-6">
        <h2 className="text-xl font-semibold text-white">Best Prices to Buy</h2>
        <table className="w-full text-left text-gray-300">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="py-2">Stock</th>
              <th>Price</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Reliance", price: "₹2,400", rec: "Buy" },
              { name: "ICICI Bank", price: "₹960", rec: "Hold" },
              { name: "Tech Mahindra", price: "₹1,350", rec: "Buy" },
            ].map((s) => (
              <tr key={s.name} className="border-b border-gray-700">
                <td className="py-2">{s.name}</td>
                <td>{s.price}</td>
                <td
                  className={`${
                    s.rec === "Buy"
                      ? "text-emerald-400"
                      : s.rec === "Hold"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {s.rec}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}









