import React, { useEffect, useState } from "react";
import InventoryItemList from "../../component/inventory/inventoryItemList/InventoryItemList";
import InventoryItem from "../../models/InventoryItem";

interface Props {
  inventoryItems?: InventoryItem[];
  newlyAddedItems?: InventoryItem[];
}

const Home = () => {
  const [items, setItems] = useState<Props>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setItems({
        inventoryItems: [
          {
            id: "1",
            name: "Watch",
            imageUrl:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
          },
          {
            id: "2",
            name: "Sunglasses",
            imageUrl:
              "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          },
          {
            id: "3",
            name: "Boots",
            imageUrl:
              "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          },
          {
            id: "4",
            name: "Speaker",
            imageUrl:
              "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          },
        ],
        newlyAddedItems: [
          {
            id: "1",
            name: "Watch",
            imageUrl:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
          },
          {
            id: "2",
            name: "Sunglasses",
            imageUrl:
              "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          },
        ],
      });
    }, 1000);
  }, []);
  
  return (
    <>
      <h2 className="text-2xl font-semibold">Newly Added</h2>
      <InventoryItemList items={items.newlyAddedItems} />

      <h2 className="text-2xl font-semibold">Inventory Items</h2>
      <InventoryItemList items={items.inventoryItems} />
    </>
  );
};

export default Home;
