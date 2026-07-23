import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Header from "../Components/Header";
import "./Home.css";

function Home() {
  function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let current = 0;

      const interval = setInterval(() => {
        current += Math.ceil(target / 100);

        if (current >= target) {
          current = target;
          clearInterval(interval);
        }

        setCount(current);
      }, 20);

      return () => clearInterval(interval);
    }, [target]);

    return <h2>{count.toLocaleString()}+</h2>;
  }

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl py-15 flex flex-col md:flex-row md:items-center md:justify-center ">
        <div className="hero-section p-4 md:py-20 md:pr-20  md:w-[50%] flex md:block items-center justify-center flex-col">
          <p className="rounded-2xl border-[var(--primary-color)] border inline-block py-1 px-4 bg-red-50 text-[var(--primary-color)] font-bold">
            Global Blood Donor Alliance
          </p>
          <h1 className=" text-5xl md:text-7xl/21 my-4 text-center md:text-left">
            Every <span className="text-[var(--primary-color)]">Drop</span>{" "}
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
      <div>
         <Counter target={250000} />
      <Counter target={1200} />
      <Counter target={850} />
      <Counter target={50} />
      <Counter target={100000} />
      </div>
    </>
  );
}

export default Home;
