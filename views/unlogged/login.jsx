function App() {
  return (
    <AsignarTema>
      <div className="expandir d-center">
        <Paper className="pad-20px">
          <Typography variant="h4">
            Inicia sesión
          </Typography>
          <Button variant="contained">Iniciar</Button>
        </Paper>
      </div>
    </AsignarTema>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
