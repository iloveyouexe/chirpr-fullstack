import React from "react";

const ChirpCard = ({ userid, content, _created, deleteChirp, id }) => {
  return (
    <>
      <h3>{userid}</h3>
      <p>{content}</p>
      <small>{_created}</small>
      <button
        onClick={() => deleteChirp(id)}
        className="btn btn-dark"
        type="submit"
      >
        Delete
      </button>
    </>
  );
};

export default ChirpCard;
