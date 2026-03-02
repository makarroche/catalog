import clsx from "clsx";
import { getBadgeColor } from "../utils/helpers";

type BadgeProps = {
  genre: string;
};

const Badge = ({ genre }: BadgeProps) => {
  return (
    <div className={clsx("badge", getBadgeColor(genre))}>
      <span>
        {genre && `${genre.charAt(0).toUpperCase()}${genre.slice(1)}`}
      </span>
    </div>
  );
};

export default Badge;
