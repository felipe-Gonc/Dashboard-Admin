import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

const categoryData = [
  { name: "Eletronicos", value: 4500 },
  { name: "Roupas", value: 3200 },
  { name: "Casa e Jardim", value: 2800 },
  { name: "Livros", value: 2100 },
  { name: "Esportes", value: 1900 },
];

const COLORS = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b"];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Distribuição de categorias
      </h2>
      <div className="h-80 ">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
