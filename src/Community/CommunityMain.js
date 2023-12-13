import React, { useState } from "react";
import "./Community.css";
import Template from "./Template";
import CommunityList from "./CommunityList";
import { MdAddCircle } from "react-icons/md";
import CommunityInsert from "./CommunityInsert";

let nextId = 4;

const CommunityMain = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [communities, setCommunities] = useState([
    {
      id: 1,
      text: "게시글1",
      checked: false
    },
    {
      id: 2,
      text: "게시글2",
      checked: false
    },
    {
      id: 3,
      text: "게시글3",
      checked: false
    },
    {
      id: 4,
      text: "게시글4",
      checked: false
    },{
      id: 5,
      text: "게시글5",
      checked: false
    },{
      id: 6,
      text: "게시글6",
      checked: false
    },{
      id: 7,
      text: "게시글7",
      checked: false
    },{
      id: 8,
      text: "게시글8",
      checked: false
    },{
      id: 9,
      text: "게시글9",
      checked: false
    },{
      id: 10,
      text: "게시글10",
      checked: false
    },{
      id: 11,
      text: "게시글11",
      checked: false
    },{
      id: 12,
      text: "게시글12",
      checked: false
    },{
      id: 13,
      text: "게시글13",
      checked: false
    }
  ]);

  const onInsertToggle = () => {
    if (selectedCommunity) {
      setSelectedCommunity(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertCommunity = text => {
    if (text === "") {
      return alert("내용을 입력해주세요.");
    } else {
      const community = {
        id: nextId,
        text,
        checked: false
      };
      setCommunities(Communities => communities.concat(community));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setCommunities(communities =>
      communities.map(community =>
        community.id === id ? { ...community, checked: !community.checked } : community
      )
    );
  };

  const onChangeSelectedCommunity = community => {
    setSelectedCommunity(community);
  };

  const onRemove = id => {
    onInsertToggle();
    setCommunities(communities => communities.filter(community => community.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setCommunities(communities =>
      communities.map(community => (community.id === id ? { ...community, text } : community))
    );
  };

  return (
    <Template communityLength={communities.length}>
      <CommunityList
        communities={communities}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedCommunity={onChangeSelectedCommunity}
      />
      <div className="add-community-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <CommunityInsert
          selectedCommunity={selectedCommunity}
          onInsertToggle={onInsertToggle}
          onInsertCommunity={onInsertCommunity}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
};

export default CommunityMain;