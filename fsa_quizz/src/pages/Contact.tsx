import { faTiktok, faFacebook, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function Contact(){
    const initialValues = {
            name: '',
            email: '',
            message:''
        }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        message: Yup.string().required('Please leave a message')

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
                <div className="form-group">
                    <label htmlFor="name" className='block mb-2'>Name</label>
                    <Field placeholder="Enter your name" type="text" name="name" className="form-control p-2 border border-slate-300 rounded-md w-full" />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <Field placeholder="Enter your email" type="text" name="email" className="form-control p-2 border border-slate-300 rounded-md w-full" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <Field placeholder="Enter your message" type="area" name="message" className="text-area form-control p-2 border border-slate-300 rounded-md w-full" />
                    <ErrorMessage name="message" component="div" className="text-red-500" />
                    
                </div>
               
                <div className="form-group">
                <button type="submit" className=" bg-blue-400 text-white w-20 rounded-sm">Send</button>
                </div>
            </Form>
        </Formik>
    )


    return(
        <div className="px-40 mb-32">
            <h1 className="p-4 m-auto text-center font-bold text-2xl">CONTACT</h1>

            <div className="m-auto flex text-left">
                <div className="w-1/2 p-12">
                    <p className="font-bold text-xl">Feed Back</p>
                    <p>Please fill out the form below to send us your feedback. We will get back to you as soon as possible</p>
                    <div>
                        {formik}
                    </div>
                </div>

                <div className="w-1/2 p-12">
                    <p className="font-bold text-xl">Our Infomation</p>
                    <p>We are always here to help you. You can contact us through the following ways</p>
                    <div className='text-black my-2'>
                        <p><FontAwesomeIcon icon={faEnvelope} className='text-black'/> hoangducpro001@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhoneAlt} className='text-black'/> 9999999999</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className='text-black'/> 10 PVB, Cau Giay, Ha Noi, Viet Nam</p>
                    </div>
                    <div className="flex flex-row text-black text-3xl">
                        <p><FontAwesomeIcon icon={faTiktok} className='mr-2'/></p>
                        <p><FontAwesomeIcon icon={faFacebook} className='mx-2'/></p>
                        <p><FontAwesomeIcon icon={faYoutube} className='mx-2'/></p>
                        <p><FontAwesomeIcon icon={faLinkedinIn} className='mx-2'/></p>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Contact;