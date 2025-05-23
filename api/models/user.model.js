import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/imgres?q=head%20shot%20default&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F2041572395%2Fvector%2Fblank-avatar-photo-placeholder-icon-vector-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DwSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fhead-shot&docid=VGd1l7lZYBr5sM&tbnid=twv30p4lKjH1zM&vet=12ahUKEwiY6r_18biNAxWfFFkFHbP-LdsQM3oECCoQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwiY6r_18biNAxWfFFkFHbP-LdsQM3oECCoQAA",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
