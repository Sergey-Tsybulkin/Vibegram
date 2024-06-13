import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <main className="signUp">
      <h2 className="signUp__header">Vibegram</h2>
      <form action="" className="signUp__form">
        <h3 className="signUp__text">Login</h3>
        <span className="signUp__email">
          <input type="email" name="" id="" className="signUp__input" />
        </span>
        <span className="signUp__pass">
          <input type="password" name="" id="" />
        </span>
        <button disabled="disabled" className="singUp__button">
          Sign in
        </button>
        <span className="signUp__alt-register-tex">or continue with</span>
        <div className="singUp__container">
          <button type="button" className="signUp__alt-button signUp__alt-button_google"></button>
          <button type="button" className="signUp__alt-button signUp__alt-button_git"></button>
          <button
            type="button"
            className="signUp__alt-button signUp__alt-button_facebook"
          ></button>
        </div>
        <span className="signUp__register">
          Don’t have an account yet?{' '}
          <a
            href="*"
            target="_blank"
            rel="noopener noreferrer"
            className="signUp__register-link"
          >
            Register for free
          </a>
        </span>
      </form>
    </main>
  );
};

export default SignUp;
