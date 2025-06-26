import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"
import c9 from "../assets/images/c9.jpg"
import c10 from "../assets/images/c10.jpg"
import c11 from "../assets/images/c11.jpg"
import c12 from "../assets/images/c12.jpg"


function Popular(){
  return(
    <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick The Best for You</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c5} alt="Course1"></img>
                <h3>R Programming A-Z™: R For Data Science With Real Exercises!</h3>
                <p>Dr. Angela Yu</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c6} alt="Course1"></img>
                <h3>NLP - Natural Language Processing with Python</h3>
                <p>Pierian Training</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c7} alt="Course1"></img>
                <h3>Modern Natural Language Processing in Python</h3>
                <p>Jose Portilla</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c8} alt="Course1"></img>
                <h3>Become a Probability & Statistics Master</h3>
                <p>Kirill Eremenko</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c9} alt="Course1"></img>
                <h3>Artificial Intelligence: Reinforcement Learning in Python</h3>
                <p>Dr. Angela Yu</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c10} alt="Course1"></img>
                <h3>ChatGPT Complete Guide: Learn Midjourney, ChatGPT 4 & More</h3>
                <p>Pierian Training</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c11} alt="Course1"></img>
                <h3>Complete Machine Learning with R Studio - ML for 2024</h3>
                <p>Jose Portilla</p>
                <p>4.6⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>

            <div class="course-card">
                <img src={c12} alt="Course1"></img>
                <h3>Automate the Boring Stuff with Python Programming</h3>
                <p>Kirill Eremenko</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>499 <del>3,099</del></p>
            </div>
        </div>
    </div>
  )
}


export default Popular