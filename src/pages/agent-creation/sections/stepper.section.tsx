import { useState } from "react";
import { Checkbox } from "react-daisyui";
import { IoAdd, IoRemove } from "react-icons/io5";

interface StepProps {
  onStepChange: (step: number) => void;
  activeStep: number;
}

const StepperSection = ({ onStepChange, activeStep }: StepProps) => {
  const [show, setShow] = useState(true);
  return (
    <div className="w-full border border-gray-200 rounded-xl">
      <div className="flex flex-row justify-between items-center px-2.5 py-3 bg-gray-100 rounded-t-xl">
        <h3 className="text-sm font-semibold text-gray-500">Setup Progress</h3>
        <div onClick={() => setShow(prev => !prev)} className="cursor-pointer">
          {show ?
            <IoRemove />
            :
            <IoAdd />
          }
        </div>
      </div>
      {show &&
        <div className="p-2.5">
          <div className="grid grid-cols-6 gap-2 items-start justify-stretch">
            <div className="flex flex-col items-center justify-center h-full">
              <Checkbox className="rounded-lg" id="step0" checked={activeStep >= 0} onChange={() => { onStepChange(0) }} />
              <div className="bg-gray-300 h-full w-0.5 flex-grow flex-1 col-span-5" />
            </div>
            <label htmlFor="step0" className="col-span-5">
              <p className="underline text-blue-600 text-xs">STEP 1:</p>
              <p className="text-xs text-gray-500">Choose the service type and decide on the communication platform for interaction.</p>
              <div className="mt-2.5 mb-5">
                <h4 className="text-gray-500 text-xs font-semibold">
                  GUIDE ABOUT:
                </h4>
                <div className="flex flex-col gap-1">
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Bot Agent Service Type</p>
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Communication Platform</p>
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Language Model</p>
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Upload Document</p>
                </div>
              </div>
            </label>
          </div>
          <div className="grid grid-cols-6 gap-2 items-start justify-stretch">
            <div className="flex flex-col items-center justify-center h-full">
              <Checkbox className="rounded-lg" id="step1" checked={activeStep >= 1 } onChange={() => { onStepChange(1) }} />
              <div className="bg-gray-300 h-full w-0.5 flex-grow flex-1 col-span-5" />
            </div>
            <label htmlFor="step1" className="col-span-5">
              <p className="underline text-blue-600 text-xs">STEP 2:</p>
              <p className="text-xs text-gray-500">Modify the contents of the documents and confert them into a suitable format using a prompt.</p>
              <div className="mt-2.5 mb-5">
                <h4 className="text-gray-500 text-xs font-semibold">
                  GUIDE ABOUT:
                </h4>
                <div className="flex flex-col gap-1">
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Content Modification</p>
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Tuning and Formatting Documents with Prompts</p>
                </div>
              </div>
            </label>
          </div>
          <div className="grid grid-cols-6 gap-2 items-start justify-stretch">
            <div className="flex flex-col items-center justify-start h-full">
              <Checkbox className="rounded-lg" id="step2" checked={activeStep === 2} onChange={() => { onStepChange(2) }} />
            </div>
            <label htmlFor="step2" className="col-span-5">
              <p className="underline text-blue-600 text-xs">STEP 3:</p>
              <p className="text-xs text-gray-500">Setting up the guided prompts for the welcome message, no record found message, FAQ, and product inquiries.</p>
              <div className="mt-2.5 mb-5">
                <h4 className="text-gray-500 text-xs font-semibold">
                  GUIDE ABOUT:
                </h4>
                <div className="flex flex-col gap-1">
                  <p className="underline text-blue-600 text-[10px] font-semibold bg-gray-100 p-1">Guided Prompts</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      }
    </div>
  )
}

export default StepperSection;