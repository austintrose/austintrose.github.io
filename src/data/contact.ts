import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons/faCalendarPlus';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/austin-from-boston/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/austintrose',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:TODO',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'TODO',
    label: 'Phone',
    icon: faCalendarPlus,
  },
];

export default data;
