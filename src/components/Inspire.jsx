import mobile from "../assets/Untitled (3).jpg";

const Inspire = () => {
  return (
    <>
    
    <div className="flex border-b-2 border-black bg-customPeach">
        
      <div className=" p-5  w-full md:w-3/5 flex flex-col items-center md:items-start justify-between">

        <p style={{ fontFamily: "charter" }} className="text-5xl md:text-7xl pb-4">
          Create <br className="hidden md:block" /> your space.
        </p>

        <p className="inline-flex flex-col items-center md:items-start">
          Tell your story your way &mdash; with different ways to <br className="hidden md:block" /> write
          ,style,and brand your work.
          <span>
           <button className="pl-5 mt-8 pr-5 m-0 rounded-full
        bg-black text-white" >
            Start writing
        </button>
           </span>
        </p>
       
      </div>

      <div className="hidden md:flex w-2/5 " >
        <img src={mobile} alt="mobiles" />
      </div>

    </div>

    <div className="flex flex-col md:flex-row bg-customPeach border-b-2 border-black">
        <div className="w-1/1 md:w-1/2 border-b-2 border-black  md:border-none  p-5" >
            <p className="text-4xl p-4" style={{fontFamily:'charter'}} >Start a blog.</p>
            <p className="pl-5 text-pretty">Create a blog for free to have a personalized home for your writing. Brand your space and share you writing with readers on any device. </p>
        </div>
        
        <div className="w-1/1 md:w-1/2 md:border-l-2 md:border-black p-5">
        <p className="text-4xl p-4" style={{fontFamily:'charter'}} >Start a publication.</p>
        <p className="pl-5 text-pretty">Collaborate with others or publish under a brand name. Use our sory submission system and expensive customisation options.</p>
        </div>
        
    </div>

    </>
  );
};

export default Inspire;
