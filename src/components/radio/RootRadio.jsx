import { Header } from "../header/header";
import { PodcastBlock } from "./player-radio/PodcastBlock";
import { useState } from "react";
import { Flex } from "@mantine/core";
import { Card,  Text, Group, Badge } from "@mantine/core";

export default function RootRadio() {
  const [tracks, setTracks] = useState(null);
  const [name, setName] = useState(null);

  const handleSetTracks = (data, name) => {
    setTracks(data);
    setName(name)
  };


  return (
    <>
      <div
        id="radio"
        style={{
          height: "100vh",
        }}
      >
        <Header page={"radio"} radio={!!tracks} />
        <PodcastBlock handleSetTracks={handleSetTracks} radio={!!tracks} />
      </div>
      {
        tracks && (
          <div
          style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
          minHeight: "500px",
          borderRadius: '1px solid red'
        }}
      >
        <div style={{
          marginTop: '30px',
        }}>
          <h2>{`Плейлист подкаста "${name}"`}</h2>
        </div>
      
          <Flex
            mt={50}
            mih={50}
            gap="md"
            justify="start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            {tracks.map((track) => {
              return (
                <Card
                bd={'none'}
                  w={'250px'}
                  bg={"transparent"}
                  shadow="sm"
                  padding="lg"
                  radius="xs"
                  withBorder
                >
                  <Card.Section>
                    <div
                      style={{
                        width: '100%',
                        height: "160px",
                        backgroundColor: "gray",
                      }}
                    ></div>
                  </Card.Section>

                  <Group mt="xs">
                    <Text fw={500}>{track.title}</Text>
                  </Group>
                  <Group mt="xs">
                    <Text c={"dimmed"} fw={500}>
                      {track.artist}
                    </Text>
                  </Group>

                  <Group >
                    <Text c={"dimmed"} fw={500}>
                      2024
                    </Text>
                  </Group>

                  {/* <Button color="blue" fullWidth mt="md" radius="md">
                    Book classic tour now
                  </Button> */}
                </Card>
              );
            })}
          </Flex>
      
      </div>
        )
      }
      
    </>
  );
}
