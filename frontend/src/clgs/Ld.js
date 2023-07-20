import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Ld = () => {
  return (
    <>
      <div class="ishika">
        <div class="row">
          <div class="column">
            <h1 class="DEHEAD2">L.D.College of engineering</h1>
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
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://ldce.ac.in/img/sliders/LDCE-SAFEGUARD-YOUR-FUTURE.jpg"
                    height="580px"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://ldce.ac.in/upload/gallery/1/civil-engineering-NUOFlJg9xP.jpg"
                    height="580px"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://ldce.ac.in/upload/gallery/3/computer-engineering-a8IxdPd41x.jpg"
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
              L.D.College of Engineering, Ahmedabad is a premier engineering
              college in Gujarat State set with the objectives of imparting
              higher education in various fields of engineering.
            </p>
            <p>
              The institute is Gujarat University and administrated by
              Department of Technical education, Gujarat State. Sheth Shri
              Kasturbhai Lalbhai established institute in 1948 with generous
              donation. It is situated adjacent to Gujarat University and at
              nucleus of various national level institutes like PRL, ATIRA,
              ISRO, IIM etc.
            </p>
            <p>
              The campus consists of buildings for various departments, offices,
              hostels and library with 64,565 sq.meter builtup area.
            </p>
            <p>
              The institute made a modest start with 75 students for
              undergraduate programs in 1948, post graduate programs in 1954. At
              present institute runs 14 undergraduate, 17-post graduate and 4
              part-time programs.
            </p>
            Source:{" "}
            <NavLink href="https://ldce.ac.in/">https://ldce.ac.in/</NavLink>
          </div>
          <div class="CON">
            <h2 class="DEHEAD">Cutoff Information:</h2>
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
                  <td>555</td>
                  <td>716</td>
                  <td>2139</td>
                  <td>11523</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>3398</td>
                  <td>5623</td>
                  <td>15199</td>
                  <td>23233</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td>4883</td>
                  <td>6000</td>
                  <td>10776</td>
                  <td>19610</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>3291</td>
                  <td>5315</td>
                  <td>9834</td>
                  <td>16610</td>
                </tr>
                <tr>
                  <td>Information Technology</td>
                  <td>699</td>
                  <td>964</td>
                  <td>4299</td>
                  <td>12010</td>
                </tr>
                <tr>
                  <td>Chemical Engineering</td>
                  <td>2463</td>
                  <td>5286</td>
                  <td>8910</td>
                  <td>18060</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="main">
            <div class="contain">
              <h2 class="DEHEAD">Placement Information:</h2>
              <br />
              <table border="4" class="able table-bordered">
                <tr>
                  <th>Course</th>
                  <th>No. of Offers</th>
                </tr>
                <tr>
                  <td>Computer Engineering</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>Civil Engineering</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td>Electrical Engineering</td>
                  <td>46</td>
                </tr>
                <tr>
                  <td>Mechanical Engineering</td>
                  <td>77</td>
                </tr>
                <tr>
                  <td>Information Technology</td>
                  <td>97</td>
                </tr>
                <tr>
                  <td>Chemical Engineering</td>
                  <td>48</td>
                </tr>
              </table>
            </div>
            <div class="CON3">
              <h5>Placement Year : 2022-2023</h5>
              <h5>No. of Students placed : 567</h5>
              <h5>Highest Package : 10LPA</h5>
              <h5>Average Package : 5.5LPA</h5>
            </div>
          </div>

          <div class="gt">
            <h5>Address : </h5>
            <h6 class="DEHEAD1">
              L.D. College of Engineering
              <br />
              Opp Gujarat University,
              <br />
              Navrangpura, Ahmedabad - 380015.
              <br />
              GUJARAT INDIA
              <br />
            </h6>
            <h6>Phone No: 079 2630 2887</h6>
            <h6>
              Email:
              <NavLink href="ldce-abad-dte@gujarat.gov.in">
                ldce-abad-dte@gujarat.gov.in
              </NavLink>
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

export default Ld;
