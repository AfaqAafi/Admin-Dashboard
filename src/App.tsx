import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import "./styles/Homepage.css";
//! Main routes
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));

//! Management routes
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
//!  Charts routes & App Routes
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PaiCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Stopwatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <div className="divHomepage">
                  <button className="btnHomepage">Visit Dashboard</button>
                </div>
              </Link>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/*  Charts */}

          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />
          {/*  Apps */}
          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          {/* <Route path="/admin/app/coupon" element={<Coupon />} /> */}
          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
