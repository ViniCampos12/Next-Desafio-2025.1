import CardMVV from "./cardMvv";

export default function MVV(){
    return(
        <section className="pt-5 px-2 pb-4 flex flex-wrap justify-center items-center gap-20  bg-white-vs md:pb-10 md:flex-row md:gap-24 lg:py-20">
            <CardMVV title="Missão" description="Nossa missão é oferecer sapatos de alta qualidade, combinando conforto e estilo para atender às necessidades de cada cliente. Queremos proporcionar a melhor experiência em cada passo, sempre com foco no bem-estar."/>
            <CardMVV title="Visão" description="Ser reconhecida como a principal marca de calçados, inovando constantemente e oferecendo produtos que aliam durabilidade e design. Nosso objetivo é transformar a maneira como as pessoas veem e usam sapatos."/>
            <CardMVV title="Valores" description="Acreditamos em qualidade, conforto e estilo, sempre com compromisso com a sustentabilidade. A satisfação do cliente é o nosso maior valor, e trabalhamos para oferecer produtos e serviços que superem suas expectativas."/>
        </section>
    )
}
