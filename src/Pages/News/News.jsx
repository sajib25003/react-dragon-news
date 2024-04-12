import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    return (
        <div  className=" px-20 my-10">
            <Header></Header>
            <Navbar></Navbar>
            <div className=" mt-10 grid md:grid-cols-4 gap-6">
                <div className=" p-4 border col-span-3">
                    <h2>News Details</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;