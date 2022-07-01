import React from "react";
import {
  Timer,
  Gauge,
  UsersThree,
  Buildings,
  Briefcase,
  Receipt,
  ChartLine,
  Wallet,
  Bell,
  Gear,
  Question,
  SignOut
} from "phosphor-react";

const miruLogo = require("../../../../assets/images/purpleMiruLogoWithText.png"); //eslint-disable-line
const avatar = require("../../../../assets/images/sideNavAvatar.png"); //eslint-disable-line

const Navbar = () => (
  <div className="fixed top-0 left-0 bottom-0 shadow-2xl w-60 flex flex-col justify-between ">
    <div>
      <div className="h-20 bg-miru-gray-100 flex items-center justify-center">
        <img src={miruLogo} />
      </div>
      <ul className="mt-8">
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Gauge size={26} className="mr-4" /> Dashboard
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Timer size={26} className="mr-4" /> Time Tracking
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <UsersThree size={26} className="mr-4" /> Team
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Buildings size={26} className="mr-4" /> Clients
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Briefcase size={26} className="mr-4" /> Projects
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Receipt size={26} className="mr-4" /> Invoices
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <ChartLine size={26} className="mr-4" /> Reports
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Wallet size={26} className="mr-4" /> Payments
        </li>
      </ul>
    </div>
    <div>
      <ul className="mt-32">
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Bell size={26} className="mr-4" /> Notification
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Gear size={26} className="mr-4" /> Setting
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <Question size={26} className="mr-4" /> Help
        </li>
        <li className="flex py-3 px-6 items-center hover:bg-miru-gray-100">
          <SignOut size={26} className="mr-4" /> Logout
        </li>
      </ul>
      <div className="w-60 h-16 bg-miru-gray-100 flex items-center justify-center">
        <img src={avatar} />
        <div>
          <h1>JhonSmith</h1>
          <h3>JhonSmith@gmail.com</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
