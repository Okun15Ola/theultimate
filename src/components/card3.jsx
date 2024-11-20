const Card3 =(props)=>{
    return(
        <div className="w-full sm:w-1/3 lg:w1/3 px-4 py-2">
   <div className="bg-neutral rounded-md p-6 text-md border border-neutral-500 font-thin flex items-center justify-center">
       <div className="flex mt-0 items-center justify-center">
           <img src={props.sc} alt="X" className="w-[100px] h-[100px] mr-2 rounded-full  border-neutral-300"/>
           <div className="flex flex-col mt-0 items-start justify-center">
           <h4 className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent text-2xl bg-clip-text text-wrap">{props.name}</h4>
           <span className="text-sm font-normal italic py-1 text-neutral-600">{props.role}</span>
           </div>
       </div>
   </div>
   </div>
   );
   }
   export default Card3;