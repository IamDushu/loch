import bell from "./assets/icons/bell.svg";
import eye from "./assets/icons/eye.svg";
import cohort from "./assets/images/cohorts.png";
import logo from "./assets/icons/logo.svg";

function App() {
  return (
    <>
      <article className="flex  bg-black font-inter">
        <div className="w-[60vw] bg-gradient bg-no-repeat bg-cover text-primary-100 py-8 pl-[62px] ">
          {/* First Section */}
          <section className="flex h-[304px] mb-[61px]">
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
            <div></div>
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
          <section>
            <div className="text-right pr-[62px] mb-[40px]">
              <h3 className="text-[25px] font-medium leading-[30px] mb-5">
                Testimonials
              </h3>
              <hr className="border-t-[1px] border-[#E5E5E6] " />
            </div>
            <div className="h-[136px] flex">
              <div className="flex items-end">
                <img src={logo} alt="logo" className="w-[60px]" />
              </div>
              <div></div>
            </div>
          </section>
        </div>
        <div className="bg-white font-inter w-[640px]">
          <div className="w-[326px]">
            <h1 className="text-[39px] font-medium leading-[46.8px] text-grey-300">
              Sign up for exclusive access.
            </h1>
            <input type="text" placeholder="Your email address" />
            <button>Get started</button>
          </div>

          <p>You'll receive an email with an invite link to join.</p>
        </div>
      </article>
    </>
  );
}

export default App;
