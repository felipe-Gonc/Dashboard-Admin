import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import ProductTable from "../components/product/ProductTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTredChart from "../components/product/SalesTredChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Produtos" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total de produtos"
            icon={Package}
            value={1234}
            color="#6366F1"
          />
          <StatCard
            name="Mais Vendido"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StatCard
            name="Estoque baixo"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StatCard
            name="Receita Total"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          />
        </motion.div>

        <ProductTable />

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTredChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
