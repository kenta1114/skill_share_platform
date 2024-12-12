import { useMemo } from 'react';
import { useSkills, Skill } from '../contexts/SkillsContext';

export function useFilteredSkills() {
  const { skills, searchTerm, selectedCategory } = useSkills();

  const filteredSkills = useMemo(() => {
    return skills.filter((skill: Skill) => {
      const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [skills, searchTerm, selectedCategory]);

  return filteredSkills;
}