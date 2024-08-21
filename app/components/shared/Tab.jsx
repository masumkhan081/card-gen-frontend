"use client";
import React, { useState } from 'react';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <div className="w-full h-full">
            <div className="flex gap-5">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`p-2 text-sm font-medium ${
                            activeTab === tab.name
                                && 'bg-selection-color border-b-2 border-selection-color text-white'
                                
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            
            <div className="pt-8">
                {tabs.find((tab) => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tab;
