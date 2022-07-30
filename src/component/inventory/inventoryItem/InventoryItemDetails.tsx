import InventoryItem from "../../../models/InventoryItem";

interface Props {
  item: InventoryItem | undefined;
}

const InventoryItemDetails = ({ item }: Props) => {
  return (
    <div className="w-full rounded">
      <div className="hover:shadow-2xl">
        <img src={item!.imageUrl} alt="" />
      </div>
      <h2 className="text-2xl font-semibold">{item!.name}</h2>
    </div>
  );
};

export default InventoryItemDetails;
