import axios from "axios";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { urlItems } from "../../../api/endpoints";
import InventoryItem from "../../../models/InventoryItem";
import TextField from "../../form/TextField";

const InventoryItemCreate = () => {
  const navigate = useNavigate();

  const create = async (itemName: string) => {
    try {
      await axios.post(`${urlItems}?itemName=${itemName}`, itemName);
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
            name: "",
          }}
          onSubmit={async (value) => {
            create(value.name);
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

export default InventoryItemCreate;
