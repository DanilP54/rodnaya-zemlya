import AuthButtons from "../../header/AuthButtons";
import { Input } from "@mantine/core";
import { MenuNews } from "./MenuNews";
import TabsComponents from "./tabs/Tabs";


function IconAt() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
}

export default function RootNews() {
    return (
        <>
            <div style={{
                display: 'flex',
                height: '100%',
                backgroundColor: 'rgba(4, 56, 86, 0.438)'
            }}>
                <div style={{
                    width: '460px',
                    height: '100%',
                    borderRight: '1px solid rgba(0,0,0, .2)',
                    padding: '20px'
                }}>
                    <MenuNews />
                </div>
                <div style={{
                    flex: '1 1 0'
                }}>
                    <TabsComponents />
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
                            backgroundColor: '#333'
                        }}>
                            <Input variant='unstyled' color="blue" bg={'#333'} leftSection={<IconAt size={16} />} placeholder="Поиск" />
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