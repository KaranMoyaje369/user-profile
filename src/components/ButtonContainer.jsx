import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const ButtonContainer = ({ setUsers, user }) => {
  const [like, setLike] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({ ...user });

  const handleLike = () => {
    setLike(!like);
  };

  const handleEdit = () => {
    setIsEditing(true); // Show the edit form
  };

  const handleCancel = () => {
    setEditedUserData({ ...user }); // Reset to original user data
    setIsEditing(false); // Hide the edit form
  };

  const handleSave = () => {
    // console.log("Updated User Data:", editedUserData);

    // Update the users state with the modified user data
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? { ...u, ...editedUserData } : u))
    );

    setIsEditing(false); // Hide the edit form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  const handleDelete = () => {
    // Delete the specific user based on their id
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  };

  return (
    <>
      <div className="flex justify-center items-center gap-6 p-2 bg-gray-200">
        <div className="text-2xl font-semibold border-r-2 border-gray-200 pr-4">
          <button onClick={handleLike}>
            {like ? (
              <CiHeart className="hover:text-pink-500" />
            ) : (
              <FaHeart className="text-pink-500 " />
            )}
          </button>
        </div>
        <div className="text-2xl font-semibold border-r-2 border-gray-200 pr-4">
          <button onClick={handleEdit}>
            <CiEdit className="hover:text-blue-500" />
          </button>
        </div>
        <div className="text-2xl font-semibold">
          <button onClick={handleDelete}>
            <RiDeleteBin6Line className="hover:text-blue-500" />
          </button>
        </div>
      </div>

      {/* Render the modal form only if isEditing is true */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Edit User Information
            </h3>
            <form>
              <div className="mb-4">
                <label className="block font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editedUserData.name}
                  onChange={handleChange}
                  className="border-2 p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editedUserData.email}
                  onChange={handleChange}
                  className="border-2 p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={editedUserData.phone}
                  onChange={handleChange}
                  className="border-2 p-2 w-full rounded"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-300 p-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonContainer;
