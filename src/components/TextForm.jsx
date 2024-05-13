import { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState("Enter Text Here...");
  function handelUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to UpperCase!", "primary");
  }
  function handellowClick() {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to LowerCase!", "warning");
  }
  function handleremClick() {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    showAlert("Remove extra blanck space!", "info");
  }
  function handleClearClick() {
    let newText = " ";
    setText(newText);
    showAlert("Cleared all text!", "danger");
  }
  function handleOnchange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <div
        className="container"
        style={{
          color: `${mode === "dark" ? "white" : "black"}`,
        }}
      >
        <h1 className="mb-4">{heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: `${mode === "dark" ? "grey" : "white"}`,
              color: `${mode === "dark" ? "white" : "black"}`,
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows="10"
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handelUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handellowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleremClick}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: `${mode === "dark" ? "white" : "black"}`,
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something here to preview"}</p>
      </div>
    </>
  );
}
