import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion';
import StatCard from '../components/common/StatCard';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';
import DailyOrders from '../components/orders/DailyOrders';
import OrdersDestribuition from '../components/orders/OrdersDestribuition';
import OrdersTable from '../components/orders/OrdersTable';

const orderStats = {
	totalOrders: "1.234",
	pendingOrders: "56",
	completedOrders: "1.178",
	totalRevenue: "R$ 98.765",
};

const OrdersPage = () => {
  return (
    <div className='flex-1 relative overflow-auto z-10'>
      <Header title="Pedidos"/>
      <main className='max-w-7xl mx-auto py-6 lg:px-8'>
        <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity: 0, y:1}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
        >
            <StatCard name="Total de pedidos" icon={ShoppingBag} value={orderStats.totalOrders} color="#6366f1"/>
            <StatCard name="Pedidos pendentes" icon={Clock} value={orderStats.pendingOrders} color="#f59e0b"/>
            <StatCard name="Pedidos concluidos" icon={CheckCircle} value={orderStats.completedOrders} color="#10b981"/>
            <StatCard name="Receita de pedidos" icon={DollarSign} value={orderStats.totalRevenue} color="#ef4444"/>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <DailyOrders/>
            <OrdersDestribuition/>

        </div>
        <OrdersTable/>
      </main>
    </div>
  )
}

export default OrdersPage
