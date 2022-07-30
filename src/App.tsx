import { useEffect, useState } from "react";
import InventoryItemList from "./component/inventory/inventoryItemList/InventoryItemList";
import Layout from "./pages/layout/Layout";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import InventoryItemDashboard from "./component/inventory/inventoryItemDashboard/InventoryItemDashboard";
import Home from "./pages/home/Home";
import Item from "./pages/item/Item";
import InventoryItemCreate from "./component/inventory/inventoryItem/InventoryItemCreate";
import InventoryItemEdit from "./component/inventory/inventoryItem/InventoryItemEdit";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/item" element={<Item />} />
          <Route path="/item/create" element={<InventoryItemCreate />} />
          <Route path="/item/edit/:id" element={<InventoryItemEdit />} />

          <Route path="/category" element={<Item />} />
          <Route path="/category/create" element={<InventoryItemCreate />} />
          <Route path="/category/edit/:id" element={<InventoryItemEdit />} />

          <Route path="/retailer" element={<Item />} />
          <Route path="/retailer/create" element={<InventoryItemCreate />} />
          <Route path="/retailer/edit/:id" element={<InventoryItemEdit />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
