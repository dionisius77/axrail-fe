import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "components/shared/header";
import Sidebar from "components/shared/sidebar";
import Container from "layout/container";

const DashboardLayout: React.FC = (): JSX.Element => {
  const [navbarActive, setNavbarActive] = useState<boolean>(true);

  const toggleSidebar = (): void => {
    setNavbarActive((prev) => !prev);
  };

  return (
    <>
      <div className="flex relative">
        <Sidebar active={navbarActive} toggleSidebar={toggleSidebar} />
        <Container className={`${navbarActive ? "w-full xl:w-[80%]" : "w-full"}`}>
          <Header
            className={`${navbarActive ? "w-full xl:w-[80%]" : "w-full"}`}
            toggleSidebar={toggleSidebar}
            active={navbarActive}
          />
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default DashboardLayout;
