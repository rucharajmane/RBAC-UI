import React, { useEffect, useState } from "react";
import { fetchUsers, addUser, updateUser, deleteUser } from "../api/users";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import "../App.css";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAdd = (user) =>
    addUser(user).then(() => fetchUsers().then((res) => setUsers(res.data)));

  const handleEdit = (id, user) =>
    updateUser(id, user).then(() => fetchUsers().then((res) => setUsers(res.data)));

  const handleDelete = (id) =>
    deleteUser(id).then(() => fetchUsers().then((res) => setUsers(res.data)));

  return (
    <div className="py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center text mb-12 drop-shadow-md animate-fade-in transition-transform duration-700">
          User Management System
        </h1>
        <UserForm onSubmit={handleAdd} />
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default UsersPage;
