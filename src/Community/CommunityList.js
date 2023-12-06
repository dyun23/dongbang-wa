import React from "react";
import CommunityItem from "./CommunityItem";
import "./CommunityList.css";

const CommunityList = ({
  communities,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedCommunity
}) => {
  return (
    <div className="CommunityList">
      {communities.map(community => (
        <CommunityItem
        community={community}
          key={community.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedCommunity={onChangeSelectedCommunity}
        />
      ))}
    </div>
  );
};

export default CommunityList;