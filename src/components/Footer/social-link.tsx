import {
  RiGithubFill as GithubIcon,
  RiInstagramLine as InstagramIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiMailFill as MailIcon,
} from 'react-icons/ri';

import { Icon, Link } from '@chakra-ui/react';

const links = {
  instagram: {
    icon: InstagramIcon,
    label: 'Instagram',
  },
  linkedin: {
    icon: LinkedinIcon,
    label: 'Linkedin',
  },
  github: {
    icon: GithubIcon,
    label: 'Github',
  },
  email: {
    icon: MailIcon,
    label: 'Email',
  },
};

type SocialLinkProps = {
  id: string;
  href: string;
};

export const SocialLink = ({ id, href }: SocialLinkProps) => {
  const { icon, label } = links[id];

  return (
    <Link display="inline-block" href={href} aria-label={label} isExternal>
      <Icon as={icon} fontSize="xl" aria-label={label} />
    </Link>
  );
};
