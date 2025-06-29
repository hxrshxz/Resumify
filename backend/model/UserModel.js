const { default: mongoose } = require("mongoose");
const {Schema} = mongoose;

mongoose.connect("mongodb://localhost:27017/test", {
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

const userSchema = new Schema({
  name: String,
  email: String,
  interests: [String],
  skills: [String],
  experience: [String],
  extras: [String],
}, {
  versionKey: false
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;    
    return ret;
  }
});

exports.User = mongoose.model("User", userSchema);  


