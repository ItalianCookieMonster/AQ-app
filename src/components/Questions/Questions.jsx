import QuestionCard from "../QuestionCard/QuestionCard";

const Questions = () => {
    const questions = [
        {
            id: 1,
            question: 'Feeling energetic? Check if now’s the perfect time to go for a run!',
            type: 'activity',
            link: 'task1'
        },
        {
            id: 2,
            question: 'Curious about the air quality today? Find out the current air conditions!',
            type: 'airCondition',
            link: 'task2'
        },
        {
            id: 3,
            question: 'Want to make a difference? Discover simple steps to improve your environment!',
            type: 'enviroment', 
            link: 'task3'
        },
    ];
    

    return (
        <section className="w-full min-h-[12.5rem] flex items-start justify-evenly gap-4 flex-wrap">
            {questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
            ))}
        </section>
    );
};

export default Questions;
