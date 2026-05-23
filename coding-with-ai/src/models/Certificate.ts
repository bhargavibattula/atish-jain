import mongoose, { Schema, Document } from "mongoose";

export interface ICertificateDocument extends Document {
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  courseName: string;
  userName: string;
  issuedAt: Date;
  certificateUrl: string;
  uniqueId: string;
}

const CertificateSchema = new Schema<ICertificateDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    courseName: { type: String, required: true },
    userName: { type: String, required: true },
    issuedAt: { type: Date, default: Date.now },
    certificateUrl: { type: String },
    uniqueId: { type: String, unique: true, default: () => Math.random().toString(36).substring(2, 15) },
  },
  { timestamps: true }
);

export default mongoose.models.Certificate || mongoose.model<ICertificateDocument>("Certificate", CertificateSchema);
