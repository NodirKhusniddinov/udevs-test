import { useState } from "react";
import {
  BiPieChart,
  BiSolidBellRing,
  BiSolidDollarCircle,
} from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdInsertChart, MdPeople, MdPersonAddAlt1 } from "react-icons/md";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <div className="flex max-w-[900px]">
      <div className="w-14 border-r  border-[rgba(229,233,235,1)] h-screen flex flex-col items-center ">
        <div className="h-14 w-14 p-3 border-b  border-[rgba(229,233,235,1)] ">
          <img src="assets/logo.svg" alt="Logo" className="w-8 h-8 mb-8" />
        </div>
        <div className="flex flex-col items-center py-6 space-y-6">
          <button
            onClick={() => toggleMenu("recruitment")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "recruitment"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <MdPersonAddAlt1 className="w-6 h-6 " />
          </button>

          <button
            onClick={() => toggleMenu("teams")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "teams"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <MdPeople className="w-6 h-6 " />
          </button>
          <button
            onClick={() => toggleMenu("reports")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "reports"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <MdInsertChart className="w-6 h-6 " />
          </button>
          <button
            onClick={() => toggleMenu("analytics")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "analytics"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <BiPieChart className="w-6 h-6 " />
          </button>
          <button
            onClick={() => toggleMenu("salary")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "salary"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <BiSolidDollarCircle className="w-6 h-6 " />
          </button>
        </div>
        <div className="absolute bottom-[0] flex flex-col items-center space-y-6">
          <button
            onClick={() => toggleMenu("settings")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "settings"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <IoSettingsSharp className="w-6 h-6 " />
          </button>
          <button
            onClick={() => toggleMenu("notifications")}
            className={`w-9 h-9 p-2 flex items-center ${
              activeMenu === "notifications"
                ? "bg-[rgba(14,_115,_246,_1)] text-white"
                : "text-[rgba(110,_139,_183,_1)]"
            } ] rounded-[6px] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]`}
          >
            <BiSolidBellRing className="w-6 h-6 " />
          </button>

          <div className="h-14 w-14 p-3   border-[rgba(229,233,235,1)] border-t">
            <img
              src="assets/profile_img.svg"
              alt="Profile"
              className="w-8 h-8 mb-8 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className="w-60 bg-white shadow-lg h-screen ">
          <div>
            {activeMenu === "recruitment" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    РЕКРУТИНГ
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4 px-4 text-[14px] font-medium ">
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)] cursor-pointer">
                    Процесс подбора
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Ожидаемая зарплата
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Воронка подбора
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Источник подбора
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Причины отклонения
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Средний возраст
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Поток кандидатов
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Причины отклонения
                  </li>
                  <li className="h-9 w-full p-3 rounded-[6px] text-[rgba(110,_139,_183,_1)] hover:text-white hover:bg-[rgba(14,_115,_246,_1)]  cursor-pointer">
                    Отчеты рекрутера
                  </li>
                </ul>
              </>
            )}
            {activeMenu === "teams" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    Команды
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4">
                  <li>Team Overview</li>
                  <li>Team Performance</li>
                </ul>
              </>
            )}
            {activeMenu === "reports" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    Отчеты
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4">
                  <li>Monthly Report</li>
                  <li>Recruiter Reports</li>
                </ul>
              </>
            )}
            {activeMenu === "analytics" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    Аналитика
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4">
                  <li>Insights</li>
                  <li>Trends</li>
                </ul>
              </>
            )}
            {activeMenu === "salary" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    Зарплата
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4">
                  <li>Expected Salary</li>
                  <li>Median Salary</li>
                </ul>
              </>
            )}
            {activeMenu === "settings" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    Настройки
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4">
                  <li>General Settings</li>
                  <li>Account Settings</li>
                </ul>
              </>
            )}
            {activeMenu === "notifications" && (
              <>
                <div className="w-full h-14 border-b  flex  justify-between  items-center p-4">
                  <h1 className="text-[16px] font-bold text-[rgba(26,_32,_36,_1)] ">
                    Уведомления
                  </h1>
                  <button
                    className="p-2 w-8 h-8 bg-[rgba(110,_139,_183,_0.12)] rounded-[6px] "
                    onClick={() => setActiveMenu(null)}
                  >
                    <img src="assets/arrows.svg" alt="arrows" />
                  </button>
                </div>
                <ul className="mt-4">
                  <li>No Notifications</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
