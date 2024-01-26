import React from "react";

function NewsAdsBanners() {
  return (
    <>
      <section className="bg-body">
        <div className="container-fluid p-none">
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-12">
              <div className="img-scale-animate">
                <img
                  src="img/news/news128.jpg"
                  alt="news"
                  className="img-fluid width-100"
                />
                <div className="mask-content-v-center">
                  <div className="topic-box-sm color-white mb-20">
                    Technology
                  </div>
                  <h1 className="title-medium-dark size-c36 width-70">
                    <a href="single-news-1.html">
                      A brilliant screen for your ideas.
                    </a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="img-scale-animate">
                <img
                  src="img/news/news129.jpg"
                  alt="news"
                  className="img-fluid width-100"
                />
                <div className="mask-content-top-left">
                  <div className="topic-box-sm color-white mb-20">Apple</div>
                  <h3 className="title-medium-light size-c24 width-85">
                    <a href="single-news-1.html">
                      New Technology Apple just released 2017
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="img-scale-animate position-relative">
                <img
                  src="img/news/news130.jpg"
                  alt="news"
                  className="img-fluid width-100"
                />
                <div className="mask-content-top-left">
                  <div className="topic-box-sm color-white mb-20">
                    Electronics
                  </div>
                  <h3 className="title-medium-light size-c24 width80--lg">
                    <a href="single-news-1.html">
                      MackBook Pro 2017 jnow in $1,500
                    </a>
                  </h3>
                </div>
              </div>
              <div className="img-scale-animate position-relative">
                <img
                  src="img/news/news131.jpg"
                  alt="news"
                  className="img-fluid width-100"
                />
                <div className="mask-content-top-left">
                  <div className="topic-box-sm color-white mb-20">Gadgets</div>
                  <h3 className="title-medium-light size-c24 width80--lg">
                    <a href="single-news-1.html" className="hover-color-dark">
                      VR Box Awesome Camera
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsAdsBanners;
