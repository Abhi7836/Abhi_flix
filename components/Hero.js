import Header from "../components/Header";


export default function Home() {
  return (
    <div
      className="w-full herobackground sm:min-h-screen"
    >
      <Header />
      <div className="flex flex-col items-center justify-center w-full flex-1 pt-32 px-2 sm:px-7 text-center text-white">
        <h1 className="text-3xl sm:text-6xl font-bold max-w-screen-sm">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="text-lg sm:text-3xl mt-4 mb-8 max-w-screen-sm">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-wrap justify-center mt-4">
          <input
            placeholder="Email address"
            className="bg-white p-3 sm:p-4 min-w-[300px] md:min-w-[450px]"
          />
          <button
            onClick={() => signIn()}
            className="flex items-center min-h-full bg-[#e50914]
              text-white text-xl px-8 py-3 my-8 sm:my-0 rounded-md"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
