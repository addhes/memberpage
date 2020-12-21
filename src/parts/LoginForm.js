import React from "react";
import { withRouter } from "react-router-dom"
import { useDispatch } from 'react-redux'
import Fade from "react-reveal";

import users from "../constants/api/users";

import { setAuthorizationHeader } from "../config/axios";

import { populateProfile } from "../store/actions/users"

import useForm from "../helpers/hooks/useForm"

function LoginForm({ history }) {
  const dispatch = useDispatch()

  const [{ email, password}, setState] = useForm({
    email: "", password:"",
  });

   

  function submit(e) {
    e.preventDefault();

    users
      .login({ email, password })
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        users.details().then((detail) => {
          dispatch(populateProfile(detail.data));
          const production =
            process.env.REACT_APP_FRONTPAGE_URL === "https://monica.id"
              ? "Domain = monica.id"
              : "";
          localStorage.setItem(
            "BWAMICRO:token",
            JSON.stringify({
              ...res.data,
              email: email,
            })
          );

          const redirect = localStorage.getItem("BWAMICRO:redirect");
          const userCookie = {
            name: detail.data.name,
            thumbnail: detail.data.avatar,
          };
          // 7 hari * 24 jam (hari) * 60 menit (jam) * 60 detik (minute) * 1000 milisecond (second) 
          const expires = new Date(
              new Date().getTime() + 7 * 24 * 60 * 60 * 1000
          )

          document.cookie = `MONICA:user=${JSON.stringify(userCookie)}; expires=${expires.toUTCString};
          ${production};`

            history.push( redirect || "/" )
        });
      })
      .catch((err) => {});
  }

  return (
    <div className="flex justify-center items-center pb-20">
      <div className="w-full sm:w-3/12 mt-12 sm:mt-12 sm:ml-14">
        <h1 className="text-4xl text-gray-900 mb-6 leading-11 ml-12 md:ml-0">
          <span className="font-bold">Continue</span> Study <br/>
          Finish your <span className="font-bold">Goals</span>
        </h1>
        <form onSubmit={submit}>
          <div className="flex flex-col mb-4 items-center md:items-start">
            <label htmlFor="email" className="text-lg mb-2">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={setState}
              className="bg-white focus:outline-none border px-6 py-3 w-9/12 border-gray-600 focus:border-teal-500"
              value={email}
              placeholder="Your email address"
            />
          </div>

          <div className="flex flex-col mb-4 items-center md:items-start">
            <label htmlFor="password" className="text-lg mb-2 mr-2 md:ml-0">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={setState}
              className="bg-white focus:outline-none border px-6 py-3 w-9/12 border-gray-600 focus:border-teal-500"
              value={password}
              placeholder="Your password address"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 mt-5 w-9/12 transition-all duration-200 hover:text-black focus:outline-none shadow-inner text-white py-3 ml-11 md:ml-0"
          >
            Masuk
          </button>
        </form>
      </div>

      <div className="w-1/12 hidden sm:block"></div>

      <div className="w-5/12 hidden sm:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 354, height: 390 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 309, height: 344 }}
          ></div>
          <Fade right>
            <div className="absolute w-11/12 h-11/12 -mb-8 -ml-8">
              <img src="/tamara.jpg" alt="Tamara" />
            </div>
          </Fade>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12 border"
            style={{ width: 299 }}
          >
            <p className="text-gray-900 mb-2">
              Semua sudah terarah dengan baik dan perlu ikuti saja
            </p>
            <span className="text-gray-600">Tamara, Webs Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm)