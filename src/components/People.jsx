import { testim } from "./index";
import Card3 from "./card3";
import mage3 from '../mg/prof.jpg';
import mage31 from '../mg/prof2.jpg';
import mage33 from '../mg/Unknown_person.jpg';

const Testimony = ()=>{
    return(
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my:20">
               Meet Our Team
            </h2>
        <div className="flex flex-start justify-center flex-wrap">
        <Card3 name="Okunola Olubanjo" role='Founder' sc={mage3}/>
        <Card3 name="Adedokun Marvellous" role='Founder' sc={mage31}/>
        <Card3 name="Olubiyi David" role='Front End Developer' sc={mage33}/>
        </div>
        </div>
    )
}
export default Testimony;