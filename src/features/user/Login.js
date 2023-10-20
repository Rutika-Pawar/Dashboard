import { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: '',
    emailId: '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (loginObj.emailId.trim() === '') return setErrorMessage('Email Id is required! (use any value)');
    if (loginObj.password.trim() === '') return setErrorMessage('Password is required! (use any value)');
    else {
      setLoading(true);
      // Call API to check user credentials and save the token in local storage
      localStorage.setItem('token', 'DummyTokenHere');
      setLoading(false);
      window.location.href = '/app/welcome';
    }
  }

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage('');
    setLoginObj({ ...loginObj, [updateType]: value });
  }

  const loginStyle = {
    background: 'url("/Right side.png")', // Set the background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const whiteBoxStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
  };
  
 
  return (
    <div className="min-h-screen flex items-center" style={loginStyle}>
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className='grid md:grid-cols-2 grid-cols-1 rounded-xl'>
          <div className=''>
            <LandingIntro />
          </div>
          <div className='py-24 px-10'>
          <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
              <p>Sign in to your account</p>
              <div className="mt-4 flex justify-between items-center">
    <img src="/Google Sign In.png" alt="Google Sign In" style={{ marginRight: '10px' }} />
    <img src="/Apple Sign In.png" alt="Apple Sign In" />
  </div>
  <div style={{ marginTop: '20px' }}></div>
            <div style={whiteBoxStyle}>
           
            <form onSubmit={(e) => submitForm(e)}>
  <InputText
    type="emailId"
    defaultValue={loginObj.emailId}
    updateType="emailId"
    containerStyle="mt-3"
    labelTitle="Email Address"
    updateFormValue={updateFormValue}
    style={{ backgroundColor: '#F5F5F5', padding: '8px', borderRadius: '4px', width: '100%' }} // Set the background color, adjust the padding, border radius, and width
  />
  <InputText
    defaultValue={loginObj.password}
    type="password"
    updateType="password"
    containerStyle="mt-3"
    labelTitle="Password"
    updateFormValue={updateFormValue}
    style={{ backgroundColor: '#F5F5F5', padding: '8px', borderRadius: '4px', width: '10%' }} // Set the background color, adjust the padding, border radius, and width
  />
  <div className='text-left text-primary'>
    <Link to="/forgot-password"><span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
  </div>
  <ErrorText styleClass="mt-4">{errorMessage}</ErrorText>
  <button type="submit" className={"btn mt-1 w-full btn-primary sm:px-2 sm:py-1"}>Sign In</button>
</form>

              
            </div>
            <div className="mt-4 text-center">
  <p className="text-gray-500">Don’t have an account? <Link to="/register" className="text-primary">Register here</Link></p>
</div>

          </div>
        </div>
      </div>
      
      </div>
    
  );
}

export default Login;
