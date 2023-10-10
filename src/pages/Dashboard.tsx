import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import userImg from "../assets/userpic.png";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import Table from "../components/DashboardTable";
const Dashboard = () => {
  return (
    <div className="admin-container">
      {/* SIdebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        {/* //!    Bar Header Component  */}
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs " />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        {/* //!   Section Widget Section */}
        <section className="widget-container">
          <WidgetItems
            percent={40}
            amount={true}
            value={34000}
            heading="Revenue"
            color="rgb(0,155,255)"
          />
          <WidgetItems
            percent={-14}
            value={400}
            heading="Users "
            color="rgb(0,198,202)"
          />
          <WidgetItems
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgb(255,196,0)"
          />
          <WidgetItems
            percent={30}
            value={10000}
            heading="Products"
            color="rgb(76, 0, 255)"
          />
        </section>

        {/* //!   Section Graph Section  */}
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/*// ! Graph Here */}
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,155,255)"
              bgColor_2="rgba(53,162,232,0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            {/*// ! Categories Here */}
            <div>
              {data.categories.map((item, index) => (
                <CategoryItem
                  key={item.heading}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* //!   Section Transaction   */}
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* {chart} */}
            <DoughnutChart
              cutout={90}
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340 82% 56%)", "rgba(53 162 235 .8)"]}
            />
            <p>{<BiMaleFemale />}</p>
          </div>
          {/*//! Table */}
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemsProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItems = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemsProps) => (
  <article className="widget">
    <div className="widget-info">
      <p> {heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="green">
          <HiTrendingDown /> +{percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color}  ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`,
      }}
    >
      <span color={color}>{percent}</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}> </div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
