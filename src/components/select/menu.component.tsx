import { MenuProps } from "react-select";

const Menu = (
  props: MenuProps<{ value: string; label: string }>
) => {
  const { innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps} className="border-t mt-2">
      {props.children}
    </div>
  );
};

export default Menu;