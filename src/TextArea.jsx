import { useState } from "react";
import Warning from "./Warning";

function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");
  const handleChange = (e) => {
    let currentText = e.target.value;
    if (currentText.includes("<script>")) {
      setWarningText("No <script> tags allowed!");
      currentText = currentText.replace("<script>", "");
    } else if (currentText.includes("@")) {
      setWarningText("No @ symbol allowed!");
      currentText = currentText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(currentText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      ></textarea>
      <Warning message={warningText} />
    </div>
  );
}

export default TextArea;
