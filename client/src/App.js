import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  return (
    <Grid container className="app" spacing={0}>
        <Grid item xs={6} className="instructionPanel">
            {/* TODO: create instruction component? */}
        </Grid>
        <Grid item xs={6} className="actionPanel">
            {/* TODO: buttons */}
            {/* TODO: progress bar */}
            {/* TODO: form */}
        </Grid>
    </Grid>
  );
}

export default App;
