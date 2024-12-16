import { Card, Image, Text } from "@mantine/core";
import classes from "./secondary.image.module.css";
import { Link } from "react-router-dom";

import PausedIcon from "../../../../../public/paused.svg";
import PlayIcon from "../../../../../public/play.svg";
import styled from "styled-components";
import { usePlayerContext } from "../../../../context/usePlayerContext";
import { useThemeContext } from "../../../../context/ThemeContext";

const LinkStyled = styled(Link)`
  width: 200px;
  padding: 0;
  font-weight: 500;
  color: black;
  margin-top: 14px;

  &:hover {
    color: gray;
  }
`;

export function MusicCard({
  src,
  title,
  subtitle,
  band,
  isPlay,
  handle,
  id,
  category,
  newsVariant,
}) {
  const { isPlayPlayer, isOpen } = usePlayerContext();

  const { theme } = useThemeContext();

  if (newsVariant) {
    return (
      <Card
        w={"174px"}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Card.Section>
          <div className={classes.image_box}>
            <div
              style={{
                height: "120px",
                marginTop: "10px",
                backgroundColor: "rgba(0,0,0, .3)",
                borderRadius: "10px",
              }}
            ></div>
            <img
              style={{
                backgroundColor: "transparent",
                padding: "7px",
              }}
              onClick={handle}
              className={isPlay ? classes.paused_icon : classes.play_icon}
              src={isPlay ? PausedIcon : PlayIcon}
              alt="play icon"
            />
          </div>
        </Card.Section>

        <Card.Section mt={"xs"}>
          <Link
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            to={`/app/${category}/a/${id}`}
          >
            <Text mt={"xs"} size="sm" c="dimmed">
              <div
                style={{
                  height: "10px",
                  backgroundColor: "rgba(0,0,0, .3)",
                  borderRadius: "10px",
                }}
              ></div>
            </Text>
          </Link>
          <Link
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            to={`/app/${category}/a/${id}`}
          >
            <Text mt={"xs"} size="sm" c="dimmed">
              <div
                style={{
                  width: "80px",
                  height: "10px",
                  backgroundColor: "rgba(0,0,0, .3)",
                  borderRadius: "10px",
                }}
              ></div>
            </Text>
          </Link>
        </Card.Section>
      </Card>
    );
  }

  return (
    <>
      <Card
        w="232px"
        padding=""
        radius=""
        href="#"
        target="_blank"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Card.Section>
          <div className={classes.image_box}>
            <Image
              onClick={handle}
              loading="lazy"
              src={src}
              h={200}
              alt="image"
            />
            <img
              style={{
                backgroundColor: "black",
                padding: "7px",
              }}
              onClick={handle}
              className={isPlay ? classes.paused_icon : classes.play_icon}
              src={isPlay ? PausedIcon : PlayIcon}
              alt="play icon"
            />
          </div>
        </Card.Section>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <LinkStyled
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            to={`/app/${category}/a/${id}`}
          >
            {title}
          </LinkStyled>

          <Text mt={"xs"} size="sm" c="dimmed">
            {band}
          </Text>
        </div>
      </Card>
    </>
  );
}
