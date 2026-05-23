import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function seedAdmin() {
  try {
    const adminEmail = "admin@ahcareer.in";
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("Admin@AHCareer2026!", 12);
      
      await User.create({
        name: "Administrator",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
        provider: "credentials"
      });
      
      console.log("Admin user seeded successfully!");
    } else {
      // Ensure the existing admin has the correct role
      if (existingAdmin.role !== "admin") {
        existingAdmin.role = "admin";
        await existingAdmin.save();
        console.log("Updated existing admin user role to admin.");
      }
    }
  } catch (error) {
    console.error("Failed to seed admin user:", error);
  }
}
