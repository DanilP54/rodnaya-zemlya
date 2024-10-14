import { Tabs, Text } from '@mantine/core';

import Post from '../post/Post';
import AuthButtons from '../../../header/AuthButtons';
export default function TabsComponents({ setTabs }) {


    return (
        <Tabs h={'100%'} defaultValue="our news">
            <Tabs.List h={'60px'} style={{
                backgroundColor: 'transparent'
            }}>
                <Tabs.Tab value="our news" style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    color: 'white',
                    backgroundColor: 'transparent'
                }} >
                    Наша лента
                </Tabs.Tab>
                <Tabs.Tab value="your news" style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    color: 'white',
                    backgroundColor: 'transparent'
                }}  >
                    Ваша лента
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel style={{
                height: 'calc(100vh - 60px)',
                overflow: 'auto',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }} value="our news">
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Eliza'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Christian'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Destiny'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/identicon/svg?seed=George'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/miniavs/svg?seed=Christian'} />
            </Tabs.Panel>

            <Tabs.Panel style={{
                height: 'calc(100vh - 60px)',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} value="your news">
                <div style={{
                    color: 'white',
                    boxShadow: '0 0 3px 5px rgba(0,0,0, .2)',
                    backgroundColor: 'rgba(0,0,0, .2)',
                    padding: '20px',
                    borderRadius: '5px'
                }}>
                    <Text fw={500} size='lg' c={'cyan'}  >Хочешь мутить тут делишки свои?</Text>
                    <Text fw={500} size='md' c={'lime'}  >Тогда тебе надо зарегаться, братик, такие условия.</Text>
                    <div style={{
                        marginTop: '10px',
                    }}>

                        <AuthButtons />
                    </div>
                </div>
            </Tabs.Panel>
        </Tabs>
    );
}