import BraekingNews from "../Shared/BreakingNews/BraekingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData(0);
    console.log(news);

    return (
        <div className=" px-20 my-10">
            <Header></Header>
            <BraekingNews></BraekingNews>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News cards will load here */}
                <div className=" text-4xl md:col-span-2 space-y-3">
                    <h2 className="text-3xl font-bold">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard
                        key={aNews._id} news={aNews}>
                        </NewsCard>)
                    }
                </div>
                <div className="p-4">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;