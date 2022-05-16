import './App.css';
import ThumbnailImage from './components/Thumbnail/thumbnail.js';
import PersonalInfo from './components/Personal-Info/personal-info.js'
import Socials from './components/Socials/socials';
import AboutInterests from './components/About-Interests/about-interests';

function App() {
  return (
    <div className="card-container">
      <ThumbnailImage/>
      <PersonalInfo/>
      <Socials/>
      <AboutInterests/>
    </div>
  );
}

export default App;
