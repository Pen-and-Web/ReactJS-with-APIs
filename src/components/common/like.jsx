import React from "react";

// Input: liked: boolean
// output: onClick

// class Like extends Component {
//   state = {};
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i
//         onClick={this.props.onClick}
//         className={classes}
//         style={{ cursor: "pointer" }}
//         aria-hidden="true"
//       ></i>
//     );
//   }
// }

//export default Like;

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
