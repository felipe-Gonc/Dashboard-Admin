import {motion} from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const salesCategory = [
    {name: "Eletronicos", value: 400},
    {name: "Roupas", value: 300},
    {name: "Casa", value: 200},
    {name: "Livros", value: 100},
    {name: "Outros", value: 150},
]

const color = ["#8884d8", '#82ca9d', "#ffc658", "#ff8042", "#0088fe"]

const SalesByCategory = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>Vendas por Categoria</h2>

        <div style={{width: "100%", height: 300}}>
            
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={salesCategory}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                    label={({name, percent})=> `${name} ${(percent * 100).toFixed(2)}`}
                >
							{salesCategory.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={color[index % color.length]} />
							))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4b5563"
                    }}
                    itemStyle={{color: "#e5e7eb"}}
                />
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesByCategory
