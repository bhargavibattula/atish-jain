import mongoose, { Schema, Document } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password?: string;
  role: "student" | "admin";
  phone?: string;
  college?: string;
  degree?: string;
  image?: string;
  provider?: string;
  membership?: string;
  whatsappNumber?: string;
  membershipStatus?: "none" | "pending" | "approved" | "rejected";
  membershipTypeRequested?: "silver" | "gold" | "diamond" | null;
  applicationMessage?: string;
  isActive: boolean;
  progress: {
    courseId: mongoose.Types.ObjectId;
    completedVideos: string[];
    percentage: number;
    lastAccessedAt: Date;
  }[];
  certificates: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, select: false, minlength: 6 },
    role: { type: String, enum: ["student", "admin"], default: "student" },
    phone: { type: String, trim: true },
    college: { type: String, trim: true },
    degree: { type: String, trim: true },
    image: { type: String },
    provider: { type: String, default: "credentials" },
    membership: { type: Schema.Types.ObjectId, ref: "Membership", default: null },
    whatsappNumber: { type: String, trim: true },
    membershipStatus: { type: String, enum: ["none", "pending", "approved", "rejected"], default: "none" },
    membershipTypeRequested: { type: String, enum: ["silver", "gold", "diamond", null], default: null },
    applicationMessage: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    progress: [
      {
        courseId: { type: Schema.Types.ObjectId, ref: "Course" },
        completedVideos: [{ type: String }],
        percentage: { type: Number, default: 0 },
        lastAccessedAt: { type: Date, default: Date.now },
      },
    ],
    certificates: [{ type: Schema.Types.ObjectId, ref: "Certificate" }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);
