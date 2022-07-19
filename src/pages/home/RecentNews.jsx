import React from "react";
import NewsCard from "../../components/cards/NewsCard";
import QuickLinkCard from "../../components/cards/QuickLinkCard";
import news from "../../data/News";
import links from "../../data/QuickLink";

const RecentNews = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 relative -top-64 flex flex-col  md:flex-row">
      <div className="md:w-1/2 lg:w-5/12">
        <h1 className="text-3xl font-bold text-primary align-baseline">
          Recent News
          <button className="text-primary mb-2 lg:mt-5 ml-5 pb-[1px] border-b-2 border-primaryDark text-sm font-normal">
            Read all News
          </button>
        </h1>
        <div className="lg:pt-9 max-w-[400px]w-1/2 mx-auto ">
          <div className="overflow-hidden">
            <img
              src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/shutterstock_556980217-900x500.jpg"
              alt="hospital equipment"
              className="cursor-pointer transition duration-500 ease-in hover:scale-110 hover:brightness-75"
            />
          </div>
          <div className="bg-primary px-4 py-5">
            <h2 className="text-white text-base font-semibold pb-1 cursor-pointer">
              Using anthrax to fight cancer effectively
            </h2>
            <p className="text-gray-200 text-sm cursor-pointer">
              Feburary 28, 2019 . Antibiotic
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto pt-10 md:pt-[4rem] lg:pt-[5.5rem] lg:w-5/12 ">
        {news.map((newsitem) => (
          <NewsCard
            key={newsitem.id}
            img={newsitem.img}
            headline={newsitem.headline}
            date={newsitem.date}
          />
        ))}
      </div>
      <div className="w-full mx-auto md:w-1/3">
        <h1 className="text-3xl font-bold text-primary mt-5 md:mt-0">
          Quick Links
        </h1>
        <div className="pt-5 md:pt-11">
          {links.map((link) => (
            <QuickLinkCard key={link.id} about={link.about} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
