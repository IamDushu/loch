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
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;

    if (validator.isEmail(email)) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      toast.error("Please enter a valid email", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <>
      <article className="lg:flex  bg-black font-inter">
        <Toaster />
        <div className="bg-gradient bg-no-repeat bg-cover text-primary-100 py-8 lg:pl-[62px] overflow-hidden lg:w-[60vw]">
          <div className="flex justify-center lg:hidden mb-10">
            <img src={logo} alt="logo" className="w-[60px]" />
          </div>
          {/* First Section */}
          <section className=" h-[304px] mb-[190px] lg:mb-[61px] lg:justify-between  lg:flex">
            <div className="flex flex-col gap-4 max-lg:px-8 max-lg:mb-10">
              <img src={bell} alt="Bell_icon" className="w-8" />
              <h1 className="md:w-[313px] text-[31px] font-medium leading-[37.2px] drop-shadow-text">
                Get notified when a highly correlated whale makes a move
              </h1>
              <p className="text-base font-medium leading-[19.2px] md:w-[322px] opacity-[0.7]">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="lg:w-[407px] bg-linear slider max-lg:my-5">
              <div className="slide-track">
                <Notifications />
              </div>
            </div>
          </section>
          {/* Second Section */}
          <section className="mb-20 lg:mb-[22px] lg:justify-between lg:flex lg:pr-[62px] lg:h-[306px] ">
            <div className="max-lg:mb-5 border-[1.5px] border-primary-200 rounded-[13.5px]">
              <img
                src={cohort}
                alt="cohorts"
                className="lg:w-[335px] lg:h-[306px] w-full h-full rounded-[12px]"
              />
            </div>
            <div className="flex flex-col gap-4  lg:text-right md:w-[500px] lg:w-[305px] lg:items-end pt-[17px]  max-lg:px-8">
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
          <section className=" max-lg:mx-5">
            <div className="text-center lg:text-right lg:pr-[62px] mb-[40px]">
              <h3 className="text-[25px] font-medium leading-[30px] mb-5 ">
                Testimonials
              </h3>
              <hr className="border-t-[1px] border-[#E5E5E6] " />
            </div>
            <div className="lg:h-[136px] w-fit flex gap-10 ">
              <div className="flex items-end w-[60px] max-lg:hidden ">
                <img src={logo} alt="logo" className="w-[60px]" />
              </div>
              <div>
                <Testimonials />
              </div>
            </div>
          </section>
        </div>
        {/* Right section - sign up */}
        <div className="bg-white max-lg:py-10 font-inter flex justify-center lg:w-[40vw]">
          <div className="max-lg:text-center flex flex-col items-center lg:fixed lg:top-[30vh]">
            <div className="w-[300px] mb-[24px] lg:w-[340px]">
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
