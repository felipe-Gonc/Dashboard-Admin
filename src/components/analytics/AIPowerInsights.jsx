import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const insights = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		insight: "A receita aumentou 15% em comparação com o mês passado, impulsionada principalmente por uma campanha de email bem-sucedida.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "A retenção de clientes melhorou em 8% após o lançamento do novo programa de fidelidade.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		insight: 'A categoria de produto "Eletrônicos" mostra o maior potencial de crescimento com base nas tendências recentes do mercado.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		insight: "Otimizar a estratégia de preços pode potencialmente aumentar as margens de lucro geral em 5-7%.",
	},
];
const AIPowerInsights = () => {
return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
        >
            <h2 className='text-xl font-semibold text-gray-100 mb-4'>Insights Impulsionados por IA</h2>
            <div className='space-y-4'>
                {insights.map((item, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                        <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
                            <item.icon className={`size-6 ${item.color}`} />
                        </div>
                        <p className='text-gray-300'>{item.insight}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default AIPowerInsights
