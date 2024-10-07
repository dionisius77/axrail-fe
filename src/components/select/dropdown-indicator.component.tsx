import { FaSearch } from "react-icons/fa";
import { components, DropdownIndicatorProps } from "react-select";

const DropdownIndicator = (
  props: DropdownIndicatorProps<any, true>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaSearch />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;