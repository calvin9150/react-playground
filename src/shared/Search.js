// shared/Search.js
import React, { useCallback } from "react";
import _ from "lodash"; // lodash 부르기

const Search = () => {
  const debounce = _.debounce((e) => console.log("디바운스! :::", e), 1000);
  const keyPress = useCallback(debounce, [debounce]);

  const onChange = (e) => {
    keyPress(e.target.value);
  };

  return (
    <div>
      <label>Search:</label>
      <input onChange={onChange} />
    </div>
  );
};

export default Search;
