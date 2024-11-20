import { testim } from "./index";
import Card2 from "./card2";
import mage3 from '../mg/Unknown_person.jpg';

const Testimony = ()=>{
    return(
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my:20">
                What People Are Saying
            </h2>
        <div className="flex flex-start justify-center flex-wrap">
        <Card2 sc={mage3} name="Grace.O" company="SON UCH" text="I was completely lost with my research until. found this service.Ther guidance and corrections made everything so much easier.Highly recommended"/>
        <Card2 sc={mage3} name="Micheal.A" company="Lautech" text="Professional and reliablethey helped me craft a perfect research proposal and provided great insghts for my discussion section.Than you so much!"/>
        <Card2 sc={mage3} name="Fatima.S" company="Unilag" text="The team was incredbly supportive throughout my research process.Thier corrections and ethical approval gudance were top notch"/>
        </div>
        </div>
    )
}
export default Testimony;