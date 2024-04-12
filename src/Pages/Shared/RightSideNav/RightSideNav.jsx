import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className=" space-y-8">
      {/* login with section */}
      <div>
        <h2 className=" text-3xl font-semibold mb-6">Login with</h2>
        <button className="btn btn-outline w-full text-green-200 mb-4">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full text-green-200">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>

      {/* Find us section */}
      <div>
        <h2 className=" text-3xl font-semibold mb-6">Find Us On</h2>
        <Link className="flex items-center gap-3 text-xl justify-center border rounded-t-lg p-4">
          <FaFacebook></FaFacebook>Facebook
        </Link>
        <Link className="flex items-center gap-3 text-xl justify-center border-x  p-4">
          <FaTwitter></FaTwitter>Twitter
        </Link>
        <Link className="flex items-center gap-3 text-xl justify-center border rounded-b-lg p-4">
          <FaInstagram></FaInstagram>Instagram
        </Link>
      </div>

      {/* Q-Zone section */}
      <div className=" space-y-3 bg-gray-100 p-2 text-black">
        <h2 className=" text-3xl font-semibold mb-6">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
