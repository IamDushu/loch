import logo from "./assets/icons/logo.svg";
import validator from "validator";
import { Toaster, toast } from "react-hot-toast";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import { SignUpForm } from "./constants";

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
        {/* Left Section */}
        <div className="bg-gradient bg-no-repeat bg-cover text-primary-100 py-8 lg:pl-[60px] lg:pb-[60px] lg:pt-[44px] overflow-hidden lg:w-[60vw]">
          <div className="flex justify-center lg:hidden mb-10">
            <img src={logo} alt="logo" className="w-[60px]" />
          </div>
          {/* First Section */}
          <SectionOne />
          {/* Second Section */}
          <SectionTwo />
          {/* Third Section */}
          <SectionThree />
        </div>
        {/* Sign up Section */}
        <div className="bg-white max-lg:py-10 font-inter flex justify-center lg:w-[40vw]">
          <div className="max-lg:text-center flex flex-col items-center lg:fixed lg:top-[30vh]">
            <div className="w-[300px] mb-[24px] lg:w-[340px]">
              <h1 className="text-[39px] font-medium leading-[46.8px] text-grey-300 mb-8">
                {SignUpForm.cta}
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
                {SignUpForm.btnText}
              </button>
            </div>
            <div className="py-[18px]">
              <p className="text-base font-semibold leading-[19.2px] text-grey-900">
                {SignUpForm.message}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;
