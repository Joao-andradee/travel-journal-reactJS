import './App.css';
import data from './data.js'
import MyNav from './comp/myNav.js';
import MainContent from './comp/mainContent.js'

function App() {
  const travels = data.map(info=>{
    return(
      <MainContent
        info = {info}
      />
    )
  })
  return (
    <div className="App">
      <MyNav/>
      <section>
        {travels}
      </section>
    </div>
  );
}

export default App;
