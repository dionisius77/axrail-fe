import { Control, FieldErrors, useForm, UseFormRegister, UseFormReset, UseFormWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GuidedPromptI, GuidedPromptPayloadI } from "_interfaces/guided-prompt.interfaces";

export interface AgentCreationFormControlI {
  register: UseFormRegister<GuidedPromptPayloadI>;
  errors: FieldErrors<GuidedPromptPayloadI>;
  control: Control<GuidedPromptPayloadI, any>;
  watch: UseFormWatch<GuidedPromptPayloadI>;
  reset: UseFormReset<GuidedPromptPayloadI>;
}

export interface AgentCreationOutput extends AgentCreationFormControlI {
  handleSave: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const defaultPrompt: GuidedPromptI = {
  type: "category",
  content: {
    categories: []
  }
}

const useAgentCreation = (): AgentCreationOutput => {
  const schema = yup.object().shape({});

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<GuidedPromptPayloadI>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      guidedPromptActive: true,
      guidedPrompts: [
        defaultPrompt
      ]
    }
  });

  const save = (payload: GuidedPromptPayloadI) => {
    console.info(payload);
  }

  const handleSave = handleSubmit(save);

  return { register, errors, control, watch, reset, handleSave }
}

export default useAgentCreation;