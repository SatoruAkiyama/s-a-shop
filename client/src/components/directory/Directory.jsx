import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectDirectorySections } from "../../redux/directory/directorySelector";

import "./Directory.scss";

import MenuItem from "../menu-item/MenuItem";

const Directory = () => {
  const { collectionId } = useParams();
  const sections = useSelector((state) =>
    selectDirectorySections(collectionId)(state)
  );

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSecionProps }) => (
        <MenuItem key={id} {...otherSecionProps} />
      ))}
    </div>
  );
};

export default Directory;
