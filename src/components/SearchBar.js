import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmitForm}>
        <div className="field">
          <label>Search Image</label>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
