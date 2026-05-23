import { DefaultSession } from "next-auth";

// Extend NextAuth session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "student" | "admin";
      membership?: string;
    } & DefaultSession["user"];
  }
  interface User {
    role: "student" | "admin";
    membership?: string;
  }
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: "student" | "admin";
  image?: string;
  membership?: string;
  progress: ICourseProgress[];
  certificates: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICourseProgress {
  courseId: string;
  completedVideos: string[];
  percentage: number;
  lastAccessedAt: Date;
}

export interface IMembership {
  _id: string;
  title: string;
  type: "silver" | "gold" | "diamond";
  description: string;
  price: number;
  duration: number; // in days
  features: string[];
  modules: IModule[];
  milestone: string;
  color: string;
  popular?: boolean;
  createdAt: Date;
}

export interface IModule {
  title: string;
  description: string;
  videoCount: number;
}

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  membership: "silver" | "gold" | "diamond";
  videos: IVideo[];
  duration: number;
  level: "beginner" | "intermediate" | "advanced";
  tags: string[];
  createdAt: Date;
}

export interface IVideo {
  _id: string;
  title: string;
  url: string;
  duration: number;
  order: number;
  isFree: boolean;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
  createdAt: Date;
}

export interface ICertificate {
  _id: string;
  userId: string;
  courseId: string;
  courseName: string;
  issuedAt: Date;
  certificateUrl: string;
}


export interface ITestimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  projectBuilt?: string;
  createdAt: Date;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface AITool {
  name: string;
  description: string;
  useCase: string;
  icon: string;
  color: string;
}
