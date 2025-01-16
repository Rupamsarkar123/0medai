import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";

const YOU = "you";
const AI = "ai";

// Use the environment variable for the backend URL
const backendURL = import.meta.env.VITE_BACKEND_URL || "https://mentassist.netlify.app";

function App() {
  const inputRef = useRef();
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  const handleSend = () => {
    const question = inputRef.current.value;
    if (!question.trim()) return; // Prevent sending empty questions
    updateQNA(YOU, question);

    setLoading(true);
    axios
      .post(`${backendURL}/chat`, {
        question,
      })
      .then((response) => {
        updateQNA(AI, response.data.answer);
      })
      .catch((error) => {
        updateQNA(AI, "An error occurred. Please try again.");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderContent = (qna) => {
    const value = qna.value;

    if (Array.isArray(value)) {
      return value.map((v, index) => <p className="message-text" key={index}>{v}</p>);
    }

    return <p className="message-text">{value}</p>;
  };

  return (
    <main className="container">
      <div className="chats">
        {qna.map((qna, index) => {
          if (qna.from === YOU) {
            return (
              <div className="send chat" key={index}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6124/6124635.png"
                  alt=""
                  className="avtar"
                />
                {renderContent(qna)}
              </div>
            );
          }
          return (
            <div className="recieve chat" key={index}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/7054/7054227.png"
                alt=""
                className="avtar"
              />
              {renderContent(qna)}
            </div>
          );
        })}

        {loading && (
          <div className="recieve chat">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7054/7054227.png"
              alt=""
              className="avtar"
            />
            <p>Typing...</p>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          ref={inputRef}
          className="form-control col"
          placeholder="Describe your symptoms.."
        />
        <button disabled={loading} className="btn btn-success" onClick={handleSend}>
          Ask AI
        </button>
      </div>
    </main>
  );
}

export default App;
