import CardMVV from "./cardMvv";

export default function MVV(){
    return(
        <section className="pt-5 px-2 pb-4 flex flex-col justify-center items-center gap-4 w-full  bg-white-vs md:pb-10 md:flex-row md:gap-24 lg:py-20">
            <CardMVV title="Missão" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officia excepturi in dolore, consectetur cumque saepe minus libero aliquid nihil ab, nostrum explicabo alias accusantium, unde voluptatem soluta illum quo."/>
            <CardMVV title="Visão" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officia excepturi in dolore, consectetur cumque saepe minus libero aliquid nihil ab, nostrum explicabo alias accusantium, unde voluptatem soluta illum quo."/>
            <CardMVV title="Valores" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officia excepturi in dolore, consectetur cumque saepe minus libero aliquid nihil ab, nostrum explicabo alias accusantium, unde voluptatem soluta illum quo."/>
        </section>
    )
}
