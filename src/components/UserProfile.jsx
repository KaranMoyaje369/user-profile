import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import ButtonContainer from "./ButtonContainer";

function UserProfile({ users, setUsers }) {
  const avatarUrl = ` https://api.dicebear.com/6.x/avataaars/svg?seed=${encodeURIComponent(
    users.name
  )}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="card">
        <figure>
          <img
            src={avatarUrl}
            alt={`image`}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{users.name}</h2>
          <div>
            <div className="flex gap-6 items-center mb-2">
              <MdOutlineMail className="text-2xl font-semibold" />
              {users.email}
            </div>
            <div className="flex gap-6 items-center mb-2">
              <TbPhone className="text-2xl font-semibold" />
              {users.phone}
            </div>
            <div className="flex gap-6 items-center mb-2">
              <TbWorld className="text-2xl font-semibold" />
              <a
                href={`http://${users.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {users.website}{" "}
              </a>
            </div>
          </div>
          {/* Pass the user and setUsers state to ButtonContainer */}
          <ButtonContainer setUsers={setUsers} user={users} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
