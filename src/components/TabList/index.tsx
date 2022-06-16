import { useState } from 'react';

interface TabListProps {
  labelTabs: string[];
  children: React.ReactNode[];
}

export const TabList: React.FC<TabListProps> = ({ labelTabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {labelTabs.map((label, index) => (
        <button onClick={() => setActiveTab(index)}>{label}</button>
      ))}

      <div>
        {labelTabs.find((_, index) => index === activeTab)} {activeTab}
      </div>
    </div>
  );
};
