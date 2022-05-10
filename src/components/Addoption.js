import React, { useState } from "react";

const Addoption = (props) => {
  const [error, setError] = useState(null);
  const handleItem = (event) => {
    Event.preventDefault();

    const option = Event.target.elements.option.value.trim();
    const errorData = props.addItem(option);
    setError(errorData);
    event.target.elements.option.value = "";
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleItem}>
        <input type="text" name="option" />
        <button>add-option</button>
      </form>
    </div>
  );
};

export default Addoption;
