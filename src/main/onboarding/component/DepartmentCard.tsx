import { useNavigate } from "react-router-dom";

// interface
interface Users {
  name: string;
  image: string;
  backgroundImage: string;
  bodyText: string;
}

const DepartmentCardS = (User: Users) => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-md  hover:bg-cosmic-light-color-call  w-[200px] h-[200px] bg-white m-6 p-6 flex flex-col justify-center place-items-center gap-8 "
      onClick={() => {
        navigate("/department/overview", {
          state: {
            department: {
              title: User.name,
              backgroundImage: User.backgroundImage,
              bodyText: User.bodyText,
            },
          },
        });
      }}
    >
      <img src={User.image} />
      <p className="text-center font-light">{User.name}</p>
    </div>
  );
};

export default DepartmentCardS;
