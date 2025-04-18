"use client"

import { useEffect, useRef } from 'react';
import ContactForm from '@/components/ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose}
      ></div>
      
      <div 
        ref={modalRef}
        style={{backgroundImage: "url(/contact-bg.jpg)"}}
        className={`relative h-[500px] w-[90%] md:w-[600px] bg-cover bg-center rounded-xl border border-white 
                  transition-all duration-300 transform
                  ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400 transition-colors z-10"
        >
          ×
        </button>
        <div className="p-6 h-full flex flex-col justify-center">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Contact Me</h2>
          <div className="w-full md:w-[80%] mx-auto">
            <ContactForm onSubmitSuccess={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;