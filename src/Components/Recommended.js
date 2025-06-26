import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Recommended(){
  return(
    <div class="recommended">
        <h1 class="recommended__title">Recommended For You</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={c1} alt="Course1"></img>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr. Angela Yu</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt="Course1"></img>
                <h3>Python for Data Science and Machine Learning Bootcamp</h3>
                <p>Pierian Training</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt="Course1"></img>
                <h3>The Python Bootcamp From Zero to Hero in Python</h3>
                <p>Jose Portilla</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c4} alt="Course1"></img>
                <h3>Machine Learning AI, Python & R + ChatGPT Prize [2024]</h3>
                <p>Kirill Eremenko</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>
        </div>
    </div>
  )
}


export default Recommended