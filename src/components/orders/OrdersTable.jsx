import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Edit } from "lucide-react";

const orderData = [
  {
    id: "ORD001",
    customer: "Felipe Ribeiro",
    total: 235.4,
    status: "Entregue",
    date: "01-03-2026",
  },
  {
    id: "ORD002",
    customer: "João Paulo",
    total: 412.0,
    status: "Processando",
    date: "02-03-2026",
  },
  {
    id: "ORD003",
    customer: "Jesika Paulino",
    total: 162.5,
    status: "Enviado",
    date: "03-03-2026",
  },
  {
    id: "ORD004",
    customer: "Gustavo Guanabara",
    total: 750.2,
    status: "Pendente",
    date: "04-03-2026",
  },
  {
    id: "ORD005",
    customer: "Erik Rodrigues",
    total: 95.8,
    status: "Entregue",
    date: "05-03-2026",
  },
  {
    id: "ORD006",
    customer: "Paulo Dantas",
    total: 310.75,
    status: "Processando",
    date: "06-03-2026",
  },
  {
    id: "ORD003",
    customer: "Carlos Texeira",
    total: 528.9,
    status: "Enviado",
    date: "07-03-2026",
  },
  {
    id: "ORD008",
    customer: "Rodrigo Nunes",
    total: 189.6,
    status: "Entregue",
    date: "08-03-2026",
  },
];
const OrdersTable = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterOrders, setFilterOrders] = useState(orderData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchInput(term);
    const filtered = orderData.filter(
      (order) =>
        order.id.toLocaleLowerCase().includes(term) ||
        order.customer.toLocaleLowerCase().includes(term),
    );

    setFilterOrders(filtered);
  };

  return (
<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Order List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search orders...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchInput}
						onChange={handleSearch}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								ID do pedido
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Cliente
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Total
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Data
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Ações
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700'>
						{filterOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.id}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{order.customer}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									${order.total.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Entregue"
												? "bg-green-100 text-green-800"
												: order.status === "Processando"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Enviado"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{order.date}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Eye size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
  );
};

export default OrdersTable;
