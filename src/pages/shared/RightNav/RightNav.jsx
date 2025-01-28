import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import qzone1 from "../../../assets/playground.png";
import qzone2 from "../../../assets/swimming.png";
import qzone3 from "../../../assets/class.png";
import { Link } from "react-router-dom";

export default function RightNav() {
  return (
    <div>
      <div className="p-4 space-y-2 mb-4">
        <h2 className="text-2xl font-bold">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub /> Github
        </button>
      </div>

      <div className="p-4  mb-4">
        <h2 className="text-2xl font-bold mb-2 ">Find us</h2>
        <a className="p-3 flex items-center border rounded-t-lg" href="">
          <FaFacebookSquare className="mr-2 text-md" />
          <span className="text-md">Facebook</span>
        </a>
        <a className="p-3 flex items-center border-x " href="">
          <FaTwitterSquare className="mr-2 text-md" />
          <span className="text-md">Twitter</span>
        </a>
        <a className="p-3 flex items-center border rounded-b-lg" href="">
          <FaInstagramSquare className="mr-2 text-md" />
          <span className="text-md">Instragram</span>
        </a>
      </div>

      {/* Q-Zone */}

      <div className="p-4 space-y-2 mb-4 gap-2">
        <h2 className="text-2xl font-bold">Q-zone</h2>
        <Link>
          {" "}
          <img src={qzone1} alt="" />
        </Link>
        <Link>
          {" "}
          <img src={qzone2} alt="" />
        </Link>
        <Link>
          {" "}
          <img src={qzone3} alt="" />
        </Link>
      </div>
    </div>
  );
}
