import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GuidedPromptPayloadI } from "_interfaces/guided-prompt.interfaces";

const useAgentCreation = () => {
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
  });

  const save = (payload: GuidedPromptPayloadI) => {
    console.info(payload);
  }

  const handleSave = handleSubmit(save);

  return {}
}

export default useAgentCreation;