import React from "react";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directorySelector";

import "./Directory.scss";

import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSecionProps }) => (
        <MenuItem key={id} {...otherSecionProps} />
      ))}
    </div>
  );
};

export default Directory;
