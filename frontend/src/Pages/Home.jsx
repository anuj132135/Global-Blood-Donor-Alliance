import { useEffect, useState } from "react";
import { Button, Label, ListBox, Select } from "@heroui/react";
import Header from "../Components/Header";
import Counter from "../Components/Counter";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl py-15 flex flex-col md:flex-row md:items-center md:justify-center ">
        <div className="hero-section p-4 md:py-20 md:pr-20  md:w-[50%] flex md:block items-center justify-center flex-col">
          <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-950 text-[var(--primary-color)] font-bold">
            Global Blood Donor Alliance
          </p>
          <h1 className=" text-5xl md:text-7xl/21 my-4 text-center md:text-left">
            Every <span className="text-[var(--primary-color)]">Drop</span>
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
      <div className="counter mx-auto flex flex-col items-center justify-around md:flex-row w-[80%] bg-[var(--bg-box-color)]">
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
          className="py-10 bg-[var(--bg-box-color)] px-8 my-4 rounded-2xl md:w-[60%] flex flex-col justify-center items-center"
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
      <div className="emergency relative md:p-8 p-4 bg-linear-to-r from-[var(--primary-color)] to-[var(--bg-box-color)] rounded-2xl w-[80%] mx-auto">
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
        <svg viewBox="0 0 20 20" version="1.1" className="absolute ambulance hidden md:block md:right-20 md:bottom-5" width='10rem' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ambulance_round [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -5279.000000)" fill="#565454"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M252,5124 L252,5125 L253,5125 C253.552,5125 254,5125.448 254,5126 C254,5126.552 253.552,5127 253,5127 L252,5127 L252,5128 C252,5128.552 251.552,5129 251,5129 C250.448,5129 250,5128.552 250,5128 L250,5127 L249,5127 C248.448,5127 248,5126.552 248,5126 C248,5125.448 248.448,5125 249,5125 L250,5125 L250,5124 C250,5123.448 250.448,5123 251,5123 C251.552,5123 252,5123.448 252,5124 L252,5124 Z M262,5130 L258,5130 L258,5126 L261,5126 C261.552,5126 262,5126.448 262,5127 L262,5130 Z M262,5134 L261.221,5134 C260.672,5133.39 259.885,5133 259,5133 C258.647,5133 258.314,5133.072 258,5133.184 L258,5132 L262,5132 L262,5134 Z M259,5137 C258.449,5137 258,5136.551 258,5136 C258,5135.449 258.449,5135 259,5135 C259.551,5135 260,5135.449 260,5136 C260,5136.551 259.551,5137 259,5137 L259,5137 Z M256,5134 L253.484,5134 C253.038,5132.278 251.487,5131 249.625,5131 C248.538,5131 247.556,5131.436 246.838,5132.142 C246.526,5132.448 246,5132.216 246,5131.779 L246,5122 C246,5121.448 246.448,5121 247,5121 L255,5121 C255.552,5121 256,5121.448 256,5122 L256,5134 Z M251.347,5136 C251,5136.595 250.362,5137 249.625,5137 C248.888,5137 248.25,5136.595 247.903,5136 C247.731,5135.705 247.625,5135.366 247.625,5135 C247.625,5134.634 247.731,5134.295 247.903,5134 C248.25,5133.405 248.888,5133 249.625,5133 C250.362,5133 251,5133.405 251.347,5134 C251.519,5134.295 251.625,5134.634 251.625,5135 C251.625,5135.366 251.519,5135.705 251.347,5136 L251.347,5136 Z M262,5124 L258,5124 L258,5121 C258,5119.895 257.105,5119 256,5119 L246,5119 C244.895,5119 244,5119.895 244,5121 L244,5134.234 C244,5135.209 244.791,5136 245.766,5136 C246.213,5137.722 247.763,5139 249.625,5139 C251.487,5139 253.037,5137.722 253.484,5136 L256,5136 C256,5137.657 257.343,5139 259,5139 C260.657,5139 262,5137.657 262,5136 C263.105,5136 264,5135.105 264,5134 L264,5126 C264,5124.895 263.105,5124 262,5124 L262,5124 Z" id="ambulance_round-[#ffffff]"> </path> </g> </g> </g> </g></svg>
      </div>
    </>
  );
}

export default Home;
