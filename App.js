const parent = React.createElement("h1",{id:"parent"}, [React.createElement(
    "div",{id:"child"},[React.createElement(
        "h1",{},"i am h1 tag"),React.createElement(
            "h2",{},"i am h2 tag")]),React.createElement(
                "div",{id:"child"},[React.createElement(
                    "h1",{},"i am h1 tag"),React.createElement(
                        "h2",{},"i am h2 tag")])])
const heading= React.createElement("h1" ,{id: "heading"}, "hello world from react");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
