const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const uuidv1 = require("uuidv1");
// const crypto = require("crypto");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);

// const UserSchema = new Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unqiue: true,
//       lowercase: true,
//       trim: true,
//     },
//     hashedPassword: {
//       type: String,
//       required: true,
//     },
//     salt: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// //Creates a virtual field for the password
// UserSchema.virtual("password").set((password) => {
//   //Creates a temporary variable called _password
//   this._password = password;

//   //Creates a timestamp using the uuidv1 package
//   this.salt = uuidv1();

//   //Encrypt password through function call
//   this.hashedPassword = this.encryptPassword(password);
// });

// //Creating a method to encrypt our password
// UserSchema.methods = {
//   //This function takes the password param and checks if it exists, if it does then the crypto library is used
//   //createHmac firstly hashes the salt which is set to the UUID key package, it then updates the password with this hashed salt key
//   //then the result of the salt & hashing is output through the digest in hex format
//   encryptPassword: function (password) {
//     if (!password) return "";
//     try {
//       return crypto
//         .createHmac("sha256", this.salt)
//         .update(password)
//         .digest("hex");
//     } catch (err) {
//       return "";
//     }
//   },
//   //Function to check whether the entered unhashed password is equal to the stored hashed password
//   authenticate: function (unhashedPassword) {
//     return this.encryptPassword(unhashedPassword) === this.hashedPassword;
//   },
// };

// module.exports = mongoose.model("User", UserSchema);
