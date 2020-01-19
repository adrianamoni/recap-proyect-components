import React from "react";
const LastLevelComp = ({ data, verdura }) => {
  return (
    <div>
      <h1>Props received:</h1>
      <ul>
        <li>{data}</li>
        <li>{verdura}</li>
      </ul>
    </div>
  );
};

export default LastLevelComp;
