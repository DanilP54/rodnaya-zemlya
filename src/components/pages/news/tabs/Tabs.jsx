import { Tabs, Text } from '@mantine/core';
import styles from './tabs.module.css'; // Подключаем CSS модуль

import Post from '../post/Post';

const ArrowOnReg = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
}




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
          <Text fw={600} size='md'>Присоединяйтесь к нам, чтобы не пропустить самые важные новости, которые действительно вас интересуют.</Text>
          <Text mt={"50px"} fw={600} size='md'>Для регистрации воспользуйтесь кнопками, расположенными в правом верхнем углу.</Text>
          <div style={{
            position: 'absolute',
            bottom: '30px',
            right: '10px'
          }}><ArrowOnReg /></div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}
