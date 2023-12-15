import React from "react";
import CommunityItem from "./CommunityItem";
import "./CommunityList.css";

const CommunityList = ({
  communities,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedCommunity,
  size
}) => {
  return (
    <div className="CommunityList" style={{ width: size ? 'auto' : '90vw' }}>
      {communities.slice(0, size ? 6 : communities.length).map(community => (
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