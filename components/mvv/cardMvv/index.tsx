type CardMVVProps = {
    title: string;
    description: string;
}

export default function CardMVV({title,description}: CardMVVProps){
    return(
        <div className="bg-gradient-to-b from-primary to-blue-dark-vs w-36 text-white-vs p-3 flex flex-col justify-center items-center gap-2 rounded-xl lg:w-72">
            <h3 className="text-sm lg:text-4xl">{title}</h3>
            <p className="text-[10px]/4 font-ovo text-center lg:text-xl">{description}</p>
        </div>
    )
}