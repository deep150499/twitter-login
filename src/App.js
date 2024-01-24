import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter , faGoogle , faApple} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
        <div className="box">
          <div className="container">
             <FontAwesomeIcon icon={faXTwitter} className='logo'/>
             <h1>Sign in to X</h1>
             <button>
             <FontAwesomeIcon icon={faGoogle} className='btn-logo'/>
             Sign in with Google
             </button>
             <button>
             <FontAwesomeIcon icon={faApple} className='btn-logo'/>
             Sign in with Apple
             </button>
             <hr className='line'/>
             <span>Or</span>
             
             <form>
              <input type="text" placeholder='Phone, email address or username'/>
              <button className='next-btn'>Next</button>
              <button>Forgot Password?</button>
             </form>

             <p>Don't have an account? <a href="#">Sign Up</a></p>
           </div>
        </div>
    </div>
  );
}

export default App;
