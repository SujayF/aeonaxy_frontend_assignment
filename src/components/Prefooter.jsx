

const Prefooter = () => {
  return (
    <div
      className="h-8 bg-cover bg-center bg-customGreen"
      style={{
        // backgroundImage: `url(${cubes})`,
        height: "18rem",
      }}
    >
      <p
        className="text-4xl md:text-7xl p-4 text-white"
        style={{ fontFamily: "charter" }}
      >
        Earn money from <br /> your writing.
      </p>
      <p className="text-white pl-5">
        Writing has its rewards when you join the Partner Program. Learn <br />
        how to get paid for the content you publish and the audiences you <br />
        build.
      </p>
      <button
        className="px-5 ml-4 mt-2  m-0 rounded-full
        bg-black text-white"
      >
        Learn more
      </button>
    </div>
  );
};

export default Prefooter;
