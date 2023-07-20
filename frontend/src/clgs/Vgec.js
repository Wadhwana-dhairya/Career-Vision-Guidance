import React from "react";

const Vgec = () => {
  return (
    <>
      <div class="ishika">
        <div class="row">
          <div class="column">
            <h1 class="DEHEAD">Vishwakarma Government Engineering College</h1>
            <h3 class="DEHEAD1">Ahmedabad, Gujarat</h3>
          </div>

          <div class="column">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                {/* <!-- <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button> --> */}
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://images.shiksha.com/mediadata/images/1489317390phpxSXmMe.jpeg"
                    height="580px"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.vgecg.ac.in/images/photoslider/3.jpg"
                    height="580px"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="CON">
            <p>
              With an established reputation as one of the leading engineering
              institutes of Gujarat state, VGECG, Ahmedabad has become the first
              choice for many students willing to pursue a B.E. or M.E., to
              build their career as an Engineer.
            </p>
            <p>
              Vishwakarma Government Engineering College, Ahmedabad was
              established in August 1994, with an objective of imparting higher
              education in various fields of engineering and technology.
            </p>
            <p>
              This institute is recognized by All India Council of Technical
              Education (AICTE), New Delhi and Institute of Engineers (India).
              The college is administrated by Directorate of Technical
              Education, Gujarat State, Gandhinagar and is affiliated with
              Gujarat University.
            </p>
            Source:{" "}
            <a href="https://www.vgecg.ac.in/">https://www.vgecg.ac.in/</a>
          </div>
          <div class="CON">
            <h2 class="DEHEAD3">Cutoff Information:</h2>
            <br />
            <table border="4" class="able table-bordered">
              <thead>
                <tr>
                  <th rowspan="2">Course</th>
                  <th colspan="4">Closing Rank</th>
                </tr>
                <tr>
                  <th> General Category </th>
                  <th> EBC </th>
                  <th> ST </th>
                  <th> SC </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Computer Engineering</td>
                  <td>1065</td>
                  <td>1172</td>
                  <td>5381</td>
                  <td>22496</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>9713</td>
                  <td>11730</td>
                  <td>16667</td>
                  <td>19452</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td>11124</td>
                  <td>12436</td>
                  <td>22021</td>
                  <td>27941</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>5440</td>
                  <td>8196</td>
                  <td>17393</td>
                  <td>30030</td>
                </tr>
                <tr>
                  <td>Information Technology</td>
                  <td>1312</td>
                  <td>2012</td>
                  <td>6187</td>
                  <td>23056</td>
                </tr>
                <tr>
                  <td>Chemical Engineering</td>
                  <td>6227</td>
                  <td>8286</td>
                  <td>18489</td>
                  <td>30866</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="main">
            <div class="contain">
              <h2 class="DEHEAD3">Placement Information:</h2>
              <br />
              <table border="4" class="able table-bordered">
                <tr>
                  <th>Course</th>
                  <th>No. of Offers</th>
                </tr>
                <tr>
                  <td>Computer Engineering</td>
                  <td>89</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td>58</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>61</td>
                </tr>
                <tr>
                  <td>Information Technology</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Chemical Engineering</td>
                  <td>35</td>
                </tr>
              </table>
            </div>
            <div class="CON3">
              <h5>Placement Year : 2022-2023</h5>
              <h5>No. of Students placed : 355</h5>
              <h5>Highest Package : 10LPA</h5>
              <h5>Average Package : 4.3LPA</h5>
            </div>
          </div>

          <div class="CON">
            <h5>Address : </h5>
            <h6 class="DEHEAD1">
              Vishwakarma Government Engineering College
              <br />
              Sabarmati-Koba highway
              <br />
              Chandkheda, Ahmedabad-382424
              <br />
              GUJARAT INDIA
              <br />
            </h6>
            <h6>Phone No: (079) 23293866</h6>
            <h6>
              Email: <a href="est@vgecg.ac.in">est@vgecg.ac.in</a>
            </h6>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Vgec;
