import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PreviewView from "./PreviewView";
import Typography from '@mui/material/Typography';

function App() {
  const [text, setText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [previewList, setPreviewList] = React.useState([]);

  const getPreviews = async () => {
    var data = `{"text": "${text}"}`;

    var config = {
      method: "post",
      url: "http://localhost:5001/syphax-login/us-central1/scraper",
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    };

    setIsLoading(true);
    axios(config)
      .then((res) => {
        setIsLoading(false);
        setPreviewList(res.data);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <div className='App'>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <div className='container'>
        <p className='title'>
          Hi, enter a text with some links to see the previews !
        </p>
        

        <TextField
          id='standard-multiline-static'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          label='Your text'
          multiline
          rows={4}
          placeholder='Paste your urls...'
          fullWidth
        />

        <Stack
          spacing={1}
          direction='row'
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}>
          <Button
            onClick={() => {
              setText("");
            }}
            variant='outlined'>
            Clear text
          </Button>
          <Button onClick={getPreviews} variant='contained'>
            See preview
          </Button>
        </Stack>
        {previewList.length === 0 ? null : (
          <>
            <p className='title'>Previews :</p>
            {previewList.map((element) => {
              return (
                <PreviewView
                  url={element.url}
                  title={element.title}
                  favicon={element.favicon}
                  description={element.description}
                  image={element.image}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
