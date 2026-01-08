import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import annualPicnicFlyer from '@/assets/annual-picnic-flyer.jpeg';

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a brief delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-w-lg w-full max-h-[90vh] animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        <img
          src={annualPicnicFlyer}
          alt="BBD Bag Professional Association Annual Picnic 2026 - Sunday 18th January"
          className="w-full rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default NotificationPopup;
