import React, { useEffect, useState } from "react";
import Category from "../category/Category";
import InventoryItemDashboard from "../../component/inventory/inventoryItemDashboard/InventoryItemDashboard";
import Retailer from "../retailer/Retailer";
import CategoryPreview from "../../component/category/CategoryPreview";
import RetailerPreview from "../../component/retailer/RetailerPreview";
import axios, { AxiosResponse } from "axios";
import InventoryItem from "../../models/InventoryItem";
import { urlItems } from "../../api/endpoints";

const Item = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios.get(urlItems).then((res: AxiosResponse<InventoryItem[]>) => {
      setItems(res.data);
    });
  };

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`${urlItems}?id=${id}`);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <InventoryItemDashboard items={items} deleteItem={deleteItem} />
    </>
  );
};

export default Item;
