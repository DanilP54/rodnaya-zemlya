import { Tabs, Text } from '@mantine/core';
import styles from './tabs.module.css'; // Подключаем CSS модуль

import Post from '../post/Post';
export default function TabsComponents({ setTabs }) {

    return (
        <Tabs h={'100%'} defaultValue="our news">
            <Tabs.List h={'60px'} className={styles.tabsList}> {/* Применяем класс из CSS модуля */}
                <Tabs.Tab value="our news" className={styles.tab}>
                    Наша лента
                </Tabs.Tab>
                <Tabs.Tab value="your news" className={styles.tab}>
                    Ваша лента
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel className={styles.panel} value="our news"> {/* Применяем класс из CSS модуля */}
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Eliza'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Christian'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Destiny'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/identicon/svg?seed=George'} />
                <Post setTabs={setTabs} src={'https://api.dicebear.com/9.x/miniavs/svg?seed=Christian'} />
            </Tabs.Panel>

            <Tabs.Panel className={styles.panel_two} value="your news"> {/* Применяем класс из CSS модуля */}
                <div className={styles.authContainer}>
                    <Text fw={500} size='lg'>Хочешь мутить тут делишки свои?</Text>
                    <Text fw={500} size='md'>Тогда тебе надо зарегаться, братик, такие условия.</Text>
                    <div style={{ marginTop: '10px' }}>
                    </div>
                </div>
            </Tabs.Panel>
        </Tabs>
    );
}