import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", role: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", role: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-blue-400 to-indigo-600 shadow-xl rounded-lg px-8 pt-6 pb-8 mb-8 w-full max-w-3xl mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-white font-semibold text-lg mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="shadow-md border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="role" className="block text-white font-semibold text-lg mb-2">
          Role
        </label>
        <input
          type="text"
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter Role"
          className="shadow-md border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          required
        />
      </div>
      <button
        type="submit"
        className="block mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
