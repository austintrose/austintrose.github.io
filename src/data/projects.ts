export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'title',
    subtitle: 'subtitle',
    image: '/images/projects/nearestdollar.jpg',
    date: '2015-11-20',
    desc: 'desc',
    tech: ['React', 'Node.js', 'Plaid API', 'MongoDB'],
    featured: true,
  },
];

export default data;
