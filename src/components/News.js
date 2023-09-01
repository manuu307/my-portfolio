import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "Acabamos de sobrevivir un ataque DDoS!",
    img: "img/news/1.jpg",
    tag: "Ataques",
    des: [
      "Mi amigo Maxi y yo emprendimos la aventura de crear nuestro propio servidor de MuOnline cuando teníamos apenas 15 años.",

      "Habíamos tenido un éxito impresionante con nuestro primer servidor, en una época en la que los cibercafés estaban llenos de jugadores ávidos de entretenimiento virtual.",

      "Nuestro servidor no solo era un lugar para jugar, sino una comunidad donde los jugadores podían adquirir sets y armas personalizadas, brindándoles una experiencia de juego única.",

      "Nuestra configuración era bastante modesta, con un PC que ejecutaba Windows XP (¡sí, en serio!), 4 GB de RAM y un procesador cuyos detalles ya se han desvanecido en la memoria.",

      "Pero, para nosotros, era suficiente.",

      "Después de un tiempo, decidimos lanzar otro servidor solo por diversión, para revivir viejas emociones y crear nuevos recuerdos.",

      "En un abrir y cerrar de ojos, solo dos semanas después de su lanzamiento, nuestro servidor estaba atrayendo a jugadores de otros servidores como abejas a la miel.",

      "Nuestro enfoque en cumplir nuestras promesas y ofrecer características que otros no podían mantener atrajo a una gran cantidad de jugadores insatisfechos con sus actuales opciones.",

      "Y ahí comenzaron los problemas.",

      "En medio de nuestro éxito emergente, nuestros competidores no estaban dispuestos a ceder su cuota de mercado sin pelear.",

      "Fue entonces cuando enfrentamos un ataque DDoS (Ataque de Denegación de Servicio Distribuido) que amenazó con derribar nuestro servidor y revertir nuestro arduo trabajo.",

      "Los cibercriminales detrás de este ataque no querían que triunfáramos, querían sabotear nuestro éxito y recuperar a sus jugadores perdidos.",

      "Pero, ¿cómo afrontamos este desafío?  Afortunadamente, habíamos anticipado este tipo de situación y habíamos fortificado nuestras defensas con la implementación de un firewall potenciado por una red de distribución de contenidos (CDN).",

      "El firewall, en conjunto con el CDN, demostró ser una fortaleza infranqueable.",

      "Gracias a la distribución geográfica de los servidores CDN, pudimos absorber gran parte del tráfico malicioso que los atacantes lanzaban hacia nosotros.",

      "Las solicitudes nocivas eran filtradas y neutralizadas antes de que pudieran alcanzar nuestro servidor principal.",

      "Un aspecto sorprendente de este episodio fue el descubrimiento de que el ataque DDoS había sido adquirido en la dark web por los perpetradores.",

      "Este oscuro mercado del ciberespacio había proporcionado a los atacantes un ejército virtual con la intención de derribar nuestro servidor.",

      "Sin embargo, su confianza en la eficacia del ataque se desvaneció rápidamente al darse cuenta de que nuestro sistema estaba más preparado de lo que habían anticipado.",
    ],
  },
  {
    title: "Concientizando a la familia",
    img: "img/news/2.jpg",
    tag: "Estafas cibernéticas",
    des: [
      "En una de esas cenas familiares que todos tenemos, surgió la discusión sobre el crimen cibernético. Fue entonces cuando todos los ojos se posaron en mí, el autodenominado `Hacker` de la familia. La curiosidad brillaba en sus miradas y pidieron una explicación sobre cómo los cibercriminales se apoderan de datos y los utilizan para llevar a cabo sus estafas.",

      "Tuve la suerte de haber llevado mi laptop conmigo, una compañera inseparable. Repleta de herramientas `divertidas` para momentos como estos, estaba preparado para demostrar y educar. Les ofrecí una breve presentación sobre diversos ataques cibernéticos, desde el phishing hasta el MITM (Ataque de Hombre en el Medio) y XSS (Cross-Site Scripting), todos relacionados con el robo de datos, el secuestro de sesiones y la manipulación de comunicaciones.",

      "Para dar un ejemplo práctico, envié a mi cuñada un enlace de phishing simulando un inicio de sesión de Facebook, diseñado para capturar sus credenciales. Aproveché la oportunidad para explicar la importancia de verificar cuidadosamente los dominios antes de ingresar información sensible. El arte de la concienciación cibernética estaba en marcha en la mesa familiar, y espero haber sembrado semillas de precaución digital en cada uno de ellos.",
    ],
  },
  {
    title: "Amazon Killer",
    img: "img/news/3.jpg",
    tag: "Botnet",
    des: [
      "Recientemente, recibimos una solicitud de pentesting (pruebas de penetración) de parte de un cliente confidencial en la industria deportiva de Uruguay. Sin mencionar nombres, puedo decir que esta empresa tiene una amplia base de socios y quería asegurarse de que su infraestructura en la nube, alojada en Amazon, fuera segura. Preparé mi arsenal de habilidades y herramientas para poner a prueba sus defensas.",

      "Uno de los desafíos era evaluar la capacidad de su sistema para resistir cargas durante un evento crucial. Decidí crear un script en Python que generara una cantidad masiva de tráfico, simulando la actividad de miles de socios interactuando con la plataforma. Además, implementé ataques como SlowLoris y manipulación de solicitudes para poner a prueba los límites de sus servidores.",

      "Incorporé un toque uruguayo al aprovechar Google Dorking para recopilar datos de usuarios locales y utilizarlos en ataques de fuerza bruta. Mi script incrementaba la intensidad de los ataques al encontrar coincidencias exitosas. Para orquestar todo esto, empleé una red diversificada de computadoras, algunas de la empresa, otras personales, con direcciones IP variadas a través de VPN y proxies. Utilicé un servidor Flask público con Ngrok para recibir los registros de las máquinas atacantes.",

      "En menos de diez minutos, los resultados eran evidentes: más de 100,000 solicitudes habían abrumado la instancia y las respuestas se habían vuelto errores, adornados con elaborados rastreos de pila que proporcionaban información valiosa. Nuestro cliente recibió un informe detallado, lleno de recomendaciones para fortalecer sus defensas y garantizar la seguridad de sus operaciones.",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };

  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">News</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/4-3.jpg" alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
