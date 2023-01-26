import React from "react";

const DeleteTask = (props) => {
  return (
    <button
      onClick={() => {
        const { del, id } = props;
        del(id);
      }}
    >
      &times;
    </button>
  );
};

export default DeleteTask;
