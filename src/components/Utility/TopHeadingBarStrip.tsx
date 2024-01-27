import React, { useEffect, useState } from "react";

function TopHeadingBarStrip() {
  // const [add,setAdd] = useState('')
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     const { latitude, longitude } = pos.coords;
  //     console.log(latitude, longitude);
  //     const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => console.log(data.address, "???"));
  //   });
  // }, []);
  return (
    <>
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
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
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
    </>
  );
}

export default TopHeadingBarStrip;
