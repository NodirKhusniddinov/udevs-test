/* eslint-disable react/prop-types */
function OrderColumn({ order_status, orders_quantity, children }) {
  let statusConfig = {
    text: "",
    bgColor: "",
  };

  switch (order_status) {
    case "new":
      statusConfig = { text: "НОВЫЙ", bgColor: "bg-[rgba(14,_115,_246,_1)]" };
      break;
    case "prepairing":
      statusConfig = {
        text: "ЗАГОТОВКА",
        bgColor: "bg-[rgba(248,_197,_27,_1)]",
      };
      break;
    case "ready":
      statusConfig = {
        text: "ГОТОВ",
        bgColor: "bg-[rgba(34,_195,_72,_1)]",
      };
      break;
    case "delivering":
      statusConfig = {
        text: "КУРЬЕР В ПУТИ",
        bgColor: "bg-[rgba(26,_193,_157,_1)]",
      };
      break;
    default:
      statusConfig = { text: "Unknown Status", bgColor: "bg-gray-500" };
  }
  return (
    <div className="w-[326px] rounded-[6px]">
      <div
        className={`rounded-tl-[6px] rounded-tr-[6px] h-12 w-full ${statusConfig.bgColor} text-white text-[14px] font-bold leading-[24px] p-3`}
      >
        {statusConfig.text} ({orders_quantity})
      </div>
      <div className="flex flex-col gap-2 items-center p-3 rounded-bl-[6px] rounded-br-[6px] bg-[rgba(238,_240,_242,_1)]">
        {children}
      </div>
    </div>
  );
}

export default OrderColumn;
