// Product Component

/**
 * Module dependencies.
 */

import React, { Component } from "react";
import Footer from "./Footer";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "../public/css/style.css";
import $ from "jquery";
import { getData } from "./Helper";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productState: ""
    };
  }

  componentDidMount() {
    getData(
      `https://cdn.contentstack.io/v3/content_types/${process.env.REACT_APP_PRODUCT_CONTENT_TYPE}/entries/${process.env.REACT_APP_PRODUCT_ENTRY_UID}?environment=${process.env.REACT_APP_PUBLISH_ENVIRONMENT}&locale=en-us`
    )
      .then(data => {
        this.setState(
          {
            productState: data
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
      window.location.pathname != "/features" &&
      window.location.pathname != "/about"
    ) {
      $header.removeClass("opaque");
      $header.find(".logo > img").attr("src", $logoAlt);
    }

    $(window).on("scroll", function() {
      if (
        window.location.pathname != "/features" &&
        window.location.pathname != "/about" &&
        window.location.pathname != "/blog"
      ) {
        if (
          window.location.pathname.split("/")[1] !== "/blog" &&
          window.location.pathname.split("/")[2] === "" &&
          window.location.pathname.split("/")[2] === undefined
        ) {
          if ($(window).scrollTop() > 100) {
            $header.fadeIn().addClass("opaque");
            $header.find(".logo > img").attr("src", $logoDefault);
          } else {
            $header.removeClass("opaque");
            $header.find(".logo > img").attr("src", $logoAlt);
          }
        }
      }
    });
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
    if (this.state.productState !== "") {
      document.title = this.state.productState.data.entry.title;

      const productDescription = this.state.productState.data.entry.banner[0]
        .description;
      const rigthResources = this.state.productState.data.entry.right_sources
        .content;
      const buildData = this.state.productState.data.entry.real_data.content;
      const communicateData = this.state.productState.data.entry
        .process_communication.head_content;
      const trySection = this.state.productState.data.entry.products.content;
      const price = this.state.productState.data.entry.products.plans[0].amount;
      const feature = this.state.productState.data.entry.products.plans[0]
        .features;
      const featureTwo = this.state.productState.data.entry.products.plans[1]
        .features;
      const featureThree = this.state.productState.data.entry.products.plans[2]
        .features;
      const enterpriseAmt = this.state.productState.data.entry.products.plans[2]
        .amount;
      const tryItNow = this.state.productState.data.entry.try_now.content;
      const priceTwo = this.state.productState.data.entry.products.plans[1]
        .amount;

      return (
        <div>
          <section>
            <div
              className="product-hero-bg hero-bg"
              style={{
                "background-image": `url(${this.state.productState.data.entry.banner[0].banner_img.url}))`
              }}
            >
              <div className="aligned-container typed-container text-center">
                <div className="container">
                  <div>{ReactHtmlParser(productDescription)}</div>
                  <a href="/" className="btn btn-primary mrm">
                    {this.state.productState.data.entry.banner[0].cta.link}
                  </a>
                </div>
              </div>
            </div>

            <div className="main-container">
              <section className="margin-top-max">
                <div className="container">
                  {ReactHtmlParser(rigthResources)}
                  <div className="row">
                    <div className="col-md-4 col-xs-12 text-center icon-wrap">
                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry.right_sources
                              .right_sources_content[0].title
                          }
                        </strong>
                      </h4>
                      <p>
                        {
                          this.state.productState.data.entry.right_sources
                            .right_sources_content[0].description
                        }
                      </p>
                    </div>

                    <div className="col-md-4 col-xs-12 text-center icon-wrap">
                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry.right_sources
                              .right_sources_content[1].title
                          }
                        </strong>
                      </h4>
                      <p>
                        {
                          this.state.productState.data.entry.right_sources
                            .right_sources_content[1].description
                        }
                      </p>
                    </div>

                    <div className="col-md-4 col-xs-12 text-center icon-wrap">
                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry.right_sources
                              .right_sources_content[2].title
                          }
                        </strong>
                      </h4>
                      <p>
                        {
                          this.state.productState.data.entry.right_sources
                            .right_sources_content[2].description
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row border-bottom">
                  <div className="container feedback-wrap">
                    <img
                      className="img-responsive"
                      src={
                        this.state.productState.data.entry.right_sources.image
                          .url
                      }
                      alt=""
                    />
                  </div>
                </div>
              </section>

              <section className="margin-top-max margin-bottom-max">
                <div className="container">
                  {ReactHtmlParser(buildData)}
                  <div className="row">
                    <div className="col-md-6 text-left padding-right-max">
                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry.real_data
                              .real_data_content[0].title
                          }
                        </strong>
                      </h4>
                      <p className="mbl">
                        {
                          this.state.productState.data.entry.real_data
                            .real_data_content[0].description
                        }
                      </p>

                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry.real_data
                              .real_data_content[1].title
                          }
                        </strong>
                      </h4>
                      <p className="mbl">
                        {
                          this.state.productState.data.entry.real_data
                            .real_data_content[1].description
                        }
                      </p>

                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry.real_data
                              .real_data_content[2].title
                          }
                        </strong>
                      </h4>
                      <p className="mbl">
                        {
                          this.state.productState.data.entry.real_data
                            .real_data_content[2].description
                        }
                      </p>
                    </div>

                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src={
                          this.state.productState.data.entry.real_data.image.url
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="action-wrap">
                <div className="container text-center">
                  <h2 className="mbm">
                    {
                      this.state.productState.data.entry.see_it_in_action
                        .content
                    }
                  </h2>
                  <a href="" className="btn btn-primary">
                    {
                      this.state.productState.data.entry.see_it_in_action.cta
                        .tilte
                    }
                  </a>
                </div>
              </div>

              <section className="margin-top-max margin-bottom-max border-bottom">
                <div className="container">
                  {ReactHtmlParser(communicateData)}
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="img-responsive"
                        src={
                          this.state.productState.data.entry
                            .process_communication.image.url
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 text-left padding-left-max">
                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry
                              .process_communication.process_content[0].title
                          }
                        </strong>
                      </h4>
                      <p className="mbl">
                        {
                          this.state.productState.data.entry
                            .process_communication.process_content[0]
                            .description
                        }
                      </p>

                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry
                              .process_communication.process_content[1].title
                          }
                        </strong>
                      </h4>
                      <p className="mbl">
                        {
                          this.state.productState.data.entry
                            .process_communication.process_content[1]
                            .description
                        }
                      </p>

                      <h4>
                        <strong>
                          {
                            this.state.productState.data.entry
                              .process_communication.process_content[2].title
                          }
                        </strong>
                      </h4>
                      <p className="mbl">
                        {
                          this.state.productState.data.entry
                            .process_communication.process_content[2]
                            .description
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pricing  margin-bottom-max">
                <div className="container text-center">
                  {ReactHtmlParser(trySection)}

                  <div className="margin-top-max">
                    <a href="" className="btn btn-primary">
                      {this.state.productState.data.entry.products.cta.title}
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="prices price-1">
                        <div className="price-inner">
                          <h3>
                            {
                              this.state.productState.data.entry.products
                                .plans[0].title
                            }
                          </h3>

                          <div className="cost-line">
                            {ReactHtmlParser(price)}
                          </div>
                          <p>
                            {
                              this.state.productState.data.entry.products
                                .plans[0].label
                            }
                          </p>
                        </div>
                        {ReactHtmlParser(feature)}
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="prices price-1">
                        <div className="price-inner">
                          <h3>
                            {
                              this.state.productState.data.entry.products
                                .plans[1].title
                            }
                          </h3>

                          <div className="cost-line">
                            <p>{ReactHtmlParser(priceTwo)}</p>
                          </div>
                          <p>
                            {
                              this.state.productState.data.entry.products
                                .plans[1].label
                            }
                          </p>
                        </div>
                        {ReactHtmlParser(featureTwo)}
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="prices price-1">
                        <div className="price-inner">
                          <h3>
                            {
                              this.state.productState.data.entry.products
                                .plans[2].title
                            }
                          </h3>

                          {ReactHtmlParser(enterpriseAmt)}
                          <p>
                            {
                              this.state.productState.data.entry.products
                                .plans[2].label
                            }
                          </p>
                        </div>
                        {ReactHtmlParser(featureThree)}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="stay-tune-wrap">
                <div className="container text-center">
                  <a href="#" className="btn btn-tertiary">
                    {this.state.productState.data.entry.try_now.cta.title}
                  </a>
                  {ReactHtmlParser(tryItNow)}
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    } else if (this.state.productState == "") {
      return null;
    }
  }
}

export default Product;
