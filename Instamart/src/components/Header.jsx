import { LOGO_URL } from "../utils/constants";

function Header() {
  return (
    <div className="shadow-md p-2 mx-auto w-full flex justify-center">
      <div className="flex justify-between w-[680px]">
        <img src={LOGO_URL} alt="logo" className="w-28" />
        <input
          type="text"
          placeholder="Search.."
          className="border border-black rounded-md px-2"
        />
        <div className="flex items-center">
          <svg
            className="_1Eaan Ht7wn"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="white"
            aria-hidden="true"
            data-testid="user-account-icon"
          >
            <circle
              cx="16"
              cy="16"
              r="16"
              fill="url(#paint0_linear_543_6340)"
            ></circle>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5017 13.32C18.5852 13.32 20.273 11.6766 20.273 9.64944C20.273 7.62338 18.5852 5.97998 16.5017 5.97998C14.4195 5.97998 12.7305 7.62338 12.7305 9.64944C12.7305 11.6766 14.4195 13.32 16.5017 13.32ZM8.65743 20.3424C10.06 17.5014 13.0452 15.5393 16.5001 15.5393C19.9568 15.5393 22.9411 17.5013 24.3431 20.3423C24.9581 21.5885 25.2656 22.2116 24.7097 23.1058C24.1538 24 23.2382 24 21.4069 24H11.5932C9.76204 24 8.84646 24 8.2906 23.1057C7.73475 22.2114 8.04231 21.5884 8.65743 20.3424Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_543_6340"
                x1="16"
                y1="0"
                x2="16"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#36393E" stopOpacity="0.8"></stop>
                <stop offset="1" stopColor="#36393E"></stop>
              </linearGradient>
            </defs>
          </svg>
          <button className="bg-blue-200 px-3 rounded-md">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
