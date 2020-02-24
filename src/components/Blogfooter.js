// Blog Footer description Component

/**
 * Module dependencies.
 */

import React, { Component } from "react";
import '../assets/css/style.css';
import '../assets/css/blog.css';
import { getData } from "./Helper";

class Blogfooter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: ""
    };
  }

  componentDidMount() {
    getData(
      `https://cdn.contentstack.io/v3/content_types/${process.env.REACT_APP_BLOG_IMAGE_URL_CONTENT_TYPE}/entries/${process.env.REACT_APP_BLOG_IMAGE_URL_ENTRY_UID}?environment=${process.env.REACT_APP_PUBLISH_ENVIRONMENT}&locale=en-us`
    )
      .then(data => {
        this.setState(
          {
            image: data
          },
          () => {}
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.image !== "") {
      return (
        <div>
          <h3>{this.state.image.data.entry.blog_footer_section}</h3>
          <p>{this.state.image.data.entry.blog_footer_description}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Blogfooter;
