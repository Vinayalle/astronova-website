import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import  Banner  from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Whychoose from "@/components/Whychoose";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (

    <div className="w-full md:p-10 sm:mx-5   ">
    {/* <Header/> */}
     
      <Banner/>
      <About />
      <Services/>
      <Whychoose/>
      <div className="flex justify-center items-center">
      <div className="w-full sm:w-full justify-center flex items-center">
       <ContactForm/>
      </div>
      </div>
     
       {/* <Footer/> */}
     
    </div>
  );
}
