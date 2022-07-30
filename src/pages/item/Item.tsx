import React from "react";
import Category from "../category/Category";
import InventoryItemDashboard from "../../component/inventory/inventoryItemDashboard/InventoryItemDashboard";
import Retailer from "../retailer/Retailer";
import CategoryPreview from "../../component/category/CategoryPreview";
import RetailerPreview from "../../component/retailer/RetailerPreview";

const Item = () => {
  return (
    <>
      <InventoryItemDashboard />
      <CategoryPreview />
      <RetailerPreview />
    </>
  );
};

export default Item;
