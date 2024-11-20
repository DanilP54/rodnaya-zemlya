import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export const CardAccordionMusic = () => {
  return (
    <Card
      w={"170px"}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Card.Section>
        <div
          style={{
            height: "120px",
            marginTop: "10px",
            backgroundColor: "rgba(0,0,0, .3)",
            borderRadius: "10px",
          }}
        ></div>
      </Card.Section>

      <Card.Section mt={'xs'}>
        <Text mt={'xs'} size="sm" c="dimmed">
          <div
            style={{
              height: "10px",
              backgroundColor: "rgba(0,0,0, .3)",
              borderRadius: "10px",
            }}
          ></div>
        </Text>
        <Text mt={'xs'} size="sm" c="dimmed">
          <div
            style={{
              width: '80px',
              height: "10px",
              backgroundColor: "rgba(0,0,0, .3)",
              borderRadius: "10px",
            }}
          ></div>
        </Text>
        </Card.Section>
    </Card>
  );
};
