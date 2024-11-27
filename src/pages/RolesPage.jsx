import { useState, useEffect } from "react";
import {
  fetchRoles,
  addRole,
  updateRole,
  deleteRole as apiDeleteRole,
} from "../api/roles";
import { fetchUsers } from "../api/users";
import RoleForm from "../components/RoleForm";
import "../App.css";

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchRoles()
      .then((res) => {
        setRoles(res.data);
      })
      .catch((error) => console.error("Error fetching roles:", error));

    fetchUsers()
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAdd = (role) => {
    addRole(role)
      .then(() => {
        fetchRoles().then((res) => {
          setRoles(res.data);
        });
      })
      .catch((error) => console.error("Error adding role:", error));
  };

  const handleEdit = (role) => {
    setCurrentRole(role);
  };

  const handleSave = (role, roleId) => {
    if (!selectedUser) {
      alert("Please select a user before creating the role.");
      return;
    }

    const existingRole = roles.find((r) => r.userId === selectedUser.id);

    if (existingRole) {
      updateRole(existingRole.id, role)
        .then(() => {
          setRoles((prevRoles) =>
            prevRoles.map((r) =>
              r.userId === selectedUser.id ? { ...r, ...role } : r
            )
          );
        })
        .catch((error) => console.error("Error updating role:", error));
    } else {
      addRole({ ...role, userId: selectedUser.id })
        .then(() => {
          fetchRoles().then((res) => {
            setRoles(res.data);
          });
        })
        .catch((error) => console.error("Error adding role:", error));
    }

    setCurrentRole(null);
    setSelectedUser(null);
  };

  const handleDelete = (roleId) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      apiDeleteRole(roleId)
        .then(() => {
          setRoles(roles.filter((role) => role.id !== roleId));
        })
        .catch((error) => console.error("Error deleting role:", error));
    }
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-semibold text-center text-black">Manage Roles</h2>

      {/* Role Form */}
      <div className="bg-gradient-to-r from-blue-400 to-indigo-600 shadow-xl rounded-lg px-8 pt-6 pb-8 mb-8 w-full max-w-3xl mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl">
        <RoleForm
          onSubmit={handleSave}
          initialData={currentRole}
          selectedUser={selectedUser}
          onUserSelect={setSelectedUser}
        />
      </div>

      {/* Display Users */}
      <div className="my-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-black">Users</h3>
        <div className="mb-4">
          <label className="block text-lg font-medium text-black">Select User:</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            value={selectedUser?.id || ""}
            onChange={(e) => {
              const userId = e.target.value;
              const user = users.find((user) => user.id === userId);
              setSelectedUser(user);
            }}
          >
            <option value="">-- Select a User --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Current Roles */}
      <div className="my-6 overflow-hidden max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-black p-4">Current Roles</h3>
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md mt-4">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-6 py-3 text-left">User</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Permissions</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.length > 0 ? (
                roles.map((role) => {
                  const user = users.find((user) => user.id === role.userId);
                  return (
                    <tr
                      key={role.id}
                      className="hover:bg-gray-100 transition-all duration-300 hover:scale-95"
                    >
                      <td className="px-6 py-4">{user?.name || "Unknown User"}</td>
                      <td className="px-6 py-4">{role.name || "Unknown Role"}</td>
                      <td className="px-6 py-4">{role.permissions.join(", ")}</td>
                      <td className="px-6 py-4 space-x-4">
                        <button
                          onClick={() => handleEdit(role)}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6">No roles found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
