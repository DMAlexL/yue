export interface BaseLink {
  name?: string;
  address?: string;
}

export interface CardViewModel {
  key: string;
  title: string;
  logo: string;
  github: string;
  intro: string;
  style: { [key: string]: string };
  wikis?: BaseLink[];
}
