import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    {
      checked: false,
      text: "Add your items"
    }
    ]
});

export default Store;
