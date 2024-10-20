import "./style.css";
import joseAugustoPhoto from "../../assets/img/jose-augusto.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faLaravel, faReact, faVuejs, faTrello } from '@fortawesome/free-brands-svg-icons';
import { faClipboardCheck, faDatabase, faFileAlt } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  return (
    <div className="container-home">
      <div className="content">
        <h1>Bem-vindo ao meu portfólio! 💻 👨‍💻</h1>
        <p>
          Sou José Augusto, desenvolvedor full-stack com experiência em criação
          de sistemas e plataformas web com sonho de ser Líder de engenheiros de
          softwares. Aqui, você encontrará projetos que demonstram minhas
          habilidades em tecnologias como Spring Boot, React, Vue e Laravel,SQL
          e habilidades de liderança de projetos. Cada projeto reflete meu
          compromisso com boas práticas de desenvolvimento e inovação. Explore e
          sinta-se à vontade para entrar em contato!
        </p>

        <button>
          <span>Vamos lá</span>
        </button>
      </div>
      <div className="img-content">
        <img src={joseAugustoPhoto} alt="Foto José Augusto" />
      </div>
      <div className="worked-content">
        <h1>Tecnologias de trabalho</h1>
        <div className="worked-items">
        <h3>
        <FontAwesomeIcon icon={faJava} className="icon" /> Java - Spring Boot
      </h3>
      <h3>
        <FontAwesomeIcon icon={faLaravel} className="icon" /> PHP - Laravel
      </h3>
      <h3>
        <FontAwesomeIcon icon={faReact} className="icon" /> React
      </h3>
      <h3>
        <FontAwesomeIcon icon={faVuejs} className="icon" /> Vue.JS
      </h3>
      <h3>
        <FontAwesomeIcon icon={faDatabase} className="icon" /> SQL
      </h3>
      <h3>
        <FontAwesomeIcon icon={faClipboardCheck} className="icon" /> ClickUp
      </h3>
      <h3>
        <FontAwesomeIcon icon={faTrello} className="icon" /> Trello
      </h3>
      <h3>
        <FontAwesomeIcon icon={faFileAlt} className="icon" /> BPMN
      </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
