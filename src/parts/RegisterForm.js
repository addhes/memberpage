import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal";

import users from "../constants/api/users";

import useForm from "../helpers/hooks/useForm";
import fieldErrors from "../helpers/hooks/fieldErrors";

import Select from "../components/Form/Select";
import Input from "../components/Form/Input";

function LoginForm({ history }) {

  const [
    { name, email, password, profession, otherProfession },
    setState,
  ] = useForm({
    name: "",
    email: "",
    password: "",
    profession: "",
    otherProfession: "",
  });

  const [errors, seterrors] = useState(null);

  function submit(e) {
    e.preventDefault();

    users
      .register({ name, email, password, profession, otherProfession })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.response);
        seterrors(err?.response?.data?.message);
      });
  }

  const ERRORS = fieldErrors(errors);

  return (
    <div className="flex justify-center items-center ml-7 md:ml-0">
      <div className="w-full sm:w-3/12 mt-12 sm:mt-5 sm:ml-14">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Grow Skills</span> From, <br />
          Anywhere
        </h1>
        <form onSubmit={submit}>
          <Input
            value={email}
            error={ERRORS?.name?.message}
            nama="name"
            onChange={setState}
            placeholder="Your Name"
            labelName="Full Name"            
          />

          <Input
            value={email}
            error={ERRORS?.email?.message}
            name="email"
            type="email"
            onChange={setState}
            placeholder="Your email address"
            labelName="Email Address"
          />

          <Input
            value={password}
            error={ERRORS?.password?.message}
            name="password"
            type="password"
            onChange={setState}
            placeholder="Your Password"
            labelName="Password"
          />

          <Select
            labelName="Occupation"
            name="profession"
            value={profession}
            fallbackText="Select your focus"
            onClick={setState}
          >
            <option value="">Select your focus</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="others">other</option>
          </Select>
          {profession === "others" && (
            <div className="flex flex-col mb-4">
              <label htmlFor="otherProfession" className="text-lg mb-2">
                Other's Occupation
              </label>
              <input
                type="text"
                name="otherProfession"
                onChange={setState}
                className="bg-white focus:outline-none border w-full px-6 py-3 border-gray-600 focus:border-teal-500"
                value={otherProfession}
                placeholder="Others Occupation"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 mt-5 w-full transition-all duration-200 hover:text-black focus:outline-none shadow-inner text-white px-6 py-3"
          >
            Daftar
          </button>
        </form>
      </div>

      <div className="w-1/12"></div>

      <div className="w-5/12 hidden md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 354, height: 390 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 309, height: 344 }}
          ></div>
          <Fade right>
            <div className="absolute w-11/12 h-11/12 -mb-8 -ml-8">
              <img src="/james.jpg" alt="james" />
            </div>
          </Fade>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12 border"
            style={{ width: 299 }}
          >
            <p className="text-gray-900 mb-2">
              Semua materi terstuktur baik dan mentor yang sangat lihai
            </p>
            <span className="text-gray-600">James, Webs Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
