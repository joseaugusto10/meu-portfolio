import Certificates from "../../components/Certificates";
import "./style.css";

const Curriculo = () => {
  return (
    <div className="curriculum-container">
      <div className="text-content">
        <h1>Resumo</h1>
        <p>
          Sou um profissional com uma sólida base em administração e tecnologia
          da informação, atualmente cursando Engenharia de Software e realizando
          uma pós-graduação em Gestão da Tecnologia da Informação. Minha
          formação inclui uma Graduação em Administração, que me fornece uma
          visão estratégica essencial para alinhar a tecnologia aos objetivos de
          negócios.
        </p>

        <h2>FORMAÇÃO ACADÊMICA</h2>
        <ul>
          <li>
            Bacharel em Administração - Concluído, Centro Universitário
            UNIFACTHUS
          </li>
          <li>
            Bacharel em Engenharia de Software - Andamento, Centro Universitário
            Internacional Uninter
          </li>
          <li>
            Pós-graduação em Gestão de TI - Andamento, Centro Universitário
            Internacional Uninter
          </li>
        </ul>

        <h2>EXPERIÊNCIA PROFISSIONAL</h2>
        <ul>
          <li>
            <strong>Analista de Desenvolvimento de Sistema</strong>, Associação
            Brasileira Dos Criadores De Girolando
            <br /> (02/2024 - Atual) - Desenvolvimento de sistemas com Java, PHP
            e Vue.js, atuando em todas as etapas do ciclo de desenvolvimento,
            com habilidades avançadas em SQL.
          </li>
          <li>
            <strong>Assistente Comercial e Dados</strong>, Alta Genetics Do
            Brasil
            <br /> (06/2022 - 12/2023) - Análises de dados e otimização de
            estratégias de vendas, usando Power BI, Excel, VBA.
          </li>
          <li>
            <strong>Estagiário de Registro e Comunicação</strong>, Abs Brasil -
            Pecplan
            <br /> (03/2021 - 05/2022) - Registro e comunicação de gados
            bovinos.
          </li>
          <li>
            <strong>Analista Financeiro</strong>, Sistema Apoio De Ensino
            <br /> (06/2018 - 06/2020) - Controle financeiro, fluxo de caixa,
            relatórios financeiros e gestão de contratos.
          </li>
          <li>
            <strong>Aprendiz Financeiro</strong>, Cervejaria Ambev
            <br /> (03/2017 - 06/2018) - Rotinas financeiras, conciliação
            bancária, controle de pagamentos.
          </li>
        </ul>
      </div>
      <div className="certificate-container">
        <Certificates />
      </div>
    </div>
  );
};

export default Curriculo;
