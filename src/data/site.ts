// Contenido estructurado del sitio, tipado para que cualquier persona del
// equipo pueda añadir o editar entradas (nuevo hito, nueva empresa, nueva
// foto de galería) sin tocar los componentes de presentación.

export interface NavItem {
  href: string;
  label: string;
}

export interface Milestone {
  year: string;
  title: string;
  copy: string;
}

export interface ImpactArea {
  number: string;
  title: string;
  copy: string;
  tag: string;
}

export interface Venture {
  index: string;
  name: string;
  title: string;
  copy: string;
  href: string;
  image: string;
  width: number;
  height: number;
  featured: boolean;
}

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  copy: string;
  width: number;
  height: number;
}

export interface SocialLink {
  key: 'facebook' | 'linkedin' | 'youtube' | 'instagram' | 'tiktok' | 'whatsapp';
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  map: string;
}

export const whatsapp =
  'https://wa.me/525564604183?text=Hola%20Jes%C3%BAs%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.';

export const navigation: NavItem[] = [
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#impacto', label: 'Impacto' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#galeria', label: 'Galería' },
  { href: '#libros', label: 'Libros' },
];

export const milestones: Milestone[] = [
  {
    year: 'Origen',
    title: 'Ciencias de la Computación',
    copy: 'Formación en la Universidad Central de Venezuela: la base técnica de una carrera dedicada a conectar tecnología y negocio.',
  },
  {
    year: '2006',
    title: 'Nace eSoft LATAM',
    copy: 'Comienza un ecosistema empresarial enfocado en proveer soluciones de alta tecnología para América Latina.',
  },
  {
    year: '20+',
    title: 'Liderazgo y transformación',
    copy: 'Dos décadas acompañando a empresas, líderes y emprendedores con una visión estratégica y profundamente humana.',
  },
  {
    year: 'Hoy',
    title: 'Empresa, autoría y conversación',
    copy: 'La experiencia se comparte a través de empresas, libros, conferencias y mentoría para quienes construyen el futuro.',
  },
];

export const impactAreas: ImpactArea[] = [
  {
    number: '01',
    title: 'Estrategia y transformación',
    copy: 'Visión de negocio y tecnología conectadas para convertir retos complejos en rutas claras de crecimiento.',
    tag: 'Empresas',
  },
  {
    number: '02',
    title: 'Liderazgo que moviliza',
    copy: 'Conferencias y conversaciones que acercan la innovación a líderes, equipos y comunidades empresariales.',
    tag: 'Audiencias',
  },
  {
    number: '03',
    title: 'Experiencia que se comparte',
    copy: 'Ideas prácticas sobre empresa, continuidad y atención al negocio, llevadas del terreno a los libros.',
    tag: 'Lectores',
  },
];

export const ventures: Venture[] = [
  {
    index: '01 / 02',
    name: 'NEDIMI',
    title: 'Consultoría estratégica',
    copy: 'Soluciones tecnológicas integrales para impulsar la transformación digital de las empresas.',
    href: 'https://nedimi.com/',
    image: '/media/nedimi.webp',
    width: 1600,
    height: 1600,
    featured: true,
  },
  {
    index: '02 / 02',
    name: 'eSoftPasión',
    title: 'Software a la medida',
    copy: 'Herramientas digitales de alto impacto creadas con una mirada innovadora.',
    href: 'https://esoftpasion.com/',
    image: '/media/esoftpasion.webp',
    width: 225,
    height: 225,
    featured: true,
  },
];

export const gallery: GalleryItem[] = [
  {
    src: '/media/jesus-rivas-event.webp',
    alt: 'Jesús Rivas durante un encuentro empresarial',
    label: 'Encuentros',
    copy: 'Conversaciones que conectan experiencia, propósito y nuevas oportunidades.',
    width: 720,
    height: 923,
  },
  {
    src: '/media/jesus-rivas-conference.webp',
    alt: 'Jesús Rivas impartiendo una conferencia',
    label: 'Conferencias',
    copy: 'Ideas que acercan la tecnología y la estrategia a líderes y equipos.',
    width: 853,
    height: 727,
  },
  {
    src: '/media/jesus-rivas-speaking.webp',
    alt: 'Jesús Rivas hablando ante una audiencia',
    label: 'Escenario',
    copy: 'Experiencias compartidas para movilizar decisiones y crecimiento.',
    width: 1600,
    height: 900,
  },
  {
    src: '/media/jesus-rivas-conversation.webp',
    alt: 'Jesús Rivas en una conversación profesional',
    label: 'Liderazgo',
    copy: 'La escucha como punto de partida para transformar organizaciones.',
    width: 853,
    height: 1280,
  },
  {
    src: '/media/jesus-rivas-portrait.webp',
    alt: 'Retrato profesional de Jesús Rivas',
    label: 'Visión',
    copy: 'Más de dos décadas construyendo soluciones de alto impacto en América Latina.',
    width: 1600,
    height: 2133,
  },
];

export const social: SocialLink[] = [
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/1FDpoXeEHr/?mibextid=wwXIfr' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jesusalexisrivas/' },
  { key: 'youtube', label: 'YouTube', href: 'https://youtube.com/@pasionporlatecnologia?si=ij7wWSVjD8kdoypw' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/soyjesusrivas' },
  { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@soyjesusrivas' },
  { key: 'whatsapp', label: 'WhatsApp', href: whatsapp },
];

export const contact: ContactInfo = {
  email: 'contacto@soyjesusrivas.com',
  location: 'Montecito 38, Piso 33, Nápoles, CDMX',
  map: 'https://www.google.com/maps?q=Montecito%2038%20Piso%2033%20N%C3%A1poles%20CDMX&output=embed',
};
