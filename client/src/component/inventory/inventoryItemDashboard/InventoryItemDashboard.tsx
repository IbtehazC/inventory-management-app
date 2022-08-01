import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import InventoryItem from "../../../models/InventoryItem";

interface Props {
  items: InventoryItem[];
  deleteItem: (id: string) => Promise<void>
}

const InventoryItemDashboard = ({ items, deleteItem }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/item/create")}
      >
        Create Item
      </button>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      ImageURL
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Added
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <Fragment key={item.id}>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.imageUrl}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.createdAt}
                        </td>
                        <td className="flex gap-4 justify-center items-center h-20">
                          <button
                            className="h-10 w-24 px-5 font-semibold text-white bg-green-600 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-green-700"
                            onClick={() =>
                              navigate(`/item/edit/${item.id}`, {
                                state: item,
                              })
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="h-10 w-24 px-5 font-semibold text-white bg-red-600 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-700"
                            onClick={() => {
                              deleteItem(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItemDashboard;
