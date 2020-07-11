import React from "react";
import DIRECTORY_DATA from "../../data/directoryData";
import "./Directory.scss";
import MenuItem from "../menu-item/MenuItem";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: DIRECTORY_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSecionProps }) => (
          <MenuItem key={id} {...otherSecionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
