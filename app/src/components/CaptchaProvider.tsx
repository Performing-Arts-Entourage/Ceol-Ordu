import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface CaptchaState {
    setToken: Dispatch<SetStateAction<string | undefined>>;
    token?: string;
}

const defaultState: CaptchaState = {
    setToken: () => {}
};

const CaptchaContext = createContext<CaptchaState>(defaultState);

export const useCaptcha = () => useContext(CaptchaContext);

type Properties = PropsWithChildren<{}>;

export const CaptchaProvider = ({ children }: Properties) => {
    const [token, setToken] = useState<string>();

    const state = {
        token, setToken
    };

    return (
        <CaptchaContext.Provider value={state}>
            {children}
        </CaptchaContext.Provider>
    );
};
