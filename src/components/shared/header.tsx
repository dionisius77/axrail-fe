import { FiMenu } from "react-icons/fi";

interface HeaderProps {
  toggleSidebar: () => void;
  className?: string;
  active: boolean;
}

const Header: React.FC<HeaderProps> = ({
  toggleSidebar,
  className,
  active,
}): JSX.Element => {
  return (
    <nav
      className={`z-[998] select-none w-[80%] h-[60px] bg-white py-4 px-4 lg:px-8 fixed right-0 top-0 flex justify-between items-center transition-all duration-500 ${className}`}
    >
      {!active ?
        <div
          onClick={toggleSidebar}
          className="border border-slate-300 cursor-pointer p-2 transition-all duration-200 rounded-xl"
        >
          <FiMenu
            color="black"
            size={20}
          />
        </div>
        :
        <div />
      }
    </nav>
  );
};

export default Header;

