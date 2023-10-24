import mongoose from "mongoose";
const { Schema } = mongoose;

const lecturerSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
      },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },
    phone: {
        type: Number,
        required: true,
      },
    bio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Lecturer =
  mongoose.models.lecturers || mongoose.model("lecturers", lecturerSchema);

export default Lecturer;
