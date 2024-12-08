import { ImYelp } from "react-icons/im";
import { useThemeContext } from "../../context/ThemeContext";
import { Tooltip } from "@mantine/core";
import { PRIMARY_GREEN, PRIMARY_RED, PRIMARY_TURQUOISE } from "../../constants";
import classes from './notification.module.css';

const getColor = (color) => {
  const colors = {
    red: PRIMARY_RED,
    green: PRIMARY_GREEN,
    turquoise: PRIMARY_TURQUOISE,
  };

  return colors[color];
};

export const MenuNotification = ({ open, setOpen }) => {
  const { theme } = useThemeContext();

  return (
    <>
      <div
        className={`${classes.wrap}`}
        style={{
          backgroundColor: theme === "dark" ? "#000000" : "rgb(238, 237, 237)",
          top: open.status ? "10px" : "-300px",
          // border: `1px solid ${open.color
          //   ? getColor(open.color)
          //   : theme === "dark"
          //     ? "white"
          //     : "black"
          //   }`,
          border: `1px solid #333`
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "5px",
            cursor: "pointer",
            // color: open.color
            //   ? open.color
            //   : theme === "dark"
            //     ? "white"
            //     : "black",

            color: theme === "dark" ? "#ffffffc9" : "#000",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          onClick={() => setOpen(false)}
        >
          &times;
        </div>
        <div
          style={{
            // width: '200px',
            textAlign: 'center',
            color: theme === "dark" ? "rgb(227, 227, 227)" : "black",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          {open.text ??
            "Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Выберите один из них - узнайте больше."}
        </div>
        {open.color && (
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "360px",
              marginLeft: "-15px",
              width: "0",
              height: "0",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: `10px solid ${theme === "dark" ? "#989797dd" : "#000000"}`,
            }}
          ></div>
        )}
      </div>
      <Tooltip label="О чем этот цвет?" position="right" offset={20} openDelay={700}>
        <div
          style={{
            position: "absolute",
            display: open.status ? "none" : "block",
            top: "23px",
            left: "180px",
          }}
        >
          <ImYelp
            color={
              open.color
                ? getColor(open.color)
                : theme === "dark"
                  ? "white"
                  : "black"
            }
            style={{
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
            size={25}
          />
        </div>
      </Tooltip>
    </>
  );
};
