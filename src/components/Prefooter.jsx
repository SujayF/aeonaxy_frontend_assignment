

const Prefooter = () => {
  return (
    <div
      className="h-max py-10 bg-cover bg-center bg-customGreen"
    >
      <p
        className="text-4xl md:text-8xl p-4 text-white"
        style={{ fontFamily: "charter" }}
      >
        Earn money from <br className="hidden md:block" /> your writing.
      </p>
      <p className="text-white pl-5 py-4">
        Writing has its rewards when you join the Partner Program. Learn <br />
        how to get paid for the content you publish and the audiences you <br />
        build.
      </p>
      <span className="w-full flex justify-center text-lg md:justify-start" >
                   
      <button
        className="px-8 py-2 ml-4 mt-2  m-0 rounded-full
        bg-black text-white"
      >
        Learn more
      </button>

      </span>
     
    </div>
  );
};

export default Prefooter;
