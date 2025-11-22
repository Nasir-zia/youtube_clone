import mongoose , {Schema} from "mongoose";
import mongooseaggrigate from "mongoose-aggregate-paginate-v2";


const videoschema = new Schema ({
    videofile :{
        type: String,
        required: true,
    },
    thumbnail :{
        type: String,
        required: true,
    },
    title :{
        type: String,
        required: true,
    },
    description :{
        type: String,
        required: true,
    },
    views :{
        type: Number,
        default: 0,
    },
    duration :{
        type: String,
        required: true,
    },
    owner :{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    ispublish :{
        type : Boolean,
        default: true,
    }
}, {timestamps: true})
videoschema.plugin(mongooseaggrigate);


export default mongoose.model("Video", videoschema);