import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Login.css';
import { auth } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const loginWithGoogle = async () => {
        // const provider = new GoogleAuthProvider();

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                GoogleAuthProvider.credentialFromResult(result);
                // The signed-in user info.
                console.log(result.user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // error.customData.email;
                // The AuthCredential type that was used.
                GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className='d-flex align-items-center main-height'>
            <Container className='login-card px-0'>
                <Row className='gx-0'>
                    <Col md={6}>
                        <div className='bg-white p-4 login-left-card'>
                            <img src='https://inzint.com/wp-content/uploads/2024/05/inzint-logo-dark-1.png' alt='inzint-logo' height={60} />

                            <Row className='my-5 justify-content-center'>
                                <Col md={9} lg={9} xs={12}>
                                    <h1 className='text-center'>Welcom Back</h1>
                                    <p className='text-center'>Welcom Back! Please enter your credentials to login.</p>
                                    <Button variant='outline-dark' className='w-100 d-flex justify-content-center align-items-center my-4' onClick={loginWithGoogle}>
                                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" height="25" alt="Google logo" />
                                        <span className='ms-2'>Login with Google</span>
                                    </Button>

                                    <div className='divider'>
                                        <div className='line'></div>
                                        <div className='text'>Or</div>
                                    </div>
                                    <Form className='mt-5'>
                                        <Form.Control type='email' className='mb-4' placeholder='Email Address'></Form.Control>
                                        <Form.Control type='password' className='mb-2' placeholder='Password'></Form.Control>
                                        <a href='/' className='d-block text-end text-secondary ms-auto'>Forgot Password</a>
                                        <Button variant='dark' className='w-100 mt-4'>Login</Button>
                                    </Form>

                                </Col>
                            </Row>

                            <div className='mt-4'>
                                <p className='text-center text-secondary'>Don't have an account? <a href='/' className='text-dark'>Sign up for free</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='login-right-card p-4'>
                            <img src='https://uploads-ssl.webflow.com/612ca2a103cd4b980c51550f/6130a1922af7f304ee17a7ac_team-3.jpg' alt='Girl potrate' className='image-fill' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login