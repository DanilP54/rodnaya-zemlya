import { useState } from "react";
import { NavButton } from "./buttons/nav.button";
import style from './navigation.module.css';
import { Menu } from '@mantine/core';
import { Button } from "@mantine/core";

export function NavigationBox() {

    return (
        <div style={{
            marginTop: '40px'
        }}>
            <div>
                <Menu styles={{
                    padding: '0px',
                    margin: '0px',
                    border: 'none',
                }} radius={0} position="right-start" offset={0} shadow="none" width={200}>
                    <Menu.Target>
                        <Button style={{
                            height: '50px',
                            width: '250px',
                            // border: '1px solid black',
                            // borderLeft: '8px solid black',
                            margin: '0px',
                            padding: '0px',
                            backgroundColor: 'hsla(0, 100%, 50%, 0.5)'
                        }} radius={0}></Button>
                    </Menu.Target>

                    <Menu.Dropdown style={{
                        display: 'flex',
                        width: 'calc(100% - 250px)',
                        padding: '0px',
                        height: '50px',
                        // border: '.6px solid black',
                        // borderRight: '8px solid black',
                        margin: '0px',
                        backgroundColor: 'hsla(0, 100%, 50%, 0.5)'
                    }}>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                '&:hover': {
                                    backgroundColor: 'none'
                                }
                            }}>
                                Фильмы
                            </Menu.Item >
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Музыка
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Живопись
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Игры
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Литература
                            </Menu.Item>

                      
                    </Menu.Dropdown>
                </Menu>
            </div >
            <div>
                <Menu radius={0} position="right-start" offset={0} width={200}>
                    <Menu.Target>
                        <Button style={{
                            height: '50px',
                            width: '250px',
                            // marginTop: '5px',
                            backgroundColor: 'hsl(248, 53%, 58%)',
                            // border: '6px solid black',
                            // backgroundColor: 'hsl(248, 53%, 58%)'
                        }} radius={0}></Button>
                    </Menu.Target>
                    <Menu.Dropdown style={{
                        display: 'flex',
                        width: 'calc(100% - 250px)',
                        padding: '0px',
                        // border: '2px solid black',
                        height: '50px',
                        backgroundColor: 'hsl(248, 53%, 58%)'
                    }}>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Фильмы
                            </Menu.Item >
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Музыка
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Живопись
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Игры
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Литература
                            </Menu.Item>

                      
                    </Menu.Dropdown>
                </Menu>
            </div>
            <div>
                <Menu radius={0} position="right-start" offset={0} width={200}>
                    <Menu.Target>
                        <Button style={{
                            height: '50px',
                            // border: '6px solid black',
                            width: '250px',
                            // marginTop: '5px',
                            backgroundColor: 'hsla(196, 49%, 48%, 0.7)'
                        }} radius={0} color="cyan"></Button>
                    </Menu.Target>
                    <Menu.Dropdown style={{
                        display: 'flex',
                        width: 'calc(100% - 250px)',
                        padding: '0px',
                        // border: '2px solid black',
                        height: '50px',
                        backgroundColor: 'hsla(196, 49%, 48%, 0.7)'
                    }}>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Фильмы
                            </Menu.Item >
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Музыка
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Живопись
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Игры
                            </Menu.Item>
                            <Menu.Item style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}>
                                Литература
                            </Menu.Item>

                      
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div >
    )
}