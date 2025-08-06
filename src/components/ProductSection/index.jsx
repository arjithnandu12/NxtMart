import React, { useEffect, useState, useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import { CartContext } from '../Cartcontext';

const ProductSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://apis2.ccbp.in/nxt-mart/category-list-details')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#36d7b7" />
      </div>
    );

  if (!data || !data.categories) return <p>No Data</p>;

  const filteredCategories =
    selectedCategory === 'All'
      ? data.categories
      : data.categories.filter((c) => c.name === selectedCategory);

  return (
    <div className="flex flex-col pt-24 pb-16 bg-gray-50 min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <aside className="w-full md:w-64 bg-white border-r shadow-sm p-4 md:sticky md:top-24 h-fit mb-4 md:mb-0">
          <Sidebar
            categories={["All", ...data.categories.map((c) => c.name)]}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </aside>

        <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-y-auto">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                {category.name} <span className="text-green-500">›</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-xl bg-white p-4 flex flex-col items-center shadow hover:shadow-lg transition-all"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2"
                    />
                    <h3 className="text-sm font-medium text-center text-gray-800">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.weight}</p>
                    <p className="text-sm font-semibold text-green-600">{product.price}</p>
                    <button
                      className="mt-3 text-sm text-green-600 border border-green-600 px-4 py-1 rounded-full hover:bg-green-600 hover:text-white transition"
                      onClick={() => addToCart(product)}
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSection;
