"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Loader2, Sparkles, Phone, MessageSquare, GraduationCap, User } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const claimSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  whatsappNumber: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  college: z.string().min(3, "College name must be at least 3 characters"),
  degree: z.string().min(2, "Degree / Branch must be at least 2 characters"),
  message: z.string().min(10, "Please write at least 10 characters explaining your interest"),
});

type ClaimFormData = z.infer<typeof claimSchema>;

interface ClaimFormProps {
  tierId: string;
  initialUser: {
    name: string;
    email: string;
    phone?: string;
    college?: string;
    degree?: string;
    whatsappNumber?: string;
  };
}

export default function ClaimForm({ tierId, initialUser }: ClaimFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ClaimFormData>({
    resolver: zodResolver(claimSchema),
    defaultValues: {
      name: initialUser.name || "",
      phone: initialUser.phone || "",
      whatsappNumber: initialUser.whatsappNumber || initialUser.phone || "",
      college: initialUser.college || "",
      degree: initialUser.degree || "",
      message: "",
    }
  });

  const onSubmit = async (data: ClaimFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/users/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          membershipType: tierId,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit application");
      }

      toast.success("Application submitted successfully!");
      setIsSuccess(true);
      
      // Redirect after a few seconds
      setTimeout(() => {
        router.push("/student");
        router.refresh();
      }, 3000);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTierDetails = (id: string) => {
    switch (id) {
      case "silver":
        return {
          title: "Silver Membership",
          color: "from-slate-400 to-slate-200",
          border: "border-slate-500/20",
          glow: "bg-slate-500/5",
          btnColor: "bg-slate-500 hover:bg-slate-600"
        };
      case "gold":
        return {
          title: "Gold Membership",
          color: "from-yellow-500 to-amber-300",
          border: "border-yellow-500/20",
          glow: "bg-yellow-500/5",
          btnColor: "bg-gradient-to-r from-amber-500 to-yellow-500 hover:shadow-yellow-500/20"
        };
      case "diamond":
      default:
        return {
          title: "Diamond Membership",
          color: "from-cyan-400 to-blue-300",
          border: "border-cyan-500/20",
          glow: "bg-cyan-500/5",
          btnColor: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/20"
        };
    }
  };

  const details = getTierDetails(tierId);

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-4 grid-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-lg bg-[#111827]/40 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl shadow-black/50"
        >
          <div className="w-20 h-20 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-emerald-400 w-10 h-10" strokeWidth={2.5} />
          </div>
          <h2 className="font-poppins font-bold text-3xl text-white mb-3">Application Submitted!</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your request to join the <span className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${details.color}`}>{details.title}</span> has been registered.
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-left mb-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">What happens next?</h4>
            <ul className="text-xs text-gray-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>The Admin will review your application details shortly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>Once allowed, your dashboard curriculum and projects will instantly unlock.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span>We will contact you on your WhatsApp number if any verification is required.</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-blue-400">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>Redirecting to your dashboard...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 relative grid-bg overflow-hidden">
      {/* Background radial glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[150px] pointer-events-none -z-10 ${details.glow} opacity-60`} />

      <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col justify-center">
        {/* Back Link */}
        <Link href="/memberships" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors self-start">
          <ArrowLeft size={16} />
          Back to Plans
        </Link>

        {/* Form Container */}
        <div className="bg-[#111827]/40 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/50">
          
          {/* Header */}
          <div className="mb-8">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border bg-white/[0.02] mb-3 text-transparent bg-clip-text bg-gradient-to-r ${details.color} ${details.border}`}>
              <Sparkles size={12} className="text-cyan-400" />
              Registration Required
            </span>
            <h1 className="font-poppins font-bold text-3xl text-white">
              Apply for <span className={`bg-clip-text text-transparent bg-gradient-to-r ${details.color}`}>{details.title}</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
              Complete your profile details below. Access requires manual activation by the Admin.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Two Column Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User size={13} className="text-gray-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Enter full name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
              </div>

              {/* Email (Read Only) */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={initialUser.email}
                  disabled
                  className="w-full bg-[#080C14]/50 border border-white/5 rounded-xl px-4 py-3 text-gray-500 text-sm cursor-not-allowed"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone size={13} className="text-gray-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="e.g. +919876543210"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-amber-400" />
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  {...register("whatsappNumber")}
                  className="w-full bg-[#080C14] border border-amber-500/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="WhatsApp number for updates"
                />
                {errors.whatsappNumber && <p className="text-red-400 text-xs mt-1.5">{errors.whatsappNumber.message}</p>}
              </div>

              {/* College */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <GraduationCap size={13} className="text-gray-500" />
                  College / Institution
                </label>
                <input
                  type="text"
                  {...register("college")}
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="e.g. IIT Madras"
                />
                {errors.college && <p className="text-red-400 text-xs mt-1.5">{errors.college.message}</p>}
              </div>

              {/* Degree */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Degree / Department
                </label>
                <input
                  type="text"
                  {...register("degree")}
                  className="w-full bg-[#080C14] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="e.g. B.Tech Computer Science"
                />
                {errors.degree && <p className="text-red-400 text-xs mt-1.5">{errors.degree.message}</p>}
              </div>

            </div>

            {/* Application message */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Why are you applying for this membership? *
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-[#080C14] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none leading-relaxed"
                placeholder="Explain what project or skill you hope to master, and how we can support you."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300 text-white shadow-lg ${
                isSubmitting ? "bg-blue-600/50 cursor-not-allowed" : details.btnColor
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" />
                  Submitting Application...
                </>
              ) : (
                <>
                  Submit Application
                </>
              )}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
