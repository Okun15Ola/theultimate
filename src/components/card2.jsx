const Card2 =(props)=>{
 return(
     <div className="w-full sm:w-1/3 lg:w1/3 px-4 py-2">
<div className="bg-neutral rounded-md p-6 text-md border border-neutral-500 font-thin">
<p>⭐⭐⭐⭐⭐</p>
    <p>{props.text}</p>
    <div className="flex mt-8 item-start">
       
        <img src={props.sc} alt="X" className="w-12 h-12 mr-2 rounded-full border-neutral-300"/>
        <h4 className="px-1">{props.name}</h4>
        <span className="text-sm font-normal italic py-1 text-neutral-600">{props.company}</span>
    </div>
</div>
</div>
);
}
export default Card2;