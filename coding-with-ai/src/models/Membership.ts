import mongoose, { Schema, Document } from "mongoose";

export interface IMembershipDocument extends Document {
  title: string;
  type: "silver" | "gold" | "diamond";
  description: string;
  price: number;
  originalPrice?: number;
  duration: number;
  features: string[];
  modules: { title: string; description: string; videoCount: number }[];
  milestone: string;
  color: string;
  popular: boolean;
  isActive: boolean;
  createdAt: Date;
}

const MembershipSchema = new Schema<IMembershipDocument>(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["silver", "gold", "diamond"], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    duration: { type: Number, required: true, default: 365 },
    features: [{ type: String }],
    modules: [
      {
        title: { type: String, required: true },
        description: { type: String },
        videoCount: { type: Number, default: 0 },
      },
    ],
    milestone: { type: String, required: true },
    color: { type: String, default: "#3B82F6" },
    popular: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Membership || mongoose.model<IMembershipDocument>("Membership", MembershipSchema);
