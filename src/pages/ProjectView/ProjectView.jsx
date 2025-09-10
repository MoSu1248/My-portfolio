import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProjectView() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>test</button>
    </div>
  );
}
