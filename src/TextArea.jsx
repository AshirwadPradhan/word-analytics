import { useState } from "react";
import Warning from "./Warning";

function TextArea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let currentText = e.target.value;
    if (currentText.includes("<script>")) {
      setWarningText("No <script> tags allowed!");
      setShowWarning(true);
      currentText = currentText.replace("<script>", "");
    } else if (currentText.includes("@")) {
      setWarningText("No @ symbol allowed!");
      setShowWarning(true);
      currentText = currentText.replace("@", "");
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
      {showWarning ? <Warning message={warningText} /> : null}
    </div>
  );
}

export default TextArea;
