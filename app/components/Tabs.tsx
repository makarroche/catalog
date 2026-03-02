"use client";

import { tabsNames } from "@/app/utils/constants";

type TabsProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="tabs">
      {tabsNames.map((name, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`tabs__btn ${activeTab === index ? "tabs__btn--active" : ""}`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
