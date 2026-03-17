import { motion } from "framer-motion";
import { useState } from "react";
import { Edit, Search, Trash2 } from "lucide-react";

const productData = [
  {
    id: 1,
    name: "Fone sem fio",
    category: "Eletromico",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Pulseira",
    category: "Eletromico",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Eletromico",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Peso",
    category: "Eletromico",
    price: 79.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Maquina de Café",
    category: "Casa",
    price: 559.99,
    stock: 78,
    sales: 720,
  },
];

const ProductTable = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);

  const handleSearchBtt = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchItem(term);
    const filtered = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term),
    );

    setFilterProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Lista de Produtos
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Procure o produto"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none
                    focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                categoria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Preço
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Estoque
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Vendas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filterProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                  {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                        <Edit size={18}/>
                    </button>
                    <button className="text-red-400 hover:text-red-300">
                        <Trash2 size={18}/>
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

export default ProductTable;
