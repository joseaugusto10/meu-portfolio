// LayoultBG.tsx
import React, { ReactNode } from 'react';
import './style.css';

interface LayoultBGProps {
  children: ReactNode;
}

const SubLayoultBG: React.FC<LayoultBGProps> = ({ children }) => {
  return (
    <div className="container-layoult">
      {children}
    </div>
  );
};

export default SubLayoultBG;
