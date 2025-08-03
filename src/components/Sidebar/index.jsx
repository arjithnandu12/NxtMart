

const Sidebar=({ categories, selectedCategory, onSelectCategory }) =>{
  return (
    <ul className="space-y-2">
      {categories.map((category) => {
        const isActive = selectedCategory === category
        return (
          <li
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-2 rounded cursor-pointer font-medium ${
              isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100 text-gray-800'
            }`}
          >
            {category}
          </li>
        )
      })}
    </ul>
  )
}

export default Sidebar