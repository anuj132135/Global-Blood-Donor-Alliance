import React from "react";
import {
  HeartHandshake,
  ShieldCheck,
  PhoneCall,
  PlusCircle,
  UserCheck,
  MapPin,
  Users,
  Activity,
  Heart,
  Clock,
  AlertTriangle,
  Siren,
  Droplet,
  Phone,
  ShieldAlert,
} from "lucide-react";
import {CircleFill, Envelope, HeartFill, StarFill} from '@gravity-ui/icons';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Avatar, Chip, Modal } from "@heroui/react";
import { useForm } from "react-hook-form";

function SearchDonor() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* header */}
      <Header />
      {/* Search Banner */}
      <section className="lg:w-[80%] mx-auto px-4 py-10 lg:flex justify-center items-center" data-aos="fade-up">
        <div>
          <h1 className="text-4xl customFont my-4">
            Find a Blood Donor Near You
          </h1>
          <p>
            Find compatible blood donors based on blood group and location.
            Connect with available donors when you need blood.
          </p>
        </div>
        <div className="flex my-4">
          <Button className="lg:mx-2 mr-1 bg-transparent text-gray-200 border border-gray-500 hover:border-[var(--primary-color)] hover:text-[var(--text-color)]">
            <MapPin />
            Nearby Donors
          </Button>
          <Button className="lg:mx-2 bg-[var(--primary-color)] hover:bg-red-700">
            <Siren /> Emergency Request
          </Button>
        </div>
      </section>

      {/* Donor info cards */}
      <section className="lg:w-[80%] mx-auto px-4 py-10 grid lg:grid-cols-4" data-aos="fade-up">
        <div className="hover:shadow-md hover:shadow-[var(--primary-color)] hover:border border-[var(--primary-color)] bg-[var(--bg-box-color)] m-4 p-4 rounded-xl flex justify-between">
          <div>
            <h1 className="text-gray-400 ">Registered Donors</h1>
            <p className="text-3xl customFont my-4">25,973+</p>
          </div>
          <Droplet className=" p-2 rounded-xl h-10 w-10 bg-red-950 text-red-500" />
        </div>
        <div className="hover:shadow-md hover:shadow-[var(--primary-color)] hover:border border-[var(--primary-color)] bg-[var(--bg-box-color)] m-4 p-4 rounded-xl flex justify-between">
          <div>
            <h1 className="text-gray-400 ">Available Donors</h1>
            <p className="text-3xl customFont my-4">25,973+</p>
          </div>
          <Heart className=" p-2 rounded-xl h-10 w-10 bg-green-950 text-green-500" />
        </div>
        <div className="hover:shadow-md hover:shadow-[var(--primary-color)] hover:border border-[var(--primary-color)] bg-[var(--bg-box-color)] m-4 p-4 rounded-xl flex justify-between">
          <div>
            <h1 className="text-gray-400 ">Nearby Donors</h1>
            <p className="text-3xl customFont my-4">25,973+</p>
          </div>
          <MapPin className=" p-2 rounded-xl h-10 w-10 bg-yellow-950 text-yellow-500" />
        </div>
        <div className="hover:shadow-md hover:shadow-[var(--primary-color)] hover:border border-[var(--primary-color)] bg-[var(--bg-box-color)] m-4 p-4 rounded-xl flex justify-between">
          <div>
            <h1 className="text-gray-400 ">Verified Donors</h1>
            <p className="text-3xl customFont my-4">25,973+</p>
          </div>
          <ShieldCheck className=" p-2 rounded-xl h-10 w-10 bg-blue-950 text-blue-500" />
        </div>
      </section>

      {/* Search Filter */}
      <section className="lg:w-[80%] mx-auto py-4 px-8 bg-[var(--bg-box-color)]  rounded-xl" data-aos="fade-up">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid lg:grid-cols-3 gap-4 my-4">
            <input
              type="text"
              className="lg:col-span-2 "
              placeholder=" Search by Donor name, City, Pincode, Donor ID, Hospitals...."
              {...register("search")}
            />
            <select {...register("sort")}>
              <option value="">Nearest Distance</option>
              <option value="">Most Eligible</option>
              <option value="">Highest Rated</option>
              <option value="">Most Experience</option>
            </select>
          </div>
          <div className="my-4">
            <h1 className="my-2">Blood Group Filter</h1>
            <div className="flex flex-wrap">
              <div className="relative my-2">
                <input
                  type="radio"
                  id="all"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] w-25 text-center rounded-4xl bg-transparent border border-gray-500 "
                  style={{ padding: "4px" }}
                  htmlFor="all"
                >
                  All Groups
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="a+"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="a+"
                >
                  A+
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="a-"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="a-"
                >
                  A-
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="b+"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="b+"
                >
                  B+
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="b-"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="b-"
                >
                  B-
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="ab+"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="ab+"
                >
                  AB+
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="ab-"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="ab-"
                >
                  AB-
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="o+"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="o+"
                >
                  O+
                </label>
              </div>
              <div className="relative my-2">
                <input
                  type="radio"
                  id="o-"
                  className="absolute peer invisible -z-10 "
                  {...register("bloodGroup")}
                />
                <label
                  className="inline-block cursor-pointer peer-checked:bg-[var(--primary-color)] mx-2 w-10 text-center rounded-2xl bg-transparent border border-gray-500"
                  style={{ padding: "4px" }}
                  htmlFor="o-"
                >
                  O-
                </label>
              </div>
            </div>
          </div>
          <div className="my-4 grid lg:grid-cols-4 gap-5">
            <input type="text" placeholder="Country" {...register("country")} />
            <input type="text" placeholder="State" {...register("state")} />
            <input type="text" placeholder="City" {...register("city")} />
            <select {...register("availability")}>
              <option value="">All Statuses</option>
              <option value="">Available Now</option>
              <option value="">Available Today</option>
              <option value="">Unavailable</option>
            </select>
          </div>
          <input type="submit" value="Filter" style={{ width: "100px" }} />
        </form>
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

      {/* Donor Cards */}
      <section className="lg:w-[80%] mx-auto py-8 grid lg:grid-cols-3 gap-5" data-aos="fade-up">
        <div className="m-4 bg-[var(--bg-box-color)] rounded-xl p-4">
            <div className="flex justify-between items-center border-b-1 pb-4">
                <div className="flex">
                    <Avatar className="m-2 w-15 h-15 rounded-xl">
                        <Avatar.Image
                        alt="John Doe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <span className="py-2">
                        <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                        <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                        <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                    </span>
                </div>      
                <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <Chip className="bg-green-950 text-green-100 border-1 border-green-600"><CircleFill className="w-2 text-green-500 mr-1"/>Available Now</Chip>
                <Chip className="bg-red-100 text-red-500"><MapPin className="w-3 mr-1"/>5.5 km away</Chip>
            </div>
            <div className="flex justify-between items-center my-8">
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Last Donation
                    </h1>
                    <p className="font-bold"><Clock className="w-3 mr-2 inline"/>110 days ago</p>
                    </div>
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Total Donations
                    </h1>
                    <p className="font-bold text-red-400"><HeartFill className="w-4 mr-2 inline"/> 160 Times</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-8">
                <small><MapPin className="w-3 inline mr-2"/>Kanpur Nagar, Uttar pradesh</small>
                <Chip className="bg-yellow-100 text-red-400"><StarFill className="text-yellow-500 mr-2"/>4.95 <small>(31)</small></Chip>
            </div>
            <div className="bg-red-50 text-sm text-red-600 rounded-xl px-2"><Clock className="w-4 inline mr-2"/>Emergency 24/7 Transport Ready</div>
            <div className="flex justify-between items-center my-8">
                <Modal>
                    <Button className="bg-transparent border-1 rounded-xl">View Profile</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex">
                                        <Avatar className="m-2 w-15 h-15 rounded-xl">
                                            <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                                            <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                                        </span>
                                    </div>      
                                    <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="lg:flex justify-between items-center my-4">
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Total Donations</h1>
                                        <p className="text-red-500 font-bold"><HeartFill className="inline"/> 18</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Rest Period</h1>
                                        <p className="font-bold text-white">42 days ago</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Donor Rating</h1>
                                        <p className="text-yellow-500 font-bold"><StarFill className="inline"/> 4.95 <small>(15)</small></p>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase">Donor Statement</h1>
                                    <p className="bg-[var(--bg-color)] p-4 rounded-xl">"Universal blood donor. Registered medical professional happy to assist in emergency transfusions."</p>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase"><Clock className="inline w-4 mr-2"/>Verified Health & Eligibility Checks</h1>
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><Users className="w-3 inline mr-2"/>Weight: <b className="text-green-500">64 kg</b> </p>
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><ShieldCheck className="w-3 inline mr-2"/>Member since: <b className="text-green-500">Jan 2021</b></p>
                                    </div>
                                </div>
                                <div className="text-white my-2">
                                   <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 flex items-center justify-between">
                                        <span>
                                        <p className="text-red-700 text-xs font-bold">Preferred Contact Method</p>
                                        <p className="text-red-800 text-xs font-bold">Phone Preferred</p>
                                        </span>
                                        <Chip className="bg-red-500 text-white">Active Now</Chip>
                                   </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                <PhoneCall/>Connect & Call Donor
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
                <Modal>
                    <Button className="bg-[var(--primary-color)] rounded-xl">Contact Donor</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <PhoneCall className=" border-2 rounded-xl p-4 bg-red-100 text-red-500 mr-4 w-15 h-15"/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Direct Contact Detail</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Connecting to Donor</p>
                                            <p className="inline-block mx-1 text-dm text-[var(--primary-color)] font-bold">Dr. Shivam singh</p>
                                        </span>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <PhoneCall className="mr-4 p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Phone Number</h1>
                                            <p className="inline-block text-xl customFont text-white">+91 8933021576</p>
                                        </div>
                                        </span>
                                        <Button className="bg-[var(--primary-color)] rounded-xl">Call</Button>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <Envelope className="mr-4 lg:p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Email Address</h1>
                                            <p className="inline-block text-sm customFont text-white ">sarah.jenkins@example.com</p>
                                        </div>
                                        </span>
                                    </div>      
                                </div>
                                <div className="flex items-center p-4 rounded-xl bg-yellow-100 text-yellow-900">
                                    <ShieldAlert className="mr-2 w-15 "/>
                                    <p className="text-xs/4">Please treat donor contact information with strict privacy. Only reach out for urgent blood or platelet transfusion emergencies.</p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
        <div className="m-4 bg-[var(--bg-box-color)] rounded-xl p-4">
            <div className="flex justify-between items-center border-b-1 pb-4">
                <div className="flex">
                    <Avatar className="m-2 w-15 h-15 rounded-xl">
                        <Avatar.Image
                        alt="John Doe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <span className="py-2">
                        <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                        <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                        <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                    </span>
                </div>      
                <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <Chip className="bg-green-950 text-green-100 border-1 border-green-600"><CircleFill className="w-2 text-green-500 mr-1"/>Available Now</Chip>
                <Chip className="bg-red-100 text-red-500"><MapPin className="w-3 mr-1"/>5.5 km away</Chip>
            </div>
            <div className="flex justify-between items-center my-8">
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Last Donation
                    </h1>
                    <p className="font-bold"><Clock className="w-3 mr-2 inline"/>110 days ago</p>
                    </div>
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Total Donations
                    </h1>
                    <p className="font-bold text-red-400"><HeartFill className="w-4 mr-2 inline"/> 160 Times</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-8">
                <small><MapPin className="w-3 inline mr-2"/>Kanpur Nagar, Uttar pradesh</small>
                <Chip className="bg-yellow-100 text-red-400"><StarFill className="text-yellow-500 mr-2"/>4.95 <small>(31)</small></Chip>
            </div>
            <div className="bg-red-50 text-sm text-red-600 rounded-xl px-2"><Clock className="w-4 inline mr-2"/>Emergency 24/7 Transport Ready</div>
            <div className="flex justify-between items-center my-8">
                <Modal>
                    <Button className="bg-transparent border-1 rounded-xl">View Profile</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex">
                                        <Avatar className="m-2 w-15 h-15 rounded-xl">
                                            <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                                            <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                                        </span>
                                    </div>      
                                    <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="lg:flex justify-between items-center my-4">
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Total Donations</h1>
                                        <p className="text-red-500 font-bold"><HeartFill className="inline"/> 18</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Rest Period</h1>
                                        <p className="font-bold text-white">42 days ago</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Donor Rating</h1>
                                        <p className="text-yellow-500 font-bold"><StarFill className="inline"/> 4.95 <small>(15)</small></p>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase">Donor Statement</h1>
                                    <p className="bg-[var(--bg-color)] p-4 rounded-xl">"Universal blood donor. Registered medical professional happy to assist in emergency transfusions."</p>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase"><Clock className="inline w-4 mr-2"/>Verified Health & Eligibility Checks</h1>
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><Users className="w-3 inline mr-2"/>Weight: <b className="text-green-500">64 kg</b> </p>
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><ShieldCheck className="w-3 inline mr-2"/>Member since: <b className="text-green-500">Jan 2021</b></p>
                                    </div>
                                </div>
                                <div className="text-white my-2">
                                   <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 flex items-center justify-between">
                                        <span>
                                        <p className="text-red-700 text-xs font-bold">Preferred Contact Method</p>
                                        <p className="text-red-800 text-xs font-bold">Phone Preferred</p>
                                        </span>
                                        <Chip className="bg-red-500 text-white">Active Now</Chip>
                                   </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                <PhoneCall/>Connect & Call Donor
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
                <Modal>
                    <Button className="bg-[var(--primary-color)] rounded-xl">Contact Donor</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <PhoneCall className=" border-2 rounded-xl p-4 bg-red-100 text-red-500 mr-4 w-15 h-15"/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Direct Contact Detail</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Connecting to Donor</p>
                                            <p className="inline-block mx-1 text-dm text-[var(--primary-color)] font-bold">Dr. Shivam singh</p>
                                        </span>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <PhoneCall className="mr-4 p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Phone Number</h1>
                                            <p className="inline-block text-xl customFont text-white">+91 8933021576</p>
                                        </div>
                                        </span>
                                        <Button className="bg-[var(--primary-color)] rounded-xl">Call</Button>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <Envelope className="mr-4 lg:p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Email Address</h1>
                                            <p className="inline-block text-sm customFont text-white ">sarah.jenkins@example.com</p>
                                        </div>
                                        </span>
                                    </div>      
                                </div>
                                <div className="flex items-center p-4 rounded-xl bg-yellow-100 text-yellow-900">
                                    <ShieldAlert className="mr-2 w-15 "/>
                                    <p className="text-xs/4">Please treat donor contact information with strict privacy. Only reach out for urgent blood or platelet transfusion emergencies.</p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
        <div className="m-4 bg-[var(--bg-box-color)] rounded-xl p-4">
            <div className="flex justify-between items-center border-b-1 pb-4">
                <div className="flex">
                    <Avatar className="m-2 w-15 h-15 rounded-xl">
                        <Avatar.Image
                        alt="John Doe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <span className="py-2">
                        <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                        <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                        <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                    </span>
                </div>      
                <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <Chip className="bg-green-950 text-green-100 border-1 border-green-600"><CircleFill className="w-2 text-green-500 mr-1"/>Available Now</Chip>
                <Chip className="bg-red-100 text-red-500"><MapPin className="w-3 mr-1"/>5.5 km away</Chip>
            </div>
            <div className="flex justify-between items-center my-8">
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Last Donation
                    </h1>
                    <p className="font-bold"><Clock className="w-3 mr-2 inline"/>110 days ago</p>
                    </div>
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Total Donations
                    </h1>
                    <p className="font-bold text-red-400"><HeartFill className="w-4 mr-2 inline"/> 160 Times</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-8">
                <small><MapPin className="w-3 inline mr-2"/>Kanpur Nagar, Uttar pradesh</small>
                <Chip className="bg-yellow-100 text-red-400"><StarFill className="text-yellow-500 mr-2"/>4.95 <small>(31)</small></Chip>
            </div>
            <div className="bg-red-50 text-sm text-red-600 rounded-xl px-2"><Clock className="w-4 inline mr-2"/>Emergency 24/7 Transport Ready</div>
            <div className="flex justify-between items-center my-8">
                <Modal>
                    <Button className="bg-transparent border-1 rounded-xl">View Profile</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex">
                                        <Avatar className="m-2 w-15 h-15 rounded-xl">
                                            <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                                            <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                                        </span>
                                    </div>      
                                    <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="lg:flex justify-between items-center my-4">
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Total Donations</h1>
                                        <p className="text-red-500 font-bold"><HeartFill className="inline"/> 18</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Rest Period</h1>
                                        <p className="font-bold text-white">42 days ago</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Donor Rating</h1>
                                        <p className="text-yellow-500 font-bold"><StarFill className="inline"/> 4.95 <small>(15)</small></p>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase">Donor Statement</h1>
                                    <p className="bg-[var(--bg-color)] p-4 rounded-xl">"Universal blood donor. Registered medical professional happy to assist in emergency transfusions."</p>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase"><Clock className="inline w-4 mr-2"/>Verified Health & Eligibility Checks</h1>
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><Users className="w-3 inline mr-2"/>Weight: <b className="text-green-500">64 kg</b> </p>
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><ShieldCheck className="w-3 inline mr-2"/>Member since: <b className="text-green-500">Jan 2021</b></p>
                                    </div>
                                </div>
                                <div className="text-white my-2">
                                   <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 flex items-center justify-between">
                                        <span>
                                        <p className="text-red-700 text-xs font-bold">Preferred Contact Method</p>
                                        <p className="text-red-800 text-xs font-bold">Phone Preferred</p>
                                        </span>
                                        <Chip className="bg-red-500 text-white">Active Now</Chip>
                                   </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                <PhoneCall/>Connect & Call Donor
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
                <Modal>
                    <Button className="bg-[var(--primary-color)] rounded-xl">Contact Donor</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <PhoneCall className=" border-2 rounded-xl p-4 bg-red-100 text-red-500 mr-4 w-15 h-15"/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Direct Contact Detail</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Connecting to Donor</p>
                                            <p className="inline-block mx-1 text-dm text-[var(--primary-color)] font-bold">Dr. Shivam singh</p>
                                        </span>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <PhoneCall className="mr-4 p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Phone Number</h1>
                                            <p className="inline-block text-xl customFont text-white">+91 8933021576</p>
                                        </div>
                                        </span>
                                        <Button className="bg-[var(--primary-color)] rounded-xl">Call</Button>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <Envelope className="mr-4 lg:p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Email Address</h1>
                                            <p className="inline-block text-sm customFont text-white ">sarah.jenkins@example.com</p>
                                        </div>
                                        </span>
                                    </div>      
                                </div>
                                <div className="flex items-center p-4 rounded-xl bg-yellow-100 text-yellow-900">
                                    <ShieldAlert className="mr-2 w-15 "/>
                                    <p className="text-xs/4">Please treat donor contact information with strict privacy. Only reach out for urgent blood or platelet transfusion emergencies.</p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
        <div className="m-4 bg-[var(--bg-box-color)] rounded-xl p-4">
            <div className="flex justify-between items-center border-b-1 pb-4">
                <div className="flex">
                    <Avatar className="m-2 w-15 h-15 rounded-xl">
                        <Avatar.Image
                        alt="John Doe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <span className="py-2">
                        <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                        <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                        <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                    </span>
                </div>      
                <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <Chip className="bg-green-950 text-green-100 border-1 border-green-600"><CircleFill className="w-2 text-green-500 mr-1"/>Available Now</Chip>
                <Chip className="bg-red-100 text-red-500"><MapPin className="w-3 mr-1"/>5.5 km away</Chip>
            </div>
            <div className="flex justify-between items-center my-8">
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Last Donation
                    </h1>
                    <p className="font-bold"><Clock className="w-3 mr-2 inline"/>110 days ago</p>
                    </div>
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Total Donations
                    </h1>
                    <p className="font-bold text-red-400"><HeartFill className="w-4 mr-2 inline"/> 160 Times</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-8">
                <small><MapPin className="w-3 inline mr-2"/>Kanpur Nagar, Uttar pradesh</small>
                <Chip className="bg-yellow-100 text-red-400"><StarFill className="text-yellow-500 mr-2"/>4.95 <small>(31)</small></Chip>
            </div>
            <div className="bg-red-50 text-sm text-red-600 rounded-xl px-2"><Clock className="w-4 inline mr-2"/>Emergency 24/7 Transport Ready</div>
            <div className="flex justify-between items-center my-8">
                <Modal>
                    <Button className="bg-transparent border-1 rounded-xl">View Profile</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex">
                                        <Avatar className="m-2 w-15 h-15 rounded-xl">
                                            <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                                            <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                                        </span>
                                    </div>      
                                    <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="lg:flex justify-between items-center my-4">
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Total Donations</h1>
                                        <p className="text-red-500 font-bold"><HeartFill className="inline"/> 18</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Rest Period</h1>
                                        <p className="font-bold text-white">42 days ago</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Donor Rating</h1>
                                        <p className="text-yellow-500 font-bold"><StarFill className="inline"/> 4.95 <small>(15)</small></p>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase">Donor Statement</h1>
                                    <p className="bg-[var(--bg-color)] p-4 rounded-xl">"Universal blood donor. Registered medical professional happy to assist in emergency transfusions."</p>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase"><Clock className="inline w-4 mr-2"/>Verified Health & Eligibility Checks</h1>
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><Users className="w-3 inline mr-2"/>Weight: <b className="text-green-500">64 kg</b> </p>
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><ShieldCheck className="w-3 inline mr-2"/>Member since: <b className="text-green-500">Jan 2021</b></p>
                                    </div>
                                </div>
                                <div className="text-white my-2">
                                   <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 flex items-center justify-between">
                                        <span>
                                        <p className="text-red-700 text-xs font-bold">Preferred Contact Method</p>
                                        <p className="text-red-800 text-xs font-bold">Phone Preferred</p>
                                        </span>
                                        <Chip className="bg-red-500 text-white">Active Now</Chip>
                                   </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                <PhoneCall/>Connect & Call Donor
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
                <Modal>
                    <Button className="bg-[var(--primary-color)] rounded-xl">Contact Donor</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <PhoneCall className=" border-2 rounded-xl p-4 bg-red-100 text-red-500 mr-4 w-15 h-15"/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Direct Contact Detail</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Connecting to Donor</p>
                                            <p className="inline-block mx-1 text-dm text-[var(--primary-color)] font-bold">Dr. Shivam singh</p>
                                        </span>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <PhoneCall className="mr-4 p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Phone Number</h1>
                                            <p className="inline-block text-xl customFont text-white">+91 8933021576</p>
                                        </div>
                                        </span>
                                        <Button className="bg-[var(--primary-color)] rounded-xl">Call</Button>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <Envelope className="mr-4 lg:p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Email Address</h1>
                                            <p className="inline-block text-sm customFont text-white ">sarah.jenkins@example.com</p>
                                        </div>
                                        </span>
                                    </div>      
                                </div>
                                <div className="flex items-center p-4 rounded-xl bg-yellow-100 text-yellow-900">
                                    <ShieldAlert className="mr-2 w-15 "/>
                                    <p className="text-xs/4">Please treat donor contact information with strict privacy. Only reach out for urgent blood or platelet transfusion emergencies.</p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
        <div className="m-4 bg-[var(--bg-box-color)] rounded-xl p-4">
            <div className="flex justify-between items-center border-b-1 pb-4">
                <div className="flex">
                    <Avatar className="m-2 w-15 h-15 rounded-xl">
                        <Avatar.Image
                        alt="John Doe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <span className="py-2">
                        <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                        <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                        <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                    </span>
                </div>      
                <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <Chip className="bg-green-950 text-green-100 border-1 border-green-600"><CircleFill className="w-2 text-green-500 mr-1"/>Available Now</Chip>
                <Chip className="bg-red-100 text-red-500"><MapPin className="w-3 mr-1"/>5.5 km away</Chip>
            </div>
            <div className="flex justify-between items-center my-8">
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Last Donation
                    </h1>
                    <p className="font-bold"><Clock className="w-3 mr-2 inline"/>110 days ago</p>
                    </div>
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Total Donations
                    </h1>
                    <p className="font-bold text-red-400"><HeartFill className="w-4 mr-2 inline"/> 160 Times</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-8">
                <small><MapPin className="w-3 inline mr-2"/>Kanpur Nagar, Uttar pradesh</small>
                <Chip className="bg-yellow-100 text-red-400"><StarFill className="text-yellow-500 mr-2"/>4.95 <small>(31)</small></Chip>
            </div>
            <div className="bg-red-50 text-sm text-red-600 rounded-xl px-2"><Clock className="w-4 inline mr-2"/>Emergency 24/7 Transport Ready</div>
            <div className="flex justify-between items-center my-8">
                <Modal>
                    <Button className="bg-transparent border-1 rounded-xl">View Profile</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex">
                                        <Avatar className="m-2 w-15 h-15 rounded-xl">
                                            <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                                            <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                                        </span>
                                    </div>      
                                    <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="lg:flex justify-between items-center my-4">
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Total Donations</h1>
                                        <p className="text-red-500 font-bold"><HeartFill className="inline"/> 18</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Rest Period</h1>
                                        <p className="font-bold text-white">42 days ago</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Donor Rating</h1>
                                        <p className="text-yellow-500 font-bold"><StarFill className="inline"/> 4.95 <small>(15)</small></p>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase">Donor Statement</h1>
                                    <p className="bg-[var(--bg-color)] p-4 rounded-xl">"Universal blood donor. Registered medical professional happy to assist in emergency transfusions."</p>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase"><Clock className="inline w-4 mr-2"/>Verified Health & Eligibility Checks</h1>
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><Users className="w-3 inline mr-2"/>Weight: <b className="text-green-500">64 kg</b> </p>
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><ShieldCheck className="w-3 inline mr-2"/>Member since: <b className="text-green-500">Jan 2021</b></p>
                                    </div>
                                </div>
                                <div className="text-white my-2">
                                   <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 flex items-center justify-between">
                                        <span>
                                        <p className="text-red-700 text-xs font-bold">Preferred Contact Method</p>
                                        <p className="text-red-800 text-xs font-bold">Phone Preferred</p>
                                        </span>
                                        <Chip className="bg-red-500 text-white">Active Now</Chip>
                                   </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                <PhoneCall/>Connect & Call Donor
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
                <Modal>
                    <Button className="bg-[var(--primary-color)] rounded-xl">Contact Donor</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <PhoneCall className=" border-2 rounded-xl p-4 bg-red-100 text-red-500 mr-4 w-15 h-15"/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Direct Contact Detail</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Connecting to Donor</p>
                                            <p className="inline-block mx-1 text-dm text-[var(--primary-color)] font-bold">Dr. Shivam singh</p>
                                        </span>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <PhoneCall className="mr-4 p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Phone Number</h1>
                                            <p className="inline-block text-xl customFont text-white">+91 8933021576</p>
                                        </div>
                                        </span>
                                        <Button className="bg-[var(--primary-color)] rounded-xl">Call</Button>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <Envelope className="mr-4 lg:p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Email Address</h1>
                                            <p className="inline-block text-sm customFont text-white ">sarah.jenkins@example.com</p>
                                        </div>
                                        </span>
                                    </div>      
                                </div>
                                <div className="flex items-center p-4 rounded-xl bg-yellow-100 text-yellow-900">
                                    <ShieldAlert className="mr-2 w-15 "/>
                                    <p className="text-xs/4">Please treat donor contact information with strict privacy. Only reach out for urgent blood or platelet transfusion emergencies.</p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
        <div className="m-4 bg-[var(--bg-box-color)] rounded-xl p-4">
            <div className="flex justify-between items-center border-b-1 pb-4">
                <div className="flex">
                    <Avatar className="m-2 w-15 h-15 rounded-xl">
                        <Avatar.Image
                        alt="John Doe"
                        src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                        />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    <span className="py-2">
                        <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                        <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                        <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                    </span>
                </div>      
                <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
            </div>
            <div className="flex justify-between items-center my-4">
                <Chip className="bg-green-950 text-green-100 border-1 border-green-600"><CircleFill className="w-2 text-green-500 mr-1"/>Available Now</Chip>
                <Chip className="bg-red-100 text-red-500"><MapPin className="w-3 mr-1"/>5.5 km away</Chip>
            </div>
            <div className="flex justify-between items-center my-8">
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Last Donation
                    </h1>
                    <p className="font-bold"><Clock className="w-3 mr-2 inline"/>110 days ago</p>
                    </div>
                <div className="px-4 py-2 rounded-xl border-1 border-gray-500">
                    <h1 className="text-gray-400">
                        Total Donations
                    </h1>
                    <p className="font-bold text-red-400"><HeartFill className="w-4 mr-2 inline"/> 160 Times</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-8">
                <small><MapPin className="w-3 inline mr-2"/>Kanpur Nagar, Uttar pradesh</small>
                <Chip className="bg-yellow-100 text-red-400"><StarFill className="text-yellow-500 mr-2"/>4.95 <small>(31)</small></Chip>
            </div>
            <div className="bg-red-50 text-sm text-red-600 rounded-xl px-2"><Clock className="w-4 inline mr-2"/>Emergency 24/7 Transport Ready</div>
            <div className="flex justify-between items-center my-8">
                <Modal>
                    <Button className="bg-transparent border-1 rounded-xl">View Profile</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex">
                                        <Avatar className="m-2 w-15 h-15 rounded-xl">
                                            <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            />
                                            <Avatar.Fallback>JD</Avatar.Fallback>
                                        </Avatar>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Dr. Shvam Kaur</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Male, 29yrs</p>
                                            <p className="inline-block mx-1 text-xs text-gray-300">GBDA - 9570</p>
                                        </span>
                                    </div>      
                                    <span className="bg-[var(--primary-color)] p-4 rounded-2xl">O+</span>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="lg:flex justify-between items-center my-4">
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Total Donations</h1>
                                        <p className="text-red-500 font-bold"><HeartFill className="inline"/> 18</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Rest Period</h1>
                                        <p className="font-bold text-white">42 days ago</p>
                                    </div>
                                    <div className="flex my-4 bg-[var(--bg-color)] justify-center items-center flex-col border py-2 px-6 rounded-xl">
                                        <h1 className="text-white">Donor Rating</h1>
                                        <p className="text-yellow-500 font-bold"><StarFill className="inline"/> 4.95 <small>(15)</small></p>
                                    </div>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase">Donor Statement</h1>
                                    <p className="bg-[var(--bg-color)] p-4 rounded-xl">"Universal blood donor. Registered medical professional happy to assist in emergency transfusions."</p>
                                </div>
                                <div className="text-white">
                                    <h1 className="my-4 font-bold uppercase"><Clock className="inline w-4 mr-2"/>Verified Health & Eligibility Checks</h1>
                                    <div className="grid lg:grid-cols-2 gap-5">
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><Users className="w-3 inline mr-2"/>Weight: <b className="text-green-500">64 kg</b> </p>
                                        <p className="bg-[var(--bg-color)] p-4 rounded-xl bg-green-950 text-green-100"><ShieldCheck className="w-3 inline mr-2"/>Member since: <b className="text-green-500">Jan 2021</b></p>
                                    </div>
                                </div>
                                <div className="text-white my-2">
                                   <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 flex items-center justify-between">
                                        <span>
                                        <p className="text-red-700 text-xs font-bold">Preferred Contact Method</p>
                                        <p className="text-red-800 text-xs font-bold">Phone Preferred</p>
                                        </span>
                                        <Chip className="bg-red-500 text-white">Active Now</Chip>
                                   </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                <PhoneCall/>Connect & Call Donor
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
                <Modal>
                    <Button className="bg-[var(--primary-color)] rounded-xl">Contact Donor</Button>
                    <Modal.Backdrop>
                        <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[30rem] bg-[var(--bg-box-color)]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <div className="flex justify-between items-center border-b-1 pb-4">
                                    <div className="flex items-center">
                                        <PhoneCall className=" border-2 rounded-xl p-4 bg-red-100 text-red-500 mr-4 w-15 h-15"/>
                                        <span className="py-2">
                                            <h1 className="customFont text-[var(--primary-color)]">Direct Contact Detail</h1>
                                            <p className="inline-block mx-1 text-xs text-gray-300">Connecting to Donor</p>
                                            <p className="inline-block mx-1 text-dm text-[var(--primary-color)] font-bold">Dr. Shivam singh</p>
                                        </span>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <PhoneCall className="mr-4 p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Phone Number</h1>
                                            <p className="inline-block text-xl customFont text-white">+91 8933021576</p>
                                        </div>
                                        </span>
                                        <Button className="bg-[var(--primary-color)] rounded-xl">Call</Button>
                                    </div>      
                                </div>
                                <div className=" px-4 rounded-xl bg-[var(--bg-color)]">
                                    <div className="flex items-center justify-between">
                                        <span className="py-2 flex items-center">
                                        <Envelope className="mr-4 lg:p-1 text-[var(--primary-color)]"/>
                                        <div>
                                            <h1 className="customFont text-gray-400 uppercase text-xs">Email Address</h1>
                                            <p className="inline-block text-sm customFont text-white ">sarah.jenkins@example.com</p>
                                        </div>
                                        </span>
                                    </div>      
                                </div>
                                <div className="flex items-center p-4 rounded-xl bg-yellow-100 text-yellow-900">
                                    <ShieldAlert className="mr-2 w-15 "/>
                                    <p className="text-xs/4">Please treat donor contact information with strict privacy. Only reach out for urgent blood or platelet transfusion emergencies.</p>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="w-full bg-[var(--primary-color)]" slot="close">
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}

export default SearchDonor;
