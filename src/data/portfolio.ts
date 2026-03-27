export const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '30+', label: 'Projects Done' },
  { num: '20+', label: 'Happy Clients' },
  { num: '5★', label: 'Client Rating' },
];

export const skills = [
  'JavaScript', 'React', 'Node.js', 'Python', 'Cloud (AWS)', 'UI/UX', 'SQL', 'MongoDB',
];

export type ServiceIconKey = 'web' | 'mobile' | 'design' | 'automation' | 'cloud' | 'consulting';

export interface Service {
  icon: ServiceIconKey;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { icon: 'web', title: 'Web Development', desc: 'Modern, responsive websites and web apps built with the latest technologies.' },
  { icon: 'mobile', title: 'Mobile Apps', desc: 'Cross-platform mobile applications for iOS and Android platforms.' },
  { icon: 'design', title: 'UI / UX Design', desc: 'Beautiful, intuitive interfaces that users love to interact with.' },
  { icon: 'automation', title: 'Business Automation', desc: 'Streamline workflows and eliminate repetitive tasks with smart automation.' },
  { icon: 'cloud', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and deployment for growing businesses.' },
  { icon: 'consulting', title: 'IT Consulting', desc: 'Strategic technology advice to help your business grow and scale.' },
];

export interface AboutInfoItem {
  label: string;
  value: string;
  highlight?: boolean;
  href?: string;
}

export const aboutInfo: AboutInfoItem[] = [
  { label: 'COMPANY', value: 'Solvin (Vinod Solutions)' },
  { label: 'LOCATION', value: 'Singapore' },
  { label: 'SPECIALISATION', value: 'Full-Stack Development & Solutions' },
  { label: 'AVAILABILITY', value: 'Open to Projects', highlight: true },
  { label: 'LINKEDIN', value: 'linkedin.com/in/vinod-kumar-reddy-420392168', href: 'https://www.linkedin.com/in/vinod-kumar-reddy-420392168' },
];

export interface Project {
  tag: string;
  title: string;
  desc: string;
  techs: string[];
}

export const projects: Project[] = [
  {
    tag: 'WEB APP',
    title: 'Solvin Business Platform',
    desc: 'A full-stack business management platform with dashboards, reporting and automation built for SMEs.',
    techs: ['React', 'Node.js', 'MongoDB'],
  },
  {
    tag: 'MOBILE',
    title: 'Client Booking App',
    desc: 'Cross-platform mobile app for service businesses to manage bookings, clients and payments.',
    techs: ['React Native', 'Firebase'],
  },
  {
    tag: 'AUTOMATION',
    title: 'Workflow Automation Suite',
    desc: 'Automated business workflows reducing manual effort by 80% for a logistics company.',
    techs: ['Python', 'AWS Lambda'],
  },
  {
    tag: 'E-COMMERCE',
    title: 'Online Store Solution',
    desc: 'Custom e-commerce platform with inventory management, payments and analytics integration.',
    techs: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
];
