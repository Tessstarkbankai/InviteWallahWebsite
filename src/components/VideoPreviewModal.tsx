import React from 'react';
import { X } from 'lucide-react';

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    title: string;
    description: string;
  } | null;
}

const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="inline-block w-full max-w-4xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            {/* Video placeholder - in a real app, this would be a real video player */}
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <p className="text-white text-lg">Video Preview Placeholder</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            <h3 className="text-3xl font-bold mb-4">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPreviewModal;