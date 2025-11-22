import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index : true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },
        fullname :{
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        coverImage:{
            type: String,
            required: false,
        },
        watchhistory: [{
            type: Schema.Types.ObjectId,
            ref: "Video",
        }],
        pasword: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
        },

    


    },
    {timestamps: true}


);

userSchema.pre("save", async function (next) {
    if (!this.isModified("pasword")) {
        return next();
    }
    this.pasword = await bcrypt.hash(this.pasword, 10);
    next();


}),

userSchema.methods.thispasswordcorrect = async function (pasword) {
    return await bcrypt.compare(pasword, this.pasword);
};

userSchema.methods.generateAcessToken = function () {
    return jwt.sign({
        id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    }),
    process.env.Acess_Token_Secret,
    {
        expiresIn: process.env.Acess_Token_Expire,
    }
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        id: this._id
    }
    )
    , process.env.Refresh_Token_Secret,
    {
        expiresIn: process.env.Refresh_Token_Expire,
    }
}





export default mongoose.model("User", userSchema);