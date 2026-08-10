export interface ServicePricingTier {
  id: string;
  name: string;
  category: string;
  icon: string;
  basicPrice: number;
  standardPrice: number;
  premiumPrice: number;
  description: string;
  popularTier: 'basic' | 'standard' | 'premium';
}

export interface ViraqPack {
  id: string;
  name: string;
  price: number;
  badge?: string;
  tagline: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export const INDIVIDUAL_SERVICES_PRICING: ServicePricingTier[] = [
  {
    id: 'logo-design',
    name: 'Logo Design',
    category: 'Logo Design',
    icon: '🎨',
    basicPrice: 15,
    standardPrice: 30,
    premiumPrice: 50,
    description: 'Création de logos originaux, modernes & mémorables pour valoriser votre marque.',
    popularTier: 'standard'
  },
  {
    id: 'flyer-design',
    name: 'Flyer Design',
    category: 'Affiche / Poster',
    icon: '📄',
    basicPrice: 10,
    standardPrice: 20,
    premiumPrice: 35,
    description: 'Design de flyers haute résolution pour événements, promotions & campagnes marketing.',
    popularTier: 'standard'
  },
  {
    id: 'branding',
    name: 'Branding',
    category: 'Identité visuelle',
    icon: '✨',
    basicPrice: 50,
    standardPrice: 100,
    premiumPrice: 180,
    description: 'Identité visuelle complète : charte graphique, règles de marque & univers visuel.',
    popularTier: 'standard'
  },
  {
    id: 'montage-video',
    name: 'Montage Vidéo',
    category: 'Montage vidéo',
    icon: '🎬',
    basicPrice: 15,
    standardPrice: 30,
    premiumPrice: 60,
    description: 'Montage dynamique, étalonnage, effets visuels & transitions pour Reels, TikTok & YouTube.',
    popularTier: 'standard'
  },
  {
    id: 'lyrics-video',
    name: 'Lyrics / Lyric Video',
    category: 'Lyrics',
    icon: '🎵',
    basicPrice: 15,
    standardPrice: 30,
    premiumPrice: 50,
    description: 'Vidéo paroles animées & visuels accrocheurs pour artistes & singles musicaux.',
    popularTier: 'standard'
  },
  {
    id: 'cover-art',
    name: 'Cover Art (Pochette)',
    category: 'Lyrics',
    icon: '💿',
    basicPrice: 10,
    standardPrice: 20,
    premiumPrice: 35,
    description: 'Pochettes de singles, EP & albums pour Spotify, Apple Music & réseaux.',
    popularTier: 'standard'
  },
  {
    id: 'affiche-poster',
    name: 'Affiche / Poster',
    category: 'Affiche / Poster',
    icon: '🖼️',
    basicPrice: 10,
    standardPrice: 20,
    premiumPrice: 35,
    description: 'Affiches grand format pour concerts, soirées, cinéma & annonces officielles.',
    popularTier: 'standard'
  },
  {
    id: 'carte-visite',
    name: 'Carte de Visite',
    category: 'Bannière / Poster',
    icon: '🎴',
    basicPrice: 10,
    standardPrice: 15,
    premiumPrice: 25,
    description: 'Cartes de visite professionnelles épurées, prêtes à imprimer.',
    popularTier: 'standard'
  },
  {
    id: 'banniere-social',
    name: 'Bannière / Social Media',
    category: 'Bannière / Poster',
    icon: '📱',
    basicPrice: 10,
    standardPrice: 20,
    premiumPrice: 30,
    description: 'Bannières captivantes pour YouTube, Facebook, Twitter (X), LinkedIn & Twitch.',
    popularTier: 'standard'
  },
  {
    id: 'pack-reseaux',
    name: 'Pack Réseaux Sociaux',
    category: 'Bannière / Poster',
    icon: '🚀',
    basicPrice: 25,
    standardPrice: 50,
    premiumPrice: 80,
    description: 'Ensemble complet de visuels coordonnés pour l’ensemble de vos réseaux sociaux.',
    popularTier: 'standard'
  }
];

export const VIRAQ_PACKS: ViraqPack[] = [
  {
    id: 'pack-starter',
    name: 'STARTER',
    price: 35,
    badge: 'Lancement Idéal',
    tagline: 'L’essentiel pour démarrer rapidement avec une présence professionnelle.',
    features: [
      '1 Logo original',
      '1 Flyer promotionnel',
      '1 Bannière réseaux sociaux',
      'Fichiers haute résolution (PNG/JPEG)',
      'Livraison rapide 24h - 48h'
    ],
    recommendedFor: 'Créateurs, artistes indépendants & nouveaux projets.',
    isPopular: false
  },
  {
    id: 'pack-business',
    name: 'BUSINESS',
    price: 80,
    badge: '🏆 Le Plus Popular',
    tagline: 'La formule clé en main pour installer une image de marque solide & crédible.',
    features: [
      '1 Logo professionnel complet',
      '1 Flyer d’impact',
      '1 Carte de visite sur-mesure',
      '1 Bannière réseaux sociaux',
      'Mini identité visuelle (Couleurs & Typo)',
      'Fichiers sources & haute qualité'
    ],
    recommendedFor: 'TPE, startups, commerces & marques en croissance.',
    isPopular: true
  },
  {
    id: 'pack-brand-premium',
    name: 'BRAND PREMIUM',
    price: 150,
    badge: '💎 Qualité Agence Complexe',
    tagline: 'La solution ultime d’identité visuelle haut de gamme pour s’imposer sur le marché.',
    features: [
      'Logo professionnel (Déclinaisons multiples)',
      'Palette de couleurs officielle',
      'Sélection typographique premium',
      'Carte de visite professionnelle',
      'Flyers promotionnels',
      'Bannière réseaux sociaux optimisée',
      'Brand Guidelines (Charte graphique complète)',
      'Support & révisions prioritaires'
    ],
    recommendedFor: 'Entreprises, marques de mode, labels & projets ambitieux.',
    isPopular: false
  }
];
