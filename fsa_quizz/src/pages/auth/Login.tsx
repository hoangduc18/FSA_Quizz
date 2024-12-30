import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { AuthService } from '../../services/auth.service';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../contexts/auth.context';

const Login = () => {
    // const { login } = useAuth();
    const navigate = useNavigate();
    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(20, 'Password must be at most 20 characters')

    })

    const onSubmit = async (values: any) => {
        try {
            // const response = await AuthService.login(values);
            // if (response) {
            //     login(response);
            //     console.log('Login success');
            //     navigate('/');
            // } else {
            //     console.log('Login failed');
            // }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const formik = (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className='*:mb-3'>
                <div className="form-group">
                    <label htmlFor="username" className='block mb-2'>Username</label>
                    <Field type="text" name="username" className="form-control p-2 border border-slate-300 rounded-sm w-full" />
                    <ErrorMessage name="username" component="div" className="text-red-500" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='block mb-2'>Password</label>
                    <Field type="password" name="password" className="form-control p-2 border border-slate-300 rounded-sm w-full" />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
                <div className="form-group flex">
                    <Link to="/" className="p-2 px-4 w-full text-center font-medium">Back to Home</Link>
                    <button type="submit" className="p-2 px-4 bg-blue-400 hover:bg-blue-100 text-white w-full rounded-md">Login</button>
                    
                </div>
                <div className="form-group text-center  flex flex-col">
                    <label className="mr-3 text-center">Forgot password?</label>
                    <label htmlFor="register" className="mr-3 text-center">Don't have an account? <Link to="/auth/register" className="text-blue-500 hover:text-blue-700">Register</Link></label>
                    
                    
                </div>
            </Form>
        </Formik>
    )
    return (
        <section className='h-10 w-full flex justify-center items-center'>
            <div className="form-login w-[450px] rounded-md p-5 bg-white">
                <h1 className='text-2xl font-bold text-center mb-4'>Login</h1>
                {formik}
            </div>
        </section>
    )
}

export default Login;