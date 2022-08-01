import { ErrorMessage, Field } from "formik";
import React from "react";

interface Props {
  field: string;
}

const TextField = ({ field }: Props) => {
  return (
    <div className="mb-6">
      <label htmlFor={field} className="block text-gray-700 font-medium">
        {field.toUpperCase()}
      </label>
      <Field
        name={field}
        id={field}
        className="block w-full mt-1 bg-gray-200  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-10 px-2"
        placeholder="Name of the Item"
      />
      <ErrorMessage name="name">
        {(msg) => <div className=" text-red-500">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default TextField;
