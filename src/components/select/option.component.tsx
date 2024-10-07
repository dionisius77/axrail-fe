import { OptionProps } from "react-select";

const OptionComponent = (props: OptionProps<{ value: string; label: string }>) => {
  const { innerProps, innerRef } = props;
  return (
    <div ref={innerRef} {...innerProps} className="flex flex-row gap-2 p-2 items-center cursor-pointer">
      <input className="w-5 h-5" type="checkbox" checked={props.isSelected} />
      <div>{props.data.label}</div>
    </div>
  );
};

export default OptionComponent;