import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        required: true,
      },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

export default Blog;
