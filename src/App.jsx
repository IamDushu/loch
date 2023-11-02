import bell from "./assets/icons/bell.svg";
import eye from "./assets/icons/eye.svg";
import cohort from "./assets/images/cohorts.png";
import logo from "./assets/icons/logo.svg";
import Notifications from "./components/notification";
import Testimonials from "./components/Testimonials";
import validator from "validator";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const handleEmailSubmit = () => {
    console.log("clicked");
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    if (validator.isEmail(email)) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      toast.error("Please enter a valid email", {
        duration: 3000,
        position: "top-right",
        style: {
          background: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <>
      <article className="flex  bg-black font-inter">
        <Toaster />
        <div className="w-[60vw] bg-gradient bg-no-repeat bg-cover text-primary-100 py-8 pl-[62px] overflow-hidden ">
          {/* First Section */}
          <section className="flex h-[304px] mb-[61px] justify-between">
            <div className="flex flex-col gap-4">
              <img src={bell} alt="Bell_icon" className="w-8" />
              <h1 className="w-[313px] text-[31px] font-medium leading-[37.2px] drop-shadow-text">
                Get notified when a highly correlated whale makes a move
              </h1>
              <p className="text-base font-medium leading-[19.2px] w-[322px] opacity-[0.7]">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="w-[407px] bg-linear slider">
              <div className="slide-track">
                <Notifications />
              </div>
            </div>
          </section>
          {/* Second Section */}
          <section className="flex h-[306px] pr-[62px] mb-[22px] justify-between">
            <div className="border-[1.5px] border-primary-200 rounded-[13.5px]">
              <img
                src={cohort}
                alt="cohorts"
                className="w-[335px] h-[306px] rounded-[12px]"
              />
            </div>
            <div className="flex flex-col gap-4 text-right w-[305px] items-end pt-[17px]">
              <img src={eye} alt="eye" className="w-8" />
              <h1 className="text-[31px] font-medium leading-[37.2px] drop-shadow-text">
                Watch what the whales are doing
              </h1>
              <p className="text-base font-medium leading-[19.2px]  opacity-[0.7]">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </section>
          {/* Third Section */}
          <section className=" ">
            <div className="text-right pr-[62px] mb-[40px]">
              <h3 className="text-[25px] font-medium leading-[30px] mb-5">
                Testimonials
              </h3>
              <hr className="border-t-[1px] border-[#E5E5E6] " />
            </div>
            <div className="h-[136px] w-fit flex gap-10 ">
              <div className="flex items-end w-[60px]">
                <img src={logo} alt="logo" className="w-[60px]" />
              </div>
              <div className="">
                <Testimonials />
              </div>
            </div>
          </section>
        </div>
        {/* Right section - sign up */}
        <div className="bg-white font-inter w-[40vw] flex justify-center">
          <div className="fixed top-[30vh] flex flex-col items-center">
            <div className="w-[340px] mb-[24px]">
              <h1 className="text-[39px] font-medium leading-[46.8px] text-grey-300 mb-8">
                Sign up for exclusive access.
              </h1>
              <input
                type="text"
                id="emailInput"
                placeholder="Your email address"
                className="px-6 py-5 rounded-[8px] border-[#E5E5E6] border-[1px] w-full mb-6 hover:border-black"
              />
              <button
                onClick={handleEmailSubmit}
                className="bg-grey-900 rounded-[8px] w-full px-7 py-[18px] text-white text-base font-semibold leading-[19.2px]"
              >
                Get started
              </button>
            </div>
            <div className="py-[18px]">
              <p className="text-base font-semibold leading-[19.2px] text-grey-900">
                You'll receive an email with an invite link to join.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
