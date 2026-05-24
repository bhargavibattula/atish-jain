import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "./mongodb";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email }).select("+password");

        if (!user || !user.password) {
          throw new Error("No user found with this email");
        }

        if (user.isActive === false) {
          throw new Error("Your account has been deactivated. Please contact support.");
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          membership: user.membership ? user.membership.toString() : null,
          isActive: user.isActive !== false,
        };
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        token.id = u.id;
        token.role = u.role;
        token.membership = u.membership ? u.membership.toString() : null;
        token.isActive = u.isActive;
        token.membershipStatus = u.membershipStatus || "none";
      } else if (token.email) {
        // Refresh user data from DB
        await connectDB();
        const dbUser = await User.findOne({ email: token.email });
        if (dbUser) {
          token.id = dbUser._id.toString();
          token.role = dbUser.role;
          token.membership = dbUser.membership ? dbUser.membership.toString() : null;
          token.isActive = dbUser.isActive !== false;
          token.membershipStatus = dbUser.membershipStatus || "none";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        const u = session.user as any;
        u.id = token.id as string;
        u.role = token.role as "student" | "admin";
        u.membership = token.membership as string;
        u.isActive = token.isActive as boolean;
        u.membershipStatus = token.membershipStatus as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
