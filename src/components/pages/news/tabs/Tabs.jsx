import { Tabs, Text } from '@mantine/core';

import Post from '../post/Post';
import AuthButtons from '../../../header/AuthButtons';
export default function TabsComponents() {


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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
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
                    backgroundColor: 'rgba(0,0,0, .2)',
                    padding: '20px',
                    borderRadius: '5px'
                }}>
                    <Text fw={500} size='lg' c={'cyan'}  >Хочешь мутить тут делишки свои?</Text>
                    <Text fw={500} size='md' c={'indigo'}  >Тогда тебе надо зарегаться, братик, такие условия.</Text>
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