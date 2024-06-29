import QuestionCard from "../QuestionCard/QuestionCard";

const Questions = () => {
    const questions = [
        {
            id: 1,
            question: 'Is it a good time to go for a run?',
            type: 'activity',
            link: 'task1'
        },
        {
            id: 2,
            question: 'What is the current air condition?',
            type: 'airCondition',
            link: 'task2'
        },
        {
            id: 3,
            question: 'What can I do to have a better environment?',
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
