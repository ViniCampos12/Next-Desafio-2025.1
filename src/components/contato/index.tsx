import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contato() {
  return (
    <div className="pt-5 pb-5 flex flex-col items-center space-y-4 px-3 md:space-y-10 w-full md:pb-10 md:px-14 lg:px-20 lg:pt-6 bg-white-vs">
      <h1 className="flex justify-center items-center text-2xl lg:text-3xl">Entre em contato</h1>

      <div className="flex flex-col items-center w-full md:grid md:grid-flow-col md:grid-cols-6 md:gap-5 lg:gap-10 ">
        <div className="flex justify-center items-center w-full mb-6 md:mb-0 bg-gray-vs bg-opacity-30 p-4 rounded-xl md:col-span-3 md:h-full lg:w-[600px] lg:px-10">
          <form className="w-full space-y-4 ">  
            <div className="flex flex-col space-y-2">
              <label className="text-black-vs lg:text-xl">Nome:</label>
              <input type="text" className="border p-1 rounded-xl w-full lg:w-11/12" />
              <label className="text-black-vs lg:text-xl">E-mail:</label>
              <input type="text" className="border p-1 rounded-xl w-full lg:w-11/12" />
              <label className="text-black-vs lg:text-xl">Assunto:</label>
              <input type="text" className="border p-1 rounded-xl w-full lg:w-11/12" />
              
              <label className="text-black-vs lg:text-xl">Mensagem:</label>
              <textarea name="Mensagem" className="border p-1 rounded-xl lg:w-11/12 resize-none" ></textarea>
            </div>
            <div className="flex justify-center">
                <button className="bg-primary text-white-vs text-sm p-2 px-4 rounded-2xl lg:text-xl lg:px-4 lg:py-3 hover:bg-[#140a85] transition-all duration-300 " type="submit">
                        Enviar
                </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-vs bg-opacity-30 w-full p-4 rounded-lg space-y-4 md:col-span-3  md:h-full lg:w-[600px] lg:px-10">
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.0971337559777!2d-43.37452402494651!3d-21.776501380066566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b9e2bea807b%3A0x7ac85ca76e3d3d1d!2sCode%20Empresa%20Jr.%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1741040209186!5m2!1spt-BR!2sbr"
              width={600}
              height={450}
              className="w-full h-60 rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center text-sm lg:text-xl text-black-vs md:flex md:items-center md:gap-12">
            <h3>Nossas redes sociais</h3>
            <div className="flex flex-col items-center md:items-start space-y-2 mt-2">
              <p className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faInstagram} className="text-blue-dark-vs" />
                <span>/Vinishoes</span>
              </p>
              <p className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faWhatsapp} className="text-blue-dark-vs" />
                <span>(32) 4002-8922</span>
              </p>
              <p className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-dark-vs" />
                <span>/Vinishoes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}