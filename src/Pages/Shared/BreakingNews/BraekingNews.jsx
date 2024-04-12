import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BraekingNews = () => {
  return (
    <div className="flex items-center bg-slate-200 text-black my-5">
      <button className="btn btn-error rounded-none">Breaking News</button>
      <Marquee pauseOnHover speed={125}>   
        <Link className="mr-4" to="/">I can be a React component, multiple React ....</Link>
        <Link className="mr-4" to="/">I can be a React component, multiple React ....</Link>
        <Link className="mr-4" to="/">I can be a React component, multiple React ....</Link>
        <Link className="mr-4" to="/">I can be a React component, multiple React ....</Link>
      </Marquee>
      
    </div>
  );
};

export default BraekingNews;
