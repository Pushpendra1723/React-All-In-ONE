const heading1 = React.createElement("h1", {}, "Welcome Pushpendra Kumar");
const heading2 = React.createElement(
  "h2",
  {},
  "Hello Everyone Pushpendra Coded this side."
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
