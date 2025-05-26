import {
  Arrow,
  Bullet,
  BulletBg,
  Close,
  GitHub,
  LinkedIn,
  Menu,
  Slack,
  X,
  Youtube,
  ArrowDown,
  ArrowUp,
  AgentOperationsDirector,
  TetrateServiceBridge,
  TetrateIstioSubscription,
  TetrateIstioSubscriptionPlus,
  TetrateEnterpriseEnvoyGateway,
  FinancialServices,
  Fips,
  Government,
  Kubernetes,
  ZeroTrust,
  Blog,
  ZeroTrustCenter,
  Documentation,
  Faq,
  EbooksReports,
  WhitePapers,
  Video,
  All,
  TetrateIcon,
  Leadership,
  Investors,
  Partners,
  Newsroom,
  Careers,
  GetSupport,
  ContactUs,
  TetrateAppGateway,
} from "../svgs";

export const icons = {
  arrow: Arrow,
  close: Close,
  menu: Menu,
  bullet: Bullet,
  bulletbg: BulletBg,
  x: X,
  slack: Slack,
  youtube: Youtube,
  github: GitHub,
  linkedin: LinkedIn,
  arrowdown: ArrowDown,
  arrowup: ArrowUp,
  agentoperationsdirector: AgentOperationsDirector,
  tetrateservicebridge: TetrateServiceBridge,
  tetrateistiosubscription: TetrateIstioSubscription,
  tetrateistiosubscriptionplus: TetrateIstioSubscriptionPlus,
  tetrateenterpriseenvoygateway: TetrateEnterpriseEnvoyGateway,
  tetrateappgateway: TetrateAppGateway,
  financialservices: FinancialServices,
  fips: Fips,
  government: Government,
  kubernetes: Kubernetes,
  zerotrust: ZeroTrust,
  blog: Blog,
  zerotrustcenter: ZeroTrustCenter,
  documentation: Documentation,
  faq: Faq,
  ebooksandreports: EbooksReports,
  whitepapers: WhitePapers,
  video: Video,
  all: All,
  aboutus: TetrateIcon,
  leadership: Leadership,
  investors: Investors,
  partners: Partners,
  newsroom: Newsroom,
  careers: Careers,
  getsupport: GetSupport,
  contactus: ContactUs,
};

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  onClick?: () => void;
}

export const Icon = ({
  name,
  className,
  width,
  height,
  fill,
  stroke,
  onClick,
  ...rest
}: IconProps) => {
  if (!icons[name]) return null;

  const ReactIcon = icons[name];

  return (
    <ReactIcon
      className={className}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      onClick={onClick}
      {...rest}
    />
  );
};
