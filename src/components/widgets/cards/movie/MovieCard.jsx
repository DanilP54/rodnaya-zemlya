import { Card, Image, Text } from "@mantine/core";
import classes from "./secondary.image.module.css";
import { Link } from "react-router-dom";
import PlayIcon from "../../../../../public/play.svg";
import styled from "styled-components";
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

export function MovieCard({
  src,
  title,
  nameRu,
  subtitle,
  handle,
  id,
  category,
  newsVariant,
}) {
  const { theme } = useThemeContext();

  if (newsVariant) {
    return (
      <Card
        w={"139px"}
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
              loading="lazy"
              style={{
                // backgroundColor: "black",
                padding: "7px",
              }}
              onClick={handle}
              className={classes.play_icon}
              src={PlayIcon}
              alt="play icon"
            />
          </div>
        </Card.Section>

        <Card.Section mt={"xs"}>
          <Link
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            to={`/app/${category}/m/${id}`}
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
            to={`/app/${category}/m/${id}`}
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
              alt="No way!"
            />
            <img
              loading="lazy"
              style={{
                backgroundColor: "black",
                padding: "7px",
              }}
              onClick={handle}
              className={classes.play_icon}
              src={PlayIcon}
              alt="play icon"
            />
          </div>
        </Card.Section>

        <LinkStyled
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
          to={`/app/${category}/m/${id}`}
        >
          {nameRu}
        </LinkStyled>

        <Text mt={"xs"} size="sm" c="dimmed">
          {title}
        </Text>
      </Card>
    </>
  );
}
