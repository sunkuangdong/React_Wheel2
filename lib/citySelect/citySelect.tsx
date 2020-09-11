import React, {useContext, useEffect, useState} from "react";
import ReactDom from "react-dom"
import classes from "../helpers/classes";
import "./citySelect.scss"
import pinin from "tiny-pinyin"

interface Props {
    dataSource: string[];
    onChange: (p1: string) => void;
}

interface Context {
    hash: { [key: string]: string[] };
    onChange: (p1: string) => void;
}

const CitySelelctContext = React.createContext<Context>(
    {
        hash: {}, onChange: (p1: string) => {
        }
    });
const CitySelect: React.FC<Props> = (props) => {
    const {children} = props
    const [dialogFlag, setDialogFlag] = useState(true);
    const map: Context["hash"] = {};
    props.dataSource.map((city) => {
        const py = pinin.convertToPinyin(city);
        const index = py[0];
        map[index] = map[index] || [];
        map[index].push(city);
    })
    // 点击文字弹出选择城市
    const onClick = () => {
        setDialogFlag(true);
    }
    return (
        <CitySelelctContext.Provider value={{hash: map, onChange: props.onChange}}>
            <div onClick={onClick}>{children}</div>
            {dialogFlag && <Dialog onClose={() => setDialogFlag(false)}/>}
        </CitySelelctContext.Provider>
    )
}
const Dialog: React.FC<{ onClose: () => void }> = (props) => {
    const {hash, onChange} = useContext(CitySelelctContext);
    const cityList = Object.entries(hash).sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
    const indexList = Object.keys(hash).sort();
    // 点击城市事件
    const onClick = (cityName: string) => {
        onChange(cityName)
    }

    return ReactDom.createPortal(
        (<div className={classes("sun-citySelect-dialog")}>
            <header>
                <span className="icon" onClick={props.onClose}>&lt;</span>
                <span>选择城市</span>
            </header>
            <CurrentLocation/>
            <h2>全部都市</h2>
            <ol className="sun-citySelect-index">
                {indexList.map(item => <li key={item}>{item}</li>)}
            </ol>
            <div className="cityList">所有城市</div>
            {cityList.map(([letter, list]) => {
                return (
                    <div className={classes("sun-citySelect-citySection")}>
                        <h4>{letter}</h4>
                        {list.map(cityName =>
                            <div onClick={() => onClick(cityName)}
                                 className={classes("sun-citySelect-cityName")}
                                 key={cityName}>{cityName}</div>)}
                    </div>
                );
            })}
        </div>),
        document.body)
}

const CurrentLocation: React.FC = () => {
    const [city, setCity] = useState<string>("");
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", "http://ip-api.com/json/?lang=zh-CN");
        xhr.onload = () => {
            const str = xhr.responseText;
            const obj = JSON.parse(str);
            const c = obj.city;
            setCity(c);
        }
        xhr.onerror = () => {
            console.log("error");
        }
        xhr.send()
    }, [])
    return (
        <div className="currentCity">
            <span>当前城市：</span>
            <span>{city}</span>
        </div>
    )
}
export default CitySelect;