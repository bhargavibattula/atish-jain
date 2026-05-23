import mongoose, { Schema, Document } from "mongoose";

export interface ICourseDocument extends Document {
  title: string;
  description: string;
  thumbnail: string;
  membership: "silver" | "gold" | "diamond" | "free";
  videos: {
    _id: mongoose.Types.ObjectId;
    title: string;
    url: string;
    duration: number;
    order: number;
    isFree: boolean;
  }[];
  duration: number;
  level: "beginner" | "intermediate" | "advanced";
  tags: string[];
  enrolledCount: number;
  isPublished: boolean;
  createdAt: Date;
}

const CourseSchema = new Schema<ICourseDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    membership: { type: String, enum: ["free", "silver", "gold", "diamond"], default: "silver" },
    videos: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        duration: { type: Number, default: 0 },
        order: { type: Number, required: true },
        isFree: { type: Boolean, default: false },
      },
    ],
    duration: { type: Number, default: 0 },
    level: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
    tags: [{ type: String }],
    enrolledCount: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model<ICourseDocument>("Course", CourseSchema);
