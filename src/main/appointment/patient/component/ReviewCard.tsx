import unratedStar from "../../../../assets/icons/unrated-star.svg";
import ratedStar from "../../../../assets/icons/rated-star.svg";

interface ReviewCardProps {
  clientName: string;
  clientProfile: string;
  ratings?: number;
  comment: string;
  time: string;
}
const ReviewCard = ({
  clientName,
  clientProfile,
  time,
  comment,
}: ReviewCardProps) => {
  return (
    <div className="w-full m-2 p-3 flex gap-2 relative bg-white rounded-md shadow">
      <img
        className="w-[50px] h-[50px] rounded-full"
        alt="card-profile"
        src={clientProfile}
      />
      <div className="w-full flex flex-col gap-1 relative">
        <p>{clientName}</p>
        <div className="w-full mt-1 flex gap-3">
          <img className="w-[20px] h-[20px] " src={ratedStar} />
          <img className="w-[20px] h-[20px]" src={unratedStar} />
          <img className="w-[20px] h-[20px]" src={unratedStar} />
          <img className="w-[20px] h-[20px]" src={unratedStar} />
          <img className="w-[20px] h-[20px]" src={unratedStar} />
        </div>
        <p className="text-justify mt-2 font-extralight">{comment}</p>
        <p className="font-extralight text-[12px] absolute right-0 top-1">
          {time}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
