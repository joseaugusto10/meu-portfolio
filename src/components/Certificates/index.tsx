import React, { useEffect, useState } from 'react';
import './style.css';
import certificationsData from '../../jsons/certifications.json';

interface Certificate {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    // Carregando os dados diretamente da importação
    setCertificates(certificationsData);
  }, []);

  return (
    <div className="certificates-container">
      {certificates.map((certificate, index) => (
        <a href={certificate.link} key={index} target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="card-container">
            <img src={certificate.image} alt={certificate.title} className="card-image" />
            <div className="card-content">
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Certificates;
