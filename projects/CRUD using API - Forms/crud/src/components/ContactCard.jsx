import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

function ContactCard({ contact, clickHandler }) {
  const { name, email, id } = contact;
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-5 justify-between mx-auto w-96 mb-6 mt-6">
      <div className="flex items-center gap-5" key={id}>
        <div>
          <AccountCircleIcon style={{ fontSize: "32px" }} />
        </div>
        <div>
          <Link to={{ pathname: `contact/${id}`, state: { contact: contact } }}>
            <h1>{name}</h1>
            <h1>{email}</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link to={{ pathname: `/edit`, state: { contact: contact } }}>
          <EditIcon
            style={{ fontSize: "32px", color: "#0096ff" }}
            onClick={() => clickHandler(id)}
          />
        </Link>

        <DeleteForeverIcon
          onClick={() => clickHandler(id)}
          sx={{ color: "red", fontSize: "32px" }}
        />
      </div>
    </div>
  );
}

export default ContactCard;
