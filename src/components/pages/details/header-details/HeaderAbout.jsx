import style from "./header.module.css";
import { Link } from "react-router-dom";
import WhiteLogo from "../../../../../public/logo/rz_white.png";
// import BlackLogo from '../../../../../public/logo/rz_black_cut.png'

import { Spotlight, spotlight } from "@mantine/spotlight";
import { ThemeButton } from "../../../header/header";
import SearchInput from "../../../header/SearchInput";

function WebSiteIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chart-no-axes-gantt"
    >
      <path d="M8 6h10" />
      <path d="M6 12h9" />
      <path d="M11 18h7" />
    </svg>
  );
}
function TvIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-radio"
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
    </svg>
  );
}

function IconSearch({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2.7"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-search"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
}
export function HeaderDetails({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={style.header_wrapper}
    >
      <header className={style.header}>
        <div>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            to="#"
          >
            <img src={WhiteLogo} alt="" className={style.logo} />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Link
            style={{
              color: "black",
            }}
            to="/news"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <WebSiteIcon color={"white"} />
              <span
                style={{
                  fontWeight: "500",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                лента
              </span>
            </div>
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              // backgroundColor: 'rgba(0,0,0, .1)'
            }}
            to="#"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <TvIcon color={"white"} />
              <span
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                рз радио
              </span>
            </div>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <ThemeButton />
          <div>
            <ul className={style.lang_list}>
              <li className={style.list_item}>
                <a href="#" className={style.lang_link}>
                  eng
                </a>
              </li>
              <li className={style.list_item}>
                <a href="#" className={style.lang_link}>
                  ro
                </a>
              </li>
              <li className={style.list_item}>
                <a href="#" className={style.lang_link}>
                  ru
                </a>
              </li>
              <li className={style.list_item}>
                <a href="#" className={style.lang_link}>
                  ua
                </a>
              </li>
            </ul>
          </div>

            <SearchInput />
        
        </div>
      </header>
    </div>
  );
}
