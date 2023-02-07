import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <div class="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
        <div class="w3-row-padding">
          <Profile/>
          <div class="w3-twothird">
            <Experience/>
            <Education/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
