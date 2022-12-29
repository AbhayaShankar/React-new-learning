import React from "react";
import grid from "../src/Images/grid.png";

export default function Content() {
  return (
    <div className="Info">
      <img className="grid" src={grid} alt="grid-img" />
      <h2> Shopping Experience You Never Had</h2>
      <div className="main-info">
        <div className="content-info">
          <h4>One to One Guidance from a Super Host</h4>
          <p>
            We'll match you with a Superhost in your area, who'll guide you from
            your first question to your first guest - by phone, video call or
            chat.
          </p>
        </div>

        <div className="content-info">
          <h4>An experienced guest for your first booking</h4>
          <p>
            For your first booking, you can choose to welcome an experienced
            guest who has at least three stays and a good track record on
            Airbnb.
          </p>
        </div>

        <div className="content-info">
          <h4>Specialised support from Airbnb</h4>
          <p>
            New Hosts get one-tap access to specially trained Community Support
            agents who can help with everything from account issues to billing
            support.
          </p>
        </div>
      </div>
    </div>
  );
}
