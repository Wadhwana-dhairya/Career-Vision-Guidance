import React from 'react'

const Guidance = () => {
  return (
    <>
      <div class="container text-center text-white hearderset custm mt-5">
        <button class="btn btn-warning text-dark btn-lg">EXPLORE!</button>
      </div>
      <section class="container ourservices text-center">
        <h1 data-aos="fade-left" data-offset="350">SERVICES PROVIDE BY US!</h1>
        <p>If you are happy, we are happy!</p>
        <div class="row rowsetting">
          <div class="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto" data-aos="fade-up" data-offset="300">
            <div class="imgsetting d-block m-auto">
              <img
                src="https://careervision.org/cv-v1/wp-content/uploads/2014/03/parents-with-son1-300x205.jpg" style={{ padding: "10px", height: "auto", fontSize:"1.2rem" }} />
            </div>
            <h2>Parents</h2>
            <p>Parents are the #1 influence on their children, but most don't have the experience to confidently
              guide career development.</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto" data-aos="fade-up" data-offset="300">
            <div class="imgsetting d-block m-auto">
              <img src="https://careervision.org/cv-v1/wp-content/uploads/2014/03/students-question-300x198.jpg"
                style={{ padding: "20px", height: "auto", fontSize:"1.2rem" }} />
            </div>
            <h2>Students</h2>
            <p>It often feels like there are more questions than answers when exploring career options. Check
              out how our high school career counseling and college career planning services can help.</p>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto" data-aos="fade-up" data-offset="300">
            <div class="imgsetting d-block m-auto">
              <img src="https://careervision.org/cv-v1/wp-content/uploads/2014/03/man-between-two-doors.jpg"
                style={{width: "95%", height:"auto",padding:"10px", fontSize:"1.9rem"}} />
            </div>
            <h2>Carrier Management</h2>
            <p>Don't turn your back on opportunities to manage your career. Learn how to navigate career choices
              with confidence.</p>
          </div>
        </div>
      </section>

      <section class="my-3">
        <div class="py-5 ">
          <h2 class="text-center">Feel free to fill the form for any queries :)</h2>
          <div class="w-50 m-auto">
            <form action="userinfo.php" method="post">
              <div class="form-group">
                <label for="">FirstName</label>
                <input type="text" name="user" autocomplete="off" class="form-control" />

              </div>
              <div class="form-group">
                <label for="">LastName</label>
                <input type="text" name="username" autocomplete="off" class="form-control" />

              </div>
              <div class="form-group">
                <label for="">Email </label>
                <input type="text" name="email" autocomplete="off" class="form-control" />

              </div>
              <div class="form-group">
                <label for="">Mobile No.</label>
                <input type="text" name="mobile" autocomplete="off" class="form-control" />

              </div>
              <div class="form-group">
                <label for="">Comment</label>
                <textarea class="form-control" name="comment"></textarea>

              </div>
              <button type="submit" class="btn btn-warning text-center">Submit</button>
            </form>
          </div>

        </div>

      </section>

      <footer class="footer text-center">
        <a href="https://www.facebook.com"> <i class="icons fab fa-facebook fa-2x " style={{ color: "blue" }}></i></a>
        <a href="https://www.instagram.com"> <i class="icons fab fa-instagram fa-2x"
          style={{ color: "rgb(236, 81, 133)" }}></i></a>
        <a href="https://www.linkedin.com"><i class=" icons fab fa-linkedin fa-2x"
          style={{ color: "rgb(17, 90, 138)" }}></i></a>
        <a href="https://www.twitter.com"><i class=" icons fab fa-twitter fa-2x"
          style={{ color: "rgb(55, 150, 206)" }}></i></a>
        <h6 class="text-center">Copyright © 2023 , Proudly created by DE team </h6>
      </footer>
    </>
  );
}

export default Guidance