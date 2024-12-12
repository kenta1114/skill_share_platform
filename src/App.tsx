import React from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import SkillCard from './components/SkillCard';
import { SkillsProvider } from './contexts/SkillsContext';
import { useFilteredSkills } from './hooks/useFilteredSkills';

function SkillGrid() {
  const filteredSkills = useFilteredSkills();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill) => (
        <SkillCard
          key={skill.id}
          id={skill.id}
          title={skill.title}
          author={skill.author}
          category={skill.category}
          description={skill.description}
          image={skill.image}
          likes={skill.likes}
          comments={skill.comments}
          isLiked={skill.isLiked}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <SkillsProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Skills</h2>
            <CategoryFilter />
          </div>

          <SkillGrid />
        </main>
      </div>
    </SkillsProvider>
  );
}

export default App;