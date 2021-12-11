import React ,{useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    logoutHandler: () => {},
    loginHandler: (email, password) => {},
    
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);  //No dependencies so it only run once. the dependencies never update because there is none


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }
    
    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            loginHandler: loginHandler,
            logoutHandler: logoutHandler,
        }}
    >
        {props.children}
    </AuthContext.Provider>;
}

export default AuthContext;
