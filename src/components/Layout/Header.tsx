import React from "react";

function Header() {
  console.log("isSerer");
  
  return (
    <>
      <header>
        <div id="header-layout2" className="header-style3">
          <div className="header-top-bar">
            <div className="top-bar-top bg-primarytextcolor ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <ul className="news-info-list text-center--md">
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        Australia
                      </li>
                      <li>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span id="current_date"></span>
                      </li>
                      <li>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>Last
                        Update 11.30 am
                      </li>
                      <li>
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        29&#8451; Sydney, Australia
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <ul className="header-social">
                      <li>
                        <a href="#" title="facebook">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="twitter">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="google-plus">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="linkedin">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="pinterest">
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="rss">
                          <i className="fa fa-rss" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="vimeo">
                          <i className="fa fa-vimeo" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-bar-bottom bg-body pt-20 pb-20 d-none d-lg-block">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-4">
                    <div className="logo-area">
                      <a href="index.html" className="img-fluid">
                        <img src="img/logo-dark.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ne-banner-layout1 pull-right">
                      <a href="#">
                        <img
                          src="img/banner/banner2.jpg"
                          alt="ad"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* stick header-menu-fixed */}
          <div className="main-menu-area bg-body border-bottom " id="sticker">
            <div className="container">
              <div className="bg-primarytextcolor pl-15 pr-15">
                <div className="row no-gutters d-flex align-items-center">
                  <div className="col-lg-10 position-static d-none d-lg-block">
                    <div className="ne-main-menu">
                      <nav id="dropdown">
                        <ul>
                          <li className="active">
                            <a href="#">Home</a>
                            <ul className="ne-dropdown-menu">
                              <li>
                                <a href="index.html">Home 1</a>
                              </li>
                              <li>
                                <a href="index2.html">Home 2</a>
                              </li>
                              <li className="active">
                                <a href="index3.html">Home 3</a>
                              </li>
                              <li>
                                <a href="index4.html">Home 4</a>
                              </li>
                              <li>
                                <a href="index5.html">Home 5</a>
                              </li>
                              <li>
                                <a href="index6.html">Home 6</a>
                              </li>
                              <li>
                                <a href="index7.html">Home 7</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Post</a>
                            <ul className="ne-dropdown-menu">
                              <li>
                                <a href="post-style-1.html">Post Style 1</a>
                              </li>
                              <li>
                                <a href="post-style-2.html">Post Style 2</a>
                              </li>
                              <li>
                                <a href="post-style-3.html">Post Style 3</a>
                              </li>
                              <li>
                                <a href="post-style-4.html">Post Style 4</a>
                              </li>
                              <li>
                                <a href="single-news-1.html">News Details 1</a>
                              </li>
                              <li>
                                <a href="single-news-2.html">News Details 2</a>
                              </li>
                              <li>
                                <a href="single-news-3.html">News Details 3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Pages</a>
                            <ul className="ne-dropdown-menu">
                              <li>
                                <a href="author-post.html">Author Post Page</a>
                              </li>
                              <li>
                                <a href="archive.html">Archive Page</a>
                              </li>
                              <li>
                                <a href="gallery-style-1.html">
                                  Gallery Style 1
                                </a>
                              </li>
                              <li>
                                <a href="gallery-style-2.html">
                                  Gallery Style 2
                                </a>
                              </li>
                              <li>
                                <a href="404.html">404 Error Page</a>
                              </li>
                              <li>
                                <a href="contact.html">Contact Page</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="post-style-1.html">Politics</a>
                          </li>
                          <li>
                            <a href="post-style-2.html">Business</a>
                          </li>
                          <li>
                            <a href="post-style-3.html">Sports</a>
                          </li>
                          <li>
                            <a href="post-style-4.html">Fashion</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12 text-right position-static">
                    <div className="header-action-item on-mobile-fixed">
                      <ul>
                        <li>
                          <form
                            id="top-search-form"
                            className="header-search-light"
                          >
                            <input
                              type="text"
                              className="search-input"
                              placeholder="Search...."
                              style={{ display: "none" }}
                            />
                            <button className="search-button">
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </form>
                        </li>
                        <li className="d-none d-sm-block d-md-block d-lg-none">
                          <button
                            type="button"
                            className="login-btn"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            <i className="fa fa-user" aria-hidden="true"></i>
                            Sign in
                          </button>
                        </li>
                        <li>
                          <div
                            id="side-menu-trigger"
                            className="offcanvas-menu-btn offcanvas-btn-repoint"
                          >
                            <a href="#" className="menu-bar">
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                            <a href="#" className="menu-times close">
                              <span></span>
                              <span></span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
