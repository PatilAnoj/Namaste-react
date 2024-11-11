import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement(
    "div",
    { id: "headers"},
    [
        React.createElement("div",{key:"div1"},
            [
                React.createElement('h1', { key: 1 }, "this is h1 from react div1"), 
                React.createElement('h3', { key: 2 }, "this is h3 from react div1")
            ]
        ),
        React.createElement("div",{key:"div2"},
            [
                React.createElement('h1', { key: 1 }, "this is h1 from react div2"), 
                React.createElement('h3', { key: 2 }, "this is h3 from react div2")
            ]
        )
    ]
);

console.log(heading);
console.log(React);
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
root.render(heading);
console.log(root);