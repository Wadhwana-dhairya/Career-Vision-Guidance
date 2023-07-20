const express = require("express");
const User = require("../db/users");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate=require("../authenticate/authenticate.js")

//asnyc-await
// router.get("/", (req, res) => {
//     res.send("hello form me")
// })
// router.get("/apl", (req, res) => {
//     res.send("hello form e")
// })

router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
     
    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({error:"Please fill the data properly"})
    }
    // console.log(req.body);
    try {
        const userexist = await User.findOne({ email: email });
        if (userexist) {
          return  res.status(422).json({error:"Email already exist"})
        }
        else if (password !== cpassword) {
            res.status(422).json({error:"Password are not matching"})
        }
        const nuser = new User({ name, email, phone, work, password, cpassword });
        const val = await nuser.save();
        res.status(201).json({ message: "You are registered succesfuully" })
  
    }
    catch (err) {
        res.status(422).json({ message: "Invalid details" })
        // console.log(err)
    }

});

router.post("/signin", async(req, res) => {
    try {
        const { email ,password} = req.body;
        if (!email || !password ) {
            res.status(422).json({error:"Please fill the data properly"})
        }
        const userexist = await User.findOne({ email: email });
        if (userexist) {
            const ismatch = await bcrypt.compare(password, userexist.password);
            const token = await userexist.gAT();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 25928000000),
                httpOnly:true
            })
           if (!ismatch) {
            res.status(422).json({error:"please fill the valid details"})
          }
          else {
             res.status(201).json({ message: "You are login succesfuully" })
         }
        }
        else {
            res.status(422).json({error:"please fill the valid details"})
        }
  
    }
    catch (err) {
        console.log(err)
    }

});
router.get("/logout", authenticate, (req, res) => {
      res.clearCookie("jwt")
    //   console.log("cookie deleted");
      res.status(200).send("User logout successfully")
})
module.exports = router;