export interface Project {
  title: string;
  category: 'Programación' | 'Análisis de datos' | 'Aplicaciones web';
  description: string;
  tags: string[];
  href: string;
  external?: boolean;
  updatedAt: string;
}

/** Ordered by each live project's latest GitHub push (UTC). */
export const projects: Project[] = [
  {
    title: 'Honoria Córdoba',
    category: 'Aplicaciones web',
    description: 'Una herramienta legal-tech para Córdoba: investigación normativa asistida por IA y cálculo de honorarios profesionales con JUS.',
    tags: ['React', 'FastAPI', 'Cohere', 'LegalTech'],
    href: '/honoria/',
    updatedAt: '2026-11-22T19:56:40Z',
  },
  {
    title: 'Butterfly classifier',
    category: 'Análisis de datos',
    description: 'Una experiencia interactiva que compara una CNN propia con MobileNetV2 para reconocer especies de mariposas.',
    tags: ['TensorFlow', 'CNN', 'MobileNetV2'],
    href: '/butterfly-classifier/',
    updatedAt: '2026-11-22T18:18:31Z',
  },
  {
    title: 'BuscaMinas',
    category: 'Programación',
    description: 'Una nueva versión de un clásico: lógica, intuición y un tablero de minas con una estética oscura y romántica.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://zipgirl.github.io/minesweeper/',
    external: true,
    updatedAt: '2026-11-22T07:30:39Z',
  },
  {
    title: 'Duality Maze',
    category: 'Programación',
    description: 'Un laberinto de dos mundos inspirado en un juego bare-metal para Raspberry Pi 3. Cambiá entre realidades y encontrá la salida.',
    tags: ['ARMv8', 'React', 'TypeScript'],
    href: 'https://zipgirl.github.io/duality-maze/',
    external: true,
    updatedAt: '2026-11-22T07:13:33Z',
  },
  {
    title: 'Derivation Atelier',
    category: 'Programación',
    description: 'Un sistema experto interactivo que combina reglas de derivación simbólica con SymPy.',
    tags: ['Python', 'Experta', 'SymPy'],
    href: '/derivation/',
    updatedAt: '2026-11-22T06:30:17Z',
  },
];
export const latestProjects = [...projects].sort((a,b)=>Date.parse(b.updatedAt)-Date.parse(a.updatedAt));
