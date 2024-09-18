import PageText from "../ui/PageText";
import SearchInput from "../ui/SearchInput";
import StyledSelect from "../ui/StyledSelect";
import TimeBox from "../ui/TimeBox";
import OrderColumn from "./OrderColumn";
import OrderModal from "./OrderModal";

function OrderPage() {
  return (
    <div className="overflow-y-scroll w-full">
      <PageText text="Сегодняшние заказы" />
      <div className="px-4 py-[10px]">
        <div className="flex justify-between items-center">
          <SearchInput />
          <div className="flex gap-2">
            <StyledSelect />
            <TimeBox time={"45:08"} />
          </div>
        </div>
        <div className="flex gap-4 mt-8 ">
          <OrderColumn order_status="new" orders_quantity={5}>
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"payme"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                { name: "Пепси 0.5", quantity: 3, extras: null },
                {
                  name: "Гамбургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
              order_actions={"accept-decline"}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"uzum"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                { name: "Пепси 0.5", quantity: 3, extras: null },
                {
                  name: "Гамбургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
              order_actions={"accept-decline"}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"card"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                { name: "Пепси 0.5", quantity: 3, extras: null },
                {
                  name: "Гамбургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
              order_actions={"accept-decline"}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"click"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Big Gamburder",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                { name: "Пепси 0.5", quantity: 4, extras: null },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
                {
                  name: "Дабл Бургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
              ]}
              order_actions={"accept-decline"}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"cash"}
              order_time={"15:22"}
              order_type={"courier"}
              order_details={[
                { name: "Пепси 0.5", quantity: 3, extras: null },
                {
                  name: "Гамбургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
              order_actions={"accept-decline"}
            />
          </OrderColumn>
          <OrderColumn order_status="prepairing" orders_quantity={3}>
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"card"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Гамбургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
              ]}
              order_actions={"end"}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"card"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Big Gamburder",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                { name: "Пепси 0.5", quantity: 4, extras: null },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"card"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Гамбургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
              ]}
            />
          </OrderColumn>
          <OrderColumn order_status="ready" orders_quantity={4}>
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"cash"}
              order_time={"15:22"}
              order_type={"courier"}
              order_details={[
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"cash"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Big Gamburder",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                { name: "Пепси 0.5", quantity: 4, extras: null },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
                {
                  name: "Дабл Бургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
              ]}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"cash"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
            />
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"cash"}
              order_time={"15:22"}
              order_type={"courier"}
              order_details={[
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
              ]}
              order_actions={"end"}
            />
          </OrderColumn>
          <OrderColumn order_status="delivering" orders_quantity={1}>
            <OrderModal
              order_id={321545}
              price={"300 560 сум"}
              payment={"click"}
              order_time={"15:22"}
              order_type={"dine-in"}
              order_details={[
                {
                  name: "Big Gamburder",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
                { name: "Пепси 0.5", quantity: 4, extras: null },
                {
                  name: "Лаваш мясной Standart острый",
                  quantity: 2,
                  extras: null,
                },
                {
                  name: "Дабл Бургер",
                  quantity: 1,
                  extras: "С сыром,Без лука",
                },
              ]}
            />
          </OrderColumn>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
