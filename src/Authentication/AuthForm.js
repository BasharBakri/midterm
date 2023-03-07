import { Form, Link } from 'react-router-dom';

function AuthForm() {


  return (
    <>
      <Form method="post">
        <h2>Login</h2>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>

        <div >
          <Link to='/?1'>
            1
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;