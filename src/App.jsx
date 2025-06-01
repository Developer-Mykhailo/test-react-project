import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  // state
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback"); // from storage

    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });
  const { good, neutral, bad } = feedback;

  //derived values
  const total = good + neutral + bad;
  const positive = total ? Math.round((good / total) * 100) : 0;

  // storage
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // handlers
  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // JSX
  return (
    <Container>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        total={total}
      />
      {total ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
