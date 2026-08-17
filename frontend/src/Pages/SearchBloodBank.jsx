import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {Button, Chip, Modal, Avatar, ToggleButton } from "@heroui/react"
import { Siren, MapPin, ShieldCheck, CirclePlus, PhoneCall, Clock, Users, Hospital, Droplet, BriefcaseMedical, DoorOpen, Search, Navigation, Phone, ExternalLink, Heart, Pin, Mail, BriefcaseMedicalIcon, CircleCheck, HeartHandshake } from 'lucide-react'
import { CircleFill, HeartFill, LocationArrow, StarFill } from '@gravity-ui/icons'
import { useForm } from "react-hook-form"
import bloodBankImage from "../assets/blood-bank/bloodbank.webp"

function SearchBloodBank() {

const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const onSubmit = (data) => console.log(data)

  return (
    <>
        <Header/>
        {/* Blood Bank Banner */}
        <section className="lg:w-[80%] mx-auto px-4 py-10 lg:flex justify-center items-center" data-aos="fade-up">
            <div>
                <Chip className='bg-green-900 text-green-100 border border-green-100 px-2'><ShieldCheck className='py-1'/>Varified Blood Banks</Chip>
                <h1 className="text-4xl customFont my-4">
                Find Blood Banks Near You
                </h1>
                <p className='text-gray-400 leading-5 lg:leading-1'>
                Find nearby blood banks, check available services, and connect with trusted blood collection centers when you need blood.
                </p>
            </div>
            <div className="flex mt-8 lg:my-4 lg:mx-8">
                <Modal>
                    <Button className="lg:mx-2 bg-[var(--primary-color)] hover:bg-red-700">
                    <CirclePlus /> Register Blood Bank
                    </Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <Hospital className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Register Blood Bank</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                        </span>
                                    </div>      
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                    <div>
                                        <label htmlFor="bloodBankName" style={{color: 'lightGray', fontSize: '12px'}}>Blood Bank / Center Name</label>
                                        <input type='text' id='bloodBankName' {...register("bloodBankName", { required: true })} />
                                        {errors.bloodBankName && <span>This field is required</span>}
                                    </div>

                                    <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                        <div>
                                            <label htmlFor="bloodBankLicence" style={{color: 'lightGray', fontSize: '12px'}}>Drug Control License No.</label>
                                            <input type='text' id='bloodBankLicence' {...register("bloodBankLicence", { required: true })} />
                                            {errors.bloodBankLicence && <span>This field is required</span>}
                                        </div>

                                        <div>
                                            <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Drug Control License No.</label>
                                            <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                <option value="private_hospital">Private Hospital</option>
                                                <option value="government_center">Government Center</option>
                                                <option value="red_cross_society">Red Cross Society</option>
                                                <option value="charitable_trust">Charitable Trust</option>
                                            </select>
                                            {errors.exampleRequired && <span>This field is required</span>}
                                        </div>
                                    </div>

                                    <div className='grid lg:grid-cols-3 gap-2 my-2'>
                                        <div>
                                            <label htmlFor="city" style={{color: 'lightGray', fontSize: '12px'}}>City</label>
                                            <input type='text' id='city' {...register("city", { required: true })} />
                                            {errors.city && <span>This field is required</span>}
                                        </div>

                                        <div>
                                            <label htmlFor="emergency_phone" style={{color: 'lightGray', fontSize: '12px'}}>Emergency Phone</label>
                                            <input type='text' id='emergency_phone' {...register("emergency_phone", { required: true })} />
                                            {errors.emergency_phone && <span>This field is required</span>}
                                        </div>

                                        <div>
                                            <label htmlFor="official_email" style={{color: 'lightGray', fontSize: '12px'}}>Official Email</label>
                                            <input type='email' id='official_email' {...register("official_email", { required: true })} />
                                            {errors.official_email && <span>This field is required</span>}
                                        </div>
                                    </div>

                                    <p className='text-white flex my-4 bg-[var(--bg-color)] p-2 text-xs'><ShieldCheck className='mr-2 text-green-600'/> By registering, you commit to maintaining real-time blood stock counts on the national network.</p>

                                    <input type="submit"/>
                                </form>
                                
                            </Modal.Body>
                           
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </section>

        {/* search form */}
        <section className='m-4 rounded-xl p-8 my-10 mx-auto border border-gray-500 lg:w-[80%]' data-aos="fade-up">
            <h1 className='flex font-bold'>
                <Search className='mr-2'/> Find Blood Availability
            </h1>
              <form onSubmit={handleSubmit(onSubmit)} className='lg:grid grid-cols-3 gap-5'>
                <input type='search' {...register("searchBloodBank")} placeholder='Search blood bank, city, area or pincode' className='border border-gray-500 my-4' />
                <select {...register("bloodGroup")} className='my-4 border border-gray-500'>
                    <option value="">All Blood Groups</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                <select {...register("bloodGroup")} className='my-4 border border-gray-500'>
                    <option value="">All Distances</option>
                    <option value="5">Within 5 km</option>
                    <option value="10">Within 10 km</option>
                    <option value="20">Within 20 km</option>
                    <option value="50">Within 50 km</option>
                    <option value="100">Within 100 km</option>
                </select>
                <ToggleButton className=" bg-transparent border w-full my-4 border-gray-500 lg:w-40">
                    <Navigation className='text-green-600 '/>
                    Use my location
                </ToggleButton>
                <div className='col-span-2 lg:grid grid-cols-subgrid gap-4'>
                    <input type="submit" value="Search Blood Banks" className='my-4 lg:h-10 lg:font-bold lg:text-lg col-start-2 ' />
                </div>
                </form>
        </section>

        {/* card */}
        <section className='grid lg:grid-cols-4 md:grid-cols-2 lg:w-[80%] lg:mx-auto' data-aos="fade-up">
            <div className='h-50 p-8 bg-[var(--bg-box-color)] rounded-xl m-4'>
                <Droplet className='p-2 mb-4 w-10 rounded-xl h-10 bg-[var(--primary-color)] '/>
                <h1 className='text-4xl customFont'>128</h1>
                <p className='font-bold'>Registered Blood Banks</p>
                <p className='text-sm text-gray-400'>Verified by Health Authority</p>
            </div>
            <div className='h-50 p-8 bg-[var(--bg-box-color)] rounded-xl m-4'>
                <BriefcaseMedical className='p-2 mb-4 w-10 rounded-xl h-10 bg-[var(--primary-color)] '/>
                <h1 className='text-4xl customFont'>42</h1>
                <p className='font-bold'>Nearby Blood Banks</p>
                <p className='text-sm text-gray-400'>In your search radius</p>
            </div>
            <div className='h-50 p-8 bg-[var(--bg-box-color)] rounded-xl m-4'>
                <DoorOpen className='p-2 mb-4 w-10 rounded-xl h-10 bg-[var(--primary-color)] '/>
                <h1 className='text-4xl customFont'>86</h1>
                <p className='font-bold'>Currently Open</p>
                <p className='text-sm text-gray-400'>Ready for immediate dispatch</p>
            </div>
            <div className='h-50 p-8 bg-[var(--bg-box-color)] rounded-xl m-4'>
                <DoorOpen className='p-2 mb-4 w-10 rounded-xl h-10 bg-[var(--primary-color)] '/>
                <h1 className='text-4xl customFont'>15K+</h1>
                <p className='font-bold'>Blood Units Available</p>
                <p className='text-sm text-gray-400'>Across all 8 blood groups</p>
            </div>
        </section>
        
        {/* map */}
        <section className="w-[100%] my-8" data-aos="fade-up">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.36273789578!2d80.25598096048093!3d26.447303775679508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786132475152!5m2!1sen!2sin"
            className="w-full h-120"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
        </section>
        
        {/* blood bank cards */}
        <section className=' grid  lg:grid-cols-3 md:grid-cols-2 gap-5  my-8' data-aos="fade-up">
            <div className="bg-[var(--bg-box-color)] m-4 rounded-2xl border border-[#2A1B1B] hover:border-[#F53A3F]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F53A3F]/10 overflow-hidden group flex flex-col justify-between  "
                >
                <div>
                    {/* Top Image Banner & Header Badges */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#120B0B]">
                    <img
                        src={bloodBankImage}
                        alt={bloodBankImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1111] via-transparent to-black/60" />

                    {/* Badges on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-xs font-bold shadow-md backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Blood Bank</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#120B0B]/90 text-xs font-semibold text-white border border-[#2A1B1B] backdrop-blur-md flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#F53A3F]" />
                        <span>10 km away</span>
                        </span>
                    </div>

                    {/* Bank Type Pill at Bottom Left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120B0B]/80 border border-[#2A1B1B] text-[11px] font-medium text-[#A8A8A8] backdrop-blur-sm">
                        Private Facility
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-red-950/90 border border-red-800/60 text-[10px] font-bold text-red-400 backdrop-blur-sm uppercase tracking-wider">
                            24/7 Emergency
                        </span>
                    </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 pb-0">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#F53A3F] transition-colors leading-snug">
                            City Care Regional Blood Center
                            </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F53A3F] flex-none" />
                            <span className="truncate">14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh</span>
                        </div>

                        {/* Timing & Open Status */}
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Open Now</span>
                            </div>

                            <div className="flex items-center gap-1 text-[#A8A8A8]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8:00 PM</span>
                            </div>
                        </div>

                        {/* Phone call prompt */}
                        <div className="flex items-center justify-between text-xs text-[#A8A8A8] bg-[#120B0B] border border-[#2A1B1B] rounded-xl px-3 py-2 mt-3">
                            <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#F53A3F]" />
                            <span className="font-mono text-white">+91 512 254 8920</span>
                            </div>
                            <a
                            href='tel:+91 512 254 8920'
                            className="text-[#F53A3F] hover:underline font-semibold cursor-pointer"
                            >
                            Call Blood Bank
                            </a>
                        </div>

                        {/* Blood Stock Section */}
                        <div className='mx-4'>
                            <small className='uppercase text-gray-400 font-bold mt-2 inline-block'>Blood Stock Availability</small>
                            <div className='grid grid-cols-3 gap-2 my-4'>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                
                            
                                
                            </div>
                        </div>
                    
                    </div>

                {/* Action Buttons */}
                    <div className='grid grid-cols-2 gap-5 p-4'>
                        <Modal>
                            <Button className=" bg-[var(--bg-color)] w-full "><ExternalLink />View Details</Button>
                            <Modal.Backdrop >
                                <Modal.Container size='cover' >
                                <Modal.Dialog className="bg-[var(--bg-box-color)] p-0 lg:w-[50rem]  ">
                                    <Modal.CloseTrigger className='z-1' />
                                    <Modal.Header>
                                    <Modal.Heading >
                                        <div className="bg-cover bg-center bg-no-repeat min-h-60 lg:min-h-100 flex items-end mask-b-from-40% mask-b-to-60% absolute top-0 w-full " style={{ backgroundImage: `url(${bloodBankImage})` }}>
                                        </div>
                                            <div className='mt-35 lg:mt-60 mx-4'>
                                                <div className='flex'>
                                                    <Chip className='bg-green-950 text-green-600 border border-green-600 m-2 font-bold'><ShieldCheck/>Varified Center </Chip>
                                                    <Chip className='bg-gray-950 text-gray-400 border border-gray-400 m-2 font-bold'>Private Facility</Chip>
                                                </div>
                                                <h1 className='customFont text-2xl lg:text-3xl text-[var(--text-color)]'>City Care Regional Blood Center</h1>
                                                
                                            </div>
                                    </Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <MapPin className='mx-2 my-0 text-[var(--primary-color)]'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Complete Address</h1>
                                                <p className='my-1'>14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh - 208002</p>
                                                <p className='flex text-green-500 text-xs'><Pin className='h-4 text-[var(--primary-color)]'/>2.4 km away from your estimated location</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Clock className='mx-2 my-0 text-yellow-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Opening Hours</h1>
                                                <p className='my-1'>24 Hours Emergency / Regular 8:00 AM - 8:00 PM</p>
                                                <p className='flex text-red-500 text-xs'><Siren className='h-4 text-[var(--primary-color)]'/>24/7 Emergency Transfusion Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Phone className='mx-2 my-0 text-green-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Helpdesk Phone</h1>
                                                <p className='my-1'>+91 512 254 8920</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Mail className='mx-2 my-0 text-blue-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Official Email</h1>
                                                <p className='my-1'>help@citycareblood.org</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4 '>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <Droplet className='text-[var(--primary-color)] mr-2'/> Current Blood Stock Inventory</h1>
                                        <div className='grid grid-cols-3 gap-2 my-4'>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <BriefcaseMedicalIcon className='text-[var(--primary-color)] mr-2'/> Available Facilities</h1>
                                        <di className="grid lg:grid-cols-2 gap-2">
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Collection</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Storage</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Testing & Screening</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Component Separation (PRBC, FFP, Platelets)</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>24/7 Emergency Blood Supply</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Apheresis Facility</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Cold Chain Logistics</p>
                                            </div>
                                        </di>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="bg-[var(--primary-color)] mx-6 mb-8" >
                                        <Phone className='text-[var(--text-color)] mr-2 '/>
                                        Call
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className="bg-[var(--bg-color)]  w-full"> <LocationArrow/>Get Directions</Button>
                            <Modal.Backdrop>
                                <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                    </Modal.Icon>
                                    <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>
                                        A beautiful, fast, and modern React UI library for building accessible and
                                        customizable web applications with ease.
                                    </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="w-full" slot="close">
                                        Continue
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className=" bg-[var(--primary-color)] hover:bg-red-700 w-full col-span-2">
                            <HeartHandshake /> Request Blood
                            </Button>
                            <Modal.Backdrop>
                                <Modal.Container size='lg'>
                                <Modal.Dialog className=" bg-[var(--bg-box-color)]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <div className="flex justify-between items-center border-b-1 pb-4">
                                            <div className="flex items-center">
                                                <HeartHandshake className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                                <span className="py-2">
                                                    <h1 className="customFont text-[var(--primary-color)]">Request Blood Units</h1>
                                                    <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                                </span>
                                            </div>      
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                            <div>
                                                <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                                                <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                                                {errors.patientName && <span>This field is required</span>}
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                                                    <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                                                    {errors.contactNumber && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                                                    <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                        <option value="A+">A+ Group</option>
                                                        <option value="A-">A- Group</option>
                                                        <option value="B+">B+ Group</option>
                                                        <option value="B-">B- Group</option>
                                                        <option value="AB+">AB+ Group</option>
                                                        <option value="AB-">AB- Group</option>
                                                        <option value="O+">O+ Group</option>
                                                        <option value="O-">O- Group</option>
                                                    </select>
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                                                    <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                                                    {errors.blood_units && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                                                    <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                                                    {errors.hospital_name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="immediate"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="immediate"
                                                        >
                                                        Immediate (1-2h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="urgent"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="urgent"
                                                        >
                                                        Urgent (12h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="standard"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="standard"
                                                        >
                                                        Standard (24h)
                                                        </label>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                                                <textarea id='doctorPrescriptions' {...register("doctorPrescriptions", { required: true })}></textarea>
                                                {errors.doctorPrescriptions && <span>This field is required</span>}
                                            </div>
                                            <input type="submit" value="Send Blood Request"/>
                                        </form>
                                        
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--bg-box-color)] m-4 rounded-2xl border border-[#2A1B1B] hover:border-[#F53A3F]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F53A3F]/10 overflow-hidden group flex flex-col justify-between  "
                >
                <div>
                    {/* Top Image Banner & Header Badges */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#120B0B]">
                    <img
                        src={bloodBankImage}
                        alt={bloodBankImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1111] via-transparent to-black/60" />

                    {/* Badges on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-xs font-bold shadow-md backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Blood Bank</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#120B0B]/90 text-xs font-semibold text-white border border-[#2A1B1B] backdrop-blur-md flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#F53A3F]" />
                        <span>10 km away</span>
                        </span>
                    </div>

                    {/* Bank Type Pill at Bottom Left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120B0B]/80 border border-[#2A1B1B] text-[11px] font-medium text-[#A8A8A8] backdrop-blur-sm">
                        Private Facility
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-red-950/90 border border-red-800/60 text-[10px] font-bold text-red-400 backdrop-blur-sm uppercase tracking-wider">
                            24/7 Emergency
                        </span>
                    </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 pb-0">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#F53A3F] transition-colors leading-snug">
                            City Care Regional Blood Center
                            </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F53A3F] flex-none" />
                            <span className="truncate">14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh</span>
                        </div>

                        {/* Timing & Open Status */}
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Open Now</span>
                            </div>

                            <div className="flex items-center gap-1 text-[#A8A8A8]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8:00 PM</span>
                            </div>
                        </div>

                        {/* Phone call prompt */}
                        <div className="flex items-center justify-between text-xs text-[#A8A8A8] bg-[#120B0B] border border-[#2A1B1B] rounded-xl px-3 py-2 mt-3">
                            <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#F53A3F]" />
                            <span className="font-mono text-white">+91 512 254 8920</span>
                            </div>
                            <a
                            href='tel:+91 512 254 8920'
                            className="text-[#F53A3F] hover:underline font-semibold cursor-pointer"
                            >
                            Call Blood Bank
                            </a>
                        </div>

                        {/* Blood Stock Section */}
                        <div className='mx-4'>
                            <small className='uppercase text-gray-400 font-bold mt-2 inline-block'>Blood Stock Availability</small>
                            <div className='grid grid-cols-3 gap-2 my-4'>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                
                            
                                
                            </div>
                        </div>
                    
                    </div>

                {/* Action Buttons */}
                    <div className='grid grid-cols-2 gap-5 p-4'>
                        <Modal>
                            <Button className=" bg-[var(--bg-color)] w-full "><ExternalLink />View Details</Button>
                            <Modal.Backdrop >
                                <Modal.Container size='cover' >
                                <Modal.Dialog className="bg-[var(--bg-box-color)] p-0 lg:w-[50rem]  ">
                                    <Modal.CloseTrigger className='z-1' />
                                    <Modal.Header>
                                    <Modal.Heading >
                                        <div className="bg-cover bg-center bg-no-repeat min-h-60 lg:min-h-100 flex items-end mask-b-from-40% mask-b-to-60% absolute top-0 w-full " style={{ backgroundImage: `url(${bloodBankImage})` }}>
                                        </div>
                                            <div className='mt-35 lg:mt-60 mx-4'>
                                                <div className='flex'>
                                                    <Chip className='bg-green-950 text-green-600 border border-green-600 m-2 font-bold'><ShieldCheck/>Varified Center </Chip>
                                                    <Chip className='bg-gray-950 text-gray-400 border border-gray-400 m-2 font-bold'>Private Facility</Chip>
                                                </div>
                                                <h1 className='customFont text-2xl lg:text-3xl text-[var(--text-color)]'>City Care Regional Blood Center</h1>
                                                
                                            </div>
                                    </Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <MapPin className='mx-2 my-0 text-[var(--primary-color)]'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Complete Address</h1>
                                                <p className='my-1'>14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh - 208002</p>
                                                <p className='flex text-green-500 text-xs'><Pin className='h-4 text-[var(--primary-color)]'/>2.4 km away from your estimated location</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Clock className='mx-2 my-0 text-yellow-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Opening Hours</h1>
                                                <p className='my-1'>24 Hours Emergency / Regular 8:00 AM - 8:00 PM</p>
                                                <p className='flex text-red-500 text-xs'><Siren className='h-4 text-[var(--primary-color)]'/>24/7 Emergency Transfusion Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Phone className='mx-2 my-0 text-green-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Helpdesk Phone</h1>
                                                <p className='my-1'>+91 512 254 8920</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Mail className='mx-2 my-0 text-blue-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Official Email</h1>
                                                <p className='my-1'>help@citycareblood.org</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4 '>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <Droplet className='text-[var(--primary-color)] mr-2'/> Current Blood Stock Inventory</h1>
                                        <div className='grid grid-cols-3 gap-2 my-4'>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <BriefcaseMedicalIcon className='text-[var(--primary-color)] mr-2'/> Available Facilities</h1>
                                        <di className="grid lg:grid-cols-2 gap-2">
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Collection</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Storage</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Testing & Screening</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Component Separation (PRBC, FFP, Platelets)</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>24/7 Emergency Blood Supply</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Apheresis Facility</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Cold Chain Logistics</p>
                                            </div>
                                        </di>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="bg-[var(--primary-color)] mx-6 mb-8" >
                                        <Phone className='text-[var(--text-color)] mr-2 '/>
                                        Call
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className="bg-[var(--bg-color)]  w-full"> <LocationArrow/>Get Directions</Button>
                            <Modal.Backdrop>
                                <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                    </Modal.Icon>
                                    <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>
                                        A beautiful, fast, and modern React UI library for building accessible and
                                        customizable web applications with ease.
                                    </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="w-full" slot="close">
                                        Continue
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className=" bg-[var(--primary-color)] hover:bg-red-700 w-full col-span-2">
                            <HeartHandshake /> Request Blood
                            </Button>
                            <Modal.Backdrop>
                                <Modal.Container size='lg'>
                                <Modal.Dialog className=" bg-[var(--bg-box-color)]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <div className="flex justify-between items-center border-b-1 pb-4">
                                            <div className="flex items-center">
                                                <HeartHandshake className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                                <span className="py-2">
                                                    <h1 className="customFont text-[var(--primary-color)]">Request Blood Units</h1>
                                                    <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                                </span>
                                            </div>      
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                            <div>
                                                <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                                                <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                                                {errors.patientName && <span>This field is required</span>}
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                                                    <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                                                    {errors.contactNumber && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                                                    <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                        <option value="A+">A+ Group</option>
                                                        <option value="A-">A- Group</option>
                                                        <option value="B+">B+ Group</option>
                                                        <option value="B-">B- Group</option>
                                                        <option value="AB+">AB+ Group</option>
                                                        <option value="AB-">AB- Group</option>
                                                        <option value="O+">O+ Group</option>
                                                        <option value="O-">O- Group</option>
                                                    </select>
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                                                    <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                                                    {errors.blood_units && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                                                    <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                                                    {errors.hospital_name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="immediate"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="immediate"
                                                        >
                                                        Immediate (1-2h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="urgent"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="urgent"
                                                        >
                                                        Urgent (12h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="standard"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="standard"
                                                        >
                                                        Standard (24h)
                                                        </label>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                                                <textarea id='doctorPrescriptions' {...register("doctorPrescriptions", { required: true })}></textarea>
                                                {errors.doctorPrescriptions && <span>This field is required</span>}
                                            </div>
                                            <input type="submit" value="Send Blood Request"/>
                                        </form>
                                        
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--bg-box-color)] m-4 rounded-2xl border border-[#2A1B1B] hover:border-[#F53A3F]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F53A3F]/10 overflow-hidden group flex flex-col justify-between  "
                >
                <div>
                    {/* Top Image Banner & Header Badges */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#120B0B]">
                    <img
                        src={bloodBankImage}
                        alt={bloodBankImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1111] via-transparent to-black/60" />

                    {/* Badges on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-xs font-bold shadow-md backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Blood Bank</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#120B0B]/90 text-xs font-semibold text-white border border-[#2A1B1B] backdrop-blur-md flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#F53A3F]" />
                        <span>10 km away</span>
                        </span>
                    </div>

                    {/* Bank Type Pill at Bottom Left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120B0B]/80 border border-[#2A1B1B] text-[11px] font-medium text-[#A8A8A8] backdrop-blur-sm">
                        Private Facility
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-red-950/90 border border-red-800/60 text-[10px] font-bold text-red-400 backdrop-blur-sm uppercase tracking-wider">
                            24/7 Emergency
                        </span>
                    </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 pb-0">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#F53A3F] transition-colors leading-snug">
                            City Care Regional Blood Center
                            </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F53A3F] flex-none" />
                            <span className="truncate">14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh</span>
                        </div>

                        {/* Timing & Open Status */}
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Open Now</span>
                            </div>

                            <div className="flex items-center gap-1 text-[#A8A8A8]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8:00 PM</span>
                            </div>
                        </div>

                        {/* Phone call prompt */}
                        <div className="flex items-center justify-between text-xs text-[#A8A8A8] bg-[#120B0B] border border-[#2A1B1B] rounded-xl px-3 py-2 mt-3">
                            <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#F53A3F]" />
                            <span className="font-mono text-white">+91 512 254 8920</span>
                            </div>
                            <a
                            href='tel:+91 512 254 8920'
                            className="text-[#F53A3F] hover:underline font-semibold cursor-pointer"
                            >
                            Call Blood Bank
                            </a>
                        </div>

                        {/* Blood Stock Section */}
                        <div className='mx-4'>
                            <small className='uppercase text-gray-400 font-bold mt-2 inline-block'>Blood Stock Availability</small>
                            <div className='grid grid-cols-3 gap-2 my-4'>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                
                            
                                
                            </div>
                        </div>
                    
                    </div>

                {/* Action Buttons */}
                    <div className='grid grid-cols-2 gap-5 p-4'>
                        <Modal>
                            <Button className=" bg-[var(--bg-color)] w-full "><ExternalLink />View Details</Button>
                            <Modal.Backdrop >
                                <Modal.Container size='cover' >
                                <Modal.Dialog className="bg-[var(--bg-box-color)] p-0 lg:w-[50rem]  ">
                                    <Modal.CloseTrigger className='z-1' />
                                    <Modal.Header>
                                    <Modal.Heading >
                                        <div className="bg-cover bg-center bg-no-repeat min-h-60 lg:min-h-100 flex items-end mask-b-from-40% mask-b-to-60% absolute top-0 w-full " style={{ backgroundImage: `url(${bloodBankImage})` }}>
                                        </div>
                                            <div className='mt-35 lg:mt-60 mx-4'>
                                                <div className='flex'>
                                                    <Chip className='bg-green-950 text-green-600 border border-green-600 m-2 font-bold'><ShieldCheck/>Varified Center </Chip>
                                                    <Chip className='bg-gray-950 text-gray-400 border border-gray-400 m-2 font-bold'>Private Facility</Chip>
                                                </div>
                                                <h1 className='customFont text-2xl lg:text-3xl text-[var(--text-color)]'>City Care Regional Blood Center</h1>
                                                
                                            </div>
                                    </Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <MapPin className='mx-2 my-0 text-[var(--primary-color)]'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Complete Address</h1>
                                                <p className='my-1'>14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh - 208002</p>
                                                <p className='flex text-green-500 text-xs'><Pin className='h-4 text-[var(--primary-color)]'/>2.4 km away from your estimated location</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Clock className='mx-2 my-0 text-yellow-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Opening Hours</h1>
                                                <p className='my-1'>24 Hours Emergency / Regular 8:00 AM - 8:00 PM</p>
                                                <p className='flex text-red-500 text-xs'><Siren className='h-4 text-[var(--primary-color)]'/>24/7 Emergency Transfusion Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Phone className='mx-2 my-0 text-green-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Helpdesk Phone</h1>
                                                <p className='my-1'>+91 512 254 8920</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Mail className='mx-2 my-0 text-blue-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Official Email</h1>
                                                <p className='my-1'>help@citycareblood.org</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4 '>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <Droplet className='text-[var(--primary-color)] mr-2'/> Current Blood Stock Inventory</h1>
                                        <div className='grid grid-cols-3 gap-2 my-4'>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <BriefcaseMedicalIcon className='text-[var(--primary-color)] mr-2'/> Available Facilities</h1>
                                        <di className="grid lg:grid-cols-2 gap-2">
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Collection</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Storage</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Testing & Screening</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Component Separation (PRBC, FFP, Platelets)</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>24/7 Emergency Blood Supply</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Apheresis Facility</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Cold Chain Logistics</p>
                                            </div>
                                        </di>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="bg-[var(--primary-color)] mx-6 mb-8" >
                                        <Phone className='text-[var(--text-color)] mr-2 '/>
                                        Call
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className="bg-[var(--bg-color)]  w-full"> <LocationArrow/>Get Directions</Button>
                            <Modal.Backdrop>
                                <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                    </Modal.Icon>
                                    <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>
                                        A beautiful, fast, and modern React UI library for building accessible and
                                        customizable web applications with ease.
                                    </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="w-full" slot="close">
                                        Continue
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className=" bg-[var(--primary-color)] hover:bg-red-700 w-full col-span-2">
                            <HeartHandshake /> Request Blood
                            </Button>
                            <Modal.Backdrop>
                                <Modal.Container size='lg'>
                                <Modal.Dialog className=" bg-[var(--bg-box-color)]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <div className="flex justify-between items-center border-b-1 pb-4">
                                            <div className="flex items-center">
                                                <HeartHandshake className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                                <span className="py-2">
                                                    <h1 className="customFont text-[var(--primary-color)]">Request Blood Units</h1>
                                                    <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                                </span>
                                            </div>      
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                            <div>
                                                <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                                                <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                                                {errors.patientName && <span>This field is required</span>}
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                                                    <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                                                    {errors.contactNumber && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                                                    <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                        <option value="A+">A+ Group</option>
                                                        <option value="A-">A- Group</option>
                                                        <option value="B+">B+ Group</option>
                                                        <option value="B-">B- Group</option>
                                                        <option value="AB+">AB+ Group</option>
                                                        <option value="AB-">AB- Group</option>
                                                        <option value="O+">O+ Group</option>
                                                        <option value="O-">O- Group</option>
                                                    </select>
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                                                    <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                                                    {errors.blood_units && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                                                    <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                                                    {errors.hospital_name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="immediate"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="immediate"
                                                        >
                                                        Immediate (1-2h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="urgent"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="urgent"
                                                        >
                                                        Urgent (12h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="standard"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="standard"
                                                        >
                                                        Standard (24h)
                                                        </label>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                                                <textarea id='doctorPrescriptions' {...register("doctorPrescriptions", { required: true })}></textarea>
                                                {errors.doctorPrescriptions && <span>This field is required</span>}
                                            </div>
                                            <input type="submit" value="Send Blood Request"/>
                                        </form>
                                        
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--bg-box-color)] m-4 rounded-2xl border border-[#2A1B1B] hover:border-[#F53A3F]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F53A3F]/10 overflow-hidden group flex flex-col justify-between  "
                >
                <div>
                    {/* Top Image Banner & Header Badges */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#120B0B]">
                    <img
                        src={bloodBankImage}
                        alt={bloodBankImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1111] via-transparent to-black/60" />

                    {/* Badges on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-xs font-bold shadow-md backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Blood Bank</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#120B0B]/90 text-xs font-semibold text-white border border-[#2A1B1B] backdrop-blur-md flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#F53A3F]" />
                        <span>10 km away</span>
                        </span>
                    </div>

                    {/* Bank Type Pill at Bottom Left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120B0B]/80 border border-[#2A1B1B] text-[11px] font-medium text-[#A8A8A8] backdrop-blur-sm">
                        Private Facility
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-red-950/90 border border-red-800/60 text-[10px] font-bold text-red-400 backdrop-blur-sm uppercase tracking-wider">
                            24/7 Emergency
                        </span>
                    </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 pb-0">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#F53A3F] transition-colors leading-snug">
                            City Care Regional Blood Center
                            </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F53A3F] flex-none" />
                            <span className="truncate">14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh</span>
                        </div>

                        {/* Timing & Open Status */}
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Open Now</span>
                            </div>

                            <div className="flex items-center gap-1 text-[#A8A8A8]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8:00 PM</span>
                            </div>
                        </div>

                        {/* Phone call prompt */}
                        <div className="flex items-center justify-between text-xs text-[#A8A8A8] bg-[#120B0B] border border-[#2A1B1B] rounded-xl px-3 py-2 mt-3">
                            <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#F53A3F]" />
                            <span className="font-mono text-white">+91 512 254 8920</span>
                            </div>
                            <a
                            href='tel:+91 512 254 8920'
                            className="text-[#F53A3F] hover:underline font-semibold cursor-pointer"
                            >
                            Call Blood Bank
                            </a>
                        </div>

                        {/* Blood Stock Section */}
                        <div className='mx-4'>
                            <small className='uppercase text-gray-400 font-bold mt-2 inline-block'>Blood Stock Availability</small>
                            <div className='grid grid-cols-3 gap-2 my-4'>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                
                            
                                
                            </div>
                        </div>
                    
                    </div>

                {/* Action Buttons */}
                    <div className='grid grid-cols-2 gap-5 p-4'>
                        <Modal>
                            <Button className=" bg-[var(--bg-color)] w-full "><ExternalLink />View Details</Button>
                            <Modal.Backdrop >
                                <Modal.Container size='cover' >
                                <Modal.Dialog className="bg-[var(--bg-box-color)] p-0 lg:w-[50rem]  ">
                                    <Modal.CloseTrigger className='z-1' />
                                    <Modal.Header>
                                    <Modal.Heading >
                                        <div className="bg-cover bg-center bg-no-repeat min-h-60 lg:min-h-100 flex items-end mask-b-from-40% mask-b-to-60% absolute top-0 w-full " style={{ backgroundImage: `url(${bloodBankImage})` }}>
                                        </div>
                                            <div className='mt-35 lg:mt-60 mx-4'>
                                                <div className='flex'>
                                                    <Chip className='bg-green-950 text-green-600 border border-green-600 m-2 font-bold'><ShieldCheck/>Varified Center </Chip>
                                                    <Chip className='bg-gray-950 text-gray-400 border border-gray-400 m-2 font-bold'>Private Facility</Chip>
                                                </div>
                                                <h1 className='customFont text-2xl lg:text-3xl text-[var(--text-color)]'>City Care Regional Blood Center</h1>
                                                
                                            </div>
                                    </Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <MapPin className='mx-2 my-0 text-[var(--primary-color)]'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Complete Address</h1>
                                                <p className='my-1'>14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh - 208002</p>
                                                <p className='flex text-green-500 text-xs'><Pin className='h-4 text-[var(--primary-color)]'/>2.4 km away from your estimated location</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Clock className='mx-2 my-0 text-yellow-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Opening Hours</h1>
                                                <p className='my-1'>24 Hours Emergency / Regular 8:00 AM - 8:00 PM</p>
                                                <p className='flex text-red-500 text-xs'><Siren className='h-4 text-[var(--primary-color)]'/>24/7 Emergency Transfusion Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Phone className='mx-2 my-0 text-green-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Helpdesk Phone</h1>
                                                <p className='my-1'>+91 512 254 8920</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Mail className='mx-2 my-0 text-blue-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Official Email</h1>
                                                <p className='my-1'>help@citycareblood.org</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4 '>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <Droplet className='text-[var(--primary-color)] mr-2'/> Current Blood Stock Inventory</h1>
                                        <div className='grid grid-cols-3 gap-2 my-4'>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <BriefcaseMedicalIcon className='text-[var(--primary-color)] mr-2'/> Available Facilities</h1>
                                        <di className="grid lg:grid-cols-2 gap-2">
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Collection</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Storage</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Testing & Screening</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Component Separation (PRBC, FFP, Platelets)</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>24/7 Emergency Blood Supply</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Apheresis Facility</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Cold Chain Logistics</p>
                                            </div>
                                        </di>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="bg-[var(--primary-color)] mx-6 mb-8" >
                                        <Phone className='text-[var(--text-color)] mr-2 '/>
                                        Call
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className="bg-[var(--bg-color)]  w-full"> <LocationArrow/>Get Directions</Button>
                            <Modal.Backdrop>
                                <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                    </Modal.Icon>
                                    <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>
                                        A beautiful, fast, and modern React UI library for building accessible and
                                        customizable web applications with ease.
                                    </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="w-full" slot="close">
                                        Continue
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className=" bg-[var(--primary-color)] hover:bg-red-700 w-full col-span-2">
                            <HeartHandshake /> Request Blood
                            </Button>
                            <Modal.Backdrop>
                                <Modal.Container size='lg'>
                                <Modal.Dialog className=" bg-[var(--bg-box-color)]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <div className="flex justify-between items-center border-b-1 pb-4">
                                            <div className="flex items-center">
                                                <HeartHandshake className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                                <span className="py-2">
                                                    <h1 className="customFont text-[var(--primary-color)]">Request Blood Units</h1>
                                                    <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                                </span>
                                            </div>      
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                            <div>
                                                <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                                                <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                                                {errors.patientName && <span>This field is required</span>}
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                                                    <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                                                    {errors.contactNumber && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                                                    <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                        <option value="A+">A+ Group</option>
                                                        <option value="A-">A- Group</option>
                                                        <option value="B+">B+ Group</option>
                                                        <option value="B-">B- Group</option>
                                                        <option value="AB+">AB+ Group</option>
                                                        <option value="AB-">AB- Group</option>
                                                        <option value="O+">O+ Group</option>
                                                        <option value="O-">O- Group</option>
                                                    </select>
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                                                    <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                                                    {errors.blood_units && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                                                    <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                                                    {errors.hospital_name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="immediate"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="immediate"
                                                        >
                                                        Immediate (1-2h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="urgent"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="urgent"
                                                        >
                                                        Urgent (12h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="standard"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="standard"
                                                        >
                                                        Standard (24h)
                                                        </label>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                                                <textarea id='doctorPrescriptions' {...register("doctorPrescriptions", { required: true })}></textarea>
                                                {errors.doctorPrescriptions && <span>This field is required</span>}
                                            </div>
                                            <input type="submit" value="Send Blood Request"/>
                                        </form>
                                        
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--bg-box-color)] m-4 rounded-2xl border border-[#2A1B1B] hover:border-[#F53A3F]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F53A3F]/10 overflow-hidden group flex flex-col justify-between  "
                >
                <div>
                    {/* Top Image Banner & Header Badges */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#120B0B]">
                    <img
                        src={bloodBankImage}
                        alt={bloodBankImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1111] via-transparent to-black/60" />

                    {/* Badges on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-xs font-bold shadow-md backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Blood Bank</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#120B0B]/90 text-xs font-semibold text-white border border-[#2A1B1B] backdrop-blur-md flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#F53A3F]" />
                        <span>10 km away</span>
                        </span>
                    </div>

                    {/* Bank Type Pill at Bottom Left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120B0B]/80 border border-[#2A1B1B] text-[11px] font-medium text-[#A8A8A8] backdrop-blur-sm">
                        Private Facility
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-red-950/90 border border-red-800/60 text-[10px] font-bold text-red-400 backdrop-blur-sm uppercase tracking-wider">
                            24/7 Emergency
                        </span>
                    </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 pb-0">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#F53A3F] transition-colors leading-snug">
                            City Care Regional Blood Center
                            </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F53A3F] flex-none" />
                            <span className="truncate">14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh</span>
                        </div>

                        {/* Timing & Open Status */}
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Open Now</span>
                            </div>

                            <div className="flex items-center gap-1 text-[#A8A8A8]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8:00 PM</span>
                            </div>
                        </div>

                        {/* Phone call prompt */}
                        <div className="flex items-center justify-between text-xs text-[#A8A8A8] bg-[#120B0B] border border-[#2A1B1B] rounded-xl px-3 py-2 mt-3">
                            <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#F53A3F]" />
                            <span className="font-mono text-white">+91 512 254 8920</span>
                            </div>
                            <a
                            href='tel:+91 512 254 8920'
                            className="text-[#F53A3F] hover:underline font-semibold cursor-pointer"
                            >
                            Call Blood Bank
                            </a>
                        </div>

                        {/* Blood Stock Section */}
                        <div className='mx-4'>
                            <small className='uppercase text-gray-400 font-bold mt-2 inline-block'>Blood Stock Availability</small>
                            <div className='grid grid-cols-3 gap-2 my-4'>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                
                            
                                
                            </div>
                        </div>
                    
                    </div>

                {/* Action Buttons */}
                    <div className='grid grid-cols-2 gap-5 p-4'>
                        <Modal>
                            <Button className=" bg-[var(--bg-color)] w-full "><ExternalLink />View Details</Button>
                            <Modal.Backdrop >
                                <Modal.Container size='cover' >
                                <Modal.Dialog className="bg-[var(--bg-box-color)] p-0 lg:w-[50rem]  ">
                                    <Modal.CloseTrigger className='z-1' />
                                    <Modal.Header>
                                    <Modal.Heading >
                                        <div className="bg-cover bg-center bg-no-repeat min-h-60 lg:min-h-100 flex items-end mask-b-from-40% mask-b-to-60% absolute top-0 w-full " style={{ backgroundImage: `url(${bloodBankImage})` }}>
                                        </div>
                                            <div className='mt-35 lg:mt-60 mx-4'>
                                                <div className='flex'>
                                                    <Chip className='bg-green-950 text-green-600 border border-green-600 m-2 font-bold'><ShieldCheck/>Varified Center </Chip>
                                                    <Chip className='bg-gray-950 text-gray-400 border border-gray-400 m-2 font-bold'>Private Facility</Chip>
                                                </div>
                                                <h1 className='customFont text-2xl lg:text-3xl text-[var(--text-color)]'>City Care Regional Blood Center</h1>
                                                
                                            </div>
                                    </Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <MapPin className='mx-2 my-0 text-[var(--primary-color)]'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Complete Address</h1>
                                                <p className='my-1'>14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh - 208002</p>
                                                <p className='flex text-green-500 text-xs'><Pin className='h-4 text-[var(--primary-color)]'/>2.4 km away from your estimated location</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Clock className='mx-2 my-0 text-yellow-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Opening Hours</h1>
                                                <p className='my-1'>24 Hours Emergency / Regular 8:00 AM - 8:00 PM</p>
                                                <p className='flex text-red-500 text-xs'><Siren className='h-4 text-[var(--primary-color)]'/>24/7 Emergency Transfusion Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Phone className='mx-2 my-0 text-green-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Helpdesk Phone</h1>
                                                <p className='my-1'>+91 512 254 8920</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Mail className='mx-2 my-0 text-blue-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Official Email</h1>
                                                <p className='my-1'>help@citycareblood.org</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4 '>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <Droplet className='text-[var(--primary-color)] mr-2'/> Current Blood Stock Inventory</h1>
                                        <div className='grid grid-cols-3 gap-2 my-4'>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <BriefcaseMedicalIcon className='text-[var(--primary-color)] mr-2'/> Available Facilities</h1>
                                        <di className="grid lg:grid-cols-2 gap-2">
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Collection</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Storage</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Testing & Screening</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Component Separation (PRBC, FFP, Platelets)</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>24/7 Emergency Blood Supply</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Apheresis Facility</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Cold Chain Logistics</p>
                                            </div>
                                        </di>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="bg-[var(--primary-color)] mx-6 mb-8" >
                                        <Phone className='text-[var(--text-color)] mr-2 '/>
                                        Call
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className="bg-[var(--bg-color)]  w-full"> <LocationArrow/>Get Directions</Button>
                            <Modal.Backdrop>
                                <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                    </Modal.Icon>
                                    <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>
                                        A beautiful, fast, and modern React UI library for building accessible and
                                        customizable web applications with ease.
                                    </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="w-full" slot="close">
                                        Continue
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className=" bg-[var(--primary-color)] hover:bg-red-700 w-full col-span-2">
                            <HeartHandshake /> Request Blood
                            </Button>
                            <Modal.Backdrop>
                                <Modal.Container size='lg'>
                                <Modal.Dialog className=" bg-[var(--bg-box-color)]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <div className="flex justify-between items-center border-b-1 pb-4">
                                            <div className="flex items-center">
                                                <HeartHandshake className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                                <span className="py-2">
                                                    <h1 className="customFont text-[var(--primary-color)]">Request Blood Units</h1>
                                                    <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                                </span>
                                            </div>      
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                            <div>
                                                <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                                                <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                                                {errors.patientName && <span>This field is required</span>}
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                                                    <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                                                    {errors.contactNumber && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                                                    <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                        <option value="A+">A+ Group</option>
                                                        <option value="A-">A- Group</option>
                                                        <option value="B+">B+ Group</option>
                                                        <option value="B-">B- Group</option>
                                                        <option value="AB+">AB+ Group</option>
                                                        <option value="AB-">AB- Group</option>
                                                        <option value="O+">O+ Group</option>
                                                        <option value="O-">O- Group</option>
                                                    </select>
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                                                    <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                                                    {errors.blood_units && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                                                    <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                                                    {errors.hospital_name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="immediate"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="immediate"
                                                        >
                                                        Immediate (1-2h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="urgent"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="urgent"
                                                        >
                                                        Urgent (12h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="standard"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="standard"
                                                        >
                                                        Standard (24h)
                                                        </label>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                                                <textarea id='doctorPrescriptions' {...register("doctorPrescriptions", { required: true })}></textarea>
                                                {errors.doctorPrescriptions && <span>This field is required</span>}
                                            </div>
                                            <input type="submit" value="Send Blood Request"/>
                                        </form>
                                        
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="bg-[var(--bg-box-color)] m-4 rounded-2xl border border-[#2A1B1B] hover:border-[#F53A3F]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F53A3F]/10 overflow-hidden group flex flex-col justify-between  "
                >
                <div>
                    {/* Top Image Banner & Header Badges */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#120B0B]">
                    <img
                        src={bloodBankImage}
                        alt={bloodBankImage}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1111] via-transparent to-black/60" />

                    {/* Badges on Image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 text-xs font-bold shadow-md backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Verified Blood Bank</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#120B0B]/90 text-xs font-semibold text-white border border-[#2A1B1B] backdrop-blur-md flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#F53A3F]" />
                        <span>10 km away</span>
                        </span>
                    </div>

                    {/* Bank Type Pill at Bottom Left of image */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#120B0B]/80 border border-[#2A1B1B] text-[11px] font-medium text-[#A8A8A8] backdrop-blur-sm">
                        Private Facility
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-red-950/90 border border-red-800/60 text-[10px] font-bold text-red-400 backdrop-blur-sm uppercase tracking-wider">
                            24/7 Emergency
                        </span>
                    </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 pb-0">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-[#F53A3F] transition-colors leading-snug">
                            City Care Regional Blood Center
                            </h3>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] mt-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F53A3F] flex-none" />
                            <span className="truncate">14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh</span>
                        </div>

                        {/* Timing & Open Status */}
                        <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                            <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Open Now</span>
                            </div>

                            <div className="flex items-center gap-1 text-[#A8A8A8]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>8:00 PM</span>
                            </div>
                        </div>

                        {/* Phone call prompt */}
                        <div className="flex items-center justify-between text-xs text-[#A8A8A8] bg-[#120B0B] border border-[#2A1B1B] rounded-xl px-3 py-2 mt-3">
                            <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#F53A3F]" />
                            <span className="font-mono text-white">+91 512 254 8920</span>
                            </div>
                            <a
                            href='tel:+91 512 254 8920'
                            className="text-[#F53A3F] hover:underline font-semibold cursor-pointer"
                            >
                            Call Blood Bank
                            </a>
                        </div>

                        {/* Blood Stock Section */}
                        <div className='mx-4'>
                            <small className='uppercase text-gray-400 font-bold mt-2 inline-block'>Blood Stock Availability</small>
                            <div className='grid grid-cols-3 gap-2 my-4'>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                </div>
                                <div className='flex flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                    <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                    <p className='flex items-center mx-1 text-[10px] font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                </div>
                                
                            
                                
                            </div>
                        </div>
                    
                    </div>

                {/* Action Buttons */}
                    <div className='grid grid-cols-2 gap-5 p-4'>
                        <Modal>
                            <Button className=" bg-[var(--bg-color)] w-full "><ExternalLink />View Details</Button>
                            <Modal.Backdrop >
                                <Modal.Container size='cover' >
                                <Modal.Dialog className="bg-[var(--bg-box-color)] p-0 lg:w-[50rem]  ">
                                    <Modal.CloseTrigger className='z-1' />
                                    <Modal.Header>
                                    <Modal.Heading >
                                        <div className="bg-cover bg-center bg-no-repeat min-h-60 lg:min-h-100 flex items-end mask-b-from-40% mask-b-to-60% absolute top-0 w-full " style={{ backgroundImage: `url(${bloodBankImage})` }}>
                                        </div>
                                            <div className='mt-35 lg:mt-60 mx-4'>
                                                <div className='flex'>
                                                    <Chip className='bg-green-950 text-green-600 border border-green-600 m-2 font-bold'><ShieldCheck/>Varified Center </Chip>
                                                    <Chip className='bg-gray-950 text-gray-400 border border-gray-400 m-2 font-bold'>Private Facility</Chip>
                                                </div>
                                                <h1 className='customFont text-2xl lg:text-3xl text-[var(--text-color)]'>City Care Regional Blood Center</h1>
                                                
                                            </div>
                                    </Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <MapPin className='mx-2 my-0 text-[var(--primary-color)]'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Complete Address</h1>
                                                <p className='my-1'>14/112 Mall Road, Swaroop Nagar, Kanpur, Uttar Pradesh - 208002</p>
                                                <p className='flex text-green-500 text-xs'><Pin className='h-4 text-[var(--primary-color)]'/>2.4 km away from your estimated location</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Clock className='mx-2 my-0 text-yellow-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Opening Hours</h1>
                                                <p className='my-1'>24 Hours Emergency / Regular 8:00 AM - 8:00 PM</p>
                                                <p className='flex text-red-500 text-xs'><Siren className='h-4 text-[var(--primary-color)]'/>24/7 Emergency Transfusion Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid lg:grid-cols-2 gap-5 my-4 text-[var(--text-color)] mx-4 font-medium '>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Phone className='mx-2 my-0 text-green-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Helpdesk Phone</h1>
                                                <p className='my-1'>+91 512 254 8920</p>
                                            </div>
                                        </div>
                                        <div className=' bg-[var(--bg-color)] rounded-xl flex justify-start p-4 '>
                                            <Mail className='mx-2 my-0 text-blue-600 p-1'/>
                                            <div>
                                                <h1 className='uppercase text-gray-400 text-sm font-bold'>Official Email</h1>
                                                <p className='my-1'>help@citycareblood.org</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4 '>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <Droplet className='text-[var(--primary-color)] mr-2'/> Current Blood Stock Inventory</h1>
                                        <div className='grid grid-cols-3 gap-2 my-4'>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-gray-600 bg-gray-950 border-gray-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Unavailable(0)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-green-600 bg-green-950 border-green-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Available(45)</p>
                                            </div>
                                            <div className='flex p-2 flex-wrap items-center justify-center border-1 rounded-lg text-yellow-600 bg-yellow-950 border-yellow-600'> 
                                                <h1 className='font-bold text-xs text-[var(--text-color)]'>A+</h1>
                                                <p className='flex items-center mx-1 text-xs font-bold'><CircleFill className='w-3 mr-1'/> Low (5)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mx-4'>
                                        <h1 className='flex text-xl text-white font-bold my-6'> <BriefcaseMedicalIcon className='text-[var(--primary-color)] mr-2'/> Available Facilities</h1>
                                        <di className="grid lg:grid-cols-2 gap-2">
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Collection</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Storage</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Blood Testing & Screening</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Component Separation (PRBC, FFP, Platelets)</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>24/7 Emergency Blood Supply</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Apheresis Facility</p>
                                            </div>
                                            <div className='flex text-white bg-[var(--bg-color)] p-3 rounded-xl'>
                                                <CircleCheck className='mr-2 p-1 text-green-500'/>
                                                <p>Cold Chain Logistics</p>
                                            </div>
                                        </di>
                                    </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="bg-[var(--primary-color)] mx-6 mb-8" >
                                        <Phone className='text-[var(--text-color)] mr-2 '/>
                                        Call
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className="bg-[var(--bg-color)]  w-full"> <LocationArrow/>Get Directions</Button>
                            <Modal.Backdrop>
                                <Modal.Container>
                                <Modal.Dialog className="sm:max-w-[360px]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                    <Modal.Icon className="bg-default text-foreground">
                                    </Modal.Icon>
                                    <Modal.Heading>Welcome to HeroUI</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>
                                        A beautiful, fast, and modern React UI library for building accessible and
                                        customizable web applications with ease.
                                    </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button className="w-full" slot="close">
                                        Continue
                                    </Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                        <Modal>
                            <Button className=" bg-[var(--primary-color)] hover:bg-red-700 w-full col-span-2">
                            <HeartHandshake /> Request Blood
                            </Button>
                            <Modal.Backdrop>
                                <Modal.Container size='lg'>
                                <Modal.Dialog className=" bg-[var(--bg-box-color)]">
                                    <Modal.CloseTrigger />
                                    <Modal.Header>
                                        <div className="flex justify-between items-center border-b-1 pb-4">
                                            <div className="flex items-center">
                                                <HeartHandshake className='mr-4 p-2 w-10 h-10 rounded-xl bg-[var(--primary-color)]'/>
                                                <span className="py-2">
                                                    <h1 className="customFont text-[var(--primary-color)]">Request Blood Units</h1>
                                                    <p className="inline-block mx-1 text-xs text-gray-300">Join the National Blood Availability Network</p>
                                                </span>
                                            </div>      
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "0px"}} >
                                            <div>
                                                <label htmlFor="patientName" style={{color: 'lightGray', fontSize: '12px'}}>Patient Name</label>
                                                <input type='text' id='patientName' placeholder='Full name of recipient' {...register("patientName", { required: true })} />
                                                {errors.patientName && <span>This field is required</span>}
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="contactNumber" style={{color: 'lightGray', fontSize: '12px'}}>Contact No.</label>
                                                    <input type='text' id='contactNumber' {...register("contactNumber", { required: true })} />
                                                    {errors.contactNumber && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="facilityType" style={{color: 'lightGray', fontSize: '12px'}}>Blood Group</label>
                                                    <select id="facilityType"  {...register("exampleRequired", { required: true })}>
                                                        <option value="A+">A+ Group</option>
                                                        <option value="A-">A- Group</option>
                                                        <option value="B+">B+ Group</option>
                                                        <option value="B-">B- Group</option>
                                                        <option value="AB+">AB+ Group</option>
                                                        <option value="AB-">AB- Group</option>
                                                        <option value="O+">O+ Group</option>
                                                        <option value="O-">O- Group</option>
                                                    </select>
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className='grid lg:grid-cols-2 gap-2 my-2'>
                                                <div>
                                                    <label htmlFor="blood_units" style={{color: 'lightGray', fontSize: '12px'}}>Number of Units</label>
                                                    <input type='number' id='blood_units' {...register("blood_units", { required: true })} />
                                                    {errors.blood_units && <span>This field is required</span>}
                                                </div>

                                                <div>
                                                    <label htmlFor="hospital_name" style={{color: 'lightGray', fontSize: '12px'}}>Hospital Name & Bed Number</label>
                                                    <input type='text' id='hospital_name' {...register("hospital_name", { required: true })} />
                                                    {errors.hospital_name && <span>This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <h1 className="my-2 text-white font-bold">Urgency Level</h1>
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="immediate"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="immediate"
                                                        >
                                                        Immediate (1-2h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="urgent"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="urgent"
                                                        >
                                                        Urgent (12h)
                                                        </label>
                                                    </div>
                                                    <div className="relative my-2">
                                                        <input
                                                        type="radio"
                                                        id="standard"
                                                        className="absolute peer invisible -z-10 "
                                                        {...register("urgency_level")}
                                                        />
                                                        <label
                                                        className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)]  w-full text-center rounded-2xl bg-transparent border border-gray-500"
                                                        style={{ padding: "4px", fontSize: "15px" }}
                                                        htmlFor="standard"
                                                        >
                                                        Standard (24h)
                                                        </label>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="doctorPrescriptions" style={{color: 'lightGray', fontSize: '12px'}}>Doctor Prescriptions / Remarks (Optional)</label>
                                                <textarea id='doctorPrescriptions' {...register("doctorPrescriptions", { required: true })}></textarea>
                                                {errors.doctorPrescriptions && <span>This field is required</span>}
                                            </div>
                                            <input type="submit" value="Send Blood Request"/>
                                        </form>
                                        
                                    </Modal.Body>
                                
                                </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>
                    </div>
                </div>
            </div>
           
        </section>

        <Footer/>
    </>
  )
}

export default SearchBloodBank