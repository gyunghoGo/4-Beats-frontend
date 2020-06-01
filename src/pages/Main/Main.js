import React from "react";
import { withRouter } from "react-router-dom";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import Footer from "../../components/Footers/Footers";
import Story from "../Stories/StoryContainer/StoryContainer";
//import BuyHeader from "../../components/Headers/BuyHeader/BuyHeader";
//import CartHeader from "../../components/Headers/CartHeader/CartHeader";
export class Main extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Story />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
