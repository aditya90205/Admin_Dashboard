import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import NewProduct from "./pages/management/NewProduct";
import ProductManagement from "./pages/management/ProductManagement";
import TransactionManagement from "./pages/management/TransactionManagement";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/customers" element={<Customers />} />

          {/* Charts */}

          {/* Apps */}

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
