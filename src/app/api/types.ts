export type Image = {
  url: string;
  alt?: string;
};

export type PageIntroSection = {
  heading: string;
  logo?: Image;
  description: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
};

export type TextBlockParams = {
  image?: Image;
  thumbnail: Image;
  heading: string;
  markdown: string;
  reverse?: boolean;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  centerText?: boolean;
  theme?: string | null;
};

export type FAQ = {
  heading: string;
  questions: FAQQuestionAnswer[];
  theme?: string;
};

export type FAQQuestionAnswer = {
  question: string;
  answer: string;
};

export type ConnectSectionProps = {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  logo?: Image;
  theme?: string;
};

export type PageNextStepProps = {
  _id: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  backgroundImage: Image;
  theme?: string;
};

export type PageData = {
  pageIntroSection?: PageIntroSection;
  pageTextSectionCollection?: { items: TextBlockParams[] };
  showEvents: boolean;
  staff: StaffMember;
  pageFaQs?: FAQ;
  pageConnectSection?: ConnectSectionProps;
};

export type ContentPageResponse = {
  data: {
    pageCollection: {
      items: PageData[];
    };
  };
};

export type ContentfulEvent = {
  sys: {
    id: string;
  };
  title: string;
  image: Image;
  startDateTime: string;
  categories: string[];
};

export type EventCollectionResponse = {
  data: {
    eventCollection: {
      items: ContentfulEvent[];
    };
  };
};

export type StaffMember = {
  firstName: string;
  lastName: string;
  department: "Kids" | "Youth" | "Young Adults" | "Lead Pastor";
  position: string;
  email: string;
  image: Image;
  bio: string;
};

export type Group = {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  dayAndTime: string;
  location: Location;
  leaders: string[];
  contactEmail: string;
  contactPhone: string;
  categories: string[];
};

type Location = {
  lat: number;
  lon: number;
};
