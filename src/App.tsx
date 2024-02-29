import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import { QuestionState, Difficult } from './API';

import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficult.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer
      const answer = e.currentTarget.value;

      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // if correct
      if (correct) setScore((prev) => prev + 1);

      //save answer in the array for user answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move on to the next question if not the last question
    const nextQuestion = number + 1;
    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>ReactQuiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start Quiz
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p className="loading">Loading Questions ...</p>}
        {/* the same us previus */}
        {!gameOver && !loading && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
}

export default App;
