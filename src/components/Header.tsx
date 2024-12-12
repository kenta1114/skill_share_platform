import { Bell, User } from 'lucide-react';
import { useState } from 'react';
import SearchBox from './SearchBox';

export default function Header() {
  const [isLoggedIn] = useState(true); // Simulated auth state

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">SkillShare</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBox />
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="text-gray-400 hover:text-gray-500">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                </button>
              </>
            ) : (
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <User className="h-6 w-6" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}