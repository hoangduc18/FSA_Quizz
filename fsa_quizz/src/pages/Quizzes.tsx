import { useEffect, useState } from "react";
import QuizCard from "../shared/components/QuizCard";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const Quizzes : React.FC = () => {
    const fetchQuizData = async () => {
        return [
          {
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: 15,
            image: '../assets/map.jpeg',
          },
          {
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: 15,
            image: '../assets/inventions.png',
          },
          {
            title: "Capitals of Country",
            description: "Test your knowledge of country capitals",
            duration: 15,
            image: '../assets/capitals.jpeg',
          },
        ];
      };
    const [quizData, setQuizData] = useState<any>([]);
    useEffect(() => {
        // Fetch the quiz data when the component mounts
        fetchQuizData().then(data => setQuizData(data));
      }, []);
    
    const initialValues = {
                quizCode: '',
            }
    
    const validationSchema = Yup.object({
        quizCode: Yup.string().required('Quiz Code is required'),
    })

    const onSubmit = async (values: any) => {
        try {
            console.log(values)
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const formik = (
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className='*:mb-3'>
                    <div className="flex w-full max-w-screen-lg">
                        <Field placeholder="Enter quiz code to take a quiz" type="text" name="quizCode" className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none" />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600">
                        Take Quiz
                        </button>
                    </div>
                </Form>
            </Formik>
        )

    return (
        <div>
        <section className="py-12">
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-3xl pb-10"> Take a Quiz</p>
                {formik}
            </div>

            <h2 className="text-center text-3xl font-bold mb-6">QUIZZES</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {quizData?.map((quiz: any, index: any) => (
                <QuizCard
                key={index} // Unique key for each item in the list
                title={quiz.title}
                description={quiz.description}
                duration={quiz.duration}
                image={quiz.image}
                />
            ))}
                </div>
      </section>
        </div>
    )
}

export default Quizzes;