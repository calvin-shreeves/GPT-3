import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="a computer program designed to simulate conversation with human users, especially over the internet."
        />
        <Feature
          title="Knowledgebase"
          text="A knowledge base is a self-serve online library of information about a product, service, department, or topic. "
        />
        <Feature
          title="Education"
          text="Education helps a person hone their communication skills by learning how to read, write, speak and listen. Education develops critical thinking. This is vital in teaching a person how to use logic when making decisions and interacting with people (e.g., boosting creativity, enhancing time management)."
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
