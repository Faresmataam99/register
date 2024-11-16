import { useState } from "react";

export default () => {
  let [span, setspan] = useState("");
  let [Fname, setFname] = useState("");
  let [Lname, setLname] = useState("");
  let [Age, setAge] = useState(0);
  let [Profession, setProfession] = useState("");
  let [Residence, setResidence] = useState("");
  let description = () => {
    setspan(`Good evening my name is ${Fname} ${Lname} and i am ${Age}
    i live in ${Residence} and i work as a ${Profession}`);
  };
  return (
    <>
      <header>
        <nav className="bg-white items-cente justify-around p-4"></nav>
      </header>
      <div className="flex items-center justify-center gap-4 flex-col bg-[url(wave.jpg)] bg-cover h-screen w-screen p-8">
        <div className="flex items-center bg-black hover:shadow-lg hover:shadow-white transition-all duration-200 flex-col gap-4 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-white">Register template</h1>
          <input
            className="p-4 text-2xl rounded-lg border-1 solid border-black"
            id="FirstName"
            type="text"
            placeholder="First name..."
            onInput={(e) => {
              setFname(e.target.value);
            }}
          />
          <input
            className="p-4 text-2xl rounded-lg"
            id="LasttName"
            type="text"
            placeholder="Last name.."
            onInput={(e) => {
              setLname(e.target.value);
            }}
          />
          <input
            className="p-4 text-2xl rounded-lg"
            id="Age"
            type="number"
            placeholder="Age..."
            onInput={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            className="p-4 text-2xl rounded-lg"
            id="Profession"
            type="text"
            placeholder="Profession..."
            onInput={(e) => {
              setProfession(e.target.value);
            }}
          />
          <input
            className="p-4 text-2xl rounded-lg"
            id="Residence"
            type="text"
            placeholder="Residence..."
            onInput={(e) => {
              setResidence(e.target.value);
            }}
          />
          <button
            onClick={description}
            id="Button"
            className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-white transition-all duration-200"
          >
            Submit
          </button>
        </div>
        <span className="bg-white p-4 rounded-xl w-52 h-52 text-red-400 text-xl font-bold flex justify-start flex-col itesm-center ">
          {" "}
          {span}{" "}
        </span>
      </div>
    </>
  );
};
