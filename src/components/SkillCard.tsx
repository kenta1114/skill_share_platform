import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface SkillCardProps {
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}

export default function SkillCard({
  title,
  author,
  category,
  description,
  image,
  likes,
  comments,
}: SkillCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center mb-4">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={author}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
            <Heart className="h-5 w-5" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}