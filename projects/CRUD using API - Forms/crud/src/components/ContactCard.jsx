import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

function ContactCard({ contact, clickHandler }) {
  const { name, email, id } = contact;

  return (
    <div className="flex items-center gap-5 justify-between mx-auto w-96 mb-6 mt-6">
      <div className="flex items-center gap-5" key={id}>
        <div>
          <AccountCircleIcon style={{ fontSize: "32px" }} />
        </div>
        <div>
          <h1>{name}</h1>
          <h1>{email}</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <EditIcon style={{ fontSize: "32px", color: "#0096ff" }} />
        <DeleteForeverIcon
          onClick={() => clickHandler(id)}
          sx={{ color: "red", fontSize: "32px" }}
        />
      </div>
    </div>
  );
}

export default ContactCard;
