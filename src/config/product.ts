/**
 * Configuration centrale du produit — Outil complet du pasteur.
 * Modifier ce fichier suffit à mettre à jour l'ensemble du tunnel de vente.
 */

/**
 * URL unique de checkout Chariow.
 * Tous les boutons d'achat du site doivent utiliser exclusivement cette variable.
 * Ne jamais coder une autre URL Chariow ailleurs dans le projet.
 */
export const CHARIOW_CHECKOUT_URL =
  'https://livresenligne.mychariow.shop/prd_m8my5w90/checkout';

export const SITE_URL = 'https://libraryonline.online';

export const product = {
  name: 'OUTIL COMPLET DU PASTEUR',
  tagline:
    'Formations pratiques & ressources essentielles pour diriger, organiser et développer votre église.',
  heroDescription:
    'Une bibliothèque stratégique conçue pour accompagner le pasteur dans les différentes dimensions de son ministère, de l’implantation de l’église à sa structuration, sa formation et son développement.',
  heroDomainsLabel: '10 domaines essentiels du ministère pastoral',
  primaryCtaLabel: 'ACCÉDER À L’OUTIL COMPLET',
  offerCtaLabel: 'JE VEUX L’OUTIL COMPLET DU PASTEUR',
  finalCtaLabel: 'ACCÉDER À L’OUTIL COMPLET',
  stickyCtaLabel: 'ACCÉDER AU PACK',
  accessNote: 'Accès numérique après paiement',
};

export type Category = {
  number: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    number: '01',
    title: 'ÊTRE PASTEUR',
    description:
      'Des ressources pour mieux comprendre les responsabilités, les exigences et les dimensions du ministère pastoral.',
  },
  {
    number: '02',
    title: 'IMPLANTATION D’ÉGLISE',
    description:
      'Des ressources pour comprendre les étapes et les principes liés à l’implantation et au développement d’une nouvelle assemblée.',
  },
  {
    number: '03',
    title: 'ÉVANGÉLISATION & SUIVI DES NOUVEAUX CONVERTIS',
    description:
      'Des ressources pour évangéliser, accueillir, accompagner et suivre les personnes nouvellement converties.',
  },
  {
    number: '04',
    title: 'ADMINISTRATION DE L’ÉGLISE',
    description:
      'Des ressources pour organiser et administrer efficacement la vie de l’église.',
  },
  {
    number: '05',
    title: 'FORMATION DES OUVRIERS',
    description:
      'Des ressources pour former les anciens, diacres, moniteurs, portiers, responsables de jeunes et autres ouvriers.',
  },
  {
    number: '06',
    title: 'ÉCOLE DE DIMANCHE',
    description:
      'Des ressources pour organiser, enseigner et développer efficacement l’école du dimanche.',
  },
  {
    number: '07',
    title: 'MINISTÈRE DES JEUNES',
    description:
      'Des ressources pour accompagner, former et développer le ministère auprès des jeunes.',
  },
  {
    number: '08',
    title: 'MINISTÈRE DES FEMMES',
    description:
      'Des ressources pour accompagner et développer le ministère des femmes dans l’église.',
  },
  {
    number: '09',
    title: 'PRÉDICATION & ENSEIGNEMENT',
    description:
      'Des ressources pour approfondir la préparation des messages, la prédication et l’enseignement biblique.',
  },
  {
    number: '10',
    title: 'RESSOURCES ESSENTIELLES',
    description:
      'Une sélection de ressources doctrinales et thématiques pour répondre aux différents besoins d’enseignement de l’église.',
  },
];

export const journeySteps: string[] = [
  'ÊTRE PASTEUR',
  'IMPLANTER',
  'ÉVANGÉLISER',
  'ORGANISER',
  'FORMER',
  'ENSEIGNER',
  'DIRIGER',
  'DÉVELOPPER',
];

export const audience: string[] = [
  'Pasteurs',
  'Pasteurs implanteurs',
  'Responsables d’églises',
  'Ministres et prédicateurs',
  'Responsables de départements',
  'Anciens et diacres',
  'Responsables de jeunes',
  'Responsables de femmes',
  'Moniteurs de l’école du dimanche',
];

export const benefits: string[] = [
  'Mieux vous préparer au ministère',
  'Structurer votre église',
  'Former vos ouvriers',
  'Accompagner les nouveaux convertis',
  'Développer vos différents départements',
  'Améliorer votre enseignement',
  'Approfondir vos connaissances bibliques',
  'Disposer de ressources pratiques à consulter selon vos besoins',
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: 'Que contient l’Outil complet du pasteur ?',
    answer:
      'Le pack regroupe des formations pratiques et des livres/documents de référence répartis dans 10 grands domaines du ministère pastoral.',
  },
  {
    question: 'Est-ce uniquement destiné aux pasteurs ?',
    answer:
      'Le pack est principalement conçu pour les pasteurs, mais plusieurs ressources peuvent également être utiles aux responsables et collaborateurs de l’église.',
  },
  {
    question: 'Le pack contient-il uniquement des livres ?',
    answer:
      'Non. Il associe des formations pratiques à des livres et documents de référence.',
  },
  {
    question: 'Quels sont les domaines abordés ?',
    answer:
      'Être pasteur, Implantation d’église, Évangélisation & suivi des nouveaux convertis, Administration de l’église, Formation des ouvriers, École de dimanche, Ministère des jeunes, Ministère des femmes, Prédication & enseignement, Ressources essentielles.',
  },
  {
    question: 'Comment recevoir les documents après l’achat ?',
    answer:
      'Le téléchargement des documents est immédiat après votre achat. L’affiche promotionnelle du pack vous sera également envoyée.',
  },
];

export const contact = {
  email: 'libraryonline@gmail.com',
  whatsappNumber: '+243823226790',
  get whatsappLink() {
    const digitsOnly = this.whatsappNumber.replace(/[^\d]/g, '');
    return `https://wa.me/${digitsOnly}`;
  },
  website: 'libraryonline.online',
};

export const seo = {
  title: 'Outil complet du pasteur | Formations & ressources pastorales',
  description:
    'Découvrez l’Outil complet du pasteur : formations pratiques et ressources essentielles pour implanter, organiser, former, enseigner et développer votre église.',
};

export const images = {
  /** Affiche / mockup principal du pack — à remplacer dans public/images/product/ */
  productMockup: '/images/product/pack-mockup.png',
  /** Les 5 captures WhatsApp de preuve sociale — à remplacer dans public/images/social-proof/ */
  socialProof: [
    '/images/social-proof/temoignage-1.png',
    '/images/social-proof/temoignage-2.png',
    '/images/social-proof/temoignage-3.png',
    '/images/social-proof/temoignage-4.png',
    '/images/social-proof/temoignage-5.png',
  ],
};
