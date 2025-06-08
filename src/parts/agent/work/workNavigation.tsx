export type TTextCard = {
  icon: string;
  title: string;
  text: string;
};

export type TWorkCard = {
  id: number;
  image: {
    urlMobile: string;
    urlTablet: string;
    url: string;
  };
  header: string;
  description: string;
  items: TTextCard[];
};

export const workNavigation: TWorkCard[] = [
  {
    id: 1,
    image: {
      urlMobile: "/agent_page/work/card1/card1-mobile.svg",
      urlTablet: "/agent_page/work/card1/card1-tablet.svg",
      url: "/agent_page/work/card1/card1.svg",
    },
    header: "Non-intrusive discovery <br> of GenAI Usage",
    description:
      "Capture GenAI API calls passively, without change to your applications.",
    items: [
      {
        icon: "/agent_page/work/card1/icon1.svg",
        title: "Intercept",
        text: "Lightweight agent inventory GenAI traffic in the traffic path.",
      },
      {
        icon: "/agent_page/work/card1/icon2.svg",
        title: "Parse",
        text: "Requests decoded and transformed into contextual data.",
      },
      {
        icon: "/agent_page/work/card1/icon3.svg",
        title: "Aggregate",
        text: "Data centralized in management console for analysis.",
      },
    ],
  },
  {
    id: 2,
    image: {
      urlMobile: "/agent_page/work/card2/card2-mobile.svg",
      urlTablet: "/agent_page/work/card2/card2-tablet.svg",
      url: "/agent_page/work/card2/card2.svg",
    },
    header: "Resolve Ownership",
    description: "Map discovered GenAI transactions as owners.",
    items: [
      {
        icon: "/agent_page/work/card2/icon4.svg",
        title: "Assisted Mapping",
        text: "Discovered metadata assisted ownership resolution process.",
      },
      {
        icon: "/agent_page/work/card2/icon5.svg",
        title: "Powerful Analysis",
        text: "Analyze usage trends and cost drivers by owner or provider.",
      },
      {
        icon: "/agent_page/work/card2/icon6.svg",
        title: "Flexible Organization",
        text: "Ownership can be defined as teams, applications or constructs of your choice.",
      },
    ],
  },
  {
    id: 3,
    image: {
      urlMobile: "/agent_page/work/card3/card3-mobile.svg",
      urlTablet: "/agent_page/work/card3/card3-tablet.svg",
      url: "/agent_page/work/card3/card3.svg",
    },
    header: "Govern with Ease",
    description:
      "Set policies to stop unsanctioned traffic, rate limit by budget, fallback to lower-cost defaults.",
    items: [
      {
        icon: "/agent_page/work/card3/icon7.svg",
        title: "Stop",
        text: "Identify and block unsanctioned models.",
      },
      {
        icon: "/agent_page/work/card3/icon8.svg",
        title: "Rate limit",
        text: "Set budget by tokens or dollars.",
      },
      {
        icon: "/agent_page/work/card3/icon9.svg",
        title: "Fallback",
        text: "Re-direct requests to lower-cost alternatives.",
      },
    ],
  },
];
