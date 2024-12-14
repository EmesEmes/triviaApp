import { useRef, useState } from 'react';
import InitialForm from './InitialForm';
import Question from './Question';
import Lives from './Lives';
import { Toast } from 'primereact/toast';
import Table from './Table';

const Trivia = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [nickname, setNickname] = useState('');
    const [isNicknameSet, setIsNicknameSet] = useState(false);
    const [lives, setLives] = useState(3);
    const [questions, setQuestions] = useState([]);
    const [value, setValue] = useState(5)

    const toast  = useRef(null);

    const url = `https://opentdb.com/api.php?amount=${value}&category=9&difficulty=easy&type=multiple`;
    
    const handleChangeSlider = (e) => {
        setValue(e.value)
      }

    // useEffect(() => {
    //     setTimeout(() => {
            
    //     }, 1000);
    //   }, [url]);

    const handleAnswerOptionClick = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        } else {
            setLives(lives - 1);
            if (lives - 1 === 0) {
                alert('Game Over');
                resetGame();
                return;
            }
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            
            
        }
    };

    const handleNicknameSubmit = async () => {
        if (nickname.trim() !== '') {
            await fetchQuestions();
            setIsNicknameSet(true);
          
              
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter your nickname', life: 2000});
            
        }
    };

    const resetGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setNickname('');
        setIsNicknameSet(false);
        setLives(3);
        localStorage.setItem('data', JSON.stringify([...JSON.parse(localStorage.getItem('data')), { name: nickname, points: score }]));
        window.location.reload();
    };

    

      

    const fetchQuestions = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const transformedArray = data.results.map((item) => ({
                question: item.question,
                options: [item.correct_answer, ...item.incorrect_answers].sort(() => Math.random() - 0.5),
                answer: item.correct_answer,
            }));

                setQuestions(transformedArray);
            
            console.log(transformedArray);
        } catch (error) {
            console.error("Error al cargar las preguntas:", error);
        } 
        };
        
        
        

    return (
        <div>
            {!isNicknameSet ? (
                <div>
                    <Toast ref={toast} />
                    <InitialForm nickname={nickname} setNickname={setNickname} handleNicknameSubmit={handleNicknameSubmit} handleChangeSlider={handleChangeSlider} value={value}/>
                </div>
            ) : showScore ? (
                <div className='flex flex-col items-center'>
                    <Table />
                    <div className='mt-20'>{nickname}, you scored {score} out of {questions.length}
                    <button className='border-2 border-black p-2 ml-4 rounded-xl hover:bg-black hover:text-white transition duration-300' onClick={resetGame}>Play Again</button></div>
                </div>
            ) : (
                <div>
                    <div>
                        <Question questions={questions} currentQuestion={currentQuestion} handleAnswerOptionClick={handleAnswerOptionClick} value={value}/>
                        
                        <Lives nickname={nickname} lives={lives} />
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trivia;