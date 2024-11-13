import React from "react";
import "./news.css";

function News() {
  return (
    <>
      <section id="news">
        <div class="news-heading">
          <p style={{ fontSize: "25px", textDecorationLine: "underline" }}>
            Fashion New Trends
          </p>
        </div>
        <div class="l-news container">
          <div class="l-news1">
            <div class="news1-img">
              <img src="https://i.postimg.cc/2y6wbZCm/news1.jpg" alt="img" />
            </div>
            <div class="news1-conte">
              <div class="date-news1" style={{ backgroundColor: "white" }}>
                <p>
                  <i class="bx bxs-calendar"></i> 12 February 2023
                </p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
          <div class="l-news2">
            <div class="news2-img">
              <img src="https://i.postimg.cc/9MXPK7RT/news2.jpg" alt="img" />
            </div>
            <div class="news2-conte">
              <div class="date-news2" style={{ backgroundColor: "white" }}>
                <p>
                  <i class="bx bxs-calendar"></i> 17 February 2023
                </p>
                <h4>The Health Benefits Of Sunglasses</h4>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
          <div class="l-news3">
            <div class="news3-img">
              <img src="https://i.postimg.cc/x1KKdRLM/news3.jpg" alt="img" />
            </div>
            <div class="news3-conte">
              <div class="date-news3" style={{ backgroundColor: "white" }}>
                <p>
                  <i class="bx bxs-calendar"></i> 26 February 2023
                </p>
                <h4>Eternity Bands Do Last Forever</h4>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
