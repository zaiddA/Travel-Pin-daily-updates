const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,  // corrected 'require' to 'required'
      minlength: 3,    // corrected 'min' to 'minlength'
      maxlength: 20,   // corrected 'max' to 'maxlength'
      unique: true,
    },
    email: {
      type: "string",
      required: true,  // corrected 'require' to 'required'
      maxlength: 50,
      unique: true,
    },
    password: {
      type: "string",
      required: true,  // corrected 'require' to 'required'
      minlength: 6,    // corrected 'min' to 'minlength'
    },
  },
  {
    timestamps: true, // automatically creates createdAt and updatedAt fields
  }
);

// Prevent overwriting model if it's already defined
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
