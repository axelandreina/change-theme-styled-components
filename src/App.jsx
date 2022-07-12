import { useState } from "react";
import "./App.css";
import { Button } from "./components/Styled/Button.styled";
import { Title } from "./components/Styled/Title.styled";
import { GlobalStyle } from "./components/Styled/GlobalStyles";
import { ThemeProvider } from "styled-components";

const darkTheme = {
    main: "#000000",
};

const lightTheme = {
    main: "#F5F5F5",
};

function App() {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Title color="purple">This is a practice to change theme</Title>
                <Button
                    onClick={() =>
                        setTheme(theme === lightTheme ? darkTheme : lightTheme)
                    }
                    background="#8075FF"
                    border="#fff"
                >
                    Change Theme
                </Button>
            </ThemeProvider>
        </div>
    );
}

export default App;
