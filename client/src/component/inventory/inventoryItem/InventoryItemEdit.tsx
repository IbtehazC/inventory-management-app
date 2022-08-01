import axios from "axios";
import { Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { urlItems } from "../../../api/endpoints";
import InventoryItem from "../../../models/InventoryItem";
import TextField from "../../form/TextField";

interface LocationState {
  id: string;
  name: string;
}

const InventoryItemEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = location.state as LocationState;
  const { name } = location.state as LocationState;

  console.log(id);

  const edit = async (itemName: string) => {
    try {
      await axios.put(`${urlItems}/${id}?itemName=${itemName}`, itemName);
      navigate("/item");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto py-8">
      <div className="p-6 border border-gray-300 sm:rounded-md">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Create New Item
        </h2>
        <Formik
          initialValues={{
            name: name,
          }}
          onSubmit={async (value) => {
            edit(value.name);
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("This field is required")
              .max(50, "Max Length is 50 characters")
              .firstLetterUppercase(),
          })}
        >
          {(formikProps) => (
            <Form>
              <TextField field="name" />
              <div className="mb-6 flex justify-between">
                <button
                  type="submit"
                  className={`h-10 px-5 font-semibold text-white bg-green-600 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-green-700 ${
                    formikProps.isSubmitting && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Create
                </button>
                <button className="h-10 px-5 font-semibold text-white bg-red-600 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-700">
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InventoryItemEdit;
