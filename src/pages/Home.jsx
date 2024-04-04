import Features from "@/components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Inspire from "../components/Inspire"
import Navbar from "../components/Navbar"
import Network from "../components/Network"
import Prefooter from "../components/Prefooter"
import Qna from "../components/Qna"


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Network/>
      <Inspire/>
      <Features/>
      <Prefooter/>
      <Qna/>
      <Footer/>
    </>
  )
}

export default Home
