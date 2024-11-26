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
  heading: string;
  markdown: string;
  reverse?: boolean;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  centerText?: boolean;
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

export type PageData = {
  pageIntroSection?: PageIntroSection;
  pageTextSectionCollection?: { items: TextBlockParams[] };
  showEvents: boolean;
  staff: any;
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
};

export type EventCollectionResponse = {
  data: {
    eventCollection: {
      items: ContentfulEvent[];
    };
  };
};
