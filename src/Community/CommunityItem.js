import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./CommunityItem.css";

const CommunityItem = ({
  community,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedCommunity
}) => {
  const { id, text, checked, content } = community;

  return (
    <div className="CommunityItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedCommunity(community);
            onInsertToggle();
          }}
        >
          {text}
        </div>
        <div className="divider">
          <hr />
          <div className="additional-text">{`내용: ${content || ""}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityItem;