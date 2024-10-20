// LayoultBG.tsx
import React, { ReactNode } from 'react';
import './style.css';

interface LayoultBGProps {
  children: ReactNode;
}

const LayoultBG: React.FC<LayoultBGProps> = ({ children }) => {
  return (
    <div className="container-layoult-bg">
      {children}
    </div>
  );
};

export default LayoultBG;
