import AuthButtons from "../../header/AuthButtons";
import { Input } from "@mantine/core";
import { MenuNews } from "./MenuNews";
import TabsComponents from "./tabs/Tabs";
import classes from "./root.module.css";
import { useThemeContext } from "../../../context/ThemeContext";
import PostDetails from "./post/PostDetails";
import { useState } from "react";
import { UpdatesAccardion } from "./updates/accardion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchInput from "../../header/SearchInput";

function IconAt() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
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

export default function RootNews() {
  const { theme } = useThemeContext();

  const [tabs, setTabs] = useState(true);

  return (
    <>
      <div
        style={{
          transition: "background-color .4s ease",
          backgroundColor:
            theme === "light" ? "hsl(48, 89%, 95%)" : "hsl(210, 29%, 29%)",
        }}
        className={classes.wrap_news}
      >
        <div className={classes.menu_box}>
          <MenuNews />
        </div>
        <div
          style={{
            flex: "1 1 0",
            overflow: "auto",
          }}
        >
          {tabs ? (
            <TabsComponents setTabs={setTabs} />
          ) : (
            <PostDetails
              setTabs={setTabs}
              src={"https://api.dicebear.com/9.x/dylan/svg?seed=Eliza"}
            />
          )}
        </div>
        <div
          style={{
            width: "380px",
            borderLeft: "1px solid rgba(0,0,0, .2)",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "5px",
                paddingRight: '5px',
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
                <SearchInput width={"200px"} />
              <div
                style={{
                  color: "inherit",
                }}
              >
                <AuthButtons />
              </div>
            </div>
            <UpdatesAccardion />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
