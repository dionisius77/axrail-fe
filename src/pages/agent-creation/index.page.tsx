import ContentContainer from "components/container";
import { FormEvent, useState } from "react";
import { Breadcrumbs, Button, Checkbox } from "react-daisyui";
import { IoCheckmark, IoClose, IoRemove } from "react-icons/io5";
import StepperSection from "./sections/stepper.section";
import ChooseServiceSection from "./sections/choose-service.section";
import ModifyContentSection from "./sections/modify-content.section";
import AgentRolePromptSection from "./sections/agent-role-prompt/index.section";
import useAgentCreation from "hooks/useAgentCreation";

const AgentCreationPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { register, errors, control, watch, reset, handleSave, setValue } = useAgentCreation();

  return (
    <form onSubmit={handleSave} className="xl:px-8 relative">
      <Breadcrumbs className="text-lg">
        <Breadcrumbs.Item className="text-gray-500" href="#">Bot Agents</Breadcrumbs.Item>
        <Breadcrumbs.Item className="text-gray-500" href="#">Agents</Breadcrumbs.Item>
        <Breadcrumbs.Item className="text-black" href="/agent-creation">Agent Creation</Breadcrumbs.Item>
      </Breadcrumbs>
      <div className="sticky max-md:top-0 z-50">
        <ContentContainer>
          <div className="flex flex-row justify-between items-center py-4 px-2 flex-wrap gap-5">
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
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-6 gap-4 mt-6 items-start">
        <div className="lg:col-span-2 xl:col-span-1">
          <StepperSection activeStep={activeStep} onStepChange={(step) => { setActiveStep(step) }} />
        </div>
        <div className="lg:col-span-5">
          {activeStep === 0 && <ChooseServiceSection />}
          {activeStep === 1 && <ModifyContentSection />}
          {activeStep === 2 &&
            <AgentRolePromptSection
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              reset={reset}
              setValue={setValue}
            />
          }
        </div>
      </div>
    </form>
  )
}

export default AgentCreationPage;