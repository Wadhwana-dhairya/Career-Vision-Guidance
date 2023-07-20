const mongoose = require("mongoose")
const dotenv=require("dotenv")
const bcrypt = require("bcryptjs");
dotenv.config({ path: './config.env' })
const jwt = require("jsonwebtoken");
const validator=require("validator")


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    phone: {
        type: Number,
        require: true,
        min:10
    },
    work:{
        type: String,
        require:true
    },
    password: {
        type: String,
        require: true,
        min:8
    },
    cpassword: {
        type: String,
        require: true,
        min:8
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    tokens: [
        {
            token: {
                type: String,
                require:true
            }
        }
    ]
})

// we are hashing the PASSWORD FOR DATABASE
userSchema.pre("save", async function(next){
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})
// we are generating jwt token
userSchema.methods.gAT = async function (next) {
    try {
        let tokenuser = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: tokenuser });
        await this.save();
        return tokenuser;
    }
    catch (err) {
        console.log(err);
    }
}

userSchema.methods.getmassage = async function (name,email,phone,message) {
    try {
        this.messages = this.messages.concat({name,email,phone,message});
        await this.save();
        return this.message;
    }
    catch (err) {
        console.log(err);
    }
}

const User = mongoose.model("user", userSchema);
module.exports = User;
