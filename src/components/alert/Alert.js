import React from "react";

const Alert = ({ message, setVisibility }) => {
  return (
    <div className="container">
      <div className="alert m-1 alert-success p-3" role="alert">
        <strong>{message}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => setVisibility(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Alert;
