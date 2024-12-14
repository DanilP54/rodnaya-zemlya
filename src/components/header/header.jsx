import style from "./header.module.css";
import WhiteLogo from "../../../public/logo/rz_white.png";
import BlackLogo from "../../../public/logo/rz_black_cut.png";
import { Newspaper, NewspaperIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "@mantine/core";
import { useThemeContext } from "../../context/ThemeContext";
import { useEffect } from "react";
import SearchInput from "./SearchInput";
import AuthButtons from "./AuthButtons";

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

export function ThemeButton() {
  const { theme, setTheme } = useThemeContext();

  const changeTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const body = document.body;

    if (theme === "light") {
      body.classList.remove("dark__theme");
      body.classList.add("light__theme");
    } else {
      body.classList.remove("light__theme");
      body.classList.add("dark__theme");
    }
  }, [theme]);

  return (
    <>
      <Tooltip label={`${theme === "dark" ? "light" : "dark"} theme`}>
        <div
          onClick={changeTheme}
          style={{
            width: "10px",
            aspectRatio: 1,
            backgroundColor: theme === "dark" ? "white" : "black",
            cursor: "pointer",
          }}
        ></div>
      </Tooltip>
    </>
  );
}

export function Header({ page, radio = false, handleClearAudio = null }) {
  const { theme } = useThemeContext();

  const light = theme === "light";

  return (
    <div className={style.header_wrapper}>
      <header className={style.header}>
        <div>
          <Link to="/">
            <img
              src={
                radio ? BlackLogo : theme === "light" ? BlackLogo : WhiteLogo
              }
              alt="logo"
              className={style.logo}
            />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4rem",
            height: "min-content",
          }}
        >
          {!page && (
            <div
              className={style.global_link}
              style={{
                position: "absolute",
                top: "70px",
                right: "58px",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",

                gap: "6px",
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
                  <WebSiteIcon color={theme === "light" ? "black" : "white"} />
                  <span
                    style={{
                      fontWeight: "400",
                      color: theme === "light" ? "black" : "white",
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
                  color: theme === "light" ? "black" : "white",
                  // backgroundColor: 'rgba(0,0,0, .1)'
                }}
                to={page === "radio" ? "/app" : "/radio"}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "15px",
                  }}
                >
                  {page === "radio" ? (
                    <NewspaperIcon
                      size={20}
                      color={theme === "light" ? "black" : "white"}
                    />
                  ) : (
                    <TvIcon color={theme === "light" ? "black" : "white"} />
                  )}

                  <span
                    style={{
                      color: theme === "light" ? "black" : "white",
                      fontWeight: "400",
                      fontSize: "15px",
                    }}
                  >
                    {page === "radio" ? "рз" : "рз радио"}
                  </span>
                </div>
              </Link>
            </div>
          )}
          <ThemeButton />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <ul style={{
              color: radio ? 'black' : 'inherit' 
            }} className={style.lang_list}>
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

          <SearchInput radio={radio} />

          <AuthButtons radio={radio} />
        </div>
        {/* </div> */}
      </header>
    </div>
  );
}
