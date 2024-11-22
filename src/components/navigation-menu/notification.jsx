import React, { useState } from "react";
import { ImYelp } from "react-icons/im";
import { useThemeContext } from "../../context/ThemeContext";
import { Tooltip } from "@mantine/core";

const getColor = (color) => {
  const colors = {
    red: "#CD5C5C",
    green: "#00FA9A",
    turquoise: "#00CED1",
  };

  return colors[color];
};

export const MenuNotification = ({ open, setOpen }) => {
  const { theme } = useThemeContext();

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "999",
          top: open.status ? "10px" : "-300px",
          left: "160px",
          transition: "all 0.4s",
          borderRadius: "5px",
          border: `1px solid ${
            open.color
              ? getColor(open.color)
              : theme === "dark"
              ? "white"
              : "black"
          }`,
          color: "#fff",
          padding: "10px",
          width: "380px",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-17px",
            right: "-30px",
            cursor: "pointer",
            color: open.color
              ? open.color
              : theme === "dark"
              ? "white"
              : "black",
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
            color: theme === "dark" ? "white" : "black",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          {open.text ??
            "Нажав на один из разноцветных баннеров, смотрите, слушайте и читайте подобранные нами произведения искусства, под ваше состояние. Нажмите на один из них-узнайте больше."}
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
              borderTop: `10px solid ${getColor(open.color)}`,
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