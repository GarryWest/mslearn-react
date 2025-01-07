import "./RecipeTitle.css";
import React from "react";

// Create RecipeTitle component
function RecipeTitle({title, feedback}) {
  return (
    <section>
      <h2>{title}</h2>
      <h3 className={feedback.rating <= 3.5 ? "red" : "green"}>
        {feedback.rating} from {feedback.reviews} reviews
      </h3>
    </section>
  );
}

export default RecipeTitle;
