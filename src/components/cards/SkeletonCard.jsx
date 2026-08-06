export default function SkeletonCard() {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-zinc-200 flex shadow-sm">

      {/* Shimmer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <div className="flex w-full relative">

        {/* Image */}
        <div className="w-24 h-24 md:w-40 md:h-44 flex-shrink-0 bg-zinc-200" />

        {/* Content */}
        <div className="flex-1 p-3 md:p-5 flex flex-col justify-between md:min-h-[176px]">

          <div>
            <div className="h-6 w-40 bg-zinc-200 rounded mb-3" />

            <div className="space-y-2">
              <div className="h-3 bg-zinc-200 rounded w-full" />
              <div className="h-3 bg-zinc-200 rounded w-5/6" />
            </div>
          </div>

          <div>

            {/* Price */}
            <div className="h-8 w-20 bg-zinc-200 rounded-lg" />

            <div className="mt-3 flex items-center justify-between">

              {/* Button */}
              <div className="h-10 w-32 bg-zinc-200 rounded-xl" />

              {/* Heart */}
              <div className="h-7 w-7 rounded-full bg-zinc-200" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}