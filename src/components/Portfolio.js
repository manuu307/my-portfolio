import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);

    return (
      <Fragment>
        <PortfolioModal open={modal} close={() => setModal(false)} />
        <div className="edrea_tm_section hidden animated" id="portfolio">
          <div className="section_inner">
            <div className="edrea_tm_portfolio swiper-section">
              <div className="edrea_tm_main_title">
                <h3>
                  Techie <span className="coloring">Portfolio</span>
                </h3>
              </div>
              <div className="portfolio_list gallery_zoom">
                <Swiper {...portfolioSlider} className="swiper-container">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/portfolio/carolinat.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/carolinat.jpg"
                            target='_blank'
                            rel="noreferrer"
                          />
                        </div>
                        <div className="details">
                          <h3>Portfolio</h3>
                          <span>Web</span>
                        </div>
                        <a
                          className="edrea_tm_full_link popup-vimeo"
                          href="https://carot.valkiriasolutions.com"
                          target='_blank'
                          rel="noreferrer"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/portfolio/valkiriasolutions.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/valkiriasolutions.jpg"
                          />
                        </div>
                        <div className="details">
                          <h3>Marketing Site</h3>
                          <span>Web</span>
                        </div>
                        <a
                          className="edrea_tm_full_link popup-youtube"
                          href="https://www.valkiriasolutions.com"
                          target='_blank'
                          rel="noreferrer"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/portfolio/mercuriopi.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/mercuriopi.jpg"
                          />
                        </div>
                        <div className="details">
                          <h3>Analytics Site</h3>
                          <span>Web</span>
                        </div>
                        <a
                          className="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                          href="https://mercuriopi.com/"
                          target='_blank'
                          rel="noreferrer"
                        />
                      </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/1-1.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/4.jpg"
                          />
                        </div>
                        <div className="details">
                          <h3>Delicious Apple</h3>
                          <span>Detail</span>
                        </div>
                        <a
                          className="edrea_tm_full_link portfolio_popup"
                          href="#"
                          onClick={() => setModal(true)}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/1-1.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/5.jpg"
                          />
                        </div>
                        <div className="details">
                          <h3>Blue Lemon</h3>
                          <span>Image</span>
                        </div>
                        <a
                          className="edrea_tm_full_link zoom"
                          href="img/portfolio/5.jpg"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/1-1.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/6.jpg"
                          />
                        </div>
                        <div className="details">
                          <h3>Sweet Cheery</h3>
                          <span>Image</span>
                        </div>
                        <a
                          className="edrea_tm_full_link zoom"
                          href="img/portfolio/6.jpg"
                        />
                      </div>
                    </SwiperSlide> */}
                  </div>
                  <div className="edrea_tm_swiper_progress fill">
                    <div className="my_pagination_in">
                      <span className="current" />
                      <span className="pagination_progress">
                        <span className="all">
                          <span />
                        </span>
                      </span>
                      <span className="total" />
                    </div>
                    <div className="my_navigation">
                      <ul>
                        <li>
                          <a className="my_prev" href="#">
                            <i className="icon-left-open-1" />
                          </a>
                        </li>
                        <li>
                          <a className="my_next" href="#">
                            <i className="icon-right-open-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
};
export default Portfolio;
