'use client';

import { useEffect } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-[#0B0F19] flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-950/20 blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-md flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
          <AlertTriangle className="text-red-400" size={28} />
        </div>

        <h2 className="text-2xl font-bold text-white tracking-tight mb-4">Something went wrong!</h2>
        
        <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs">
          An unexpected runtime error occurred. Please try resetting the state.
        </p>

        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-white/5"
        >
          <RefreshCw size={14} />
          Try Again
        </button>
      </div>
    </div>
  );
}
