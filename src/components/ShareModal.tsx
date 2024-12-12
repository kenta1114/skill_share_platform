import { X, Link, Twitter, Facebook } from 'lucide-react';

interface ShareModalProps {
  skillId: number;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ skillId, title, isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null;

  const shareUrl = `${window.location.origin}/skill/${skillId}`;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=Check out this skill: ${title}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Share this skill</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50"
          >
            <Link className="h-5 w-5" />
            <span>Copy link</span>
          </button>
          
          <div className="flex space-x-4">
            <button
              onClick={shareToTwitter}
              className="flex-1 flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50"
            >
              <Twitter className="h-5 w-5 text-blue-400" />
              <span>Twitter</span>
            </button>
            
            <button
              onClick={shareToFacebook}
              className="flex-1 flex items-center justify-center space-x-2 p-3 border rounded-lg hover:bg-gray-50"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}