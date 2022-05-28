import { useState } from 'react';
import { data, IItem } from './data';
import './styles.css';
import { ThemeProvider, useTheme } from './Context';

type Theme = 'light' | 'dark';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    /*return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            <List theme={currentTheme} data={data} />
        </div>
    );*/
    return (
        <ThemeProvider
            theme={currentTheme}
            children={
                <div className={className}>
                    <button onClick={changeTheme}>Toggle theme</button>
                    <List data={data} />
                </div>
            }
        />
    );
}

function List(props: { /*theme: Theme;*/ data: IItem[] }) {
    return (
        <div>
            {props.data.map((item) => (
                <ListItem
                    //theme={props.theme}
                    caption={item.name}
                    key={item.id}
                />
            ))}
        </div>
    );
}

function ListItem(props: { /*theme: Theme;*/ caption: string }) {
    const theme = useTheme();
    const className = `listItem listItem_${theme}`;
    return <div className={className}>{props.caption}</div>;
}
