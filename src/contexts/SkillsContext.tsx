import { createContext, useContext, useState, ReactNode } from 'react';

export interface Comment {
  id: number;
  skillId: number;
  author: string;
  content: string;
  createdAt: string;
}

export interface Skill {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
}

const initialSkills = [
  {
    id: 1,
    title: "Advanced React Hooks Tutorial",
    author: "Sarah Johnson",
    category: "Programming",
    description: "Master React Hooks with this comprehensive guide covering useState, useEffect, useContext, and custom hooks implementation.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    likes: 234,
    comments: 45,
    isLiked: false,
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
    isLiked: false,
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
    isLiked: false,
  },
];

const initialComments: Comment[] = [
  {
    id: 1,
    skillId: 1,
    author: "John Doe",
    content: "This tutorial really helped me understand hooks better!",
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: 2,
    skillId: 1,
    author: "Alice Smith",
    content: "Great explanation of useContext. Thanks!",
    createdAt: "2024-03-15T11:30:00Z",
  },
];

interface SkillsContextType {
  skills: Skill[];
  comments: Comment[];
  searchTerm: string;
  selectedCategory: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
  toggleLike: (skillId: number) => void;
  addComment: (skillId: number, content: string) => void;
  getSkillComments: (skillId: number) => Comment[];
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export function SkillsProvider({ children }: { children: ReactNode }) {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleLike = (skillId: number) => {
    setSkills(skills.map(skill => {
      if (skill.id === skillId) {
        const isLiked = !skill.isLiked;
        return {
          ...skill,
          isLiked,
          likes: isLiked ? skill.likes + 1 : skill.likes - 1,
        };
      }
      return skill;
    }));
  };

  const addComment = (skillId: number, content: string) => {
    const newComment: Comment = {
      id: comments.length + 1,
      skillId,
      author: "Current User", // In a real app, this would come from auth
      content,
      createdAt: new Date().toISOString(),
    };
    
    setComments([...comments, newComment]);
    setSkills(skills.map(skill => {
      if (skill.id === skillId) {
        return { ...skill, comments: skill.comments + 1 };
      }
      return skill;
    }));
  };

  const getSkillComments = (skillId: number) => {
    return comments.filter(comment => comment.skillId === skillId);
  };

  return (
    <SkillsContext.Provider value={{
      skills,
      comments,
      searchTerm,
      selectedCategory,
      setSearchTerm,
      setSelectedCategory,
      toggleLike,
      addComment,
      getSkillComments,
    }}>
      {children}
    </SkillsContext.Provider>
  );
}

export function useSkills() {
  const context = useContext(SkillsContext);
  if (context === undefined) {
    throw new Error('useSkills must be used within a SkillsProvider');
  }
  return context;
}