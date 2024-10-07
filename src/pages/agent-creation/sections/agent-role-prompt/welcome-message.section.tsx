import ContentContainer from "components/container"
import CInput from "components/input"
import DropdownIndicator from "components/select/dropdown-indicator.component"
import Menu from "components/select/menu.component"
import OptionComponent from "components/select/option.component"
import { useState } from "react"
import { Textarea, Dropdown, Card, Button, Select } from "react-daisyui"
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa"
import { IoAdd, IoInformationCircleOutline } from "react-icons/io5"
import ReactSelect from "react-select";

const WelcomeMessageSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showGuidedPrompt, setShowGuidedPrompt] = useState(false);
  const [platformType, setPlatformType] = useState(0);

  return (
    <ContentContainer>
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="font-semibold text-xl">Welcome Message</h2>
          <p className="text-gray-500 text-base mt-1">Here you can setup your brand name, upload your brand logo, and create a welcoming message to greet your chatbot users.</p>
        </div>
        <hr className="" />
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">BRAND NAME</label>
          <CInput placeholder="Ex. Axrail" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">UPLOAD LOGO</label>
          <div className="w-full h-20 rounded-lg border border-dashed border-blue-400 bg-white" />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">WELCOME MESSAGE *</label>
          <Textarea size="lg" className="rounded-lg bg-white p-2" placeholder="Ex. Exchange your experience with the UEM Sunrise Assistant Bot, your 24/7 guide for all property-related information and support." />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2">
            <input id="buttonRegister" type="checkbox" />
            <label className="cursor-pointer" htmlFor="buttonRegister">Button Register</label>
          </div>
          <div className="flex flex-row gap-2">
            <input id="buttonLogin" type="checkbox" />
            <label className="cursor-pointer" htmlFor="buttonLogin">Button Login</label>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label className="text-gray-500 font-semibold text-sm">ALTERNATIVE MESSAGE *</label>
          <Textarea
            size="lg"
            className="rounded-lg bg-white p-2"
            placeholder="Ex. Alternatively, I can help with property-related inquiries or connect yout to a sales rep if you need further assistance. You can get started by selecting one of the following topics that best describes your need."
          />
        </div>
        <div className="flex flex-row gap-2 items-start">
          <input id="guidedPrompt" type="checkbox" className="mt-2" />
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
              <ContentContainer>
                <div className="flex flex-row justify-between">
                  <h4 className="text-lg font-medium">Guided Prompt 1</h4>
                  <Button variant="outline" className="bg-white rounded-xl border-gray-300">
                    <FaTrashAlt />
                  </Button>
                </div>
                <div className="flex flex-row gap-4 my-2">
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="categoryRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="categoryRadio">Category</label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="qnaRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="qnaRadio">Question & Answer</label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="faqRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="faqRadio">Dynamic FAQ</label>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-500 font-semibold text-sm">CATEGORY</label>
                  <div className="bg-white border-gray-200 flex flex-row justify-between items-center p-4 rounded-lg">
                    <p>FAQ Enquiries</p>
                    <FaMinus />
                  </div>
                  <div className="bg-white p-4 h-60 shadow-xl rounded-lg">
                    <ReactSelect
                      placeholder="Search Category"
                      isMulti={true}
                      hideSelectedOptions={false}
                      menuIsOpen={true}
                      maxMenuHeight={180}
                      options={[
                        { value: "faq-enquiries", label: "FAQ Enquiries" },
                        { value: "product-enquiries", label: "Product Enquiries" },
                        { value: "buy-selling", label: "Buy and Selling" },
                        { value: "renting-leasing", label: "Renting and Leasing" },
                      ]}
                      components={{ DropdownIndicator, Option: OptionComponent, Menu }}
                    />
                  </div>
                </div>
              </ContentContainer>

              <ContentContainer>
                <div className="flex flex-row justify-between">
                  <h4 className="text-lg font-medium">Guided Prompt 2</h4>
                  <Button variant="outline" className="bg-white rounded-xl border-gray-300">
                    <FaTrashAlt />
                  </Button>
                </div>
                <div className="flex flex-row gap-4 my-2">
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="categoryRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="categoryRadio">Category</label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="qnaRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="qnaRadio">Question & Answer</label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="faqRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="faqRadio">Dynamic FAQ</label>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-500 font-semibold text-sm">QUESTION</label>
                  <Select className="rounded-lg bg-white">
                    <Select.Option>What steps should I take to buy a property</Select.Option>
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
              </ContentContainer>

              <ContentContainer>
                <div className="flex flex-row justify-between">
                  <h4 className="text-lg font-medium">Guided Prompt 3</h4>
                  <Button variant="outline" className="bg-white rounded-xl border-gray-300">
                    <FaTrashAlt />
                  </Button>
                </div>
                <div className="flex flex-row gap-4 my-2">
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="categoryRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="categoryRadio">Category</label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="qnaRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="qnaRadio">Question & Answer</label>
                  </div>
                  <div className="flex flex-row gap-2">
                    <input name="guide-type" id="faqRadio" type="radio" />
                    <label className="cursor-pointer font-medium" htmlFor="faqRadio">Dynamic FAQ</label>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-gray-400 font-semibold text-xs">DYNAMIC FAQ</label>
                  <Textarea
                    size="lg"
                    disabled
                    className="rounded-lg bg-white p-2 disabled:text-gray-400 text-sm"
                    value="FAQ will be provided by system"
                  />
                </div>
              </ContentContainer>

              <hr />
              <div className="">
                <Button
                  variant="outline"
                  className="rounded-xl border-gray-300"
                  startIcon={<IoAdd className="border-2 rounded border-black w-5 h-5" />}
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