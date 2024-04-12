import { FaRegBookmark } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, _id } = news;
  const { name, published_date, img } = author;
  return (
    <div className="border rounded-xl">
      {/* card-top */}
      <div className="flex justify-between bg-gray-200 text-black p-4 items-center rounded-t-lg">
        <div className="flex gap-8">
          <img className=" h-12 rounded-full" src={img} alt="" />
          <div>
            <h5 className=" text-lg">{name}</h5>
            <p className="text-base">{published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-lg">
          <FaRegBookmark />
          <CiShare2 />
        </div>
      </div>
      {/* news */}
      <div className="p-4 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <img src={image_url} alt="" />
        <div>
        {
        details.length > 200 ? <p className="text-base">{details.slice(0,200)} <Link to={`/news/${_id}`} className="pl-8 text-base text-blue-700 font-bold">Read More</Link></p> 
        : <p className="text-base">{details}</p>
        }
        </div>
      </div>
      <hr className="mx-8" />
    </div>
  );
};

export default NewsCard;
