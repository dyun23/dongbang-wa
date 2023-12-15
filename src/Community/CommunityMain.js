import React, { useState } from "react";
import "./Community.css";
import Template from "./Template";
import CommunityList from "./CommunityList";
import { MdAddCircle } from "react-icons/md";
import CommunityInsert from "./CommunityInsert";
import * as Components from '../Components';

let nextId = 4;

const CommunityMain = (props) => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [communities, setCommunities] = useState([
    {
      id: 1,
      text: "게시글1",
      content: "내용1",
      checked: false
    },
    {
      id: 2,
      text: "게시글2",
      content: "내용2",
      checked: false
    },
   {
      id: 3,
      text: "게시글3",
      content: "내용3",
      checked: false
    },
    {
      id: 4,
      text: "게시글4",
      content: "내용4",
      checked: false
    },{
      id: 5,
      text: "게시글5",
      content: "내용5",
      checked: false
    },{
      id: 6,
      text: "게시글6",
      content: "내용6",
      checked: false
    },{
      id: 7,
      text: "게시글7",
      content: "내용7",
      checked: false
    },{
      id: 8,
      text: "게시글8",
      content: "내용8",
      checked: false
    },{
      id: 9,
      text: "게시글9",
      content: "내용9",
      checked: false
    },{
      id: 10,
      text: "게시글10",
      content: "내용10",
      checked: false
    },{
      id: 11,
      text: "게시글11",
      content: "내용11",
      checked: false
    },{
      id: 12,
      text: "게시글12",
      content: "내용12",
      checked: false
    },{
      id: 13,
      text: "게시글13",
      content: "내용13",
      checked: false
    }
  ]);

  const onInsertToggle = () => {
    if (selectedCommunity) {
      setSelectedCommunity(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertCommunity = (text, content) => {
    if (text === "" || content === "") {
      return alert("제목과 내용을 모두 입력해주세요.");
    } else {
      const community = {
        id: nextId,
        text,
        content,
        checked: false
      };
      setCommunities((communities) => communities.concat(community));
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

  const onUpdate = (id, text, content) => {
    onInsertToggle();
    setCommunities((communities) =>
      communities.map((community) =>
        community.id === id ? { ...community, text, content } : community
      )
    );
  };

  return (
    <>
      {props.size ? (
        <Components.Group size={true}>
          <Template communityLength={communities.length} size={true}>
            <CommunityList
              communities={communities}
              onCheckToggle={onCheckToggle}
              onInsertToggle={onInsertToggle}
              onChangeSelectedCommunity={onChangeSelectedCommunity}
              size={true}
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
        </Components.Group>
      ) : (
        <Template communityLength={communities.length} size={false}>
          <CommunityList
            communities={communities}
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedCommunity={onChangeSelectedCommunity}
            size={false}
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
      )}
    </>
  );
};

export default CommunityMain;