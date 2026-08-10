import { ServiceItem } from '../types';
import { IMAGES } from '../assets/images';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'logo-design',
    category: 'Logo Design',
    title: '🎨 LOGO DESIGN & BRANDING',
    iconName: 'Palette',
    tagline: 'Des logos uniques, mémorables et stratégiques pour marquer les esprits.',
    description: 'Nous concevons des identités visuelles fortes et pérennes. Du concept initial vectoriel aux fichiers sources complets prêts à l\'impression et au web.',
    features: [
      'Logos vectoriels sur mesure (SVG, EPS, PNG HD, AI)',
      'Déclinaisons couleur, noir & blanc, négatif',
      'Charte graphique & guide de marque complet',
      'Maquettes 3D réalistes (Mockups t-shirts, enseignes, papeterie)'
    ],
    bgImage: IMAGES.logoBg,
    ctaText: 'Créer mon logo'
  },
  {
    id: 'banners-visuals',
    category: 'Bannière / Poster',
    title: '🖼️ BANNIÈRES & VISUELS PUB',
    iconName: 'Image',
    tagline: 'Des visuels percutants conçus pour maximiser vos taux de conversion.',
    description: 'Bannières publicitaires, affiches de concerts, flyers événementiels, miniatures YouTube ultra-cliquables et templates réseaux sociaux haute définition.',
    features: [
      'Thumbnails YouTube & visuels de streaming',
      'Bannières Facebook, X, LinkedIn, YouTube',
      'Affiches & flyers pour concerts, soirées & événements',
      'Visuels sponsorisés Google & Meta Ads'
    ],
    bgImage: IMAGES.bannersBg,
    ctaText: 'Commander un visuel'
  },
  {
    id: 'lyrics-content',
    category: 'Lyrics',
    title: '🎵 LYRICS & CONTENT ARTISTES',
    iconName: 'Music',
    tagline: 'Sublimez vos textes et projets musicaux avec des créations sur-mesure.',
    description: 'Écriture et structuration de paroles de chansons, direction artistique d\'albums, pochettes de single/EP et vidéos de lyrics animées créatives.',
    features: [
      'Écriture de lyrics & retravail de textes musicaux',
      'Video Lyric animée 2D/3D dynamique',
      'Cover Art / Pochette d\'album haute définition',
      'Dossier de presse & kit média artiste'
    ],
    bgImage: IMAGES.musicBg,
    ctaText: 'Commander du contenu'
  },
  {
    id: 'video-editing',
    category: 'Montage vidéo',
    title: '🎬 MONTAGE VIDÉO PRO',
    iconName: 'Film',
    tagline: 'Transformez vos rushs bruts en chefs-d\'œuvre visuels captivants.',
    description: 'Montage dynamique haute fréquence avec transitions modernes, color grading cinéma, effets spéciaux (VFX), sound design immersif et sous-titres animés.',
    features: [
      'Shorts, TikTok, Instagram Reels & YouTube Videos',
      'Clips musicaux & vidéos de présentation',
      'Colorimétrie professionnelle & Sound Design FX',
      'Sous-titrage dynamique style Alex Hormozi'
    ],
    bgImage: IMAGES.videoBg,
    ctaText: 'Demander un montage'
  }
];
