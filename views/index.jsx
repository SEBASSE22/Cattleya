function App() {
    return (
        <ThemeProvider theme = {theme}>
            <CssBaseline />
            <div className="main">
                <div className="salas-de-chat"></div>
                <div className="sala-de-chat-seleccionada">
                    <Button variant="contained" href="unlogged">
                        Ir a login
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));