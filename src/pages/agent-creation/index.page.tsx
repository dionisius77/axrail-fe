import ContentContainer from "components/container";
import { FormEvent, useState } from "react";
import { Breadcrumbs, Button, Checkbox } from "react-daisyui";
import { IoCheckmark, IoClose, IoRemove } from "react-icons/io5";
import StepperSection from "./sections/stepper.section";
import ChooseServiceSection from "./sections/choose-service.section";
import ModifyContentSection from "./sections/modify-content.section";
import AgentRolePromptSection from "./sections/agent-role-prompt/index.section";

const AgentCreationPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="px-8">
      <Breadcrumbs className="text-lg">
        <Breadcrumbs.Item className="text-gray-500" href="#">Bot Agents</Breadcrumbs.Item>
        <Breadcrumbs.Item className="text-gray-500" href="#">Agents</Breadcrumbs.Item>
        <Breadcrumbs.Item className="text-black" href="/agent-creation">Agent Creation</Breadcrumbs.Item>
      </Breadcrumbs>
      <ContentContainer>
        <div className="flex flex-row justify-between items-center py-4 px-2">
          <h1 className="font-bold text-3xl">
            Agent Setup
          </h1>
          <div className="flex flex-row gap-3">
            <Button
              type="button"
              variant="outline"
              className="bg-white rounded-xl border-gray-300"
              startIcon={<IoClose className="w-6 h-6" />}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-slate-800 hover:bg-slate-500 rounded-xl text-white"
              startIcon={<IoCheckmark className="w-6 h-6 text-white" />}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </ContentContainer>
      <div className="grid grid-cols-6 gap-4 mt-6 items-start">
        <StepperSection activeStep={activeStep} onStepChange={(step) => { setActiveStep(step) }} />
        <div className="col-span-5">
          {activeStep === 0 && <ChooseServiceSection />}
          {activeStep === 1 && <ModifyContentSection />}
          {activeStep === 2 && <AgentRolePromptSection />}
        </div>
      </div>
    </form>
  )
}

export default AgentCreationPage;