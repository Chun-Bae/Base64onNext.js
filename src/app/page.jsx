"use client";

import React, { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";

export default function Home() {
  const [originalText, setOriginalText] = useState("");
  const [base64Text, setBase64Text] = useState("");
  const [error, setError] = useState("");

  const handleEncodeChange = (e) => {
    setOriginalText(e.target.value);
  };

  const handleDecodeChange = (e) => {
    setBase64Text(e.target.value);
  };

  const encodeBase64 = () => {
    try {
      const encodedData = btoa(unescape(encodeURIComponent(originalText)));
      setBase64Text(encodedData);
      setError("");
    } catch (e) {
      setError("Encoding failed. Please check the input.");
      setBase64Text("Encoding failed. Please check the input.");
    }
  };

  const decodeBase64 = () => {
    try {
      const decodedData = decodeURIComponent(escape(atob(base64Text)));
      setOriginalText(decodedData);
      setError("");
    } catch (e) {
      setError("Decoding failed. Please check if your input is valid base64.");
      setOriginalText("Decoding failed. Please check if your input is valid base64.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="flex justify-center w-full max-w-4xl mb-4 gap-4">
        {" "}       
        <div className="flex flex-col w-1/2 pr-2">
          <Textarea
            label="Original Text"
            placeholder="Enter text to encode..."
            onChange={handleEncodeChange}
            value={originalText}
            variant="bordered"
            fullWidth
            minRows={30}
            maxRows={30}
            color="secondary"
          />
          <div className="flex justify-center mt-4">
            <Button onClick={encodeBase64} color="secondary" auto fullWidth>
              Encode
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 pl-2">
          {" "}         
          <Textarea
            label="Base64 Text"
            placeholder="Enter base64 to decode..."
            onChange={handleDecodeChange}
            value={base64Text}
            variant="bordered"
            fullWidth
            minRows={30}
            maxRows={30}
            color="secondary"
          />
          <div className="flex justify-center mt-4">
            <Button onClick={decodeBase64} color="secondary" auto fullWidth>
              Decode
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
