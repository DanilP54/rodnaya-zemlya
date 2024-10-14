import AuthButtons from "../../header/AuthButtons";
import { Input } from "@mantine/core";
import { MenuNews } from "./MenuNews";
import TabsComponents from "./tabs/Tabs";
import classes from './root.module.css';
import { useThemeContext } from "../../../context/ThemeContext";
import { useLayoutEffect, useState } from "react";
import PostDetails from "./post/PostDetails";


function IconAt() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}

export default function RootNews() {

    const { theme } = useThemeContext()

    const [tabs, setTabs] = useState(true)
    console.log(theme)
    return (
        <>
            <div className={classes.wrap_news}>
                <div className={classes.menu_box}>
                    <MenuNews />
                </div>
                <div style={{
                    flex: '1 1 0',
                    overflow: 'auto'
                }}>
                    {
                        tabs ? <TabsComponents setTabs={setTabs} /> : <PostDetails setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Eliza'} />
                    }
                </div>
                <div style={{
                    width: '460px',
                    borderLeft: '1px solid rgba(0,0,0, .2)',
                    height: '100%'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '10px'
                    }}>

                        <div style={{
                            width: '200px',
                            backgroundColor: '#333',
                            overflow: 'hidden',
                            borderRadius: '5px'
                        }}>
                            <Input style={{

                            }} variant='unstyled' color="blue" bg={'#333'} leftSection={<IconAt size={16} />} placeholder="Поиск" />
                        </div>
                        <div style={{
                            color: 'white'
                        }}>
                            <AuthButtons />
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}