import { useState } from "react";

interface TabProps {
  setActiveTab: (tab: number) => void
  activeTab: number;
}
const AgentRoleTabsSection = ({ setActiveTab, activeTab }: TabProps) => {

  return (
    <div className="w-full grid grid-cols-4 bg-gray-100 rounded-lg p-1 gap-4">
      <button
        className={`${activeTab === 0 ? "bg-white shadow-lg font-semibold" : ""} w-full p-3 text-sm text-center rounded-lg`}
        type="button"
        onClick={() => setActiveTab(0)}
      >
        Welcome Message
      </button>
      <button
        className={`${activeTab === 1 ? "bg-white shadow-lg font-semibold" : ""} w-full p-3 text-sm text-center rounded-lg`}
        type="button"
        onClick={() => setActiveTab(1)}
      >
        Record Not Found
      </button>
      <button
        className={`${activeTab === 2 ? "bg-white shadow-lg font-semibold" : ""} w-full p-3 text-sm text-center rounded-lg`}
        type="button"
        onClick={() => setActiveTab(2)}
      >
        FAQ Enquiries
      </button>
      <button
        className={`${activeTab === 3 ? "bg-white shadow-lg font-semibold" : ""} w-full p-3 text-sm text-center rounded-lg`}
        type="button"
        onClick={() => setActiveTab(3)}
      >
        Product Enquiries
      </button>
    </div>
  )
}

export default AgentRoleTabsSection;