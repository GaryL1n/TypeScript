import React, { ChangeEvent, FC, useState, useRef, useContext } from 'react';
import { AppContext } from './App';

export enum HairColor {
    Red = 'Red hair',
    Brown = 'Brown hair',
    Yellow = 'Yellow hair',
}

interface Person {
    name: string;
    age: number;
}

interface Props {
    text: string;
    ok: boolean;
    high?: number; // 加問號變成非必傳
    fn: (bob: string) => string;
    person: Person;
    hairColor: HairColor;
}

const TextField: FC<Props> = ({ person, hairColor }) => {
    const contextValue = useContext(AppContext);
    // state也可以設定型別
    const [count, setCount] = useState<number | null | string>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const [country, setCountry] = useState<string | null>('');
    const handChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };
    const home: string = '台北市';

    return (
        <>
            <div ref={divRef}>
                <input ref={inputRef} onChange={handChange} />
                <h3>{country}</h3>
                <h1>{person.name}</h1>
                {hairColor}
                <h3>{contextValue?.girlFriend}</h3>
                {home}
            </div>
        </>
    );
};

export default TextField;
