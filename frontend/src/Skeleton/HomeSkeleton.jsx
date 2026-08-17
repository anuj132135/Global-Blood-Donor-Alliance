import {Skeleton} from "@heroui/react";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { FooterSkeleton } from "./FooterSkeleton";

export function HomeSkeleton() {
  return (
    <div className="absolute w-full z-100 bg-[var(--bg-color)]">
        <HeaderSkeleton/>

        {/* hero section */}
        <div className="flex lg:flex-row flex-col">
            <div className="lg:mx-30 lg:my-40 my-20 center lg:block flex justify-center flex-col itmes-center">
                <Skeleton className="w-60 h-10 my-5 lg:mx-0 mx-auto rounded-lg" />
                <Skeleton className="w-80 mx-auto h-10 lg:w-120 lg:h-15 my-2 rounded-lg" />
                <Skeleton className="w-80 mx-auto h-10 lg:w-120 lg:h-15 my-2 rounded-lg" />
                <Skeleton className="w-full h-5 my-2 mx-auto rounded-lg" />
                <Skeleton className="w-full h-5 my-2 mx-auto rounded-lg" />
                <Skeleton className="w-full h-5 my-2 mx-auto rounded-lg" />
                <div className="flex lg:flex-row flex-col">
                    <Skeleton className="w-50 h-15 my-2 mx-auto rounded-lg" />
                    <Skeleton className="w-50 h-15 my-2 mx-auto rounded-lg" />
                </div>
            </div>
            <div className="lg:my-50 lg:mx-30">
                <Skeleton className="w-80 h-80 mx-auto lg:w-120 lg:h-120 rounded-lg" />
            </div>
        </div>

        {/* counter section */}
        <div className="w-full px-6 lg:px-26 py-8 lg:py-16">
            <div className="w-full bg-[var(--bg-box-color)] rounded-xl px-6 lg:px-10 py-12 lg:py-16">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0">

                    {/* Registered Donors */}
                    <div className="flex flex-col items-center justify-center">
                        <Skeleton className="w-44 h-10 lg:w-48 lg:h-12 rounded-lg mb-4" />
                        <Skeleton className="w-36 h-5 rounded-md" />
                    </div>

                    {/* Hospitals */}
                    <div className="flex flex-col items-center justify-center">
                        <Skeleton className="w-36 h-10 lg:w-40 lg:h-12 rounded-lg mb-4" />
                        <Skeleton className="w-24 h-5 rounded-md" />
                    </div>

                    {/* Blood Banks */}
                    <div className="flex flex-col items-center justify-center">
                        <Skeleton className="w-28 h-10 lg:w-32 lg:h-12 rounded-lg mb-4" />
                        <Skeleton className="w-28 h-5 rounded-md" />
                    </div>

                    {/* Lives Saved */}
                    <div className="flex flex-col items-center justify-center">
                        <Skeleton className="w-44 h-10 lg:w-48 lg:h-12 rounded-lg mb-4" />
                        <Skeleton className="w-28 h-5 rounded-md" />
                    </div>

                </div>
            </div>
        </div>

        {/* find blood section */}
        <div className="w-full px-6 lg:px-20 py-16 lg:py-24">
            <div className="flex flex-col items-center text-center">
                <Skeleton className="w-40 h-10 rounded-full mb-5" />
                <Skeleton className="w-80 h-12 lg:w-170 lg:h-14 rounded-lg mb-5" />
                <Skeleton className="w-80 h-5 lg:w-200 rounded-md mb-2" />
                <Skeleton className="w-72 h-5 lg:w-180 rounded-md" />
            </div>
            <div className="
                w-full
                max-w-6xl
                mx-auto
                mt-16
                lg:mt-20
                bg-[var(--bg-box-color)]
                rounded-xl
                px-8
                lg:px-22
                py-14
                lg:py-24
            ">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-20">

                    <div>
                        <Skeleton className="w-28 h-5 rounded-md mb-4" />
                        <Skeleton className="w-full h-12 rounded-lg" />
                    </div>

                    <div>
                        <Skeleton className="w-20 h-5 rounded-md mb-4" />
                        <Skeleton className="w-full h-12 rounded-lg" />
                    </div>

                    <div>
                        <Skeleton className="w-28 h-5 rounded-md mb-4" />
                        <Skeleton className="w-full h-12 rounded-lg" />
                    </div>

                    <div>
                        <Skeleton className="w-16 h-5 rounded-md mb-4" />
                        <Skeleton className="w-full h-12 rounded-lg" />
                    </div>

                    <div>
                        <Skeleton className="w-20 h-5 rounded-md mb-4" />
                        <Skeleton className="w-full h-12 rounded-lg" />
                    </div>

                </div>

                <div className="flex justify-center mt-12 lg:mt-12">
                    <Skeleton className="w-60 h-12 rounded-full" />
                </div>

            </div>

        </div>

        {/* Emergency response banner */}
        <div className="w-full px-1 lg:px-24 py-8 lg:py-16">
            <div className="
                relative
                overflow-hidden
                w-full
                bg-[var(--bg-box-color)]
                rounded-2xl
                px-6
                lg:px-10
                py-8
                lg:py-10
                min-h-[365px]
                lg:min-h-[405px]
            ">

                {/* Emergency Badge */}
                <Skeleton className="w-56 h-10 rounded-full mb-6" />

                {/* Heading */}
                <Skeleton className="w-72 h-10 lg:w-170 lg:h-14 rounded-lg mb-6" />

                {/* Description */}
                <div className="space-y-2">
                    <Skeleton className="w-full max-w-200 h-5 rounded-md" />
                    <Skeleton className="w-full max-w-190 h-5 rounded-md" />
                </div>

                {/* Button */}
                <Skeleton className="w-64 h-12 rounded-full mt-10" />

                {/* Ambulance Icon Skeleton - Desktop Only */}
                <Skeleton className="
                    hidden
                    lg:block
                    absolute
                    right-20
                    bottom-8
                    w-40
                    h-40
                    rounded-2xl
                " />

            </div>

        </div>

        {/* Why choose us */}
        <div className="w-full px-4 lg:px-16 py-12 lg:py-20">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center">

                {/* Badge */}
                <Skeleton className="w-80 lg:w-105 h-10 rounded-full mb-8" />

                {/* Heading */}
                <div className="flex flex-col items-center gap-2">
                    <Skeleton className="w-80 lg:w-180 h-12 lg:h-14 rounded-lg" />
                    <Skeleton className="w-72 lg:w-160 h-12 lg:h-14 rounded-lg" />
                </div>

                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-8">
                    <Skeleton className="w-80 lg:w-230 h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-180 h-5 rounded-md" />
                </div>

            </div>


            {/* 6 Cards */}
            <div className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-6
                lg:gap-14
                mt-10
                lg:mt-12
            ">

                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            bg-[var(--bg-box-color)]
                            rounded-2xl
                            min-h-[290px]
                            lg:min-h-[295px]
                            px-8
                            lg:px-8
                            py-10
                            lg:py-12
                            flex
                            flex-col
                        "
                    >

                        {/* Icon */}
                        <Skeleton className="w-10 h-10 rounded-lg mb-14 lg:mb-16" />

                        {/* Card Title */}
                        <Skeleton
                            className={`
                                h-7
                                rounded-md
                                mb-7
                                ${
                                    index === 3
                                        ? "w-64"
                                        : index === 5
                                        ? "w-48"
                                        : "w-60"
                                }
                            `}
                        />

                        {/* Card Description */}
                        <div className="space-y-2">
                            <Skeleton className="w-full h-5 rounded-md" />
                            <Skeleton className="w-4/5 h-5 rounded-md" />
                        </div>

                    </div>
                ))}

            </div>

        </div>

        {/* How it Works */}
        <div className="w-full px-4 lg:px-16 py-12 lg:py-20">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center">

                {/* Badge */}
                <Skeleton className="w-36 h-10 rounded-full mb-8" />

                {/* Heading */}
                <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <Skeleton className="w-72 lg:w-100 h-12 lg:h-14 rounded-lg" />
                    <Skeleton className="w-48 lg:w-64 h-12 lg:h-14 rounded-lg" />
                </div>

                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-8">
                    <Skeleton className="w-80 lg:w-220 h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-190 h-5 rounded-md" />
                </div>

            </div>


            {/* Steps */}
            <div className="
                relative
                grid
                grid-cols-1
                lg:grid-cols-4
                gap-16
                lg:gap-0
                mt-16
                lg:mt-20
            ">

                {/* Horizontal Line - Desktop */}
                <div className="
                    hidden
                    lg:block
                    absolute
                    top-20
                    left-[15%]
                    right-[15%]
                    h-1
                    bg-[var(--primary-color)]
                " />

                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            relative
                            flex
                            flex-col
                            items-center
                            text-center
                        "
                    >

                        {/* Icon Circle */}
                        <Skeleton className="
                            relative
                            z-10
                            w-40
                            h-40
                            rounded-full
                            mb-10
                        " />

                        {/* Title */}
                        <Skeleton className="
                            w-40
                            lg:w-48
                            h-7
                            rounded-md
                            mb-7
                        " />

                        {/* Description */}
                        <div className="flex flex-col items-center gap-2">
                            <Skeleton className="w-64 h-5 rounded-md" />
                            <Skeleton className="w-56 h-5 rounded-md" />
                            <Skeleton className="w-40 h-5 rounded-md" />
                        </div>

                        {/* Vertical Line - Mobile */}
                        {index < 3 && (
                            <div className="
                                lg:hidden
                                absolute
                                top-[160px]
                                -bottom-16
                                w-1
                                bg-[var(--primary-color)]
                            " />
                        )}

                    </div>
                ))}

            </div>

        </div>

        {/* Blood Compatibility */}
        <div className="w-full px-4 lg:px-16 py-12 lg:py-20">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center">

                {/* Badge */}
                <Skeleton className="w-56 h-10 rounded-full mb-8" />

                {/* Heading */}
                <div className="flex flex-col items-center gap-2">
                    <Skeleton className="w-80 lg:w-210 h-12 lg:h-14 rounded-lg" />
                    <Skeleton className="w-72 lg:w-160 h-12 lg:h-14 rounded-lg" />
                </div>

                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-8">
                    <Skeleton className="w-80 lg:w-250 h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-190 h-5 rounded-md" />
                </div>

            </div>


            {/* 8 Blood Compatibility Cards */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-6
                lg:gap-14
                mt-10
                lg:mt-12
            ">

                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            bg-[var(--bg-box-color)]
                            rounded-2xl
                            min-h-[310px]
                            lg:min-h-[310px]
                            px-7
                            lg:px-8
                            py-8
                        "
                    >

                        {/* Blood Group Circle */}
                        <Skeleton className="
                            w-20
                            h-20
                            rounded-full
                            mb-7
                        " />

                        {/* Donate To Label */}
                        <Skeleton className="
                            w-24
                            h-5
                            rounded-md
                            mb-4
                        " />

                        {/* Donate To Values */}
                        <Skeleton className="
                            w-32
                            h-5
                            rounded-md
                            mb-6
                        " />

                        {/* Receive From Label */}
                        <Skeleton className="
                            w-28
                            h-5
                            rounded-md
                            mb-4
                        " />

                        {/* Receive From Values */}
                        <Skeleton className="
                            w-36
                            h-5
                            rounded-md
                        " />

                    </div>
                ))}

            </div>

        </div>

        {/* Featured Donors */}
        <div className="w-full px-0 lg:px-16 py-12 lg:py-20">

            {/* Section Header */}
            <div className="flex flex-col items-center text-center">

                {/* Badge */}
                <Skeleton className="w-48 h-10 rounded-full mb-8" />

                {/* Heading */}
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <Skeleton className="w-72 lg:w-80 h-12 lg:h-14 rounded-lg" />
                    <Skeleton className="w-64 lg:w-80 h-12 lg:h-14 rounded-lg" />
                </div>

                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-8 px-4">
                    <Skeleton className="w-80 lg:w-240 h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-210 h-5 rounded-md" />
                    <Skeleton className="w-64 lg:w-180 h-5 rounded-md" />
                </div>

            </div>


            {/* Donor Carousel */}
            <div className="
                w-full
                max-w-7xl
                mx-auto
                mt-10
                lg:mt-12
                bg-[var(--bg-box-color)]
                rounded-2xl
                px-6
                lg:px-7
                py-10
                lg:py-11
                overflow-hidden
            ">

                {/* Navigation Buttons */}
                <div className="flex gap-3 mb-7">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <Skeleton className="w-10 h-10 rounded-full" />
                </div>


                {/* Cards */}
                <div className="
                    flex
                    gap-6
                    overflow-hidden
                ">

                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="
                                flex-shrink-0
                                w-[285px]
                                lg:w-[290px]
                                bg-[var(--bg-color)]
                                rounded-2xl
                                overflow-hidden
                            "
                        >

                            {/* Donor Image */}
                            <Skeleton className="
                                w-full
                                h-56
                                lg:h-58
                                rounded-none
                            " />

                            <div className="p-5">

                                {/* Name */}
                                <Skeleton className="
                                    w-36
                                    h-5
                                    rounded-md
                                    mb-3
                                " />

                                {/* Location + Age */}
                                <Skeleton className="
                                    w-48
                                    h-4
                                    rounded-md
                                    mb-5
                                " />

                                {/* Last Donation */}
                                <Skeleton className="
                                    w-44
                                    h-4
                                    rounded-md
                                    mb-6
                                " />

                                {/* Contact Button */}
                                <Skeleton className="
                                    w-full
                                    h-12
                                    rounded-full
                                " />

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>

        {/* Nearby Hospitals */}
        <div className="w-full px-0 lg:px-16 py-12 lg:py-20">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center">
                {/* Badge */}
                <Skeleton className="w-40 h-9 rounded-full mb-8" />
                {/* Heading */}
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <Skeleton className="w-64 lg:w-72 h-9 lg:h-12 rounded-lg" />
                    <Skeleton className="w-56 lg:w-64 h-9 lg:h-12 rounded-lg" />
                </div>
                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-6 px-4">
                    <Skeleton className="w-80 lg:w-[720px] h-4 lg:h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-[620px] h-4 lg:h-5 rounded-md" />
                </div>
            </div>

            {/* Hospital Cards Grid */}
            <div className="
                w-full
                max-w-7xl
                mx-auto
                mt-10
                lg:mt-12
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-6
                px-4
                lg:px-0
            ">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            w-full
                            bg-[var(--bg-box-color)]
                            rounded-2xl
                            px-6
                            py-6
                            lg:py-7
                        "
                    >
                        {/* Name + Status Badge */}
                        <div className="flex items-center justify-between mb-5">
                            <Skeleton className="w-36 h-5 rounded-md" />
                            <Skeleton className="w-16 h-6 rounded-full" />
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-3">
                            <Skeleton className="w-4 h-4 rounded-full" />
                            <Skeleton className="w-52 h-4 rounded-md" />
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2 mb-3">
                            <Skeleton className="w-4 h-4 rounded-full" />
                            <Skeleton className="w-32 h-4 rounded-md" />
                        </div>

                        {/* Distance */}
                        <div className="flex items-center gap-2">
                            <Skeleton className="w-4 h-4 rounded-full" />
                            <Skeleton className="w-24 h-4 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Blood Banks */}
        <div className="w-full px-0 lg:px-16 py-12 lg:py-20">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center">
                {/* Badge */}
                <Skeleton className="w-32 h-9 rounded-full mb-8" />
                {/* Heading */}
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <Skeleton className="w-64 lg:w-80 h-9 lg:h-12 rounded-lg" />
                    <Skeleton className="w-56 lg:w-64 h-9 lg:h-12 rounded-lg" />
                </div>
                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-6 px-4">
                    <Skeleton className="w-80 lg:w-[720px] h-4 lg:h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-[620px] h-4 lg:h-5 rounded-md" />
                </div>
            </div>

            {/* Blood Bank Cards Grid */}
            <div className="
                w-full
                max-w-7xl
                mx-auto
                mt-10
                lg:mt-12
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-6
                px-4
                lg:px-0
            ">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            w-full
                            border
                            border-[var(--border-color)]
                            rounded-2xl
                            px-6
                            py-6
                        "
                    >
                        {/* Drop Icon */}
                        <Skeleton className="w-6 h-6 rounded-full mb-4" />

                        {/* Name */}
                        <Skeleton className="w-40 h-5 rounded-md mb-3" />

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-5">
                            <Skeleton className="w-4 h-4 rounded-full" />
                            <Skeleton className="w-32 h-4 rounded-md" />
                        </div>

                        {/* Available Units Box */}
                        <Skeleton className="w-full h-16 rounded-lg mb-6" />

                        {/* View Details Button */}
                        <Skeleton className="w-full h-11 rounded-full" />
                    </div>
                ))}
            </div>
        </div>

        {/* Testimonials */}
        <div className="w-full px-0 lg:px-16 py-12 lg:py-20">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center">
                {/* Badge */}
                <Skeleton className="w-32 h-9 rounded-full mb-8" />
                {/* Heading */}
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <Skeleton className="w-48 lg:w-64 h-9 lg:h-12 rounded-lg" />
                    <Skeleton className="w-40 lg:w-56 h-9 lg:h-12 rounded-lg" />
                </div>
                {/* Description */}
                <div className="flex flex-col items-center gap-2 mt-6 px-4">
                    <Skeleton className="w-80 lg:w-[720px] h-4 lg:h-5 rounded-md" />
                    <Skeleton className="w-72 lg:w-[500px] h-4 lg:h-5 rounded-md" />
                </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="
                w-full
                max-w-7xl
                mx-auto
                mt-10
                lg:mt-12
                overflow-hidden
            ">
                <div className="
                    flex
                    gap-6
                    px-4
                    lg:px-0
                ">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="
                                flex-shrink-0
                                w-[85%]
                                sm:w-[380px]
                                lg:w-[400px]
                                bg-[var(--bg-box-color)]
                                rounded-2xl
                                px-6
                                py-7
                            "
                        >
                            {/* Quote Icon */}
                            <Skeleton className="w-8 h-6 rounded-md mb-5" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <Skeleton key={starIndex} className="w-5 h-5 rounded-sm" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <div className="flex flex-col gap-2 mb-6">
                                <Skeleton className="w-full h-4 rounded-md" />
                                <Skeleton className="w-full h-4 rounded-md" />
                                <Skeleton className="w-3/4 h-4 rounded-md" />
                            </div>

                            {/* Divider */}
                            <Skeleton className="w-full h-px rounded-none mb-6" />

                            {/* Avatar + Name */}
                            <div className="flex items-center gap-3">
                                <Skeleton className="w-11 h-11 rounded-full" />
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="w-28 h-4 rounded-md" />
                                    <Skeleton className="w-32 h-3 rounded-md" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Bar + Arrows (desktop only) */}
                <div className="hidden lg:flex items-center gap-4 mt-10 px-4 lg:px-0">
                    <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
                    <Skeleton className="flex-1 h-1 rounded-full" />
                    <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
                </div>
            </div>
        </div>

        <FooterSkeleton/>
    </div>
  );
}