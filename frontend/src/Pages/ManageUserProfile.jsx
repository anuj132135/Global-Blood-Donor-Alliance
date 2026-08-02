import React, { useState } from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import {Avatar, Badge, Chip, Button, Drawer, Switch, Alert } from "@heroui/react";
import {ShieldCheck, CircleFill, ThunderboltFill, Heart, Pulse, Calendar, Star, Person, CheckShape, CircleCheck, XmarkShape,Stethoscope, LocationArrow,Handset, Envelope, Smartphone,Key} from '@gravity-ui/icons';
import { useForm } from "react-hook-form"

function ManageUserProfile() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    const [activeDonor, setActiveDonor] = useState("Available for Donate");
    const donorStatus = () => {
        setActiveDonor(prev => prev === "Available for Donate" ? "Unavailable for Donate" : "Available for Donate" );
    };
  return (
    <>
        <Header/>
            <main className='flex'>
                {/* Side Bar */}
                <aside className='hidden lg:sticky lg:top-[6rem] lg:block w-[5rem] h-[13rem] lg:min-h-[100vh]' data-aos="fade-up">
                        <Drawer>
                            <aside className=' z-1 h-full grid left-0 bg-[var(--bg-box-color)]'>
                            <div>
                            <Button className="bg-[var(--bg-box-color)] p-6 lg:p-8 my-2 hover:bg-[var(--primary-color)]"><svg fill="#ffffff" className='w-[1.5rem]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.725 30.725" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M13.832,30.725c-0.642,0-1.279-0.244-1.769-0.732c-0.978-0.977-0.978-2.56,0-3.535l11.095-11.093L12.064,4.268 c-0.978-0.979-0.978-2.562,0-3.535c0.978-0.978,2.56-0.978,3.535,0l14.628,14.631L15.6,29.992 C15.111,30.48,14.473,30.725,13.832,30.725z M4.766,29.992l14.628-14.628L4.766,0.733c-0.979-0.978-2.561-0.978-3.535,0 c-0.978,0.977-0.978,2.56,0,3.535l11.095,11.096L1.23,26.457c-0.978,0.978-0.978,2.561,0,3.535 c0.488,0.488,1.127,0.732,1.769,0.732C3.64,30.725,4.275,30.48,4.766,29.992z"></path> </g> </g></svg></Button>
                                <nav className='w-full hidden lg:block'>
                                    <ul className='flex flex-col justify-center items-center'>
                                        <li><Link className=' inline-block px-5 bg-red-500 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='w-[1.5rem]' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M8.976 3C4.05476 3 3 4.05476 3 8.976V15.024C3 19.9452 4.05476 21 8.976 21H9V9H21V8.976C21 4.05476 19.9452 3 15.024 3H8.976Z" fill="#ffffff"></path> <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="#ffffff" stroke-width="2"></path> <path d="M21 9L3 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 21L9 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                                        <li><Link className=' inline-block px-5 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                                        <li><Link className=' inline-block px-5 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12L14.5 14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.60423 5.60423L5.0739 5.0739V5.0739L5.60423 5.60423ZM4.33785 6.87061L3.58786 6.87438C3.58992 7.28564 3.92281 7.61853 4.33408 7.6206L4.33785 6.87061ZM6.87963 7.63339C7.29384 7.63547 7.63131 7.30138 7.63339 6.88717C7.63547 6.47296 7.30138 6.13549 6.88717 6.13341L6.87963 7.63339ZM5.07505 4.32129C5.07296 3.90708 4.7355 3.57298 4.32129 3.57506C3.90708 3.57715 3.57298 3.91462 3.57507 4.32882L5.07505 4.32129ZM3.75 12C3.75 11.5858 3.41421 11.25 3 11.25C2.58579 11.25 2.25 11.5858 2.25 12H3.75ZM16.8755 20.4452C17.2341 20.2378 17.3566 19.779 17.1492 19.4204C16.9418 19.0619 16.483 18.9393 16.1245 19.1468L16.8755 20.4452ZM19.1468 16.1245C18.9393 16.483 19.0619 16.9418 19.4204 17.1492C19.779 17.3566 20.2378 17.2341 20.4452 16.8755L19.1468 16.1245ZM5.14033 5.07126C4.84598 5.36269 4.84361 5.83756 5.13505 6.13191C5.42648 6.42626 5.90134 6.42862 6.19569 6.13719L5.14033 5.07126ZM18.8623 5.13786C15.0421 1.31766 8.86882 1.27898 5.0739 5.0739L6.13456 6.13456C9.33366 2.93545 14.5572 2.95404 17.8017 6.19852L18.8623 5.13786ZM5.0739 5.0739L3.80752 6.34028L4.86818 7.40094L6.13456 6.13456L5.0739 5.0739ZM4.33408 7.6206L6.87963 7.63339L6.88717 6.13341L4.34162 6.12062L4.33408 7.6206ZM5.08784 6.86684L5.07505 4.32129L3.57507 4.32882L3.58786 6.87438L5.08784 6.86684ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM16.1245 19.1468C14.9118 19.8483 13.5039 20.25 12 20.25V21.75C13.7747 21.75 15.4407 21.2752 16.8755 20.4452L16.1245 19.1468ZM20.25 12C20.25 13.5039 19.8483 14.9118 19.1468 16.1245L20.4452 16.8755C21.2752 15.4407 21.75 13.7747 21.75 12H20.25ZM6.19569 6.13719C7.68707 4.66059 9.73646 3.75 12 3.75V2.25C9.32542 2.25 6.90113 3.32791 5.14033 5.07126L6.19569 6.13719Z" fill="#ffffff"></path> </g></svg></Link></li>
                                        <li><Link className=' inline-block px-5 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 11.9998H18.6361C17.9781 11.9998 17.6491 11.9998 17.3578 12.1296C17.0665 12.2593 16.8463 12.504 16.4059 12.9932L15.3767 14.1369C15.0154 14.5382 14.8348 14.7389 14.6057 14.734C14.3766 14.7291 14.2049 14.521 13.8616 14.1048L10.3334 9.82819C10.0133 9.44017 9.85321 9.24615 9.63599 9.23311C9.41877 9.22006 9.23663 9.39352 8.87237 9.74044L7.36897 11.1723C6.93986 11.5809 6.7253 11.7853 6.45709 11.8926C6.18887 11.9998 5.89258 11.9998 5.3 11.9998H3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8.96173 19.3707L9.43571 18.7895L9.43571 18.7895L8.96173 19.3707ZM12 5.49877L11.4509 6.00966C11.5928 6.16215 11.7917 6.24877 12 6.24877C12.2083 6.24877 12.4072 6.16215 12.5491 6.00966L12 5.49877ZM15.0383 19.3707L15.5123 19.952L15.0383 19.3707ZM9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26044H1.25C1.25 11.3862 2.37926 13.4793 3.7862 15.2825C5.20736 17.1039 6.99532 18.7349 8.48775 19.952L9.43571 18.7895ZM2.75 9.26044C2.75 6.53057 4.0079 4.70454 5.60065 4.04191C7.17297 3.38778 9.35285 3.75479 11.4509 6.00966L12.5491 4.98787C10.1473 2.40661 7.32719 1.69899 5.02447 2.65699C2.74218 3.60649 1.25 6.07936 1.25 9.26044H2.75ZM15.5123 19.952C17.0047 18.735 18.7926 17.1039 20.2138 15.2825C21.6207 13.4794 22.75 11.3862 22.75 9.2604H21.25C21.25 10.8821 20.3695 12.6445 19.0312 14.3598C17.7071 16.0568 16.0142 17.6072 14.5643 18.7895L15.5123 19.952ZM22.75 9.2604C22.75 6.07926 21.2578 3.60639 18.9755 2.65691C16.6728 1.69894 13.8527 2.40662 11.4509 4.98787L12.5491 6.00966C14.6472 3.75479 16.827 3.38774 18.3994 4.04184C19.9921 4.70444 21.25 6.53045 21.25 9.2604H22.75ZM8.48775 19.952C9.7587 20.9884 10.641 21.75 12 21.75L12 20.25C11.2785 20.25 10.8287 19.9254 9.43571 18.7895L8.48775 19.952ZM14.5643 18.7895C13.1713 19.9254 12.7216 20.25 12 20.25L12 21.75C13.359 21.75 14.2413 20.9884 15.5123 19.952L14.5643 18.7895Z" fill="#ffffff"></path> </g></svg></Link></li>
                                        <li><Link className=' inline-block px-5 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                                        <li><Link className=' inline-block px-5 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <ul className='hidden lg:block'>
                                <li><Link className=' inline-block px-5 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" fill="none" className='inline-block w-[1.5rem] mx-2' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M3 12L15 12M3 12L7 8M3 12L7 16" stroke="#eba3a3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link></li>
                            </ul>                       
                           
                            </aside>
                            <Drawer.Backdrop>
                                <Drawer.Content placement="left">
                                <Drawer.Dialog className="bg-[var(--bg-box-color)]">
                                    <Drawer.Header>
                                    <div className="logo flex justify-center items-center border-b-[1px] border-gray-600 py-4">
                                        <img src={Logo} alt="logo" className='w-10 m-4'/>
                                        <h1 className='customFont text-xl'>Global Blood Donor Alliance</h1>
                                         <Button slot="close" className="bg-[var(--bg-box-color)]">
                                            <svg fill="#ffffff" className='w-[1.5rem]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.725 30.725" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M13.832,30.725c-0.642,0-1.279-0.244-1.769-0.732c-0.978-0.977-0.978-2.56,0-3.535l11.095-11.093L12.064,4.268 c-0.978-0.979-0.978-2.562,0-3.535c0.978-0.978,2.56-0.978,3.535,0l14.628,14.631L15.6,29.992 C15.111,30.48,14.473,30.725,13.832,30.725z M4.766,29.992l14.628-14.628L4.766,0.733c-0.979-0.978-2.561-0.978-3.535,0 c-0.978,0.977-0.978,2.56,0,3.535l11.095,11.096L1.23,26.457c-0.978,0.978-0.978,2.561,0,3.535 c0.488,0.488,1.127,0.732,1.769,0.732C3.64,30.725,4.275,30.48,4.766,29.992z"></path> </g> </g></svg>
                                        </Button>
                                    </div>
                                    </Drawer.Header>
                                    <Drawer.Body>
                                         <nav className='w-full'>
                                            <ul className='text-white'>
                                                <li className=''><Link className='flex px-16 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='w-[1.5rem] mx-2' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M8.976 3C4.05476 3 3 4.05476 3 8.976V15.024C3 19.9452 4.05476 21 8.976 21H9V9H21V8.976C21 4.05476 19.9452 3 15.024 3H8.976Z" fill="#ffffff"></path> <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="#ffffff" stroke-width="2"></path> <path d="M21 9L3 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 21L9 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Dashboard</Link></li>
                                                <li><Link className='flex px-16 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12L14.5 14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.60423 5.60423L5.0739 5.0739V5.0739L5.60423 5.60423ZM4.33785 6.87061L3.58786 6.87438C3.58992 7.28564 3.92281 7.61853 4.33408 7.6206L4.33785 6.87061ZM6.87963 7.63339C7.29384 7.63547 7.63131 7.30138 7.63339 6.88717C7.63547 6.47296 7.30138 6.13549 6.88717 6.13341L6.87963 7.63339ZM5.07505 4.32129C5.07296 3.90708 4.7355 3.57298 4.32129 3.57506C3.90708 3.57715 3.57298 3.91462 3.57507 4.32882L5.07505 4.32129ZM3.75 12C3.75 11.5858 3.41421 11.25 3 11.25C2.58579 11.25 2.25 11.5858 2.25 12H3.75ZM16.8755 20.4452C17.2341 20.2378 17.3566 19.779 17.1492 19.4204C16.9418 19.0619 16.483 18.9393 16.1245 19.1468L16.8755 20.4452ZM19.1468 16.1245C18.9393 16.483 19.0619 16.9418 19.4204 17.1492C19.779 17.3566 20.2378 17.2341 20.4452 16.8755L19.1468 16.1245ZM5.14033 5.07126C4.84598 5.36269 4.84361 5.83756 5.13505 6.13191C5.42648 6.42626 5.90134 6.42862 6.19569 6.13719L5.14033 5.07126ZM18.8623 5.13786C15.0421 1.31766 8.86882 1.27898 5.0739 5.0739L6.13456 6.13456C9.33366 2.93545 14.5572 2.95404 17.8017 6.19852L18.8623 5.13786ZM5.0739 5.0739L3.80752 6.34028L4.86818 7.40094L6.13456 6.13456L5.0739 5.0739ZM4.33408 7.6206L6.87963 7.63339L6.88717 6.13341L4.34162 6.12062L4.33408 7.6206ZM5.08784 6.86684L5.07505 4.32129L3.57507 4.32882L3.58786 6.87438L5.08784 6.86684ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM16.1245 19.1468C14.9118 19.8483 13.5039 20.25 12 20.25V21.75C13.7747 21.75 15.4407 21.2752 16.8755 20.4452L16.1245 19.1468ZM20.25 12C20.25 13.5039 19.8483 14.9118 19.1468 16.1245L20.4452 16.8755C21.2752 15.4407 21.75 13.7747 21.75 12H20.25ZM6.19569 6.13719C7.68707 4.66059 9.73646 3.75 12 3.75V2.25C9.32542 2.25 6.90113 3.32791 5.14033 5.07126L6.19569 6.13719Z" fill="#ffffff"></path> </g></svg>Donation History</Link></li>
                                                <li><Link className=' flex px-16 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 11.9998H18.6361C17.9781 11.9998 17.6491 11.9998 17.3578 12.1296C17.0665 12.2593 16.8463 12.504 16.4059 12.9932L15.3767 14.1369C15.0154 14.5382 14.8348 14.7389 14.6057 14.734C14.3766 14.7291 14.2049 14.521 13.8616 14.1048L10.3334 9.82819C10.0133 9.44017 9.85321 9.24615 9.63599 9.23311C9.41877 9.22006 9.23663 9.39352 8.87237 9.74044L7.36897 11.1723C6.93986 11.5809 6.7253 11.7853 6.45709 11.8926C6.18887 11.9998 5.89258 11.9998 5.3 11.9998H3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8.96173 19.3707L9.43571 18.7895L9.43571 18.7895L8.96173 19.3707ZM12 5.49877L11.4509 6.00966C11.5928 6.16215 11.7917 6.24877 12 6.24877C12.2083 6.24877 12.4072 6.16215 12.5491 6.00966L12 5.49877ZM15.0383 19.3707L15.5123 19.952L15.0383 19.3707ZM9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26044H1.25C1.25 11.3862 2.37926 13.4793 3.7862 15.2825C5.20736 17.1039 6.99532 18.7349 8.48775 19.952L9.43571 18.7895ZM2.75 9.26044C2.75 6.53057 4.0079 4.70454 5.60065 4.04191C7.17297 3.38778 9.35285 3.75479 11.4509 6.00966L12.5491 4.98787C10.1473 2.40661 7.32719 1.69899 5.02447 2.65699C2.74218 3.60649 1.25 6.07936 1.25 9.26044H2.75ZM15.5123 19.952C17.0047 18.735 18.7926 17.1039 20.2138 15.2825C21.6207 13.4794 22.75 11.3862 22.75 9.2604H21.25C21.25 10.8821 20.3695 12.6445 19.0312 14.3598C17.7071 16.0568 16.0142 17.6072 14.5643 18.7895L15.5123 19.952ZM22.75 9.2604C22.75 6.07926 21.2578 3.60639 18.9755 2.65691C16.6728 1.69894 13.8527 2.40662 11.4509 4.98787L12.5491 6.00966C14.6472 3.75479 16.827 3.38774 18.3994 4.04184C19.9921 4.70444 21.25 6.53045 21.25 9.2604H22.75ZM8.48775 19.952C9.7587 20.9884 10.641 21.75 12 21.75L12 20.25C11.2785 20.25 10.8287 19.9254 9.43571 18.7895L8.48775 19.952ZM14.5643 18.7895C13.1713 19.9254 12.7216 20.25 12 20.25L12 21.75C13.359 21.75 14.2413 20.9884 15.5123 19.952L14.5643 18.7895Z" fill="#ffffff"></path> </g></svg>Blood Requests</Link></li>
                                                <li><Link className=' flex px-16 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Notifications</Link></li>
                                                <li><Link className='flex px-16 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Notifications</Link></li>
                                                <li><Link className=' flex px-16 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Settings</Link></li>
                                            </ul>
                                        </nav>
                                          <ul className='my-3'>
                                            <li><Link className=' border-t border-b inline-block hover:bg-red-900 px-16  py-4 w-[100%] text-red-300'><svg viewBox="0 0 24 24" fill="none" className='inline-block w-[1rem] mx-2' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M3 12L15 12M3 12L7 8M3 12L7 16" stroke="#eba3a3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Logout</Link></li>
                                        </ul>
                                    </Drawer.Body>
                                </Drawer.Dialog>
                                </Drawer.Content>
                            </Drawer.Backdrop>
                        </Drawer>
                </aside>
                <div className='w-full'>
                    {/* Manage Profile */}
                    <section className="m-4 lg:sticky lg:top-[6rem] z-1 lg:backdrop-blur-xs lg:m-8 p-4 bg-[var(--bg-box-color)] lg:bg-[var(--bg-box-color)]/50 lg:w-[86rem] lg:grid lg:grid-cols-2 rounded-xl" data-aos="fade-up">
                        <div className='flex'>
                            {/* Side Bar for Mobile */}
                            <aside className=' lg:hidden lg:min-h-[100vh]'>
                            <Drawer>
                                <aside className=' z-1 h-full grid left-0 bg-[var(--bg-box-color)]'>
                                <div>
                                <Button className="bg-[var(--bg-box-color)] p-6 lg:p-8 my-2 hover:bg-[var(--primary-color)]"><svg fill="#ffffff" className='w-[1.5rem]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.725 30.725" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M13.832,30.725c-0.642,0-1.279-0.244-1.769-0.732c-0.978-0.977-0.978-2.56,0-3.535l11.095-11.093L12.064,4.268 c-0.978-0.979-0.978-2.562,0-3.535c0.978-0.978,2.56-0.978,3.535,0l14.628,14.631L15.6,29.992 C15.111,30.48,14.473,30.725,13.832,30.725z M4.766,29.992l14.628-14.628L4.766,0.733c-0.979-0.978-2.561-0.978-3.535,0 c-0.978,0.977-0.978,2.56,0,3.535l11.095,11.096L1.23,26.457c-0.978,0.978-0.978,2.561,0,3.535 c0.488,0.488,1.127,0.732,1.769,0.732C3.64,30.725,4.275,30.48,4.766,29.992z"></path> </g> </g></svg></Button>
                                </div>
                            
                                </aside>
                                <Drawer.Backdrop>
                                    <Drawer.Content placement="left">
                                    <Drawer.Dialog className="bg-[var(--bg-box-color)]">
                                        <Drawer.Header>
                                        <div className="logo flex justify-center items-center border-b-[1px] border-gray-600 py-4">
                                            <img src={Logo} alt="logo" className='w-10 m-4'/>
                                            <h1 className='customFont text-xl'>Global Blood Donor Alliance</h1>
                                            <Button slot="close" className="bg-[var(--bg-box-color)]">
                                                <svg fill="#ffffff" className='w-[1.5rem]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.725 30.725" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M13.832,30.725c-0.642,0-1.279-0.244-1.769-0.732c-0.978-0.977-0.978-2.56,0-3.535l11.095-11.093L12.064,4.268 c-0.978-0.979-0.978-2.562,0-3.535c0.978-0.978,2.56-0.978,3.535,0l14.628,14.631L15.6,29.992 C15.111,30.48,14.473,30.725,13.832,30.725z M4.766,29.992l14.628-14.628L4.766,0.733c-0.979-0.978-2.561-0.978-3.535,0 c-0.978,0.977-0.978,2.56,0,3.535l11.095,11.096L1.23,26.457c-0.978,0.978-0.978,2.561,0,3.535 c0.488,0.488,1.127,0.732,1.769,0.732C3.64,30.725,4.275,30.48,4.766,29.992z"></path> </g> </g></svg>
                                            </Button>
                                        </div>
                                        </Drawer.Header>
                                        <Drawer.Body>
                                            <nav className='w-full'>
                                                <ul className='text-white'>
                                                    <li className=''><Link className='flex px-10 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='w-[1.5rem] mx-2' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M8.976 3C4.05476 3 3 4.05476 3 8.976V15.024C3 19.9452 4.05476 21 8.976 21H9V9H21V8.976C21 4.05476 19.9452 3 15.024 3H8.976Z" fill="#ffffff"></path> <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="#ffffff" stroke-width="2"></path> <path d="M21 9L3 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 21L9 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Dashboard</Link></li>
                                                    <li><Link className='flex px-10 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12L14.5 14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.60423 5.60423L5.0739 5.0739V5.0739L5.60423 5.60423ZM4.33785 6.87061L3.58786 6.87438C3.58992 7.28564 3.92281 7.61853 4.33408 7.6206L4.33785 6.87061ZM6.87963 7.63339C7.29384 7.63547 7.63131 7.30138 7.63339 6.88717C7.63547 6.47296 7.30138 6.13549 6.88717 6.13341L6.87963 7.63339ZM5.07505 4.32129C5.07296 3.90708 4.7355 3.57298 4.32129 3.57506C3.90708 3.57715 3.57298 3.91462 3.57507 4.32882L5.07505 4.32129ZM3.75 12C3.75 11.5858 3.41421 11.25 3 11.25C2.58579 11.25 2.25 11.5858 2.25 12H3.75ZM16.8755 20.4452C17.2341 20.2378 17.3566 19.779 17.1492 19.4204C16.9418 19.0619 16.483 18.9393 16.1245 19.1468L16.8755 20.4452ZM19.1468 16.1245C18.9393 16.483 19.0619 16.9418 19.4204 17.1492C19.779 17.3566 20.2378 17.2341 20.4452 16.8755L19.1468 16.1245ZM5.14033 5.07126C4.84598 5.36269 4.84361 5.83756 5.13505 6.13191C5.42648 6.42626 5.90134 6.42862 6.19569 6.13719L5.14033 5.07126ZM18.8623 5.13786C15.0421 1.31766 8.86882 1.27898 5.0739 5.0739L6.13456 6.13456C9.33366 2.93545 14.5572 2.95404 17.8017 6.19852L18.8623 5.13786ZM5.0739 5.0739L3.80752 6.34028L4.86818 7.40094L6.13456 6.13456L5.0739 5.0739ZM4.33408 7.6206L6.87963 7.63339L6.88717 6.13341L4.34162 6.12062L4.33408 7.6206ZM5.08784 6.86684L5.07505 4.32129L3.57507 4.32882L3.58786 6.87438L5.08784 6.86684ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM16.1245 19.1468C14.9118 19.8483 13.5039 20.25 12 20.25V21.75C13.7747 21.75 15.4407 21.2752 16.8755 20.4452L16.1245 19.1468ZM20.25 12C20.25 13.5039 19.8483 14.9118 19.1468 16.1245L20.4452 16.8755C21.2752 15.4407 21.75 13.7747 21.75 12H20.25ZM6.19569 6.13719C7.68707 4.66059 9.73646 3.75 12 3.75V2.25C9.32542 2.25 6.90113 3.32791 5.14033 5.07126L6.19569 6.13719Z" fill="#ffffff"></path> </g></svg>Donation History</Link></li>
                                                    <li><Link className=' flex px-10 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 11.9998H18.6361C17.9781 11.9998 17.6491 11.9998 17.3578 12.1296C17.0665 12.2593 16.8463 12.504 16.4059 12.9932L15.3767 14.1369C15.0154 14.5382 14.8348 14.7389 14.6057 14.734C14.3766 14.7291 14.2049 14.521 13.8616 14.1048L10.3334 9.82819C10.0133 9.44017 9.85321 9.24615 9.63599 9.23311C9.41877 9.22006 9.23663 9.39352 8.87237 9.74044L7.36897 11.1723C6.93986 11.5809 6.7253 11.7853 6.45709 11.8926C6.18887 11.9998 5.89258 11.9998 5.3 11.9998H3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M8.96173 19.3707L9.43571 18.7895L9.43571 18.7895L8.96173 19.3707ZM12 5.49877L11.4509 6.00966C11.5928 6.16215 11.7917 6.24877 12 6.24877C12.2083 6.24877 12.4072 6.16215 12.5491 6.00966L12 5.49877ZM15.0383 19.3707L15.5123 19.952L15.0383 19.3707ZM9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26044H1.25C1.25 11.3862 2.37926 13.4793 3.7862 15.2825C5.20736 17.1039 6.99532 18.7349 8.48775 19.952L9.43571 18.7895ZM2.75 9.26044C2.75 6.53057 4.0079 4.70454 5.60065 4.04191C7.17297 3.38778 9.35285 3.75479 11.4509 6.00966L12.5491 4.98787C10.1473 2.40661 7.32719 1.69899 5.02447 2.65699C2.74218 3.60649 1.25 6.07936 1.25 9.26044H2.75ZM15.5123 19.952C17.0047 18.735 18.7926 17.1039 20.2138 15.2825C21.6207 13.4794 22.75 11.3862 22.75 9.2604H21.25C21.25 10.8821 20.3695 12.6445 19.0312 14.3598C17.7071 16.0568 16.0142 17.6072 14.5643 18.7895L15.5123 19.952ZM22.75 9.2604C22.75 6.07926 21.2578 3.60639 18.9755 2.65691C16.6728 1.69894 13.8527 2.40662 11.4509 4.98787L12.5491 6.00966C14.6472 3.75479 16.827 3.38774 18.3994 4.04184C19.9921 4.70444 21.25 6.53045 21.25 9.2604H22.75ZM8.48775 19.952C9.7587 20.9884 10.641 21.75 12 21.75L12 20.25C11.2785 20.25 10.8287 19.9254 9.43571 18.7895L8.48775 19.952ZM14.5643 18.7895C13.1713 19.9254 12.7216 20.25 12 20.25L12 21.75C13.359 21.75 14.2413 20.9884 15.5123 19.952L14.5643 18.7895Z" fill="#ffffff"></path> </g></svg>Blood Requests</Link></li>
                                                    <li><Link className=' flex px-10 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Notifications</Link></li>
                                                    <li><Link className='flex px-10 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Notifications</Link></li>
                                                    <li><Link className=' flex px-10 rounded-xl py-4 w-[100%] hover:bg-[var(--primary-color)]'><svg viewBox="0 0 24 24" className='mx-2' width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Settings</Link></li>
                                                </ul>
                                            </nav>
                                            <ul className='my-3'>
                                                <li><Link className=' border-t border-b inline-block hover:bg-red-900 px-10  py-4 w-[100%] text-red-300'><svg viewBox="0 0 24 24" fill="none" className='inline-block w-[1rem] mx-2' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M3 12L15 12M3 12L7 8M3 12L7 16" stroke="#eba3a3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Logout</Link></li>
                                            </ul>
                                        </Drawer.Body>
                                    </Drawer.Dialog>
                                    </Drawer.Content>
                                </Drawer.Backdrop>
                            </Drawer>
                            </aside>
                            <div>
                            <h1 className='customFont text-2xl lg:text-4xl text-[var(--text-color)]'>Manage Profile</h1>
                            <p className='text-[var(--text-color)]'>Keep your profile updated for faster donor matching and timely notifications.</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-end">
                                <Link>
                                    <Badge.Anchor className='m-4'>
                                    <Avatar size="sm" className='bg-red-200 border border-gray-500'>
                                            <Avatar.Fallback className='bg-[var(--bg-color)]'><svg viewBox="0 0 24 24" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Avatar.Fallback>
                                    </Avatar>
                                    <Badge color="danger" size="sm">
                                        5
                                    </Badge>
                                    </Badge.Anchor>
                                </Link>
                                <input type="submit" className=" p-2 cursor-pointer bg-[var(--primary-color)] my-4 mx-2 rounded-md" form='myForm' value={"Save Changes"}/>
                            </div>
                        </div>
                    </section>
                    {/* User Proflle */}
                    <section className='m-4 lg:m-0 lg:w-[90rem] rounded-xl' data-aos="fade-up">
                        <div className='lg:m-8 p-4 bg-[var(--bg-box-color)]  grid lg:grid-cols-2 rounded-xl'>
                            <div className='flex flex-col justify-center items-center lg:items-stretch lg:justify-start lg:flex-row'>
                                <Badge.Anchor key="lg">
                                    <Avatar className='w-[10rem] h-[10rem] border-2'>
                                        <Avatar.Image src=""/>
                                        <Avatar.Fallback className='text-5xl bg-green-950 text-white'>A</Avatar.Fallback>
                                    </Avatar>
                                    <Badge  className='w-10 h-10 bg-[var(--primary-color)]'>
                                        <svg viewBox="0 0 16 16" width="1.5rem" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H0V14H16V3H13L11 1H5L3 3ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" fill="#ffffff"></path> </g></svg>
                                    </Badge>
                                </Badge.Anchor>
                                <div className='mx-6 flex flex-col justify-between'>
                                    <h1 className='text-4xl customFont my-4 mb-0 text-center lg:text-left'>Anuj Gupta</h1> 
                                    <Chip  className='bg-green-950 text-green-300 m-auto lg:m-0 my-2'><ShieldCheck/> Varified Donor</Chip>
                                    <small className='text-gray-400 text-center lg:text-left my-2 lg:my-0'>Donor ID: <span className='text-white' >#GBDA-2026-0418</span></small>
                                    <div>
                                        <Chip className='bg-red-950 text-white' ><CircleFill className="text-red-500 w-2 m-1"/>Blood Group <b className='text-red-300'>&nbsp; O+</b></Chip>
                                        <Link onClick={donorStatus} className='mx-2'>
                                        {
                                            activeDonor === "Available for Donate" ? (
                                                <Chip className="bg-green-950 text-green-300">
                                                <ThunderboltFill />
                                                {activeDonor}
                                                </Chip>
                                            ) : (
                                                <Chip className="bg-yellow-950 text-yellow-300">
                                                <ThunderboltFill />
                                                {activeDonor}
                                                </Chip>
                                            )
                                        }
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 my-4 lg:my-0'>
                                <div className='hover:outline hover:outline-red-500 mx-4 flex flex-col justify-around items-center p-4 h-full w-30 rounded-xl bg-[var(--bg-color)]'>
                                    <Heart className='text-red-500 bg-red-950 w-10 h-10 p-2 rounded-xl'/>
                                    <h1 className='customFont text-3xl'>15</h1>
                                    <small className='uppercase text-[12px]'>Dontations</small>
                                </div>
                                <div className='hover:outline hover:outline-green-500 mx-4 flex flex-col justify-around items-center p-4 h-full w-30 rounded-xl bg-[var(--bg-color)]'>
                                    <Pulse className='text-green-500 bg-green-950 w-10 h-10 p-2 rounded-xl'/>
                                    <h1 className='customFont text-3xl'>42</h1>
                                    <small className='uppercase text-[12px]'>Lives Saved</small>
                                </div>
                                <div className='hover:outline hover:outline-blue-500 mx-4 flex flex-col justify-around items-center p-4 h-full w-30 rounded-xl bg-[var(--bg-color)]'>
                                    <Calendar className='text-blue-500 bg-blue-950 w-10 h-10 p-2 rounded-xl'/>
                                    <h1 className='customFont text-sm'>March 2026</h1>
                                    <small className='uppercase text-[12px] '>Member Since</small>
                                </div>
                                <div className='hover:outline hover:outline-yellow-500 mx-4 flex flex-col justify-around items-center p-4 h-full w-30 rounded-xl bg-[var(--bg-color)]'>
                                    <Star className='text-yellow-500 bg-yellow-950 w-10 h-10 p-2 rounded-xl'/>
                                    <h1 className='customFont text-3xl'>4.5</h1>
                                    <small className='uppercase text-[12px]'>Donor Rating</small>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <div className='flex flex-col lg:flex-row'>
                        <div>
                            {/* Personal Information */}
                            <section className='m-4 lg:m-8 p-4 bg-[var(--bg-box-color)] lg:w-[60rem] rounded-xl' data-aos="fade-up">
                                <div className='flex items-center'>
                                    <Person className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                    <div>
                                        <h1 className='text-xl customFont my-0'>Personal Information</h1>
                                        <p className='my-0 text-gray-400'>Update your basic account details.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} id='myForm'>
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="fullname">Full Name <span className="text-red-500 inline-block my-1">*</span></label>
                                            <input type='text' id="fullname" value={'FullName'} {...register("fullName", { required: true })} />
                                            {errors.fullName && <small className='text-red-500 mx-4'>This field is required</small>}
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="email">Email <span className="text-red-500 inline-block my-1">*</span></label>
                                            <input type='email' id="email" value={'Email'} {...register("email", { required: true })} />
                                            {errors.email && <small className='text-red-500 mx-4'>This field is required</small>}
                                        </div>
                                    </div>
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="mobile">Mobile No. <span className="text-red-500 inline-block my-1">*</span></label>
                                            <input type='text' id="mobile" value={'9876543210'} {...register("mobile", { required: true })} />
                                            {errors.mobile && <small className='text-red-500 mx-4'>This field is required</small>}
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="dob">Date of Birth<span className="text-red-500 inline-block my-1">*</span></label>
                                            <input type='date' id="dob" value={'24-05-2024'} {...register("dob", { required: true })} />
                                            {errors.dob && <small className='text-red-500 mx-4'>This field is required</small>}
                                        </div>
                                    </div>
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="gender">Gender <span className="text-red-500 inline-block my-1">*</span></label>
                                            <select id="gender" {...register("gender",{required: true})}>
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            </select>
                                            {errors.gender && <small className="text-red-400 my-1">This field is required</small>}
                                        </div>
                                       
                                    </div>
                                    
                                </form>
                            </section>
                            {/* Medical Information */}
                            <section className='m-4 lg:m-8 p-4 bg-[var(--bg-box-color)] lg:w-[60rem] rounded-xl' data-aos="fade-up">
                                <div className='flex lg:items-center flex-col lg:flex-row'>
                                    <Stethoscope className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                    <div className='my-4 lg:my-0'>
                                        <h1 className='text-xl customFont my-0'>Medical Information</h1>
                                        <p className='my-0 text-gray-400'>Maintain accurate medical details for safe blood donation.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} id='myForm'>
                                    <div className='flex justify-between px-10 py-2 rounded-xl bg-[var(--bg-color)]'>
                                        <div>
                                        <h1 >Eligible to Donate Blood Today</h1>
                                        <p className='text-gray-400'>Check your eligibility status before your next blood donation.</p>
                                        </div>
                                        <Switch size="md">
                                            <Switch.Content>
                                            <Switch.Control>
                                                <Switch.Thumb />
                                            </Switch.Control>
                                            </Switch.Content>
                                        </Switch>
                                    </div>
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="last-donation">Last Blood Donation Date <span className="text-gray-400 inline-block my-1">(optional)</span></label>
                                            <input type="date" placeholder="Enter your Full name" id="last-donation" {...register("lastDonation")} />
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="weight">Weight (Kg)<span className="text-red-500 inline-block my-1">*</span></label>
                                            <input type="number" id="weight" {...register("weight", { required: 'This field is required', min: {value: 45, message: "Weight must be at least 45Kg"} })} />
                                            {errors.weight && <small className="text-red-400 my-1">{errors.weight.message}</small>}
                                        </div>
                                    </div>
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="blood-grp">Blood Group <span className="text-red-500 inline-block my-1">*</span></label>
                                            <select id="blood-grp" {...register("bloodGroup",{required: true})}>
                                                <option value="">Select</option>
                                                <option value="a+">A+</option>
                                                <option value="a-">A-</option>
                                                <option value="b+">B+</option>
                                                <option value="b-">B-</option>
                                                <option value="ab+">AB+</option>
                                                <option value="ab-">AB-</option>
                                                <option value="o+">O+</option>
                                                <option value="o-">O-</option>
                                            </select>
                                            {errors.bloodGroup && <small className="text-red-400 my-1">This field is required</small>}
                                        </div>
                                    </div>
                                   
                                </form>
                            </section>
                            {/* Address Details */}
                            <section className='m-4 lg:m-8 p-4 bg-[var(--bg-box-color)] lg:w-[60rem] rounded-xl' data-aos="fade-up">
                                <div className='flex lg:items-center flex-col lg:flex-row'>
                                    <LocationArrow className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                    <div className='my-4 lg:my-0'>
                                        <h1 className='text-xl customFont my-0'>Address Details</h1>
                                        <p className='my-0 text-gray-400'>Help recipients and healthcare providers find you when needed.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} id='myForm'>                                
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="country">Country <span className="text-gray-400 inline-block my-1"></span></label>
                                            <input type="text" placeholder="Enter your Country" id="country" {...register("country")} />
                                            {errors.country && <small className="text-red-400 my-1">{errors.country.message}</small>}
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="state">State <span className="text-gray-400 inline-block my-1"></span></label>
                                            <input type="text" placeholder="Enter your State" id="state" {...register("state")} />
                                            {errors.state && <small className="text-red-400 my-1">{errors.state.message}</small>}
                                        </div>
                                        
                                    </div>
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4'>
                                            <label htmlFor="city">City <span className="text-gray-400 inline-block my-1"></span></label>
                                            <input type="text" placeholder="Enter your City" id="city" {...register("city")} />
                                            {errors.city && <small className="text-red-400 my-1">{errors.city.message}</small>}
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="pincode">Pincode <span className="text-gray-400 inline-block my-1"></span></label>
                                            <input type="text" placeholder="Enter your Pincode" id="pincode" {...register("pincode")} />
                                            {errors.pincode && <small className="text-red-400 my-1">{errors.pincode.message}</small>}
                                        </div>
                                    </div>
                                    <div className='lg:grid lg:grid-cols-1'>
                                        
                                        <div className='m-4'>
                                            <label htmlFor="pincode">Pincode <span className="text-gray-400 inline-block my-1"></span></label>
                                            <textarea id="address" placeholder="Enter your Address..." {...register("address")} className="text-red-400 my-1"></textarea>
                                            {errors.address && <small >{errors.address.message}</small>}
                                        </div>
                                    </div>
                                   
                                </form>
                            </section>
                            {/* Donor Availability & Preference */}
                            <section className='m-4 lg:m-8 p-4 bg-[var(--bg-box-color)] lg:w-[60rem] rounded-xl' data-aos="fade-up">
                                <div className='flex lg:items-center flex-col lg:flex-row'>
                                    <ThunderboltFill className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                    <div className='my-4 lg:my-0'>
                                        <h1 className='text-xl customFont my-0'>Donor Availability & Preferences</h1>
                                        <p className='my-0 text-gray-400'>Control your donation availability and preferences.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} id='myForm'>                                
                                    <div className='lg:grid lg:grid-cols-2'>
                                        <div className='m-4 bg-[var(--bg-color)] p-4 rounded-xl flex items-center'>
                                            <div>
                                            <h1 className='customFont text-md'>Available for Emergency Donation</h1>
                                            <p className='text-gray-500 text-sm/4 my-2'>When enabled, your profile appears in real-time dispatch searches for nearby trauma hospitals.</p>
                                            </div>
                                            <Switch size="md" className="mx-4">
                                                <Switch.Content>
                                                <Switch.Control>
                                                    <Switch.Thumb />
                                                </Switch.Control>
                                                </Switch.Content>
                                            </Switch>
                                        </div>
                                        <div className='m-4  bg-[var(--bg-color)] p-4 rounded-xl'>
                                            <label htmlFor="radius">Preferred Donation Radius<span className="text-red-500 inline-block my-1">*</span></label>
                                            <select id="radius" {...register("radius")}>
                                               <option value="5km">Within 5 Km</option>
                                               <option value="10km">Within 10 Km</option>
                                               <option value="20km">Within 20 Km</option>
                                               <option value="50km">Within 50 Km</option>
                                               <option value="anywhere">Within Anywhere</option>
                                            </select>
                                           
                                        </div>
                                    </div>
                                    <div className='lg:grid lg:grid-cols-1'>
                                        <div className='m-4 bg-[var(--bg-color)] p-4 rounded-xl'>
                                            <h1 className='customFont my-2'>Preferred Contact Method</h1>
                                            <div className='grid lg:grid-cols-3 gap-6'>
                                                <Link className='hover:border hover:border-[var(--primary-color)] rounded-md flex items-center bg-[var(--bg-box-color)] p-4'>
                                                        <Handset className='p-2 mr-4 rounded-md h-8 w-8 bg-[var(--primary-color)]'/>Phone Call
                                                </Link>
                                                <Link className='hover:border hover:border-[var(--primary-color)] rounded-md flex items-center bg-[var(--bg-box-color)] p-4'>
                                                        <Envelope className='p-2 mr-4 rounded-md h-8 w-8 bg-[var(--primary-color)]'/>Email
                                                </Link>
                                                <Link className='hover:border hover:border-[var(--primary-color)] rounded-md flex items-center bg-[var(--bg-box-color)] p-4'>
                                                        <Smartphone className='p-2 mr-4 rounded-md h-8 w-8 bg-[var(--primary-color)]'/>SMS Text
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </section>
                            {/* Emergency Contact */}
                            <section className='m-4 lg:m-8 p-4 bg-[var(--bg-box-color)] lg:w-[60rem] rounded-xl' data-aos="fade-up">
                                <div className='flex lg:items-center flex-col lg:flex-row'>
                                    <ThunderboltFill className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                    <div className='my-4 lg:my-0'>
                                        <h1 className='text-xl customFont my-0'>Emergency Contact</h1>
                                        <p className='my-0 text-gray-400'>Add someone who can be contacted during emergencies.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} id='myForm'>                                
                                    <div className='lg:grid lg:grid-cols-3'>
                                        <div className='m-4'>
                                            <label htmlFor="Contact-name" className='inline-block my-1'>Contact Name </label>
                                            <input type="text" placeholder="Full Name" id="Contact-name" {...register("contactName",{required: true})} />
                                             {errors.contactName && <small className="text-red-400 my-1">{errors.contactName.message}</small>}
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="relationship" className='inline-block my-1'>Relationship</label>
                                            <input type="text" placeholder="Relationship" id="relationship" {...register("relationship",{required: true})} />
                                             {errors.relationship && <small className="text-red-400 my-1">{errors.relationship.message}</small>}
                                        </div>
                                        <div className='m-4'>
                                            <label htmlFor="relativeMobile" className='inline-block my-1'>Nobile No.</label>
                                            <input type="text" placeholder="Mobile No." id="relativeMobile" {...register("relativeMobile",{required: true})} />
                                             {errors.relativeMobile && <small className="text-red-400 my-1">{errors.relativeMobile.message}</small>}
                                        </div>
                                       
                                    </div>
                                    
                                </form>
                            </section>
                            {/* Setting & Privacy */}
                            <section className='m-4 lg:m-8  p-4 bg-[var(--bg-box-color)] lg:w-[60rem] rounded-xl' data-aos="fade-up">
                                <div className='flex lg:items-center flex-col lg:flex-row'>
                                    <Key className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                    <div className='my-4 lg:my-0'>
                                        <h1 className='text-xl customFont my-0'>Account & Security</h1>
                                        <p className='my-0 text-gray-400'>Protect your account with advanced security options.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} id='myForm'>                                
                                    <div className='lg:grid lg:grid-cols-2 gap-5'>
                                        <div className="mt-4">
                                            <label htmlFor="password">Password <span className="text-red-500">*</span></label>
                                            <input type="password" placeholder="Enter your password" id="password" {...register("password", { required: true })} />
                                            {errors.password && <small className="text-red-400 my-1">This field is required</small>}
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="Cpassword">Confirm Password <span className="text-red-500">*</span></label>
                                            <input type="password" placeholder="Enter your confirm password" id="Cpassword" {...register("Cpassword", { required: true })} />
                                            {errors.Cpassword && <small className="text-red-400 my-1">This field is required</small>}
                                        </div>
                                        
                                       
                                    </div>
                                </form>
                                <Alert status="danger" className='bg-red-950 my-8'>
                                    <Alert.Indicator className='text-red-400' />
                                    <Alert.Content>
                                    <Alert.Title className='text-red-400'>Delete Account</Alert.Title>
                                    <Alert.Description className='text-gray-400'>
                                       Permanently remove your donor profile, medical history logs, and availability status from Global Blood Donor Alliance.
                                    </Alert.Description>
                                    <Button className="mt-2 sm:hidden" size="sm" variant="danger">
                                        Delete Account
                                    </Button>
                                    </Alert.Content>
                                    <Button className="hidden sm:block" size="sm" variant="danger">
                                    Delete Account
                                    </Button>
                                </Alert>
                            </section>
                            
                        </div>
                        {/* Profile Complitions */}
                        <section className='lg:m-8 lg:sticky lg:top-54 m-4 p-4 bg-[var(--bg-box-color)] w-[22rem] h-[35rem] rounded-xl' data-aos="fade-up" >
                            <div className='flex items-center'>
                                <CheckShape className='h-12 w-12 text-[var(--primary-color)] bg-red-950 p-3 rounded-md mr-4'/>
                                <div>
                                    <h1 className='text-xl customFont my-0'>Profile Completion</h1>
                                    <p className='my-0 text-green-400'>100%</p>
                                </div>
                            </div>
                            <div className='my-8'>
                            <input type="range" className='w-full appearance-none accent-white bg-gradient-to-r from-red-500 to-green-500 rounded-full'/>
                            </div>
                            <div>
                                <div className='flex  my-2 items-center justify-between border py-4 rounded-xl border-green-400 text-green-400'><span className='flex items-center'><CircleCheck className='mx-4'/> Personal Information</span> <small className='uppercase font-bold mx-4'>Verified</small></div>
                                <div className='flex my-2 items-center justify-between border py-4 rounded-xl border-green-400 text-green-400'><span className='flex items-center'><CircleCheck className='mx-4'/> Medical Information</span> <small className='uppercase font-bold mx-4'>Verified</small></div>
                                <div className='flex my-2 items-center justify-between border py-4 rounded-xl border-green-400 text-green-400'><span className='flex items-center'><CircleCheck className='mx-4'/> Address Details</span> <small className='uppercase font-bold mx-4'>Verified</small></div>
                                <div className='flex my-2 items-center justify-between border py-4 rounded-xl border-green-400 text-green-400'><span className='flex items-center'><CircleCheck className='mx-4'/> Donation Preferences</span> <small className='uppercase font-bold mx-4'>Verified</small></div>
                                <div className='flex my-2 items-center justify-between border py-4 rounded-xl border-red-400 text-red-400'><span className='flex items-center'><XmarkShape className='mx-4'/> Emergency Contacts</span> <small className='uppercase font-bold mx-4'>Not Verified</small></div>
                            </div>
                          
                        </section>
                    </div>
                    
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default ManageUserProfile