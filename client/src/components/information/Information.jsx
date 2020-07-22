import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchInformationStart } from "../../redux/information/informationActions";
import { selectInformationItems } from "../../redux/information/informationSelector";

import InformationItem from "../information-item/InformationItem";

import "./Information.scss";

const Information = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInformationStart());
  }, [dispatch]);

  const informationItems = useSelector(selectInformationItems);

  return (
    <div className="information">
      <h2>Information</h2>
      <div className="information__item">
        {informationItems ? (
          informationItems.map(({ id, ...otherInformationItemProps }) => (
            <InformationItem key={id} {...otherInformationItemProps} />
          ))
        ) : (
          <span>We don't have any information now.</span>
        )}
      </div>
    </div>
  );
};

export default Information;
