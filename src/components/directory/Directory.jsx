import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directorySelector";

import "./Directory.scss";

import MenuItem from "../menu-item/MenuItem";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSecionProps }) => (
        <MenuItem key={id} {...otherSecionProps} />
      ))}
    </div>
  );
};

const mpaStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mpaStateToProps)(Directory);
