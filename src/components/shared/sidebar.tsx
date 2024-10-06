import { NavLink } from "react-router-dom";
import { menuItems } from "data/sidebar-menu";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";

interface SidebarProps {
  active: boolean;
  toggleSidebar: () => void;
}

interface ModalLogoutProps {
  ref: React.DialogHTMLAttributes<HTMLDialogElement>;
  handleClose: () => void;
  handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, toggleSidebar }): JSX.Element => {
  const [menus, setMenus] = useState(menuItems);

  return (
    <aside
      className={`z-[999] max-h-screen h-screen overflow-auto top-0 bg-white transition-all duration-500 shadow-xl ${active ? "max-lg:fixed w-[80%] xl:w-[20%]" : "block -left-[20%] w-[0%]"
        }`}
    >
      <div className="pl-4 pr-2">
        <div className="w-full flex-row flex justify-between items-center gap-2 py-4">
          <p className="font-bold text-lg text-slate-600">All Menu</p>
          <div
            onClick={toggleSidebar}
            className="cursor-pointer p-2 border border-slate-300 hover:bg-opacity-50 transition-all duration-200 rounded-xl"
          >
            <IoClose
              color="black"
              size={20}
            />
          </div>
        </div>
      </div>

      <div className="select-none mt-4 px-4 mb-20">
        <ul className="flex flex-col">
          {menus.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => {
                    if (item.child) {
                      setMenus((prev) => {
                        let temp = [...prev];
                        temp[index].expand =
                          temp[index].expand === undefined
                            ? true
                            : !temp[index].expand;
                        return temp;
                      });
                    }
                  }}
                >
                  {({ isActive }) => {
                    return (
                      <li className={`${isActive && item.path !== "#" ? "!bg-blue-50" : "bg-white"} hover:bg-spix hover:bg-opacity-20 transition-all duration-100 p-4 cursor-pointer ml-2 rounded-lg flex flex-row gap-4 items-center`}>
                        {item.icon}{item.name}
                        {item.child && <FaMinus className="ml-auto" />}
                      </li>
                    )
                  }}
                </NavLink>
                {item.expand && (
                  <ul className="whitespace-nowrap ml-10">
                    {item.child &&
                      item.child.map((child, i) => (
                        <div key={i}>
                          <NavLink
                            to={child.path}
                            onClick={() => {
                              if (child.child) {
                                setMenus((prev) => {
                                  let temp = [...prev];
                                  const tempChild = { ...child };
                                  tempChild.expand = tempChild.expand === undefined ? true : !tempChild.expand;
                                  temp[index].child![i] = tempChild;
                                  return temp;
                                });
                              }
                            }}
                          >
                            {({ isActive }) => (
                              <li className="py-1.5 border-b">
                                <div className={`${isActive && child.path !== "#" ? "!bg-blue-50" : "bg-white"} hover:bg-spix hover:bg-opacity-20 transition-all duration-100 p-3 cursor-pointer rounded-lg`}>
                                  {child.name}
                                </div>
                              </li>
                            )}
                          </NavLink>
                          {child.expand && (
                            <ul className="whitespace-nowrap ml-10">
                              {child.child &&
                                child.child.map((subChild, j) => (<NavLink
                                  key={j}
                                  to={subChild.path}
                                >
                                  {({ isActive }) => (
                                    <li className="py-1.5 border-b">
                                      <div className={`${isActive ? "!bg-blue-50" : "bg-white"} hover:bg-spix hover:bg-opacity-20 transition-all duration-100 p-3 cursor-pointer rounded-lg`}>
                                        {subChild.name}
                                      </div>
                                    </li>
                                  )}
                                </NavLink>
                                ))
                              }
                            </ul>
                          )
                          }
                        </div>
                      ))}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
