import Header from '../components/common/Header'
import {motion} from 'framer-motion';
import StatCard from '../components/common/StatCard';
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import SalesOverview from '../components/sales/SalesOverview';
import SalesByCategory from '../components/sales/SalesByCategory';
import DailySalesTrend from '../components/sales/DailySalesTrend';

const salesStats = {
    receitaTotal: "R$ 1.234.543",
    valorMedio: "R$ 78.97",
    taxaConvercao: '3,45%',
    totalCrecimento: '12.3%'
}

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Vendas'/>
      <main className='max-w-7xl mx-auto py-3 lg:px-8'>
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity: 0, y:20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
        >
            <StatCard name={'Receita Total'} icon={DollarSign} value={salesStats.receitaTotal} color='#6366f1'/>
            <StatCard name={'Valor Médio'} icon={ShoppingCart} value={salesStats.valorMedio} color='#10b981'/>
            <StatCard name={'Taxa de Converção'} icon={TrendingUp} value={salesStats.taxaConvercao} color='#f59e0b'/>
            <StatCard name={'Total de Crecimento'} icon={CreditCard} value={salesStats.totalCrecimento} color='#ef4444'/>
        </motion.div>
        <SalesOverview/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <SalesByCategory/>
          <DailySalesTrend/>
        </div>
      </main>
    </div>
  )
}

export default SalesPage
