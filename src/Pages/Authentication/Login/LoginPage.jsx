import { Helmet } from 'react-helmet';
import Login from './Login';

const LoginPage = () => {
 return (
  <div>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name='description' content='TechnoLiz, a famous Tech Shop' />
      </Helmet>
      <div className="hero min-h-screen" style={{
       backgroundImage: 'url(https://i.ibb.co/Yh6H0cG/hello.png)',
       backgroundSize:'cover',
       backgroundRepeat:'no-repeat',
       backgroundPosition:'center bottom'
       }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
   <Login></Login>
  </div>
</div>
  </div>
 );
};

export default LoginPage;