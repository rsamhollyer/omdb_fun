import { useMemo } from "react";
import StarIcon from "./StarIcon";

function RatingIcon({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
}) {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "yellow";
    } else if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "none";
  }, [rating, hoverRating, index]);
  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
}
export default RatingIcon;
