import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const monthlySales = [
  { month: "Jan", sales: 4000 },
  { month: "fev", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Abr", sales: 4500 },
  { month: "Mai", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

const SalesOverview = () => {
  const [selectedTime, setSelecteTime] = useState("Mês");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Visão geral de vendas
        </h2>

        <select
          className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:right-2
        focus:ring-blue-500
        "
          value={selectedTime}
          onChange={(e) => setSelecteTime(e.target.value)}
        >
          <option>Semana</option>
          <option>Mês</option>
          <option>Semestre</option>
          <option>Ano</option>
        </select>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <AreaChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverview;
