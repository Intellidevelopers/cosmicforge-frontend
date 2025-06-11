// import bg from '../../../../assets/images/cosmicForgeBdTransparent.svg'
import logo from "../../../../assets/icons/cosmic forge logo 1.svg";
import "./receipt.css";
const PaymentReceipt = () => {
  return (
    <div className="h-screen w-screen main  items-center flex flex-col  ">
      <div className=" max-w-[600px] w-full flex flex-col gap-4">
        <div className="flex items-center mt-4 p-4">
          <img
            src={logo}
            alt="CosmicForge logo"
            className=" self-left h-[2rem]"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-extrabold text-cosmic-primary-color text-xl">
            N23,000.00
          </p>
          <p className="font-bold">Successful Transaction</p>
          <p className="font-extralight text-sm">12th December, 2024</p>
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">
                Transaction type:
              </p>
              <p className="px-2 xs:text-sm  font-bold">Appointment Booking</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">Amount:</p>
              <p className="px-2 xs:text-sm  font-bold">N23,000.00</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">Recipient:</p>
              <div className="flex flex-col items-end">
                <p className="px-2 xs:text-sm  font-bold">
                  Chastain Park Hospital
                </p>
                <p className="px-2 xs:text-sm  font-extralight">
                  GLB | 1234567890
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">
                Transaction ID:
              </p>
              <p className="px-2 xs:text-sm  font-bold">1234567890</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">Reference ID:</p>
              <p className="px-2 xs:text-sm  font-bold">1233eww33998</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">
                Transaction Date:
              </p>
              <p className="px-2 xs:text-sm  font-bold">12th December, 2024</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">Payer:</p>
              <div className="flex flex-col items-end">
                <p className="px-2 xs:text-sm  font-bold">
                  Grace Jennifer Williams
                </p>
                <p className="px-2 xs:text-sm  font-extralight">
                  GLB | 1234567890
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">
                Payment Method:
              </p>
              <p className="px-2 xs:text-sm  font-bold">Bank Transfer</p>
            </div>
          </div>
          <div className="flex flex-col p-2">
            <div className="flex justify-between">
              <p className="px-2 xs:text-sm  font-extralight">
                Payment Status:
              </p>
              <p className="px-2 xs:text-sm  font-bold">Successful</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceipt;
