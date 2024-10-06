import ContentContainer from "components/container";
import { Card, Dropdown, Tabs, Textarea } from "react-daisyui";
import { IoInformationCircleOutline } from "react-icons/io5";
import AgentRoleTabsSection from "./tabs.section";
import { useState } from "react";

const AgentRolePromptSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <ContentContainer>
        <div className="flex flex-row gap-2">
          <h2 className="font-semibold text-xl">Agent Role Prompt</h2>
          <Dropdown>
            <Dropdown.Toggle button={false} className="btn btn-circle btn-ghost btn-xs text-info">
              <IoInformationCircleOutline className="text-gray-500 w-6 h-6" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">
              <Card.Body className="bg-white">
                <Card.Title tag={'h2'}>More info?</Card.Title>
                <p>Here is a description!</p>
              </Card.Body>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">PROMPT *</label>
          <Textarea size="lg" className="rounded-lg bg-white p-2" />
        </div>
      </ContentContainer>
      <div className="my-6">
        <AgentRoleTabsSection activeTab={activeTab} setActiveTab={(tab) => setActiveTab(tab)} />
      </div>
    </>
  )
}

export default AgentRolePromptSection;