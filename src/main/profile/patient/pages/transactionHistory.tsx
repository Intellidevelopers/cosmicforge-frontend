import HomeMobileNavBar from "../../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../../home/component/patient/HomeNavBar";
import TranscationItem from "../components/transcation-item";

const TransactionHistory = () => {
  const dates = ["Today", "Yesterday", "A week ago"];
  return (
    <div>
      <HomeMobileNavBar title="Transaction History" onSearchFired={() => {}} />
      <HomeNavBar title="Transaction History" onSearchFired={() => {}} />
      <div className="flex flex-col w-full ">
        {dates.map((date, index) => (
          <div key={index} className="w-full space-y-4 mt-4 px-4">
            <p className="font-bold">{date}</p>
            <div>
              <TranscationItem
                title="Ibuprofen"
                date="13th December,2025, 03:00 AM"
                price={3500}
              />
              <TranscationItem
                title="Ibuprofen"
                date="13th December,2025, 03:00 AM"
                price={3500}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
