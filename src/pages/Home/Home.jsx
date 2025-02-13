import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Header from "../shared/Header/Header";
import LeftNav from "../shared/LeftNav/LeftNav";
import RightNav from "../shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

export default function Home() {
  const news = useLoaderData();

  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar  ></Navbar>

      <div className=" grid grid-cols-1  md:grid-cols-4 gap-6 mt-6">
        <div>
          <LeftNav></LeftNav>
        </div>
        {/* {news container} */}
        <div className="md:col-span-2 ">
          {news.map(ANews => <NewsCard
          key={ANews._id}
          news ={ANews}
          >
            
          </NewsCard>)}
        </div>
        {/* {news container} */}
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
}
