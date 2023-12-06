import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import "./CommunityInsert.css";

const CommunityInsert = ({
  onInsertToggle,
  onInsertCommunity,
  selectedCommunity,
  onRemove,
  onUpdate
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onContentChange = e => {
    setContent(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertCommunity({ title, content });
    setTitle("");
    setContent("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedCommunity) {
      setTitle(selectedCommunity.title);
      setContent(selectedCommunity.content);
    }
  }, [selectedCommunity]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedCommunity
            ? () => {
                onUpdate(selectedCommunity.id, { title, content });
              }
            : onSubmit
        }
      >
        <input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onTitleChange}
        ></input>
        <input
          placeholder="내용을 입력하세요"
          value={content}
          onChange={onContentChange}
        ></input>
        {selectedCommunity ? (
          <div className="rewrite">
            <TiPencil
              onClick={() => {
                onUpdate(selectedCommunity.id, { title, content });
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedCommunity.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default CommunityInsert;
