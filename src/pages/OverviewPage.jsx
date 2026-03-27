import { BarChart2, ShoppingBag, User, Zap } from "lucide-react";
import Header from "../components/common/Header";

import {motion} from "framer-motion"
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Visão Geral" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <StatCard name={"Total de vendas"} icon={Zap} value="12,000" color="#6366f1"/>
          <StatCard name={"Novos Usuários"} icon={User} value="1234" color="#8b5cf6"/>
          <StatCard name={"Total de produtos"} icon={ShoppingBag} value="567" color="#ec4899"/>
          <StatCard name={"Taxa de conversão"} icon={BarChart2} value="12,6%" color="#10b981"/>
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart/>
          <CategoryDistributionChart/>
          <SalesChannelChart/>
        </div>
        
      </main>
    </div>
  );
};

export default OverviewPage;
