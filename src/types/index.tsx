export interface Social {
  id: string;
  link: string;
}

export interface Profile {
  site: string;
  name: string;
  role: string;
  message: string;
  avatar: string;
  socials: Social[];
}
