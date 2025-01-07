import React from "react";

function StepsList({ steps }) {
  return (
    <>
      <h2>Directions</h2>
      <ol>
        {steps.map((step, index) => {
          return <li key={index}>{step.name}</li>;
        })}
      </ol>
    </>
  );
}

export default StepsList;
