import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <p>FRONTBUCKET</p>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu"></section>
              </div>
              <div className="column is-4">
                <section></section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
