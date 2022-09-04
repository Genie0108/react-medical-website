import React from "react";
import { TiTick } from "react-icons/ti";

const PayingCard = ({
  method,
  lightColor,
  darkColor,
  firstVisitPayment,
  firstVisitText,
  visitPrice,
}) => {
  return (
    <div className="w-min xs:w-96 shadow-2xl">
      <h1 className={`${darkColor} text-white px-3 py-2 rounded-t-md`}>
        Paying {method}
      </h1>
      <div className={`px-3 py-3 flex items-center ${lightColor}`}>
        <div className="">
          <span className="leading-6 text-sm">Membership</span>
          <div className="py-3 text-xl font-semibold text-primary">
            Rs.5000<sub className="text-sm">/month</sub>
          </div>
          <span className="text-sm">First month free</span>
        </div>
        {/* middle plus */}
        <span className="text-3xl px-3 text-primary">+</span>
        {/* right part */}
        <div className="">
          <span className="text-sm">First Visit</span>
          <div className="py-3 text-xl font-semibold text-primary">
            {firstVisitPayment}
          </div>
          <span className="text-sm">{firstVisitText}</span>
        </div>
      </div>
      {/* 30 days of membership */}
      <h2 className="px-3 py-2 font-semibold">30 days of free membership</h2>
      <ul className="px-3 text-sm">
        <li className="flex items-center gap-x-2">
          <TiTick size="20px" fill="rgb(14, 132, 147)" />
          <span className="leading-6">Same-day appointments 7 days a week</span>
        </li>
        <li className="flex items-center gap-x-2">
          <TiTick size="20px" fill="rgb(14, 132, 147)" />
          <span className="leading-6">
            Unlimited messages with your 24/7 Care Team
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <TiTick size="20px" fill="rgb(14, 132, 147)" />
          <span className="leading-6">
            Prescription discount card to save up to 80%
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <TiTick size="20px" fill="rgb(14, 132, 147)" />
          <span className="leading-6">Exclusive discounts on lab tests</span>
        </li>
        <li className="flex items-center gap-x-2">
          <TiTick size="20px" fill="rgb(14, 132, 147)" />
          <span className="leading-6">Free memberships for your family</span>
        </li>
        <li className="flex items-center gap-x-2">
          <TiTick size="20px" fill="rgb(14, 132, 147)" />
          <span className="leading-6">Cancel anytime</span>
        </li>
      </ul>
      {/* visit price */}
      <h2 className="px-3 py-2 font-semibold">Visit price {method}</h2>
      <p className="px-3 pb-4 text-sm">{visitPrice}</p>
    </div>
  );
};

export default PayingCard;
