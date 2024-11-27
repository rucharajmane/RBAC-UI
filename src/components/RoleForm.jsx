import React, { useState, useEffect } from "react";

const RoleForm = ({ onSubmit, initialData, selectedUser, onUserSelect }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    permissions: initialData?.permissions || [],
  });

  const allPermissions = ["Read", "Write", "Delete"];
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        permissions: initialData.permissions || [],
      });
    }
  }, [initialData]);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        ...formData,
        name: selectedUser.name,
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionChange = (perm) => {
    setFormData((prevData) => {
      const permissions = prevData.permissions.includes(perm)
        ? prevData.permissions.filter((p) => p !== perm)
        : [...prevData.permissions, perm];
      return { ...prevData, permissions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Role Name is required.");
      return;
    }

    if (formData.permissions.length === 0) {
      setError("At least one permission must be selected.");
      return;
    }

    setError("");
    onSubmit(formData, initialData?.id);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 transition-all duration-300">
      <div>
        <label className="block text-lg font-medium text-gray-600">Role Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-600">Permissions</label>
        <div className="flex gap-4">
          {allPermissions.map((perm) => (
            <div key={perm} className="flex items-center">
              <input
                type="checkbox"
                id={perm}
                checked={formData.permissions.includes(perm)}
                onChange={() => handlePermissionChange(perm)}
                className="form-checkbox h-5 w-5 text-blue-500 transition-all duration-200"
              />
              <label htmlFor={perm} className="ml-2">{perm}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          {initialData ? "Update Role" : "Create Role"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </form>
  );
};

export default RoleForm;
