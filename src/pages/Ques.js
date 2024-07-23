import { useState, useEffect } from "react";
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { AptosClient } from "aptos";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com/v1");

const CONTRACT_ADDRESS = "Enter your contract address here";

export default function Ques({ account }) {
  const [newAnswer, setNewAnswer] = useState("");
  const [answerList, setAnswerList] = useState([]);
  const { signAndSubmitTransaction } = useWallet();
  const Question = "What do you think about Blockchain?";

  useEffect(() => {
    async function fetchData() {
      if (account?.address) {
        const answers = await viewAnswers();
        setAnswerList(answers);
      }
    }
    fetchData();
  }, [account]);

  const viewAnswers = async () => {
    const payload = {
      function: `${CONTRACT_ADDRESS}::QuestionAnswerModule::view_answers`,
      type_arguments: [],
      arguments: [],
    };

    try {
      const response = await client.viewFunction(payload);
      return response.result;
    } catch (error) {
      console.error("Error fetching answers", error);
      return [];
    }
  };

  const handleSend = async () => {
    if (newAnswer.trim() !== "") {
      await addAnswer(newAnswer);
      const updatedAnswers = await viewAnswers();
      setAnswerList(updatedAnswers);
      setNewAnswer("");
    }
  };

  const addAnswer = async (answer) => {
    const payload = {
      type: "entry_function_payload",
      function: `${CONTRACT_ADDRESS}::QuestionAnswerModule::add_answer`,
      type_arguments: [],
      arguments: [answer],
    };

    try {
      const response = await signAndSubmitTransaction(payload);
      await client.waitForTransaction(response.hash);
    } catch (error) {
      console.error("Error adding answer", error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="blur-background">
          <h1 className="question">{Question}</h1>
          <div className="input-container">
            <input
              type="text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Enter your answer"
            />
            <button onClick={handleSend} className="send-button">
              Send
            </button>
          </div>
          <div className="answers">
            {answerList.map((answer, index) => (
              <p key={index} className="answer">{answer}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
