import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Tabs } from "antd";
import MovieList from "./MovieList";
import TheatresTable from "./TheatresTable";
import MovieFrom from "./MovieForm";

function Admin() {
  const tabItems = [
    {
      key: "1",
      label: "Movies",
      children: <MovieList />,
    },

    {
      key: "2",
      label: "Theatres",
      children: <TheatresTable />,
    },
  ];

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.role === "partner") {
      navigate("/partner");
    } else if (user.role === "user") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>

      <Tabs items={tabItems} />
    </div>
  );
}

export default Admin;
