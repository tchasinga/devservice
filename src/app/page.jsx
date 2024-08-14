import Image from "next/image";
import Keeper from "./Components/Keeper";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Servicetypeof from '../app/Components/Ui/Servicetypeof'


export default function Home() {
  return (
    <>

      {/* thsi section is finished , I'll just need to add the responsive...*/}
      <Keeper />

      {/* Add about us section  task for TRACY MIRANJA...*/}
      <div>
        <About />
      </div>
      {/* Add type of services task for  TCHASINGA BALOLEBWAMI (for me)*/}

      {/* All the footer section TRACY MIRANJA...*/}
      <div>
        <Team />
      </div>
      <div>
        <Footer />
      </div>
    {/* thsi section is finished , I'll just need to add the responsive...*/}
    <Keeper/>

    {/* Add about us section  task for TRACY MIRANJA...*/}


    {/* Add type of services task for  TCHASINGA BALOLEBWAMI (for me)*/}
    
    <Servicetypeof/>
    
    {/* All the footer section TRACY MIRANJA...*/}


    </>
  );
}
