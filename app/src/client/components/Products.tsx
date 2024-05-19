import React from 'react';
import { Link } from 'react-router-dom';
import AIIcon from '../static/AIIcon';
import AdsIcon from '../static/AdsIcon';
import CRMIcon from '../static/CrmIcon';
import FulfillmentIcon from '../static/FullfilmentIcon';
import ListingIcon from '../static/ListingIcon';
import LoyaltyIcon from '../static/LoyaltyIcon';
import MarketingIcon from '../static/MarketingIcon';
import ReputationIcon from '../static/ReputationIcon';
import SocialIcon from '../static/SocialIcon';

interface Card {
  icon: JSX.Element;
  label: string;
  url: string;
}

// const cards: Card[] = [
//   { icon: <AIIcon />, label: "AI", url: "/ai" },
//   { icon: <FulfillmentIcon />, label: "Fulfillment", url: "/fulfillment" },
//   { icon: <ListingIcon />, label: "Listings", url: "/listings" },
//   { icon: <LoyaltyIcon />, label: "Loyalty", url: "/loyalty" },
//   { icon: <AdsIcon />, label: "ADs", url: "/ads" },
//   { icon: <CRMIcon />, label: "CRM", url: "/crm" },
//   { icon: <MarketingIcon />, label: "Marketing", url: "/marketing" },
//   { icon: <ReputationIcon />, label: "Reputation", url: "/reputation" },
//   { icon: <SocialIcon />, label: "Social", url: "/social" },
// ];

const productivityCards: Card[] = [
  { icon: <AIIcon />, label: "AI", url: "https://ai.mybusinesspilot.com/login" },
  { icon: <SocialIcon />, label: "Social", url: "https://aiads.mybusinesspilot.com/" },
  { icon: <FulfillmentIcon />, label: "Fulfillment", url: "https://fulfillment.mybusinesspilot.com/" },
  { icon: <ListingIcon />, label: "Listings", url: "/listings" },
];

const salesMarketingCards: Card[] = [
  { icon: <MarketingIcon />, label: "Marketing", url: "/marketing" },
  { icon: <AdsIcon />, label: "ADs", url: "https://aiads.mybusinesspilot.com/" },
  { icon: <CRMIcon />, label: "CRM", url: "/crm" },
  { icon: <LoyaltyIcon />, label: "Loyalty", url: "/loyalty" },
  { icon: <ReputationIcon />, label: "Reputation", url: "/reputation" },
];

const quickAccessCards: Card[] = [
  { icon: <AIIcon />, label: "AI", url: "/ai" },
  { icon: <CRMIcon />, label: "CRM", url: "/crm" },
  { icon: <SocialIcon />, label: "Social", url: "/social" },
  { icon: <FulfillmentIcon />, label: "Fulfillment", url: "/fulfillment" },
];



const CardGrid = () => {
  return (
    <div className="p-6 flex flex-wrap gap-8">
      {/* Quick Access Bar */}
      <div className="flex-1 lg:w-80 lg:flex-2 md:flex-1 lg:flex-initial">
        <h2 className="hidden md:block text-xl font-bold mb-2">QUICK ACCESS</h2>
        <div className="sm:flex hidden justify-between ml-0 mb-7 px-4 py-3 rounded-md bg-white border-white overflow-hidden mx-auto font-[sans-serif]" style={{ background: "linear-gradient(183deg, #AF89FE 3.14%, #758BF9 98.66%)" }}>
          {quickAccessCards.map((card, index) => (
            <Link key={index} to={card.url} className="flex flex-col justify-center items-center p-3 bg-gradient-card shadow-custom rounded-card w-quickaccess h-quickaccess no-underline text-current">
              {card.icon}
            </Link>
          ))}
        </div>
        {/* Cards */}
        <h2 className="l-mobile:hidden md:block text-xl font-bold" style={{ marginBottom: "0.55rem" }}>PRODUCTIVITY</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 l-mobile:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4"> {/* Change grid-cols */} {/* Change grid-cols */}
          {productivityCards.map((card, index) => (
            <Link key={index} to={card.url} className="flex flex-col justify-center items-center p-4 bg-gradient-card shadow-custom rounded-card w-full h-card no-underline text-current">
              {card.icon}
              <span className="mt-2">{card.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1">
        {/* Search Bar */}
        <div className="sm:flex ml-0 mb-8 hidden px-4 py-4 rounded-md bg-white border-white overflow-hidden mx-auto font-[sans-serif]" style={{ marginTop: "2.2rem" }}>
          <input placeholder="Search..."
            className="w-full outline-none ring-white focus:ring-white focus:border-white focus-within:border-white border-white bg-white text-sm" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div>
        {/* Cards */}
        <h2 className="l-mobile:hidden md:block text-xl font-bold mb-2">SALES & MARKETING</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 l-mobile:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"> {/* Change grid-cols */}
          {salesMarketingCards.map((card, index) => (
            <Link key={index} to={card.url} className="flex flex-col justify-center items-center p-4 bg-gradient-card shadow-custom rounded-card w-full h-card no-underline text-current">
              {card.icon}
              <span className="mt-2">{card.label}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>

  );
};

export default CardGrid;