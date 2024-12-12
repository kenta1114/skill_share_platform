import { useSkills } from '../contexts/SkillsContext';

const categories = [
  'All',
  'Programming',
  'Cooking',
  'DIY',
  'Design',
  'Music',
  'Photography',
  'Writing',
  'Business',
];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useSkills();

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}