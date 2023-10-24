import mongoose from "mongoose";
const { Schema } = mongoose;

const legislativeMemberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    membership: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    linkedin: {
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

const LegislativeMember =
  mongoose.models.legislativeMembers ||
  mongoose.model("legislativeMembers", legislativeMemberSchema);

export default LegislativeMember;
