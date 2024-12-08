import Best from "./Best/page";
import DontMiss from "./Dontmiss/page";
import Essentials from "./Essentials/page";
import Featured from "./Featured/page";
import Gear from "./Gearup/page";
import Hero from "./HeroSection/page";
import List from "./List/page";

export default function Home() {
  return (
   <div>
  <Hero/>
  <Best/>
  <Featured/>
  <Gear/>
  <DontMiss/>
  <Essentials/>
  <List/>
   </div>
  );
}
