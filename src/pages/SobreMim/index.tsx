import "./style.css";
import joseAboutMePhoto from "../../assets/img/jose-augusto-sobremim.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={joseAboutMePhoto} alt="Foto de José" className="user-photo" />

        <div className="text-content">
          <p className="about-text">
            Sou um Desenvolvedor de Software com uma sólida base em
            administração e tecnologia, atualmente cursando Engenharia de
            Software e realizando uma pós-graduação em Gestão da Tecnologia da
            Informação. Minha formação inclui uma Graduação em Administração,
            que me fornece uma visão estratégica essencial para alinhar a
            tecnologia aos objetivos de negócios.
            <br />
            <br />
            Atualmente, trabalho na Girolando, onde aplico minhas habilidades
            para desenvolver soluções inovadoras que melhoram a eficiência e a
            produtividade. Com experiência em empresas como Alta Genetics do
            Brasil e ABS-Brasil nos setores administrativos e dados, desenvolvi
            um forte entendimento em áreas como SQL, modelagem de sistemas e
            desenvolvimento de software em linguagens como Java, PHP e
            Javascript, incluindo frameworks como Spring Boot, Laravel, Vue.js.
            <br />
            <br />
            Sou apaixonado por transformar desafios complexos em soluções
            tecnológicas eficientes, sempre buscando integrar o desenvolvimento
            técnico com uma gestão eficaz. Além disso, tenho o sonho de crescer
            ainda mais na área de tecnologia, com habilidades sólidas em gestão
            de projetos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
