const Card =(props)=>{
 return(
<div  className="w-full sm:w-1/2 lg:w-1/3">
    <div className="flex">
        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
            {props.logo}
        </div>
        <div>
           <h5 className="mt-1 mb-6 text-xl">{props.text}</h5> 
           <p className="text-md p-1 mb-20 text-neutral-500">{props.desc}</p>
        </div>
    </div>
</div>
)
}
export default Card;