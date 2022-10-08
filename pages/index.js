import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { setAge, setName } from "/store/person/";
import { setSay } from "/store/test/";

export default function Home() {
  const { person, test } = useSelector((state) => ({
    person: state.person,
    test: state.test,
  }));
  const dispatch = useDispatch();

  return (
    <div className="container-fluid min-h-screen">
      <div className="splash">
        <div className="text-center mb-5">
          <Image src="/ntxp.png" width={50} height={50} alt="ntxp" />
          <h1 className="mb-5">NTXP</h1>
          <h2> Easy Setup NextJS,Tailwind,Redux & Persistent Storage</h2>
          <p>
            thanks for using..
            <br /> have fun with your coding 😊
          </p>
        </div>
        <div>
          <h3 className="font-bold">Example</h3>
          <span>- use{" "}
          <a
            href="https://github.com/reduxjs/redux-devtools/tree/main/extension#installation"
            className="underline"
          >
            reduxjs/redux-devtools
          </a>{" "}
          to see changes. </span><br/>
          <span>
            - change the input value & refresh for test state persistent.
          </span>
          <div className="my-3">
            <p>Test Store</p>
            <p>say : {test.say}</p>
          </div>
          <div className="my-3">
            <p>Person Store</p>
            <p>
              {" "}
              name : {person.name} | age : {person.age}
            </p>
          </div>
          <form className="form">
            <input
              className="input"
              type="text"
              onChange={(e) => {
                dispatch(setSay(e.target.value));
              }}
              value={test.say}
            />
            <input
              className="input"
              type="text"
              onChange={(e) => {
                dispatch(setName(e.target.value));
              }}
              value={person.name}
            />
            <input
              className="input"
              type="number"
              onChange={(e) => {
                dispatch(setAge(e.target.value));
              }}
              value={person.age}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
