import { Skeleton } from "@heroui/react";

export function HeaderSkeleton() {
  return (
    <div className="h-15 lg:w-full lg:px-[8rem] flex justify-between z-100 items-center bg-[var(--bg-color)]">
      <div className="hidden lg:flex items-center">
        <Skeleton className="h-10 w-10 rounded-lg mx-4" />
        <Skeleton className="h-5 w-15 rounded-lg mx-4" />
        <Skeleton className="h-5 w-15 rounded-lg mx-4" />
        <Skeleton className="h-5 w-15 rounded-lg mx-4" />
        <Skeleton className="h-5 w-15 rounded-lg mx-4" />
        <Skeleton className="h-5 w-15 rounded-lg mx-4" />
        <Skeleton className="h-5 w-15 rounded-lg mx-4" />
      </div>
      <div className="w-[100%] justify-between lg:justify-end flex items-center">
        <Skeleton className="h-8 w-10 lg:h-10 lg:w-30 rounded-lg mx-4" />
        <Skeleton className="lg:h-5 lg:w-10 h-10 w-10 rounded-lg mx-4" />
        <Skeleton className="h-10 w-10 rounded-full mx-4" />
      </div>
    </div>
  );
}
