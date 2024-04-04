
const Hero = () => {
  return (
    <div className="flex bg-customOrange">
       <div className="flex flex-col justify-start md:w-3/5 h-4/5 border-r-2 border-black pt-16 pl-8 w-full">
          <p className="tracking-widest text-white text-xs" >START A BLOG FOR FREE</p>
          <p className="text-5xl lg:text-8xl font-semibold tracking-tight pb-4 lg:pb-12" style={{fontFamily:'charter'}} >Publish,grow,<br />and earn, all in <br /> one place.</p>
          <p className="pb-12 inline-flex flex-col text-pretty">If you have a story to tell, knowledge to share, or a perspective <br className="hidden md:block" /> to offer &mdash; welcome home. Sign up for free so your writingcan thrive in <br /> a network supported by  millions of readers &mdash; not ads. 
           <span>
           <button className="px-5 py-1 mt-8 ml-5 rounded-full
        bg-white text-black" >
            Start writing
        </button>
           </span>
           </p>
       </div>
       <div className="hidden md:flex justify-center items-center w-2/5 h-4/5">hello</div>
    </div>
  )
}

export default Hero
