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
  StateDown,
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
  statedown: StateDown,
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
    />
  );
};
