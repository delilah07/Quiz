import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (props) => {
  const {
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestions,
  } = props;
  return (
    <div className="card">
      <p className="card__number">
        {questionNum}/{totalQuestions}
      </p>
      {/* <p className="card__question" dangerouslySetInnerHTML={{__html:question}} */}
      <p className="card__question">{question}</p>
      <div className="card__answers">
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              {/* <span dangerouslySetInnerHTML={{ __html: answer }} /> */}
              <span>{answer}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
