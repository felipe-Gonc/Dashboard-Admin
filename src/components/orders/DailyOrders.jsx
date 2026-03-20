import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrders = () => {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-gray-700"
        initial={{opacity:0, y:1}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.2}}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Pedidos diários</h2>
      <div style={{width:"100%", height: 300}}>
        <ResponsiveContainer>
            <LineChart data={dailyOrdersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey='date' stroke="#9ca3af"/>
                <YAxis stroke="#9ca3af"/>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31,41,55, 0.8)",
                        borderColor: "#4b5563"
                    }}
                />
                <Legend/>
                <Line type='monotone' dataKey='orders' stroke="#8b5cf6" strokeWidth={2}/>
            </LineChart>
            
        </ResponsiveContainer>

      </div>
    </motion.div>
  )
}

export default DailyOrders
