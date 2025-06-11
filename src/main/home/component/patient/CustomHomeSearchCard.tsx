import { useNavigate } from "react-router-dom";

export interface CustomHomeSearchCardProps {
  title: string;
  image: string;
  navigationPath: string;
}

const CustomHomeSearchCard = ({
  title,
  image,
  navigationPath,
}: CustomHomeSearchCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow-sm shadow-black w-[180px] h-[200px] flex flex-col place-items-center rounded-md   justify-center"
      onClick={() => {
        navigate(navigationPath);
      }}
    >
      <img className="h-[80%]" src={image} />
      <p>{title}</p>
    </div>
  );
};

export default CustomHomeSearchCard;
