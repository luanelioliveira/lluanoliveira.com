import { Box, HStack, Icon, Link } from '@chakra-ui/react';

import {
  RiGithubFill as GithubIcon,
  RiInstagramLine as InstagramIcon,
  RiLinkedinBoxFill as LinkedinIcon,
  RiMailFill as MailIcon,
} from 'react-icons/ri';

type SocialLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" />
  </Link>
);

const links = [
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/luanoliveira.dev',
  },
  {
    icon: LinkedinIcon,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/luanoliveira',
  },
  {
    icon: GithubIcon,
    label: 'Github',
    href: 'https://github.com/luanelioliveira',
  },
  {
    icon: MailIcon,
    label: 'Mail',
    href: 'mailto:luannN@gmail.com',
  },
];

export function Socials() {
  return (
    <Box>
      <HStack spacing={6}>
        {links.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </HStack>
    </Box>
  );
}
