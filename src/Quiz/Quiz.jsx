import React, { useState } from 'react';
import './Quiz.css';
import Quizdata from './Quizdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';

export default function Quiz() {
    const [question, setQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizdata, setQuizData] = useState(Quizdata);
    const [quizEnded, setQuizEnded] = useState(false);


    // Retrieve current question
    const currentQuestion = quizdata[question];

    // Handle next question
    const handleNextQuestion = () => {
        if (question + 1 < quizdata.length) {
            setQuestion(question + 1);
        } else {
            setQuizEnded(true); // Set quizEnded to true when quiz ends
        }
    }

    // Handle previous question
    const handlePrevQuestion = () => {
        if (question > 0) {
            setQuestion(question - 1);
        }
    }

    // Handle selecting an answer
    const handleCorrectAnswer = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    }

    return (
        <div className="Quizapp">
            <h2>Quiz Game</h2>
            {quizEnded ? (
                <>
                    <div className="quiz-ended">
                        <p>Quiz Ended. Your score: {score}/20</p>
                    </div>
                </>
            ) : (
                <>
                    <p>{currentQuestion.question}</p>
                    <ol>
                        {currentQuestion.options.map((option, index) => (
                            <li key={index} onClick={() => handleCorrectAnswer(option)}>
                                {option}
                            </li>
                        ))}
                    </ol>
                    <div className="response">
                        <div className="handelprev" onClick={handlePrevQuestion}>
                            <FontAwesomeIcon icon={faCircleLeft} />
                        </div>
                        <div className="handelnext" onClick={handleNextQuestion}>
                            <FontAwesomeIcon icon={faCircleRight} />

                        </div>

                    </div>

                </>
            )}
        </div>
    );
}
