import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor
  };

  return (
    <div>
      <div style={style}></div>
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
