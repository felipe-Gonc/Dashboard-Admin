import {motion} from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const salesData = [
    {month:"Jan", sales: 4000},
    {month:"Fev", sales: 3000},
    {month:"Mar", sales: 5000},
    {month:"Abr", sales: 4500},
    {month:"Mai", sales: 6000},
    {month:"Jun", sales: 5500},
]

const SalesTredChart = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{opacity: 0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.3}}
    >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Sales trend</h2>
        <div style={{width: "100%", height: 300}}>
            <ResponsiveContainer>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                    <XAxis dataKey="month" stroke="#9ca3af"/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31,41,55, 0.8)",
                            borderColor: "#4b5563"
                        }}
                        itemStyle={{color: "#e5e7eb"}}
                    />
                    <Legend/>
                    <Line type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      
    </motion.div>
  )
}

export default SalesTredChart
