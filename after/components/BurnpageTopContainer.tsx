import React from 'react'
function BurnpageTopContainer({ children } : {children : React.ReactNode})  {
  return (
    <div
      className="top_conatiner burnpage"
      style={{ alignItems: "flex-start" }}
    >
      {children}
    </div>
  );
}

export default BurnpageTopContainer;


