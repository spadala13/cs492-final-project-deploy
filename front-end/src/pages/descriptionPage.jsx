import { useNavigate} from 'react-router-dom'

function DescriptionPage() {
  let navigate = useNavigate();


  return (
    <div className="DescriptionPage  bg-blue-950 min-h-screen text-neutral-100 text-left">
      <img className='descriptionPage-HeaderImg' src="https://i.ibb.co/dQXS0KH/description-Page.webp" height="400"/>
      <br></br>
      <div className='descriptionPage-TextContainer'>
        <h2 className="text-center font-extrabold underline text-pink-400">The Hidden Bias: An Interactive Exploration of AI in Hiring</h2>
        <p className='descriptionPage-text text-left'>
          
          Algorithms seem efficient, neutral tools.  But what happens when the data used to train AI reflects the all-too-human biases of our world?  
          In this interactive game, you'll step into the role of a hiring manager and experience firsthand how AI can amplify prejudice in the workplace, often with the best of intentions.

        </p>
        <h3 className="font-bold text-pink-400">The Challenge</h3>
        <p>
          Your decisions matter. As you create job postings, screen resumes, conduct interviews, and make offers, you'll confront subtle -and not so subtle- scenarios where seemingly objective AI tools perpetuate discrimination. 
          Can you build a fair and inclusive team, or will unconscious biases derail your efforts?
        </p>

        <section className="feature-section">
          <h3 className="font-bold text-pink-400 gap-6">Features</h3>
          <ul className="feature-list">
            <li className="feature-item">
              <p><strong>Real-World Inspiration:</strong> Discover how gender, sexual identity, minority status, age, and even a gap on a resume can lead to biased outcomes, inspired by genuine cases of AI discrimination.</p>
              
            </li>
            <li className="feature-item">
              <p><strong>The Ripple Effect: </strong> Experience how even minor choices have consequences throughout the hiring process.</p>
            </li>
            <li className="feature-item">
              <p><strong>Feedback Loops:</strong> Get insights into your decisions, helping you identify common traps and understand the complexities of AI ethics.</p>
              
            </li>
          </ul>
        </section>
        <h3 className="font-bold text-pink-400">Why Play?</h3>
        <p>
          Whether you're a job seeker, a future manager, or simply someone concerned about technology's impact on society, this game will challenge your assumptions. Play to:

          Raise awareness about the unintended consequences of AI in hiring.
          Develop empathy for those impacted by discriminatory algorithms.
          Practice identifying and overcoming bias in a safe environment.
        </p>
        <br></br>
        <br></br>
        <div className='text-center'>
          <button className="bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-4 border border-sky-900 rounded content-center mt-6"
            onClick={() => navigate('/startGame')}>
              Start Playing, Start Learning!
            </button>
        </div>
        <br></br>
      </div>

    </div>
  );
}

export default DescriptionPage;
