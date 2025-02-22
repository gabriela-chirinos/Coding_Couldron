import Container from "./Container";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Feature from "./Feature";
import HeaderElement from "./HeaderElement";
import FeatureSection from "./FeatureSection";
import ChartElement from "./ChartElement";
import FaqElemenent from "./Faq";
import FooterElement from "./Footer";
import ContactForm from "./ContactForm";



export default function App() {
  

  return (
   <>
      <Navbar />
      <HeaderElement/>
       <Hero />
       <Feature />
       <FeatureSection />
       <ChartElement />
       <FaqElemenent />
       <ContactForm />
       <FooterElement />
       
     
   </>
       
   
  )
}

