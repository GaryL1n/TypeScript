import React, { createContext, FC } from 'react';
import './App.css';
import FormTry from './FormTry';
import TextField, { HairColor } from './TextField';

interface AppContextInterface {
    girlFriend: string;
    girlAge: number;
}
export const AppContext = createContext<AppContextInterface | null>(null);

function App() {
    const contextValue: AppContextInterface = {
        girlFriend: '林玟葶',
        girlAge: 21,
    };
    return (
        <AppContext.Provider value={contextValue}>
            <>
                {/* <TextField
                    text="Hello"
                    ok={false}
                    fn={function (bob: string): string {
                        throw new Error('Function not implemented.');
                    }}
                    person={{ name: 'Gary', age: 24 }}
                    hairColor={HairColor.Red}
                /> */}
                <FormTry />
            </>
        </AppContext.Provider>
    );
}

export default App;
