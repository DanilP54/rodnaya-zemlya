import AuthButtons from "../../header/AuthButtons";
import SearchInput from "../../header/SearchInput";
import { MenuNews } from "./MenuNews";
import TabsComponents from "./tabs/Tabs";


export default function RootNews() {
    return (
        <>
            <div style={{
                display: 'flex',
                height: '100%',
                backgroundColor: 'rgb(3, 3, 37)'
            }}>
                <div style={{
                    width: '460px',
                    height: '100%',
                    // borderRight: '1px solid gray',
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
                    // borderLeft: '1px solid gray',
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
                            width: '200px'
                        }}>
                            <SearchInput width='200px' />
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