/* eslint-disable react/prop-types */

import { FiInfo } from "react-icons/fi";

function OrderModal({
  order_id,
  price,
  payment,
  order_time,
  order_type,
  order_details,
  order_actions,
}) {
  let paymentConfig = {
    logo: "",
  };
  let orderTypeConfig = {
    logo: "",
  };
  console.log(order_actions);

  switch (payment) {
    case "payme":
      paymentConfig = { logo: "assets/payme.svg" };
      break;
    case "uzum":
      paymentConfig = {
        logo: "assets/uzum.svg",
      };
      break;
    case "click":
      paymentConfig = {
        logo: "assets/click.svg",
      };
      break;
    case "card":
      paymentConfig = {
        logo: "assets/card.svg",
      };
      break;
    case "cash":
      paymentConfig = {
        logo: "assets/cash.svg",
      };
      break;
    default:
      paymentConfig = { logo: "/assets/cash.svg" };
  }

  switch (order_type) {
    case "dine-in":
      orderTypeConfig = { logo: "assets/dine-in.svg" };
      break;
    case "take-out":
      orderTypeConfig = {
        logo: "assets/car.svg",
      };
      break;
    case "courier":
      orderTypeConfig = {
        logo: "assets/courier.svg",
      };
      break;

    default:
      orderTypeConfig = { logo: "/assets/dine-in.svg" };
  }

  return (
    <div className=" w-[310px] bg-white rounded-[6px]">
      <div className="flex  h-12 p-3 justify-between">
        <div className="flex items-center gap-2">
          <div className="text-[18px] font-bold leading-[24px] text-[rgba(26,_32,_36,_1)] ">
            ID: {order_id}
          </div>

          <FiInfo className="text-[rgba(110,_139,_183,_1)] " />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[12px] font-medium leading-[21px] text-[rgba(110,_139,_183,_1)]">
            {price}
          </div>
          <img className="" src={paymentConfig.logo} alt="payment_type_img" />
          <img className="" src={orderTypeConfig.logo} alt="order_type_img" />
        </div>
      </div>
      <div className="p-2 border-t border-b border-[rgba(225,_225,_225,_1)]">
        {order_details.map((data, index) => {
          return (
            <div key={index} className="mb-3">
              <div className="text-[14px] font-medium leading-[21px] text-[rgba(0,_0,_0,_1)]">
                {data.quantity} x {data.name}
              </div>
              {data.extras !== null &&
                data.extras.split(",").map((extra, i) => (
                  <div
                    key={i}
                    className="px-8 text-[12px] font-normal text-[rgba(72,_83,_91,_1)]"
                  >
                    {extra.trim()}
                  </div>
                ))}
            </div>
          );
        })}
        <div className="flex gap-[6px] justify-end">
          <img src="assets/time.svg" alt="time_icon" className="" />
          <div className="text-[12px] font-medium leading-[16px] text-[rgba(110,_139,_183,_1)]">
            {order_time}
          </div>
        </div>
      </div>
      {order_actions == "accept-decline" && (
        <div className="flex justify-center p-3 gap-[6px] items-center">
          <button className="w-[140px] h-[36px] rounded-[6px] border-[2px] border-[rgba(229,233,235,1)] text-red-500 text-[14px] font-medium">
            Отменить
          </button>
          <button className="w-[140px] h-[36px] rounded-[6px] bg-[rgba(14,_115,_246,_1)] text-[white] outline-[none] border-[0] text-[14px] font-medium ">
            Принять
          </button>
        </div>
      )}

      {order_actions == "end" && (
        <div className="flex justify-center p-3 items-center">
          <button className="w-[310px] h-[44px] rounded-[6px] text-[rgba(14,_115,_246,_1)]  outline-[none] border-[2px] border-[rgba(14,_115,_246,_1)] text-[14px] font-medium ">
            Завершить
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderModal;
