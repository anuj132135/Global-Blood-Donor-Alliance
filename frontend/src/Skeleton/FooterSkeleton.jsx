import { Skeleton } from "@heroui/react";

export function FooterSkeleton() {
  return (
    <div className="w-full px-6 lg:px-16 py-12 lg:py-16">
        <div className="
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            gap-10
            lg:gap-8
        ">
            {/* Brand Column */}
            <div className="flex flex-col lg:max-w-sm">
                {/* Logo */}
                <Skeleton className="w-24 h-24 rounded-lg mb-6" />
                {/* Brand Name */}
                <Skeleton className="w-72 h-8 rounded-lg mb-4" />
                {/* Description */}
                <div className="flex flex-col gap-2 mb-6">
                    <Skeleton className="w-full h-4 rounded-md" />
                    <Skeleton className="w-full h-4 rounded-md" />
                    <Skeleton className="w-3/4 h-4 rounded-md" />
                </div>
                {/* Social Icons */}
                <div className="flex gap-3 mb-8">
                    <Skeleton className="w-9 h-9 rounded-md" />
                    <Skeleton className="w-9 h-9 rounded-md" />
                    <Skeleton className="w-9 h-9 rounded-md" />
                </div>
                {/* Contact Information Heading */}
                <Skeleton className="w-52 h-6 rounded-md mb-5" />
                {/* Email */}
                <div className="flex items-center gap-2 mb-3">
                    <Skeleton className="w-4 h-4 rounded-full" />
                    <Skeleton className="w-44 h-4 rounded-md" />
                </div>
                {/* Phone */}
                <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded-full" />
                    <Skeleton className="w-36 h-4 rounded-md" />
                </div>
            </div>

            {/* Link Columns */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-10
                lg:gap-16
            ">
                {/* Quick Links */}
                <div className="flex flex-col gap-4">
                    <Skeleton className="w-28 h-6 rounded-md mb-2" />
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Skeleton key={index} className="w-32 h-4 rounded-md" />
                    ))}
                </div>

                {/* Services */}
                <div className="flex flex-col gap-4">
                    <Skeleton className="w-24 h-6 rounded-md mb-2" />
                    {Array.from({ length: 7 }).map((_, index) => (
                        <Skeleton key={index} className="w-40 h-4 rounded-md" />
                    ))}
                </div>

                {/* Support */}
                <div className="flex flex-col gap-4">
                    <Skeleton className="w-20 h-6 rounded-md mb-2" />
                    {Array.from({ length: 7 }).map((_, index) => (
                        <Skeleton key={index} className="w-36 h-4 rounded-md" />
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <Skeleton className="w-full h-px rounded-none mt-12 mb-6" />
        <div className="flex justify-center">
            <Skeleton className="w-80 lg:w-96 h-4 rounded-md" />
        </div>
    </div>
  );
}
