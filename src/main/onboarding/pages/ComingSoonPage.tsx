import logo from "../../../assets/logo/logo_comsic_splash.svg";

const ComingSoonPage = () => {
  return (
    <div className="w-full h-dvh font-poppins font-bold flex flex-col justify-center place-items-center">
      <img src={logo} />
      <div className="w-full flex justify-center place-items-center">
        <p className="w-fit text-center text-[30px] mt-10  ms-20">
          Comming Soon ...................
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
