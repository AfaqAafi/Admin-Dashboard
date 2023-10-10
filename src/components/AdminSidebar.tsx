import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
const AdminSidebar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );
  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>

        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        location={location}
        Icon={RiDashboardFill}
      />
      <Li
        url="/admin/product"
        text="Product"
        location={location}
        Icon={RiShoppingBag3Fill}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        location={location}
        Icon={IoIosPeople}
      />

      <Li
        url="/admin/transaction"
        text="Transaction"
        location={location}
        Icon={AiFillFileText}
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        location={location}
        Icon={FaChartBar}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        location={location}
        Icon={FaChartPie}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        location={location}
        Icon={FaChartLine}
      />
    </ul>
  </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        location={location}
        Icon={FaStopwatch}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        location={location}
        Icon={RiCoupon3Fill}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,,225,.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,,225)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);
export default AdminSidebar;
