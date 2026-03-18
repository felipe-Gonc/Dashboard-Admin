import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react";
import UserTable from "../components/users/UserTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemograpichChart from "../components/users/UserDemograpichChart";

const userStatus = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2,4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total de Usuários"
            icon={UserIcon}
            value={userStatus.totalUsers.toLocaleString()}
            color={"#6366f1"}
          />
          <StatCard
            name="Novos Usuários"
            icon={UserPlus}
            value={userStatus.newUsersToday}
            color="#10b981"
          />
          <StatCard
            name="Usuários Ativos"
            icon={UserCheck}
            value={userStatus.activeUsers.toLocaleString()}
            color="#f59e0b"
          />
          <StatCard
            name="Taxa de Cancelamento"
            icon={UserX}
            value={userStatus.churnRate}
            color={"#ef4444"}
          />
        </motion.div>

        <UserTable/>

        {/* CHARTS */}

        <div className="grid grid-col-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart/>
          <UserActivityHeatmap/>
          <UserDemograpichChart/>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
