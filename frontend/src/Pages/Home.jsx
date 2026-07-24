import { useEffect, useState } from "react";
import {
  Button,
  Label,
  ListBox,
  Select,
  useTheme,
  Avatar,
  Card,
  Link,
} from "@heroui/react";
import Header from "../Components/Header";
import Counter from "../Components/Counter";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl py-10  my-10 flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="hero-section p-4 md:py-20 md:pr-20  md:w-[50%] flex md:block items-center justify-center flex-col">
          <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
            Global Blood Donor Alliance
          </p>
          <h1 className=" text-5xl md:text-7xl/21 my-4 text-center md:text-left">
            Every <span className="text-[var(--primary-color)]">Drop </span>
            Saves a Life
          </h1>
          <p className="text-center md:text-left">
            Every blood donation can save up to 3 lives. Join the Global Blood
            Donor Alliance and connect blood donors, recipients, hospitals, and
            blood banks on one trusted platform.
          </p>
          <Button variant="danger" className="my-4 p-6">
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
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Find Blood
          </Button>
          <Button className="m-2 md:m-4 p-6 bg-transparent border">
            <svg
              viewBox="-1.5 0 15 15"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
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
                <title>drop [#74]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-224.000000, -7882.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M180,7731 C180,7734.314 177.314,7737 174,7737 C170.686,7737 168,7734.314 168,7731 C168,7727.686 172.5,7722 174,7722 C175.5,7722 180,7727.686 180,7731"
                        id="drop-[#74]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            Become a Donor
          </Button>
        </div>
        <div className="hero-image md:scale-150 md:w-[50%] mx-auto">
          <div className="circle"></div>
          <div className="heart">
            <svg
              viewBox="0 0 16 16"
              width="5rem"
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
                  d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="counter mx-auto py-10  my-10  flex flex-col items-center justify-around md:flex-row w-[80%] bg-[var(--bg-box-color)] rounded-xl">
        <div className="p-4 ">
          <Counter target={250000} />
          <p className="text-center">Registered Donors</p>
        </div>
        <div className="p-4 ">
          <Counter target={1200} />
          <p className="text-center">Hospitals</p>
        </div>
        <div className="p-4 ">
          <Counter target={850} />
          <p className="text-center">Blood Banks</p>
        </div>
        <div className="p-4 ">
          <Counter target={100000} />
          <p className="text-center">Lives Saved</p>
        </div>
      </div>
      <div className="search-donors flex items-center justify-center flex-col py-20 ">
        <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
          FIND BLOOD
        </p>
        <h1 className="text-3xl md:text-5xl m-4 text-center">
          Find the Right{" "}
          <span className="text-[var(--primary-color)]">Blood Donor</span>
        </h1>
        <p className="text-center mx-4">
          Connect with nearby donors quickly during emergencies or planned
          medical procedures.
        </p>
        <form
          action=""
          className="py-10 bg-[var(--bg-box-color)] px-8 my-10 rounded-2xl md:w-[60%] flex flex-col justify-center items-center"
        >
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 ">
            <Select className="w-[256px] my-10" placeholder="Select one">
              <Label className="text-[var(--text-color)]">Blood Group</Label>
              <Select.Trigger className="bg-[var(--bg-box-color)] text-[var(--text-color)]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="bg-[var(--bg-box-color)]">
                  <ListBox.Item id="any" textValue="Any">
                    Any
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="a+" textValue="A+">
                    A+
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="a-" textValue="A-">
                    A-
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="b+" textValue="B+">
                    B+
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="b-" textValue="B-">
                    B-
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="ab+" textValue="AB+">
                    AB+
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="ab-" textValue="AB-">
                    AB-
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="o+" textValue="O+">
                    O+
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="o-" textValue="O-">
                    O-
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            <Select className="w-[256px] my-10" placeholder="Select one">
              <Label className="text-[var(--text-color)]">Country</Label>
              <Select.Trigger className="bg-[var(--bg-box-color)] text-[var(--text-color)]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="bg-[var(--bg-box-color)]">
                  <ListBox.Item id="india" textValue="India">
                    India
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            <Select className="w-[256px] my-10" placeholder="Select one">
              <Label className="text-[var(--text-color)]">State/Region</Label>
              <Select.Trigger className="bg-[var(--bg-box-color)] text-[var(--text-color)]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="bg-[var(--bg-box-color)]">
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            <Select className="w-[256px] my-10" placeholder="Select one">
              <Label className="text-[var(--text-color)]">City</Label>
              <Select.Trigger className="bg-[var(--bg-box-color)] text-[var(--text-color)]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="bg-[var(--bg-box-color)]">
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            <Select className="w-[256px] my-10" placeholder="Select one">
              <Label className="text-[var(--text-color)]">Hospital</Label>
              <Select.Trigger className="bg-[var(--bg-box-color)] text-[var(--text-color)]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox className="bg-[var(--bg-box-color)]">
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
          <Button variant="danger">
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
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Find Available Donors
          </Button>
        </form>
      </div>
      <div className="emergency relative md:p-8 p-4 my-10 bg-linear-to-r from-[var(--primary-color)] to-[var(--bg-box-color)] rounded-2xl w-[80%] mx-auto" >
        <div>
          <span className=" inline-block border p-2 py-1 rounded-full">
            24/7 Emergency Response
          </span>
          <h1 className="text-2xl my-4 md:text-5xl">Need Blood Urgently?</h1>
          <p className="md:w-[60%]">
            Every second matters during a medical emergency. Submit an emergency
            blood request to instantly connect with nearby compatible donors,
            hospitals, and blood banks.
          </p>
          <Button className="my-8 bg-[var(--text-color)] text-[var(--primary-color)] px-8">
            Create Blood Request
          </Button>
        </div>
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          className="absolute ambulance hidden md:block md:right-20 md:bottom-5"
          width="10rem"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
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
            <title>ambulance_round [#ffffff]</title>{" "}
            <desc>Created with Sketch.</desc> <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-300.000000, -5279.000000)"
                fill="#565454"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M252,5124 L252,5125 L253,5125 C253.552,5125 254,5125.448 254,5126 C254,5126.552 253.552,5127 253,5127 L252,5127 L252,5128 C252,5128.552 251.552,5129 251,5129 C250.448,5129 250,5128.552 250,5128 L250,5127 L249,5127 C248.448,5127 248,5126.552 248,5126 C248,5125.448 248.448,5125 249,5125 L250,5125 L250,5124 C250,5123.448 250.448,5123 251,5123 C251.552,5123 252,5123.448 252,5124 L252,5124 Z M262,5130 L258,5130 L258,5126 L261,5126 C261.552,5126 262,5126.448 262,5127 L262,5130 Z M262,5134 L261.221,5134 C260.672,5133.39 259.885,5133 259,5133 C258.647,5133 258.314,5133.072 258,5133.184 L258,5132 L262,5132 L262,5134 Z M259,5137 C258.449,5137 258,5136.551 258,5136 C258,5135.449 258.449,5135 259,5135 C259.551,5135 260,5135.449 260,5136 C260,5136.551 259.551,5137 259,5137 L259,5137 Z M256,5134 L253.484,5134 C253.038,5132.278 251.487,5131 249.625,5131 C248.538,5131 247.556,5131.436 246.838,5132.142 C246.526,5132.448 246,5132.216 246,5131.779 L246,5122 C246,5121.448 246.448,5121 247,5121 L255,5121 C255.552,5121 256,5121.448 256,5122 L256,5134 Z M251.347,5136 C251,5136.595 250.362,5137 249.625,5137 C248.888,5137 248.25,5136.595 247.903,5136 C247.731,5135.705 247.625,5135.366 247.625,5135 C247.625,5134.634 247.731,5134.295 247.903,5134 C248.25,5133.405 248.888,5133 249.625,5133 C250.362,5133 251,5133.405 251.347,5134 C251.519,5134.295 251.625,5134.634 251.625,5135 C251.625,5135.366 251.519,5135.705 251.347,5136 L251.347,5136 Z M262,5124 L258,5124 L258,5121 C258,5119.895 257.105,5119 256,5119 L246,5119 C244.895,5119 244,5119.895 244,5121 L244,5134.234 C244,5135.209 244.791,5136 245.766,5136 C246.213,5137.722 247.763,5139 249.625,5139 C251.487,5139 253.037,5137.722 253.484,5136 L256,5136 C256,5137.657 257.343,5139 259,5139 C260.657,5139 262,5137.657 262,5136 C263.105,5136 264,5135.105 264,5134 L264,5126 C264,5124.895 263.105,5124 262,5124 L262,5124 Z"
                    id="ambulance_round-[#ffffff]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="whyChoose my-10 py-10 flex justify-center items-center flex-col" >
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
           <svg viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.99999 14C8.99999 13.4477 8.55227 13 7.99999 13C7.4477 13 6.99999 13.4477 6.99999 14C6.99999 15.3574 7.26721 16.7375 8.08236 17.7972C8.93437 18.9048 10.2571 19.5 12 19.5C12.5523 19.5 13 19.0523 13 18.5C13 17.9477 12.5523 17.5 12 17.5C10.7429 17.5 10.0656 17.0952 9.66761 16.5778C9.23276 16.0125 8.99999 15.1426 8.99999 14Z" fill="#F53A3F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4228 1.54267C12.6513 0.711988 11.348 0.712021 10.5766 1.54273C9.63287 2.55896 7.89116 4.5305 6.37916 6.77881C4.87045 9.02222 3.46953 11.5773 3.49416 14.3526C3.49633 14.5981 3.50939 14.9426 3.55218 15.3536C3.63717 16.17 3.84245 17.278 4.33361 18.4008C4.82693 19.5285 5.61868 20.6923 6.88173 21.5709C8.15052 22.4536 9.82552 23 11.9997 23C14.1739 23 15.8489 22.4536 17.1178 21.5709C18.3808 20.6923 19.1727 19.5286 19.6661 18.4009C20.1573 17.2781 20.3627 16.17 20.4477 15.3536C20.4905 14.9427 20.5036 14.5982 20.5058 14.3527C20.5306 11.5774 19.1293 9.02208 17.6206 6.77875C16.1084 4.53043 14.3666 2.55889 13.4228 1.54267ZM8.03877 7.89491C9.44577 5.80274 11.0797 3.94302 11.9997 2.94942C12.9198 3.94301 14.5539 5.80273 15.961 7.89491C17.2351 9.78932 18.5269 11.9805 18.5059 14.3348C18.5042 14.5268 18.4938 14.8074 18.4585 15.1464C18.3873 15.83 18.2176 16.722 17.8338 17.5992C17.4521 18.4715 16.8689 19.3078 15.9756 19.9291C15.0882 20.5465 13.8256 21 11.9997 21C10.1738 21 8.91129 20.5465 8.02387 19.9291C7.13071 19.3078 6.54754 18.4715 6.16596 17.5992C5.78221 16.722 5.61259 15.8301 5.54142 15.1465C5.50613 14.8074 5.49578 14.5269 5.49408 14.3349C5.4732 11.9806 6.76469 9.78944 8.03877 7.89491Z" fill="#F53A3F"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)]">Verified Donor Network</Card.Title>
              <Card.Description className="text-[var(--text-color)] ">
               Every donor profile is verified to help ensure safe and trustworthy blood donations.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
           <svg viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.00012 13.5L12 4V10.5H16.9999L12 20L12.0002 13.5H7.00012Z" stroke="#F53A3F" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)]">Fast Blood Search</Card.Title>
              <Card.Description className="text-[var(--text-color)] ">
               Find compatible blood donors quickly based on blood group and location.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#F53A3F"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M20 22V16C20 11.5817 16.4183 8 12 8C7.58172 8 4 11.5817 4 16V22" stroke="#F53A3F" stroke-width="1.5"></path> <path d="M14.2905 11.5C15.2932 11.9059 16.0939 12.7065 16.4998 13.7092" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 22H22" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2V5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 6L19.5 7.5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 6L4.5 7.5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5Z" stroke="#F53A3F" stroke-width="1.5"></path> <path opacity="0.5" d="M12 19V22" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)]">Emergency Blood Requests</Card.Title>
              <Card.Description className="text-[var(--text-color)] ">
               Send urgent blood requests and instantly notify nearby eligible donors.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
          <svg viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22" stroke="#F53A3F" stroke-width="1.5"></path> <path d="M12 22V19" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 12H14" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.5 11H7" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.5 14H7" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 11H18.5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 14H18.5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.5 8H7" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 8H18.5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 9V5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 7L10 7" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.25 8.5C20.25 8.91421 20.5858 9.25 21 9.25C21.4142 9.25 21.75 8.91421 21.75 8.5H20.25ZM20.1111 5.33706L19.6945 5.96066L19.6945 5.96066L20.1111 5.33706ZM20.6629 5.88886L20.0393 6.30554L20.0393 6.30554L20.6629 5.88886ZM21.75 12.5C21.75 12.0858 21.4142 11.75 21 11.75C20.5858 11.75 20.25 12.0858 20.25 12.5H21.75ZM17.5 5.75C18.2178 5.75 18.6998 5.75091 19.0672 5.78828C19.422 5.82438 19.586 5.8882 19.6945 5.96066L20.5278 4.71346C20.1318 4.44886 19.6925 4.34415 19.219 4.29598C18.758 4.24909 18.1866 4.25 17.5 4.25V5.75ZM21.75 8.5C21.75 7.81338 21.7509 7.24196 21.704 6.78102C21.6559 6.30755 21.5511 5.86818 21.2865 5.47218L20.0393 6.30554C20.1118 6.41399 20.1756 6.57796 20.2117 6.93283C20.2491 7.30023 20.25 7.78216 20.25 8.5H21.75ZM19.6945 5.96066C19.831 6.05186 19.9481 6.16905 20.0393 6.30554L21.2865 5.47218C21.0859 5.17191 20.8281 4.91409 20.5278 4.71346L19.6945 5.96066ZM20.25 12.5V22H21.75V12.5H20.25Z" fill="#F53A3F"></path> <path d="M3.88886 5.33706L4.30554 5.96066L4.30554 5.96066L3.88886 5.33706ZM3.33706 5.88886L3.96066 6.30554L3.96066 6.30554L3.33706 5.88886ZM3.75 17C3.75 16.5858 3.41421 16.25 3 16.25C2.58579 16.25 2.25 16.5858 2.25 17H3.75ZM2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM6.5 4.25C5.81338 4.25 5.24196 4.24909 4.78102 4.29598C4.30755 4.34415 3.86818 4.44886 3.47218 4.71346L4.30554 5.96066C4.41399 5.8882 4.57796 5.82438 4.93283 5.78828C5.30023 5.75091 5.78216 5.75 6.5 5.75V4.25ZM3.75 8.5C3.75 7.78216 3.75091 7.30023 3.78828 6.93283C3.82438 6.57796 3.8882 6.41399 3.96066 6.30554L2.71346 5.47218C2.44886 5.86818 2.34415 6.30755 2.29598 6.78102C2.24909 7.24196 2.25 7.81338 2.25 8.5H3.75ZM3.47218 4.71346C3.17191 4.91409 2.91409 5.17191 2.71346 5.47218L3.96066 6.30554C4.05186 6.16905 4.16905 6.05186 4.30554 5.96066L3.47218 4.71346ZM2.25 17V22H3.75V17H2.25ZM2.25 8.5V13H3.75V8.5H2.25Z" fill="#F53A3F"></path> <path d="M10 15H10.5M14 15H12.5" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)]">Hospital & Blood Bank Integration</Card.Title>
              <Card.Description className="text-[var(--text-color)] ">
               Connect with registered hospitals and blood banks for better coordination during emergencies.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
          <svg viewBox="-4 0 32 32"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-104.000000, -411.000000)" fill="#F53A3F"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)]">Smart Location Matching</Card.Title>
              <Card.Description className="text-[var(--text-color)] ">
               Locate nearby donors to reduce response time when every minute matters.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 ">
           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#F53A3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)]">Secure & Private</Card.Title>
              <Card.Description className="text-[var(--text-color)] ">
               Your personal information is protected with secure authentication and privacy measures.
              </Card.Description>
            </Card.Header>
          </Card>
          
        </div>
      </div>
      <div className="how-it-works my-10 py-10 flex justify-center items-center flex-col">
        <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
          How it works
        </p>
        <h1></h1>
          <h1 className="text-2xl md:text-5xl md:w-[60%] text-center m-8">
          A Simple Process to  
          <span className="text-[var(--primary-color)] "> Save Lives</span>
        </h1>
         <p className="md:w-[60%] text-center mx-4">
          Whether you're donating blood or searching for a donor, our platform makes the process quick, secure, and hassle-free.
        </p>
        <div className="how-it-works-card relative md:mx-auto md:w-[80%] md:grid md:grid-cols-4 after:content-[''] after:absolute after:h-[80%] md:after:h-[2px] md:after:w-[80%] after:w-[2px] after:bg-[var(--primary-color)] md:after:left-[10%] after:left-[50%] md:after:top-[30%] after:top-[10%] ">
          <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" fill="none" className="bg-[var(--bg-box-color)] p-6 rounded-full" width="8rem" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#F53A3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">Register</Card.Title>
              <Card.Description className="text-[var(--text-color)] text-center ">
               Create your free account with your blood group and location in under a minute.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" fill="none" className="bg-[var(--bg-box-color)] p-6 rounded-full" width="8rem" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.38 12L10.79 14.42L15.62 9.57996" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.75 2.44995C11.44 1.85995 12.57 1.85995 13.27 2.44995L14.85 3.80995C15.15 4.06995 15.71 4.27995 16.11 4.27995H17.81C18.87 4.27995 19.74 5.14995 19.74 6.20995V7.90995C19.74 8.29995 19.95 8.86995 20.21 9.16995L21.57 10.7499C22.16 11.4399 22.16 12.5699 21.57 13.2699L20.21 14.8499C19.95 15.1499 19.74 15.7099 19.74 16.1099V17.8099C19.74 18.8699 18.87 19.7399 17.81 19.7399H16.11C15.72 19.7399 15.15 19.9499 14.85 20.2099L13.27 21.5699C12.58 22.1599 11.45 22.1599 10.75 21.5699L9.17 20.2099C8.87 19.9499 8.31 19.7399 7.91 19.7399H6.18C5.12 19.7399 4.25 18.8699 4.25 17.8099V16.0999C4.25 15.7099 4.04 15.1499 3.79 14.8499L2.44 13.2599C1.86 12.5699 1.86 11.4499 2.44 10.7599L3.79 9.16995C4.04 8.86995 4.25 8.30995 4.25 7.91995V6.19995C4.25 5.13995 5.12 4.26995 6.18 4.26995H7.91C8.3 4.26995 8.87 4.05995 9.17 3.79995L10.75 2.44995Z" stroke="#F53A3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">Verify Your Account</Card.Title>
              <Card.Description className="text-[var(--text-color)] text-center ">
               Confirm your identity and health eligibility to earn your verified donor badge.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" fill="none" className="bg-[var(--bg-box-color)] p-6 rounded-full" width="8rem" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#F53A3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">Search or Donate Blood</Card.Title>
              <Card.Description className="text-[var(--text-color)] text-center ">
               Find available donors nearby or respond to requests when you are eligible to give.
              </Card.Description>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-color)] md:bg-transparent m-10 md:m-6 flex justify-center items-center">
            <svg viewBox="0 0 24 24" fill="none" className="bg-[var(--bg-box-color)] p-6 rounded-full" width="8rem" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#F53A3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <Card.Header>
              <Card.Title className="text-xl my-6 text-[var(--text-color)] text-center">Save Lives</Card.Title>
              <Card.Description className="text-[var(--text-color)] text-center ">
              Complete the donation and track the real impact your contribution has made.
              </Card.Description>
            </Card.Header>
          </Card>
        </div>
      </div>
      <div className="compatibility my-10 py-10 flex justify-center items-center flex-col">
        <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
          Blood Compatibility
        </p>
        <h1></h1>
          <h1 className="text-2xl md:text-5xl md:w-[60%] text-center m-8">
          Know Which Blood Types Can  
          <span className="text-[var(--primary-color)] "> Donate and Receive</span>
        </h1>
         <p className="md:w-[60%] text-center mx-4">
          Understanding blood compatibility helps ensure safe and successful blood transfusions. Use the guide below to see which blood groups are compatible with each other.
        </p>
        <div className=" md:mx-auto md:w-[80%] md:grid md:grid-cols-3 lg:grid-cols-4">
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >A+</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">A+, AB+</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">A+, A-, O+, O-</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >A-</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">A+, A-, AB+, AB-</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">A-, O-</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >B+</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">B+, AB+</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">B+, B-, O+, O-</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >B-</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">B+, B-, AB+, AB-</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">B-, O-</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >AB+</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">AB+</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">All types</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >AB-</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">AB+, AB-</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">AB-, A-, B-, O-</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >O+</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">O+, A+, B+, AB+</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">O+, O-</h2>
            </Card.Header>
          </Card>
          <Card className=" p-6 bg-[var(--bg-box-color)] rounded-2xl m-6 min-w-80 md:min-w-60  ">
           <span className=" bg-[#411e1f] w-20 h-20 text-3xl flex justify-center items-center rounded-full text-[var(--primary-color)]" >O-</span>
            <Card.Header>
              <p className="my-1 text-gray-400">Donate To</p>
              <h2 className="my-1">All types</h2>
              <p className="my-1 text-gray-400">Receive from</p>
              <h2 className="my-1">O-</h2>
            </Card.Header>
          </Card>

        </div>
      </div>
      <div className="featured-donors my-10 py-10 flex justify-center items-center flex-col" >
        <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
          Featured Donors
        </p>
        <h1></h1>
          <h1 className="text-2xl md:text-5xl md:w-[60%] text-center m-8">
          Meet Our 
          <span className="text-[var(--primary-color)] "> Life-Saving </span>
           Heroes
        </h1>
         <p className="md:w-[60%] text-center mx-4">
          Our featured donors are dedicated individuals who regularly donate blood and help save lives. Their generosity inspires others to make a difference in their communities.
        </p>
       
      </div>
    </>
  );
}

export default Home;
