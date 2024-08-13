import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Login.css';
import { auth, db } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { addDoc, collection, setDoc, doc } from 'firebase/firestore';


const Login = () => {

    const loginWithGoogle = async () => {
        // const provider = new GoogleAuthProvider();

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                GoogleAuthProvider.credentialFromResult(result);
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                //store usefull data in firestore

                const newUser = {
                    fullName: user.displayName,
                    email: user.email,
                    mobile: user.phoneNumber,
                    profilePic: user.photoURL,
                    signInMethod: 'google',
                    emailVerified: user.emailVerified
                }

                try {
                    const docRef = doc(db, 'users', user.uid);
                    const newData = await setDoc(docRef, newUser);

                    // const docRef = await addDoc(collection(db, 'users'), newUser);
                    console.log('Document written with ID: ', docRef.id);
                } catch (e) {
                    console.error('Error adding document: ', e);
                }

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
                    <Col md={6} className=''>
                        <div className='bg-white p-4 login-left-card'>
                            <img src='https://inzint.com/wp-content/uploads/2024/05/inzint-logo-dark-1.png' alt='inzint-logo' height={30} />

                            <Row className='my-5 justify-content-center'>
                                <Col md={9} lg={9} xs={12} className='main-content'>
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

                                    <div className='mt-4'>
                                        <p className='text-center text-secondary'>Don't have an account? <a href='/' className='text-dark'>Sign up for free</a></p>
                                    </div>

                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='login-right-card p-4 d-flex align-items-end position-relative'>
                            <div className='position-absolute top-0 start-0 w-100 h-100' style={{ background: 'radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(0,0,0,0.2) 125%)' }}></div>
                            <div className='position-relative d-flex flex-column'>
                                <p className='text-start fs-2 fw-bold text-white ps-2 '>
                                    We move 10x faster than our peers <br />
                                    and stay consistent. While they're <br />
                                    bogged down with design debt, <br />
                                    we're releasing new features.
                                </p>
                                <div className='text-white ps-2 mt-1' style={{ alignSelf: 'flex-start' }}>
                                    <span className='fw-bold fs-3'>Sophie Hall</span><br />
                                    <span className='fs-5 fw-bold lh-lg'>Founder, Inzint</span><br />
                                    <span className='fw-normal'>Software consultancy firm</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login