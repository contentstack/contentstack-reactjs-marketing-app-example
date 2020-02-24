//Features Component

/**
 * Module dependencies.
 */

import React, { Component } from "react";
import Footer from "./Footer";
import '../assets/css/style.css';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
import $ from "jquery";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { getData } from "./Helper";

class Features extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      feature: ""
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  componentDidMount() {
    getData(
      `https://cdn.contentstack.io/v3/content_types/${process.env.REACT_APP_FEATURE_CONTENT_TYPE}/entries/${process.env.REACT_APP_FEATURE_ENTRY_UID}?environment=${process.env.REACT_APP_PUBLISH_ENVIRONMENT}&locale=en-us`
    )
      .then(data => {
        this.setState(
          {
            feature: data
          },
          () => {}
        );
      })
      .catch(err => {
        console.log(err);
      });

    var $header = $(".header-animated");
    var $headers = $(".header-animated opaque");
    var $logoAlt = $header.find(".logo > img").data("logo-alt"); // white logo
    var $logoDefault = $header.find(".logo > img").data("logo-default"); // black logo
    $(".header").css("display", "block");

    if (
      window.location.pathname == "/features" ||
      window.location.pathname == "/about"
    ) {
      $(".header").addClass("opaque");
      $header.find(".logo > img").attr("src", $logoDefault);
    } else {
      $(".header").removeClass("opaque");
    }
    $(".dropdown").hover(
      function() {
        $(".dropdown").addClass("open");
      },
      function() {
        $(".dropdown").removeClass("open");
      }
    );
  }

  render() {
    if (this.state.feature !== "") {
      document.title = this.state.feature.data.entry.title;

      const headingAdvantage = this.state.feature.data.entry.advantages.content;
      const descriptionOne = this.state.feature.data.entry.advantages
        .advantages[0].description;
      const descriptionTwo = this.state.feature.data.entry.advantages
        .advantages[1].description;
      const descriptionThree = this.state.feature.data.entry.advantages
        .advantages[2].description;
      const descriptionFour = this.state.feature.data.entry.advantages
        .advantages[3].description;
      const tabOne = this.state.feature.data.entry.advantages.tab_section[0]
        .description;
      const tabTwo = this.state.feature.data.entry.advantages.tab_section[1]
        .description;
      const tabThree = this.state.feature.data.entry.advantages.tab_section[2]
        .description;

      return (
        <>
          <div className="main-container">
            <section className="advantages-wrap margin-top-max">
              <div className="container">
                <div className="text-center">
                  {ReactHtmlParser(headingAdvantage)}
                </div>
                <div className="row text-center">
                  <div className="col-md-3 col-xs-6 icon-wrap">
                    <i className="icon-responsive fa-4x"></i>
                    <h4>
                      <strong>
                        {
                          this.state.feature.data.entry.advantages.advantages[0]
                            .title
                        }
                      </strong>
                    </h4>
                    <p className="text-center"></p>
                    <p>{ReactHtmlParser(descriptionOne)}</p>
                    <p></p>
                  </div>
                  <div className="col-md-3 col-xs-6 icon-wrap">
                    <i className="icon-clean-code fa-4x"></i>
                    <h4>
                      <strong>
                        {
                          this.state.feature.data.entry.advantages.advantages[1]
                            .title
                        }
                      </strong>
                    </h4>
                    <p className="text-center"></p>
                    <p>{ReactHtmlParser(descriptionTwo)}</p>
                    <p></p>
                  </div>
                  <div className="col-md-3 col-xs-6 icon-wrap">
                    <i className="icon-ui-design fa-4x"></i>
                    <h4>
                      <strong>
                        {
                          this.state.feature.data.entry.advantages.advantages[2]
                            .title
                        }
                      </strong>
                    </h4>
                    <p className="text-center"></p>
                    <p>{ReactHtmlParser(descriptionThree)}</p>
                    <p></p>
                  </div>
                  <div className="col-md-3 col-xs-6 icon-wrap">
                    <i className="icon-for-business fa-4x"></i>
                    <h4>
                      <strong>
                        {
                          this.state.feature.data.entry.advantages.advantages[3]
                            .title
                        }
                      </strong>
                    </h4>
                    <p className="text-center"></p>
                    <p>{ReactHtmlParser(descriptionFour)}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="tab-container margin-top-max margin-bottom-max"
              id="tabs"
            >
              <div className="container text-center">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a href="#tab1" data-toggle="tab" aria-expanded="true">
                      {
                        this.state.feature.data.entry.advantages.tab_section[0]
                          .title
                      }
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab2" data-toggle="tab" aria-expanded="false">
                      {
                        this.state.feature.data.entry.advantages.tab_section[1]
                          .title
                      }
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab3" data-toggle="tab" aria-expanded="false">
                      {
                        this.state.feature.data.entry.advantages.tab_section[2]
                          .title
                      }
                    </a>
                  </li>
                </ul>
                <div className="row">
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content">
                    <div className="tab-pane fade active in" id="tab1">
                      <div className="col-md-6 col-sm-6 col-sm-push-6 text-left animated fadeInRight">
                        <img
                          className="img-responsive"
                          src={
                            this.state.feature.data.entry.advantages
                              .tab_section[0].image.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 col-sm-pull-6 text-left animated fadeInLeft">
                        {ReactHtmlParser(tabOne)}
                        <a href="#" className="btn btn-primary mrl">
                          {
                            this.state.feature.data.entry.advantages
                              .tab_section[0].cta[0].title
                          }
                        </a>
                        <a href="#" className="btn btn-secondary">
                          {
                            this.state.feature.data.entry.advantages
                              .tab_section[1].cta[1].title
                          }
                        </a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab2">
                      <div className="col-md-6 col-sm-6 col-sm-push-6 text-left animated fadeInRight">
                        <img
                          className="img-responsive"
                          src={
                            this.state.feature.data.entry.advantages
                              .tab_section[1].image.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 col-sm-pull-6 text-left animated fadeInLeft">
                        {ReactHtmlParser(tabTwo)}
                        <a href="#" className="btn btn-primary mrl">
                          {
                            this.state.feature.data.entry.advantages
                              .tab_section[0].cta[0].title
                          }
                        </a>
                        <a href="#" className="btn btn-secondary">
                          {
                            this.state.feature.data.entry.advantages
                              .tab_section[1].cta[1].title
                          }
                        </a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3">
                      <div className="col-md-6 col-sm-6 col-sm-push-6 text-left animated fadeInRight">
                        <img
                          className="img-responsive"
                          src={
                            this.state.feature.data.entry.advantages
                              .tab_section[2].image.url
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 col-sm-pull-6 text-left animated fadeInLeft">
                        {ReactHtmlParser(tabThree)}
                        <a href="#" className="btn btn-primary mrl">
                          {
                            this.state.feature.data.entry.advantages
                              .tab_section[0].cta[0].title
                          }
                        </a>
                        <a href="#" className="btn btn-secondary">
                          {
                            this.state.feature.data.entry.advantages
                              .tab_section[1].cta[1].title
                          }
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="video-wrap"
              style={{
                "background-image": `url(${this.state.feature.data.entry.video_section.image.url})`
              }}
            >
              <div className="background-overlay"></div>
              <span
                onClick={this.openModal}
                className="fa fa-play"
                data-toggle="modal"
                data-target="#videoModal"
              ></span>
            </div>
          </div>
          <ModalVideo
            ratio="21:10"
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="aywP_ozA2NY"
            onClose={() => this.setState({ isOpen: false })}
          />
          <Footer />
        </>
      );
    } else {
      return null;
    }
  }
}

export default Features;
