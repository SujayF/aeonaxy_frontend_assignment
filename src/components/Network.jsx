import profilepic from "../assets/cesar-rincon-XHVpWcr5grQ-unsplash.jpg";

const Network = () => {
  return (
    <div className="bg-black flex w-full flex-col md:flex-row">
      <div className="w-1/1 md:w-1/2">
        <p
          className="text-white text-5xl pt-8 lg:text-7xl pl-8"
          style={{ fontFamily: "charter" }}
        >
          Join a network <br className="hidden md:block" /> of curious{" "}
          <br className="hidden md:block" /> minds.
        </p>
      </div>

      <div className="w-1/1 md:w-1/2 bg-black flex flex-col pt-5 pl-4 text-white pr-14">
        <div className="flex border-t border-b border-gray-300 pt-2">
          <img
            className="w-14 h-14 rounded-full"
            src={profilepic}
            alt="propic"
          />
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-2xl pl-2">Barack Obama</p>
            <p className="pl-2">DAD,HUSBAND,PRESIDENT,CITIZEN</p>
          </div>
        </div>
        <div className="flex border-t border-b border-gray-300 pt-2">
          <img
            className="w-14 h-14 rounded-full"
            src={profilepic}
            alt="propic"
          />
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-2xl pl-2">Barack Obama</p>
            <p className="pl-2">DAD,HUSBAND,PRESIDENT,CITIZEN</p>
          </div>
        </div>
        <div className="flex border-t border-b border-gray-300 pt-2">
          <img
            className="w-14 h-14 rounded-full"
            src={profilepic}
            alt="propic"
          />
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-2xl pl-2">Barack Obama</p>
            <p className="pl-2">DAD,HUSBAND,PRESIDENT,CITIZEN</p>
          </div>
        </div>
        <div className="flex border-t border-b border-gray-300 pt-2">
          <img
            className="w-14 h-14 rounded-full"
            src={profilepic}
            alt="propic"
          />
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-2xl pl-2">Barack Obama</p>
            <p className="pl-2">DAD,HUSBAND,PRESIDENT,CITIZEN</p>
          </div>
        </div>
        <div className="flex border-t border-b border-gray-300 pt-2">
          <img
            className="w-14 h-14 rounded-full"
            src={profilepic}
            alt="propic"
          />
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-2xl pl-2">Barack Obama</p>
            <p className="pl-2">DAD,HUSBAND,PRESIDENT,CITIZEN</p>
          </div>
        </div>
        <div className="flex border-t border-b border-gray-300 pt-2 mb-2">
          <img
            className="w-14 h-14 rounded-full"
            src={profilepic}
            alt="propic"
          />
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-2xl pl-2 ">Barack Obama</p>
            <p className="pl-2">DAD,HUSBAND,PRESIDENT,CITIZEN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
