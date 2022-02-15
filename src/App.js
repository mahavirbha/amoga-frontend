import Post from './Post.js';
import './App.css';
import Birthday from './Birthday.js';
import Tweet from './Tweet.js';

function App() {
  return (
    <div className="App">
      <Tweet />
      <Post />
      <Birthday />
    </div>
  );
}

export default App;
