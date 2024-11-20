import {features} from "./index.jsx"
import Card from "./card"
const Featuresec = ()=>{
    return(
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Feature
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    What We Do
                </h2>
            </div>
            
     <div className="flex flex-wrap mt-10 lg:mt-20">
            <div className="flex flex-wrap">
            <Card logo="✔" text="Research Proposal" desc="We craft clear and concise research proposals to set your work on the right part" />
            <Card logo="✔" text="Data Analysis & Interpretaton" desc="We analyse your data intepret results and provde impactful discussion" />
            <Card logo="✔" text="CITI Program Certificate" desc="Get guidance on research ethics and securing necessary certfications" />
            <Card logo="✔" text="Ethical Approval Guidelines" desc="Comprehensive support to refine and perfect your research and projects" />
            <Card logo="✔" text="Complete Research Guidelines" desc="From start to finish we provide all the support you need for your research" />
            <Card logo="✔" text="Discussion and Corrections" desc="We offer detailed reviews and corrections to refine your work and project" />
            </div>
        </div>
        </div>
    )
}
export default Featuresec;