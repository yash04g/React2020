// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail'

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author = "Sam" />
      <CommentDetail author = "Alex" />
      <CommentDetail author = "Jane" />
    </div>
  );
};

// Take the react component and show it in on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
