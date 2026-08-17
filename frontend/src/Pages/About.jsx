import { Card } from '@heroui/react'
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function About() {
  return (
    <>
        <Header/>
        {/* Why Chooose Section */}
        <div
        className="whyChoose my-10 py-10 flex justify-center items-center flex-col"
        data-aos="fade-up"
        >
        <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
            Why Choose Global Blood Donor Alliance?
        </p>
        <h1 className="text-2xl  md:text-5xl md:w-[60%] text-center my-8">
            Connecting Lives
            <span className="text-[var(--primary-color)]">Through Trust,</span>
            Speed, and Technology
        </h1>
        <p className="md:w-[60%] text-center">
            We make blood donation faster, safer, and more accessible by bringing
            donors, recipients, hospitals, and blood banks together on one
            reliable platform.
        </p>
        <div className=" md:mx-auto md:w-[80%] md:grid md:grid-cols-2 lg:grid-cols-3">
            <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M8.99999 14C8.99999 13.4477 8.55227 13 7.99999 13C7.4477 13 6.99999 13.4477 6.99999 14C6.99999 15.3574 7.26721 16.7375 8.08236 17.7972C8.93437 18.9048 10.2571 19.5 12 19.5C12.5523 19.5 13 19.0523 13 18.5C13 17.9477 12.5523 17.5 12 17.5C10.7429 17.5 10.0656 17.0952 9.66761 16.5778C9.23276 16.0125 8.99999 15.1426 8.99999 14Z"
                    fill="#F53A3F"
                ></path>{" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4228 1.54267C12.6513 0.711988 11.348 0.712021 10.5766 1.54273C9.63287 2.55896 7.89116 4.5305 6.37916 6.77881C4.87045 9.02222 3.46953 11.5773 3.49416 14.3526C3.49633 14.5981 3.50939 14.9426 3.55218 15.3536C3.63717 16.17 3.84245 17.278 4.33361 18.4008C4.82693 19.5285 5.61868 20.6923 6.88173 21.5709C8.15052 22.4536 9.82552 23 11.9997 23C14.1739 23 15.8489 22.4536 17.1178 21.5709C18.3808 20.6923 19.1727 19.5286 19.6661 18.4009C20.1573 17.2781 20.3627 16.17 20.4477 15.3536C20.4905 14.9427 20.5036 14.5982 20.5058 14.3527C20.5306 11.5774 19.1293 9.02208 17.6206 6.77875C16.1084 4.53043 14.3666 2.55889 13.4228 1.54267ZM8.03877 7.89491C9.44577 5.80274 11.0797 3.94302 11.9997 2.94942C12.9198 3.94301 14.5539 5.80273 15.961 7.89491C17.2351 9.78932 18.5269 11.9805 18.5059 14.3348C18.5042 14.5268 18.4938 14.8074 18.4585 15.1464C18.3873 15.83 18.2176 16.722 17.8338 17.5992C17.4521 18.4715 16.8689 19.3078 15.9756 19.9291C15.0882 20.5465 13.8256 21 11.9997 21C10.1738 21 8.91129 20.5465 8.02387 19.9291C7.13071 19.3078 6.54754 18.4715 6.16596 17.5992C5.78221 16.722 5.61259 15.8301 5.54142 15.1465C5.50613 14.8074 5.49578 14.5269 5.49408 14.3349C5.4732 11.9806 6.76469 9.78944 8.03877 7.89491Z"
                    fill="#F53A3F"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)]">
                Verified Donor Network
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] ">
                Every donor profile is verified to help ensure safe and
                trustworthy blood donations.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M7.00012 13.5L12 4V10.5H16.9999L12 20L12.0002 13.5H7.00012Z"
                    stroke="#F53A3F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)]">
                Fast Blood Search
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] ">
                Find compatible blood donors quickly based on blood group and
                location.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#F53A3F"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    opacity="0.5"
                    d="M20 22V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16V22"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                ></path>{" "}
                <path
                    d="M14.2905 11.5C15.2932 11.9059 16.0939 12.7065 16.4998 13.7092"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M2 22H22"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M12 2V5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M21 6L19.5 7.5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M3 6L4.5 7.5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                ></path>{" "}
                <path
                    opacity="0.5"
                    d="M12 19V22"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)]">
                Emergency Blood Requests
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] ">
                Send urgent blood requests and instantly notify nearby eligible
                donors.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M22 22L2 22"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                ></path>{" "}
                <path
                    d="M12 22V19"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M10 12H14"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M5.5 11H7"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M5.5 14H7"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M17 11H18.5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M17 14H18.5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M5.5 8H7"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M17 8H18.5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                <path
                    d="M12 9V5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                <path
                    d="M14 7L10 7"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                <path
                    d="M20.25 8.5C20.25 8.91421 20.5858 9.25 21 9.25C21.4142 9.25 21.75 8.91421 21.75 8.5H20.25ZM20.1111 5.33706L19.6945 5.96066L19.6945 5.96066L20.1111 5.33706ZM20.6629 5.88886L20.0393 6.30554L20.0393 6.30554L20.6629 5.88886ZM21.75 12.5C21.75 12.0858 21.4142 11.75 21 11.75C20.5858 11.75 20.25 12.0858 20.25 12.5H21.75ZM17.5 5.75C18.2178 5.75 18.6998 5.75091 19.0672 5.78828C19.422 5.82438 19.586 5.8882 19.6945 5.96066L20.5278 4.71346C20.1318 4.44886 19.6925 4.34415 19.219 4.29598C18.758 4.24909 18.1866 4.25 17.5 4.25V5.75ZM21.75 8.5C21.75 7.81338 21.7509 7.24196 21.704 6.78102C21.6559 6.30755 21.5511 5.86818 21.2865 5.47218L20.0393 6.30554C20.1118 6.41399 20.1756 6.57796 20.2117 6.93283C20.2491 7.30023 20.25 7.78216 20.25 8.5H21.75ZM19.6945 5.96066C19.831 6.05186 19.9481 6.16905 20.0393 6.30554L21.2865 5.47218C21.0859 5.17191 20.8281 4.91409 20.5278 4.71346L19.6945 5.96066ZM20.25 12.5V22H21.75V12.5H20.25Z"
                    fill="#F53A3F"
                ></path>{" "}
                <path
                    d="M3.88886 5.33706L4.30554 5.96066L4.30554 5.96066L3.88886 5.33706ZM3.33706 5.88886L3.96066 6.30554L3.96066 6.30554L3.33706 5.88886ZM3.75 17C3.75 16.5858 3.41421 16.25 3 16.25C2.58579 16.25 2.25 16.5858 2.25 17H3.75ZM2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM6.5 4.25C5.81338 4.25 5.24196 4.24909 4.78102 4.29598C4.30755 4.34415 3.86818 4.44886 3.47218 4.71346L4.30554 5.96066C4.41399 5.8882 4.57796 5.82438 4.93283 5.78828C5.30023 5.75091 5.78216 5.75 6.5 5.75V4.25ZM3.75 8.5C3.75 7.78216 3.75091 7.30023 3.78828 6.93283C3.82438 6.57796 3.8882 6.41399 3.96066 6.30554L2.71346 5.47218C2.44886 5.86818 2.34415 6.30755 2.29598 6.78102C2.24909 7.24196 2.25 7.81338 2.25 8.5H3.75ZM3.47218 4.71346C3.17191 4.91409 2.91409 5.17191 2.71346 5.47218L3.96066 6.30554C4.05186 6.16905 4.16905 6.05186 4.30554 5.96066L3.47218 4.71346ZM2.25 17V22H3.75V17H2.25ZM2.25 8.5V13H3.75V8.5H2.25Z"
                    fill="#F53A3F"
                ></path>{" "}
                <path
                    d="M10 15H10.5M14 15H12.5"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)]">
                Hospital & Blood Bank Integration
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] ">
                Connect with registered hospitals and blood banks for better
                coordination during emergencies.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
            <svg
                viewBox="-4 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <title>location</title> <desc>Created with Sketch Beta.</desc>{" "}
                <defs> </defs>{" "}
                <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    sketch:type="MSPage"
                >
                    {" "}
                    <g
                    id="Icon-Set"
                    sketch:type="MSLayerGroup"
                    transform="translate(-104.000000, -411.000000)"
                    fill="#F53A3F"
                    >
                    {" "}
                    <path
                        d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                        id="location"
                        sketch:type="MSShapeGroup"
                    >
                        {" "}
                    </path>{" "}
                    </g>{" "}
                </g>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)]">
                Smart Location Matching
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] ">
                Locate nearby donors to reduce response time when every minute
                matters.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)]">
                Secure & Private
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] ">
                Your personal information is protected with secure
                authentication and privacy measures.
                </Card.Description>
            </Card.Header>
            </Card>
        </div>
        </div>

         {/* How lt works */}
        <div
        className="how-it-works my-10 py-10 flex justify-center items-center flex-col"
        data-aos="fade-up"
        >
        <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
            How it works
        </p>
        <h1></h1>
        <h1 className="text-2xl md:text-5xl md:w-[60%] text-center m-8">
            A Simple Process to
            <span className="text-[var(--primary-color)] "> Save Lives</span>
        </h1>
        <p className="md:w-[60%] text-center mx-4">
            Whether you're donating blood or searching for a donor, our platform
            makes the process quick, secure, and hassle-free.
        </p>
        <div className="how-it-works-card relative md:mx-auto lg:w-[80%] md:grid md:grid-cols-4 after:content-[''] after:absolute after:h-[80%] md:after:h-[2px] md:after:w-[80%] after:w-[2px] after:bg-[var(--primary-color)] md:after:left-[10%] after:left-[50%] md:after:top-[30%] after:top-[10%] ">
            <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="bg-[var(--bg-box-color)] p-6 rounded-full"
                width="8rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">
                Register
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] text-center ">
                Create your free account with your blood group and location in
                under a minute.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="bg-[var(--bg-box-color)] p-6 rounded-full"
                width="8rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M8.38 12L10.79 14.42L15.62 9.57996"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                <path
                    d="M10.75 2.44995C11.44 1.85995 12.57 1.85995 13.27 2.44995L14.85 3.80995C15.15 4.06995 15.71 4.27995 16.11 4.27995H17.81C18.87 4.27995 19.74 5.14995 19.74 6.20995V7.90995C19.74 8.29995 19.95 8.86995 20.21 9.16995L21.57 10.7499C22.16 11.4399 22.16 12.5699 21.57 13.2699L20.21 14.8499C19.95 15.1499 19.74 15.7099 19.74 16.1099V17.8099C19.74 18.8699 18.87 19.7399 17.81 19.7399H16.11C15.72 19.7399 15.15 19.9499 14.85 20.2099L13.27 21.5699C12.58 22.1599 11.45 22.1599 10.75 21.5699L9.17 20.2099C8.87 19.9499 8.31 19.7399 7.91 19.7399H6.18C5.12 19.7399 4.25 18.8699 4.25 17.8099V16.0999C4.25 15.7099 4.04 15.1499 3.79 14.8499L2.44 13.2599C1.86 12.5699 1.86 11.4499 2.44 10.7599L3.79 9.16995C4.04 8.86995 4.25 8.30995 4.25 7.91995V6.19995C4.25 5.13995 5.12 4.26995 6.18 4.26995H7.91C8.3 4.26995 8.87 4.05995 9.17 3.79995L10.75 2.44995Z"
                    stroke="#F53A3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">
                Verify Your Account
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] text-center ">
                Confirm your identity and health eligibility to earn your
                verified donor badge.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="bg-[var(--bg-box-color)] p-6 rounded-full"
                width="8rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">
                Search or Donate Blood
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] text-center ">
                Find available donors nearby or respond to requests when you are
                eligible to give.
                </Card.Description>
            </Card.Header>
            </Card>
            <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="bg-[var(--bg-box-color)] p-6 rounded-full"
                width="8rem"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#F53A3F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>{" "}
                </g>
            </svg>
            <Card.Header>
                <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">
                Save Lives
                </Card.Title>
                <Card.Description className="text-[var(--text-color)] text-center ">
                Complete the donation and track the real impact your
                contribution has made.
                </Card.Description>
            </Card.Header>
            </Card>
        </div>
        </div>

        <Footer/>
        
    </>
  )
}

export default About