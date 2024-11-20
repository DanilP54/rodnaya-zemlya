import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import styled from "styled-components";
import { MenuNotification } from "./notification.jsx";

const links = [
  {
    name: "Фильмы",
    url: "movie",
  },
  {
    name: "Музыка",
    url: "music",
  },
  {
    name: "Живопись",
    url: "arts",
  },
  {
    name: "Литература",
    url: "literature",
  },
];


const buttonsList = [
  {
    id: 1,
    color: "#CD5C5C",
    name: "red",
    // hover: '#d67070',
    isActive: false,
    isNotification: false,
    isVisible: false,
    textForNotification:
      "На красном банере, мы подобрали работы авторов, делающих акцент на человеческих инстинктах, где ищется смысл через желание и самоуничтожение. Здесь вы найдете насилие, похоть, нигилизм,черный юмор и тому подобное.",
    isSelected: false,
    menu: [
      {
        name: "Фильмы",
        path: "/app/red-movie",
      },
      {
        name: "Музыка",
        path: "/app/red-music",
      },
      {
        name: "Живопись",
        path: "/app/red-art",
      },
      {
        name: "Литература",
        path: "/app/red-literature",
      },
    ],
  },
  {
    id: 2,
    color: "#00FA9A",
    // hover: '#38fcb1',
    name: "green",
    isActive: false,
    isSelected: false,
    isVisible: false,
    isNotification: false,
    textForNotification:
      "На зелёном баннере, мы собрали сбалансированную коллекцию произведений, где авторы грамотно и умело совмешают в себе направление и идеи, выражая, таким образом, сложные или противоречивые мысли , доступно и ёмко. Здесь Вы найдёте внежанровую музыку и фильмы, эксперементальную живопись и тому подобное.",
    menu: [
      {
        name: "Фильмы",
        path: "/app/green-movie",
      },
      {
        name: "Музыка",
        path: "/app/green-music",
      },
      {
        name: "Живопись",
        path: "/app/green-art",
      },
      {
        name: "Литература",
        path: "/app/green-literature",
      },
    ],
  },
  {
    id: 3,
    color: "#00CED1",
    isActive: false,
    // hover: '#18e1e4',
    name: "turquoise",
    isVisible: false,
    isNotification: false,
    textForNotification:
      "На синнем баннере - наша коллекция образовательных, интеллектульных и интеллегентных работ авторов, нашедших свой смысл и жизненный путь в возвышенном, научном и созидательном. \n\nЗдесь, Вы найдете оперы, документалки, образовательные лекции, и тому подобное.",
    isSelected: false,
    menu: [
      {
        name: "Фильмы",
        path: "/app/turquoise-movie",
      },
      {
        name: "Музыка",
        path: "/app/turquoise-music",
      },
      {
        name: "Живопись",
        path: "/app/turquoise-art",
      },
      {
        name: "Литература",
        path: "/app/turquoise-literature",
      },
    ],
  },
];

let commonNotification = {
  status: false,
  color: null,
  text: null,
};

const ButtonStyled = styled.button`
  cursor: pointer;
  height: 40px;
  width: 128px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

const StyledNavLink = styled(NavLink)`
  border-radius: 20px;
  display: flex;
  padding: 2px 15px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? "black" : "white")};
  background-color: ${(props) => (props.$isActive ? "white" : "transparent")};

  &:hover {
    color: ${(props) => (props.$isActive ? "black" : "white")};
    background-color: ${(props) =>
      props.$isActive ? "white" : "rgba(0, 0, 0, 0.2)"};
  }

  /* &: {
      color: white; // Сохраняет цвет для посещенных ссылок
  } */
