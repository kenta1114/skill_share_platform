import React from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import SkillCard from './components/SkillCard';

const mockSkills = [
  {
    id: 1,
    title: "Advanced React Hooks Tutorial",
    author: "Sarah Johnson",
    category: "Programming",
    description: "Master React Hooks with this comprehensive guide covering useState, useEffect, useContext, and custom hooks implementation.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    title: "Japanese Ramen from Scratch",
    author: "Chef Mike Chen",
    category: "Cooking",
    description: "Learn how to make authentic Japanese ramen from scratch, including homemade noodles and rich tonkotsu broth.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    likes: 567,
    comments: 89,
  },
  {
    id: 3,
    title: "Modern Furniture Restoration",
    author: "Emma Davis",
    category: "DIY",
    description: "Transform old furniture into stunning modern pieces with these professional restoration techniques.",
    image: "https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    likes: 342,
    comments: 56,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Skills</h2>
          <CategoryFilter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              author={skill.author}
              category={skill.category}
              description={skill.description}
              image={skill.image}
              likes={skill.likes}
              comments={skill.comments}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;