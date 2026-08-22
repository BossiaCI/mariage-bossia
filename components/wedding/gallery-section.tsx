'use client'

import { motion } from 'motion/react';
import { ImageWithFallback } from '@/components/wedding/ImageWithFallback';
import { Heart, MapPin, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface Photo {
  id: number;
  url: string;
  alt: string;
  location: string;
  category: 'wedding' | 'travel';
}

const photos: Photo[] = [
  {
    id: 1,
    url: '/images/parc-des-sceaux.jpeg',
    alt: 'Luxury wedding ceremony',
    location: 'Parc des Sceaux, Paris',
    category: 'wedding'
  },
  {
    id: 2,
    url: '/images/lille.jpeg',
    alt: 'Luxury wedding ceremony',
    location: 'centre ville, Lille',
    category: 'wedding'
  },
  {
    id: 3,
    url: '/images/party-rock.jpeg',
    alt: 'Luxury wedding ceremony',
    location: 'réveillon de noël, Madrid',
    category: 'wedding'
  },
  {
    id: 4,
    url: '/images/madrid.jpeg',
    alt: 'Luxury wedding ceremony',
    location: 'Plaza Mayor, Madrid',
    category: 'wedding'
  },
  {
    id: 5,
    url: '/images/issy-les-moulineaux.jpeg',
    alt: 'Luxury wedding ceremony',
    location: 'l\'Ile de saint germain, Issy-les-Moulineaux',
    category: 'wedding'
  },
  {
    id: 6,
    url: '/images/eiffel-tower.jpeg',
    alt: 'Luxury wedding ceremony',
    location: 'Tour Eiffel, Paris',
    category: 'wedding'
  },
  
];

// Grouper les photos par 3 pour chaque drone
const groupPhotos = (photos: Photo[], groupSize: number) => {
  const groups = [];
  for (let i = 0; i < photos.length; i += groupSize) {
    groups.push(photos.slice(i, i + groupSize));
  }
  return groups;
};

type Dot = {
  left: string
  top: string
}

const photoGroups = groupPhotos(photos, 3);

// Composant Drone SVG plus réaliste et élégant (blanc/doré pour le thème mariage)
const LuxuryDrone = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drone-svg drop-shadow-2xl"
  >
    {/* Propellers avec pales détaillées - couleur dorée */}
    <g id="propeller-top-left">
      <motion.g
        style={{ transformOrigin: '20px 20px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="20" cy="12" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="20" cy="28" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="12" cy="20" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
        <ellipse cx="28" cy="20" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
      </motion.g>
      <circle cx="20" cy="20" r="11" stroke="#d4af37" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="20" cy="20" r="4" fill="#f8f8f8" />
    </g>

    <g id="propeller-top-right">
      <motion.g
        style={{ transformOrigin: '100px 20px' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="100" cy="12" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="100" cy="28" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="92" cy="20" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
        <ellipse cx="108" cy="20" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
      </motion.g>
      <circle cx="100" cy="20" r="11" stroke="#d4af37" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="100" cy="20" r="4" fill="#f8f8f8" />
    </g>

    <g id="propeller-bottom-left">
      <motion.g
        style={{ transformOrigin: '20px 100px' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="20" cy="92" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="20" cy="108" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="12" cy="100" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
        <ellipse cx="28" cy="100" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
      </motion.g>
      <circle cx="20" cy="100" r="11" stroke="#d4af37" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="20" cy="100" r="4" fill="#f8f8f8" />
    </g>

    <g id="propeller-bottom-right">
      <motion.g
        style={{ transformOrigin: '100px 100px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="100" cy="92" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="100" cy="108" rx="12" ry="3" fill="#d4af37" opacity="0.8" />
        <ellipse cx="92" cy="100" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
        <ellipse cx="108" cy="100" rx="3" ry="12" fill="#c5a028" opacity="0.8" />
      </motion.g>
      <circle cx="100" cy="100" r="11" stroke="#d4af37" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="100" cy="100" r="4" fill="#f8f8f8" />
    </g>
    
    {/* Arms - bras blancs élégants */}
    <line x1="60" y1="60" x2="20" y2="20" stroke="#f8f8f8" strokeWidth="4" strokeLinecap="round" />
    <line x1="60" y1="60" x2="100" y2="20" stroke="#f8f8f8" strokeWidth="4" strokeLinecap="round" />
    <line x1="60" y1="60" x2="20" y2="100" stroke="#f8f8f8" strokeWidth="4" strokeLinecap="round" />
    <line x1="60" y1="60" x2="100" y2="100" stroke="#f8f8f8" strokeWidth="4" strokeLinecap="round" />
    
    {/* Joints dorés */}
    <circle cx="40" cy="40" r="3" fill="#d4af37" />
    <circle cx="80" cy="40" r="3" fill="#d4af37" />
    <circle cx="40" cy="80" r="3" fill="#d4af37" />
    <circle cx="80" cy="80" r="3" fill="#d4af37" />

    {/* Body - corps central blanc et doré */}
    <defs>
      <linearGradient id="luxuryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#f8f8f8" />
        <stop offset="100%" stopColor="#d4af37" />
      </linearGradient>
      <filter id="luxuryShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.4"/>
      </filter>
    </defs>
    
    <rect x="45" y="45" width="30" height="30" rx="4" fill="url(#luxuryGradient)" filter="url(#luxuryShadow)" />
    
    {/* Détails dorés */}
    <rect x="48" y="48" width="24" height="3" rx="1" fill="#d4af37" />
    <rect x="48" y="52" width="24" height="2" rx="1" fill="#c5a028" opacity="0.8" />
    
    {/* LED avant - or scintillant */}
    <circle cx="60" cy="48" r="2" fill="#ffd700">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    
    {/* LED arrière - rose tendre */}
    <circle cx="60" cy="72" r="2" fill="#ffb6c1">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    
    {/* Caméra */}
    <ellipse cx="60" cy="60" rx="6" ry="5" fill="#f8f8f8" />
    <circle cx="60" cy="60" r="4" fill="#e5e5e5" stroke="#d4af37" strokeWidth="0.5" />
    <circle cx="60" cy="60" r="2.5" fill="#c5a028" opacity="0.6" />
    
    {/* Indicateurs élégants */}
    <rect x="50" y="67" width="8" height="3" rx="1" fill="#d4af37" />
    <rect x="59" y="67" width="8" height="3" rx="1" fill="#d4af37" opacity="0.7" />
    
    {/* Landing gear blanc */}
    <rect x="48" y="73" width="2" height="4" rx="1" fill="#f8f8f8" />
    <rect x="70" y="73" width="2" height="4" rx="1" fill="#f8f8f8" />
  </svg>
);

export function DroneGallery() {

  const t = useTranslations('Gallery');

 const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setDots(generated)
  }, [])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50 py-16 px-4 overflow-hidden relative">
      {/* Particules dorées flottantes */}
      <div className="fixed inset-0 pointer-events-none overflow">
        {dots.map((dot, i) => (
          <motion.div key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={dot}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          className="inline-block mb-4"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-12 h-12 text-amber-700 mx-auto" />
        </motion.div>
        <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-800 bg-clip-text text-transparent">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-amber-900 mb-2">
          {t('description')}
        </p>
        <div className="flex items-center justify-center gap-2 text-amber-800">
          <Heart className="w-5 h-5 fill-current" />
          <span className="text-sm italic">{t('subtitle')}</span>
          <Heart className="w-5 h-5 fill-current" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 relative z-10">
        {photoGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: groupIndex * 0.3,
              type: "spring",
              stiffness: 80
            }}
            className="relative"
          >
            {/* Drone avec animation de vol réaliste */}
            <motion.div
              className="absolute -top-32 left-1/2 -translate-x-1/2 z-10"
              animate={{
                y: [0, -12, 0],
                x: [-3, 3, -3],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: groupIndex * 0.4
              }}
            >
              {/* <LuxuryDrone /> */}
            </motion.div>

            {/* Photos suspendues en grappe */}
            <div className="relative mt-8 flex gap-4 justify-center items-start">
              {group.map((photo, photoIndex) => {
                const cableLength = 80 + photoIndex * 20;
                
                return (
                  <motion.div
                    key={photo.id}
                    className="relative"
                    style={{ marginTop: photoIndex * 30 }}
                    animate={{
                      rotate: [-2 + photoIndex, 2 - photoIndex, -2 + photoIndex],
                      y: [-4, 4, -4]
                    }}
                    transition={{
                      duration: 3.5 + photoIndex * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: groupIndex * 0.4 + photoIndex * 0.2
                    }}
                  >
                    {/* Câble/Fil doré élégant */}
                    <motion.div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-200 origin-bottom"
                      style={{ 
                        height: `${cableLength}px`,
                        transformOrigin: 'bottom center',
                        boxShadow: '0 0 10px rgba(212, 175, 55, 0.3)'
                      }}
                      animate={{
                        scaleY: [1, 0.96, 1],
                        rotate: [-1, 1, -1]
                      }}
                      transition={{
                        duration: 3.5 + photoIndex * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: groupIndex * 0.4 + photoIndex * 0.2
                      }}
                    />

                    {/* Crochet doré avec détails */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 border-2 border-amber-400 rounded-full bg-amber-100 shadow-lg" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full" />
                    </div>

                    {/* Photo avec cadre luxueux */}
                    <motion.div
                      className="bg-white p-3 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border-2 border-amber-200 relative overflow-hidden"
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Badge catégorie */}
                      <div className="absolute top-1 right-1 z-10">
                        {photo.category === 'wedding' ? (
                          <div className="bg-rose-500 text-white p-1 rounded-full">
                            <Heart className="w-3 h-3 fill-current" />
                          </div>
                        ) : (
                          <div className="bg-blue-500 text-white p-1 rounded-full">
                            <MapPin className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      <ImageWithFallback
                        src={photo.url}
                        alt={photo.alt}
                        className="w-32 h-32 object-cover rounded"
                      />
                      
                      <div className="mt-2 text-center">
                        <p className="text-gray-800 text-xs truncate font-medium">{photo.alt}</p>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-amber-600" />
                          <p className="text-amber-700 text-[10px] truncate">{photo.location}</p>
                        </div>
                      </div>

                      {/* Effet de brillance au survol */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                        whileHover={{ opacity: 0.3, x: ['-100%', '100%'] }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>

                    {/* Ombre portée élégante */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-4 bg-amber-900/20 rounded-full blur-md"
                      animate={{
                        scale: [0.8, 1.1, 0.8],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{
                        duration: 3.5 + photoIndex * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: groupIndex * 0.4 + photoIndex * 0.2
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Décoration florale en arrière-plan */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <motion.div
          className="absolute top-10 left-10 text-6xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* 🌸 */}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-5xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* 💐 */}
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 text-4xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🥂
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-20 text-5xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          💍
        </motion.div>
      </div>
    </div>
  );
}