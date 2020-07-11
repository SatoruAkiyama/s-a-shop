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
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
