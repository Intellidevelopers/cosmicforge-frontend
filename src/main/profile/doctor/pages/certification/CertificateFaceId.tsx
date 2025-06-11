import lock from "../../../../../assets/images/Security Lock green.png";

const CertificateFaceId = () => {
  return (
    <div className="w-full min-h-[50vh] ">
      <p>
        To complete your certificate verification, we require you to verify your
        face. This will validate your operations with Cosmicforge Health Net.
      </p>
      <p className="text-green-800 bg-green-200 mt-10 w-fit px-2 py-1 rounded-md text-sm font-bold">
        <img src={lock} alt="lock" className="w-4 inline-block" />
        All data is safely stored and encrypted
      </p>
    </div>
  );
};

export default CertificateFaceId;
