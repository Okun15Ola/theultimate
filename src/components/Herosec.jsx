import mage from '../mg/img1.jpg';
import mage2 from '../mg/image2.jpg';

const Herosec = () =>
    {

    const phoneNumber = '09023931025';
    
    const message ="Hello, I'm interested in your services"

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return(
<div className="flex flex-col items-center mt-0 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Empowering Academic Excellence: 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}Research Proposal & Care Study
            </span>
    </h1>
    <p className="mt-3 text-lg text-center mb-1 text-neutral-500 max-w-4xl">
        Our expert team specializes in research proposals and care studies, offering top-notch support to help
        you excel academcally. </p>
    <div className="flex justify-center mx-10">
        <a href={whatsappLink} className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 my-1 rounded-md">
        Get Started
        </a>
    </div>
    <div className="flex mt-10 justify-center">
        <img src={mage} className="rounded-lg w-1/2 border border-orange-700 shadow-orange=400 mx-2 my-4"/>
        <img src={mage2} className="rounded-lg w-1/2 border  border-orange-700 shadow-orange=400 mx-2 my-4"/>
    </div>
</div>
    );
}
export default Herosec;