`;

export function NavigationMenu() {
  const [notification, setNotification] = useState({
    ...commonNotification,
    status: !localStorage.getItem("allVisible"),
  });
  console.log(notification)
  console.log(commonNotification)
  const [buttons, setButtons] = useState(buttonsList);
  
  const location = useLocation();
  
  const [buttonIsSelected, setButtonsSelected] = useState(false);
  console.log(buttonIsSelected)

  useEffect(() => {

    buttons.forEach((button) => {
      if (button.isSelected && !button.isVisible) {
        button.isVisible = true;
        commonNotification = {
          status: !localStorage.getItem("allVisible"),
          color: button.name,
          text: button.textForNotification,
        };
        setNotification(commonNotification);
      }
    });

    const allIsVisible = buttons.every((button) => button.isVisible);

    if (allIsVisible) {
      localStorage.setItem("allVisible", "true");
    }

    return () => {
        // if(!buttonIsSelected) {
        //     commonNotification = {
        //         status: false,
        //         color: null,
        //         text: null
        //     }
          
        // }
    }
  }, [buttons]);

  useLayoutEffect(() => {

    buttons.forEach((button) => {
      button.menu.forEach((link) => {
        if (link.path === location.pathname) {
          button.isSelected = true;
          button.isActive = true;
          setButtonsSelected(true);
          setButtons((s) => [...s]);
        }
      });
    });


    return () => {
      buttons.forEach((button) => {
        button.isSelected = false;
        button.isActive = false;
        setButtonsSelected(false);
        setButtons((s) => [...s]);
      });
    };
  }, []);

  const handleButtonClick = (index) => {
    buttons.forEach((button) => {
      if (button.id !== index && !button.isSelected) {
        button.isActive = false;
      }

      if (button.id === index && !button.isSelected) {
        button.isActive = !button.isActive;
      }
    });

    setButtons((s) => [...s]);
  };

  const handleSelectButtonNav = (index, event) => {
    buttons.forEach((button) => {
      if (button.id !== index) {
        button.isSelected = false;
        button.isActive = false;
      }

      // if(button.id.name === button[index].name && !button.isVisible) {
      //     button.isVisible = true
      //     commonNotification = {
      //         status: true,
      //         color: button.name,
      //         text: button.textForNotification
      //     }
      // }

      if (button.id === index) {
        if (!button.isNotification && !button.isVisible) {
          button.isVisible = true;
          commonNotification = {
            status: true,
            color: button.name,
            text: button.textForNotification,
          };
        } else {
          commonNotification = {
            ...commonNotification,
            color: button.name,
            text: button.textForNotification,
          };
        }

        button.isSelected = true;
      }
    });
    setNotification(commonNotification);
    setButtons((s) => [...s]);
    setButtonsSelected(true);
  };

  const changeCommonNotification = (s) => {

    commonNotification = {
      ...notification,
      status: s,
    };
    setNotification({
      ...notification,
      status: s,
    });
  };

  return (
    <div
      style={{
        marginTop: notification.status ? "60px" : "40px",
        transition: "margin-top 0.3s",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {buttons.map((button) => {
          return (
            <div
              id={"nav"}
              key={button.id}
              style={{
                display: "flex",
                width: "100%",
                order: `${button.isSelected ? "1" : "0"} `,
              }}
            >
              <ButtonStyled
                onClick={() => handleButtonClick(button.id)}
                type="button"
                color={button.color}
                buttonIsSelected={buttonIsSelected}
                hover={button.hover}
              ></ButtonStyled>

              {button.isActive && (
                <nav
                  style={{
                    display: "flex",
                    width: "calc(100% - 128px)",
                    backgroundColor: button.color,
                  }}
                >
                  <ul
                    id="link_list"
                    style={{
                      display: "flex",
                      padding: "0 80px",
                      gap: "100px",
                      // alignItems: 'center',
                      // width: '100%'
                    }}
                  >
                    {button.menu.map((link, index) => {
                      return (
                        <li
                          key={index}
                          style={{
                            listStyle: "none",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <StyledNavLink
                            to={link.path}
                            onClick={(e) => handleSelectButtonNav(button.id, e)}
                            $isActive={location.pathname === link.path}
                          >
                            {link.name}
                          </StyledNavLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
          );
        })}
      </div>
      <MenuNotification
        open={notification}
        setOpen={changeCommonNotification}
      />
    </div>
  );
}
