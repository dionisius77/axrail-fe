import ContentContainer from "components/container"
import CInput from "components/input"
import DropdownIndicator from "components/select/dropdown-indicator.component"
import Menu from "components/select/menu.component"
import OptionComponent from "components/select/option.component"
import { PromptCategoryOption } from "data/prompt-category"
import { AgentCreationFormControlI, defaultPrompt } from "hooks/useAgentCreation"
import { useState } from "react"
import { Textarea, Dropdown, Card, Button, Select } from "react-daisyui"
import { Controller, useFieldArray } from "react-hook-form"
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa"
import { FiUpload } from "react-icons/fi"
import { IoAdd, IoCloudUpload, IoInformationCircleOutline } from "react-icons/io5"
import ReactSelect from "react-select";

const WelcomeMessageSection = ({ register, errors, control, watch, reset }: AgentCreationFormControlI) => {
  const [showGuidedPrompt, setShowGuidedPrompt] = useState(true);
  const [platformType, setPlatformType] = useState(0);
  const { fields, remove, append, update } = useFieldArray({
    control,
    name: "guidedPrompts",
  });

  return (
    <ContentContainer>
      <div className="flex flex-col gap-3 max-w-full">
        <div>
          <h2 className="font-semibold text-xl">Welcome Message</h2>
          <p className="text-gray-500 text-base mt-1">Here you can setup your brand name, upload your brand logo, and create a welcoming message to greet your chatbot users.</p>
        </div>
        <hr className="" />
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">BRAND NAME</label>
          <CInput {...register("brandName")} placeholder="Ex. Axrail" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">UPLOAD LOGO</label>
          <div className="w-full rounded-lg border border-dashed border-blue-400 bg-white flex flex-col items-center justify-center gap-4 p-10">
            <div className="rounded-full bg-blue-100 p-2">
              <IoCloudUpload className="h-5 w-5 text-blue-500" />
            </div>
            <label htmlFor="fileupload" className="cursor-pointer text-blue-500 underline font-semibold">Browse Your File Here</label>
            <input type="file" id="fileupload" className="hidden" accept="image/*" />
            <p className="text-gray-500 text-sm text-center">Supported Format: JPEG, PNG Maximum file size: <span className="font-bold">2 MB</span></p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">WELCOME MESSAGE *</label>
          <Textarea {...register("welcomeMessage")} size="lg" className="rounded-lg bg-white p-2" placeholder="Ex. Exchange your experience with the UEM Sunrise Assistant Bot, your 24/7 guide for all property-related information and support." />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2">
            <input id="buttonRegister" type="checkbox" {...register("hasRegisterButton")} />
            <label className="cursor-pointer" htmlFor="buttonRegister">Button Register</label>
          </div>
          <div className="flex flex-row gap-2">
            <input id="buttonLogin" type="checkbox" {...register("hasLoginButton")} />
            <label className="cursor-pointer" htmlFor="buttonLogin">Button Login</label>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">ALTERNATIVE MESSAGE *</label>
          <Textarea
            size="lg"
            className="rounded-lg bg-white p-2"
            placeholder="Ex. Alternatively, I can help with property-related inquiries or connect yout to a sales rep if you need further assistance. You can get started by selecting one of the following topics that best describes your need."
            {...register("alternativeMessage")}
          />
        </div>
        <div className="flex flex-row gap-2 items-start">
          <input id="guidedPrompt" type="checkbox" className="mt-2" {...register("guidedPromptActive")} />
          <label className="cursor-pointer" htmlFor="guidedPrompt">
            <p className="text-lg">Guided Prompt</p>
            <p className="text-gray-500 text-sm">This feature provides a list of sample prompts on the end user's conversation start screen</p>
          </label>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-6">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
              <h2 className="font-semibold text-base">Guided Prompts</h2>
              <Dropdown>
                <Dropdown.Toggle button={false} className="btn btn-circle btn-ghost btn-xs text-info">
                  <IoInformationCircleOutline className="text-gray-500 w-6 h-6" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">
                  <Card.Body className="bg-white">
                    <Card.Title tag={'h2'}>More info?</Card.Title>
                    <p>Here is a guided prompts description!</p>
                  </Card.Body>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Button
              className="rounded-xl bg-blue-200 hover:bg-blue-300"
              type="button"
              onClick={() => { setShowGuidedPrompt(prev => !prev) }}
            >
              {showGuidedPrompt
                ?
                <FaMinus />
                :
                <FaPlus />
              }
            </Button>
          </div>
          {showGuidedPrompt &&
            <>
              <div className="w-full grid grid-cols-2 bg-gray-100 rounded-lg p-1 gap-4">
                <button
                  className={`${platformType === 0 ? "bg-white shadow-lg" : "text-gray-500"} font-semibold w-full p-3 text-sm text-center rounded-lg`}
                  type="button"
                  onClick={() => setPlatformType(0)}
                >
                  WebChat
                </button>
                <button
                  className={`${platformType === 1 ? "bg-white shadow-lg" : "text-gray-500"} font-semibold w-full p-3 text-sm text-center rounded-lg`}
                  type="button"
                  onClick={() => setPlatformType(1)}
                >
                  WhatsApp
                </button>
              </div>

              {fields.map((item, i) => {
                const currentType = watch(`guidedPrompts.${i}.type`);
                return (
                  <ContentContainer key={i.toString()}>
                    <div className="flex flex-row justify-between">
                      <h4 className="text-lg font-medium">Guided Prompt {i + 1}</h4>
                      <Button variant="outline" className="bg-white rounded-xl border-gray-300" onClick={() => remove(i)}>
                        <FaTrashAlt />
                      </Button>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-4 my-2">
                      <div className="flex flex-row gap-2">
                        <input value="category" {...register(`guidedPrompts.${i}.type`)} id={`categoryRadio${i}`} type="radio" />
                        <label className="cursor-pointer font-medium" htmlFor={`categoryRadio${i}`}>Category</label>
                      </div>
                      <div className="flex flex-row gap-2">
                        <input value="qna" {...register(`guidedPrompts.${i}.type`)} id={`qnaRadio${i}`} type="radio" />
                        <label className="cursor-pointer font-medium" htmlFor={`qnaRadio${i}`}>Question & Answer</label>
                      </div>
                      <div className="flex flex-row gap-2">
                        <input value="dynamic" {...register(`guidedPrompts.${i}.type`)} id={`faqRadio${i}`} type="radio" />
                        <label className="cursor-pointer font-medium" htmlFor={`faqRadio${i}`}>Dynamic FAQ</label>
                      </div>
                    </div>
                    {currentType === "category" &&
                      <div className="flex flex-col gap-1">
                        <label className="text-gray-500 font-semibold text-sm">CATEGORY</label>
                        <div className="bg-white border-gray-200 flex flex-row justify-between items-center p-4 rounded-lg">
                          <p>FAQ Enquiries</p>
                          <FaMinus />
                        </div>
                        <div className="bg-white p-4 h-60 shadow-xl rounded-lg">
                          <Controller name={`guidedPrompts.${i}.content.categories`} control={control} render={({ field: { value, onChange } }) => {
                            return (
                              <ReactSelect
                                placeholder="Search Category"
                                isMulti={true}
                                hideSelectedOptions={false}
                                menuIsOpen={true}
                                maxMenuHeight={180}
                                value={PromptCategoryOption.filter(item => value.includes(item.value))}
                                onChange={(e: any) => {
                                  onChange(e.map((item: { value: string; label: string }) => item.value));
                                }}
                                options={PromptCategoryOption}
                                components={{ DropdownIndicator, Option: OptionComponent, Menu }}
                              />
                            )
                          }}
                          />
                        </div>
                      </div>
                    }
                    {currentType === "qna" &&
                      <>
                        <div className="flex flex-col gap-1">
                          <label className="text-gray-500 font-semibold text-sm">QUESTION</label>
                          <Select {...register(`guidedPrompts.${i}.content.question`)} className="rounded-lg bg-white">
                            <Select.Option value="What steps should I take to buy a property">What steps should I take to buy a property</Select.Option>
                          </Select>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                          <label className="text-gray-400 font-semibold text-xs">ANSWER</label>
                          <Textarea
                            size="lg"
                            disabled
                            className="rounded-lg bg-white p-2 disabled:text-gray-400 text-sm"
                            value="Ex. Alternatively, I can help with property-related inquiries or connect yout to a sales rep if you need further assistance. You can get started by selecting one of the following topics that best describes your need."
                          />
                        </div>
                      </>
                    }
                    {currentType === "dynamic" &&
                      <div className="flex flex-col gap-1 mt-2">
                        <label className="text-gray-400 font-semibold text-xs">DYNAMIC FAQ</label>
                        <Textarea
                          size="lg"
                          disabled
                          className="rounded-lg bg-white p-2 disabled:text-gray-400 text-sm"
                          value="FAQ will be provided by system"
                        />
                      </div>
                    }
                  </ContentContainer>
                )
              })}

              <hr />
              <div className="w-full">
                <Button
                  variant="outline"
                  className="rounded-xl border-gray-300"
                  startIcon={<IoAdd className="border-2 rounded border-black w-5 h-5" />}
                  onClick={() => {
                    append(defaultPrompt)
                  }}
                >
                  Add Guided Prompts
                </Button>
              </div>
            </>
          }
        </div>
      </div>
    </ContentContainer>
  )
}

export default WelcomeMessageSection;