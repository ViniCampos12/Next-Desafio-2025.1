type CardMVVProps = {
    title: string;
    description: string;
}

export default function CardMVV({title,description}: CardMVVProps){
    return(
        <div className="bg-gradient-to-b from-primary to-blue-dark-vs w-36 h-48 md:h-52 lg:h-80 text-white-vs p-3 flex flex-col justify-between items-center rounded-xl lg:w-72">
        <h3 className="text-sm lg:text-4xl">{title}</h3>
        <p className="text-[10px]/4 font-ovo text-center lg:text-xl flex-1 ">{description}</p>
    </div>
    
    )
}