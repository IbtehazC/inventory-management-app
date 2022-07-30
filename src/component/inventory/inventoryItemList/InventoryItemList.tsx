import InventoryItem from "../../../models/InventoryItem";
import InventoryItemDetails from "../inventoryItem/InventoryItemDetails";

interface Props {
  items: InventoryItem[] | undefined;
}

const InventoryItemList = ({ items }: Props) => {
  if (!items) return <>Loading...</>;
  else if (items.length === 0) return <>No Items to show</>;
  else {
    return (
      <div className="container mx-auto">
        <div className="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3">
          {items.map((item) => (
            <InventoryItemDetails key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default InventoryItemList;
