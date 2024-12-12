import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useSkills, Comment } from '../contexts/SkillsContext';

interface CommentModalProps {
  skillId: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function CommentModal({ skillId, isOpen, onClose }: CommentModalProps) {
  const { getSkillComments, addComment } = useSkills();
  const [newComment, setNewComment] = useState('');
  const comments = getSkillComments(skillId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(skillId, newComment);
      setNewComment('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Comments</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto p-4">
          {comments.map((comment: Comment) => (
            <div key={comment.id} className="mb-4 last:mb-0">
              <div className="flex items-start space-x-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt={comment.author}
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t p-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={3}
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}