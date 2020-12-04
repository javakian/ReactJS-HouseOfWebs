import React from "react";
import { header, intro, intro2, list } from "./data";

const Context = React.createContext();

class Provider extends React.Component {
  state = {
    header,
    intro,
    intro2,
    list,
    itemForDetailPage: {},
    cords: {},
    windowScrollPosition: 0
  };

  getDetailPageItem = id => {
    this.setState({
      itemForDetailPage: this.state.list.find(item => item.id === id)
    });
  };

  getCords = id => {
    this.setState({
      cords: document.getElementById(id).getBoundingClientRect(),
      windowScrollPosition: window.scrollY
    });
    this.getDetailPageItem(id);
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          getCords: this.getCords,
          getDetailPageItem: this.getDetailPageItem
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
