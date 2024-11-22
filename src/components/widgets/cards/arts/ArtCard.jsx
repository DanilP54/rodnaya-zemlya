import { Card, Image, Text } from "@mantine/core";
import classes from "./secondary.image.module.css";
import { Link } from "react-router-dom";
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

export function ArtCard({ src, title, subtitle, id, category, newsVariant }) {
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
        <Link to={`/app/${category}/art/${id}`}>
          <div className={classes.image_box}>
            <div
              style={{
                height: "120px",
                marginTop: "10px",
                backgroundColor: "rgba(0,0,0, .3)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
          </Link>
        </Card.Section>

        <Card.Section mt={"xs"}>
          <Link
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            to={`/app/${category}/art/${id}`}
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
            to={`/app/${category}/art/${id}`}
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
            <Link to={`/app/${category}/art/${id}`}>
              <Image loading="lazy" src={src} h={200} alt="No way!" />
            </Link>
          </div>
        </Card.Section>
        <div
          style={{
            height: "100%",
            gap: "3px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <LinkStyled
            style={{
              color: theme === "light" ? "black" : "white",
            }}
            to={`/app/${category}/art/${id}`}
          >
            {title}
          </LinkStyled>

          <Text size="sm" c="dimmed">
            {subtitle}
          </Text>
        </div>
      </Card>
    </>
  );
}
