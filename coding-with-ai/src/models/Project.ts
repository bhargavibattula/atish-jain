import mongoose, { Schema, Document } from "mongoose";

export interface IProjectDocument extends Document {
  title: string;
  description: string;
  image: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProjectDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    difficulty: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
    techStack: [{ type: String }],
    demoUrl: { type: String },
    githubUrl: { type: String },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProjectDocument>("Project", ProjectSchema);
