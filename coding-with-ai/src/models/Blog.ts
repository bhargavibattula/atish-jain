import mongoose, { Schema, Document } from "mongoose";

export interface IBlogDocument extends Document {
  id: string; // URL slug/identifier (e.g. "how-to-build-a-full-stack-app")
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlogDocument>(
  {
    id: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: String, required: true, default: "Atish Jain", trim: true },
    date: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    readTime: { type: String, required: true, default: "5 min read", trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model<IBlogDocument>("Blog", BlogSchema);
