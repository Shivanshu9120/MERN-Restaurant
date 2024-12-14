import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing that we arev serious about is providing an delicious experience </p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt quos cum temporibus, accusamus ut maxime sunt nulla? Dignissimos delectus sequi voluptatum optio eum mollitia, accusantium quo necessitatibus voluptas est veniam repellendus fugiat distinctio, dolor nesciunt numquam vel, veritatis iusto odit harum iste ab maxime? Iusto eius labore, dicta reprehenderit enim sed quod commodi, nostrum quidem praesentium tenetur nobis, quia sapiente perferendis suscipit quasi. Sunt repellat fugiat saepe mollitia enim iusto accusantium, architecto magni sapiente minima explicabo eaque dolorum libero asperiores beatae quaerat blanditiis expedita sequi, illo autem veniam id. Sunt ipsa omnis quis dolores molestias neque nemo veniam perspiciatis!
                </p>
                <Link to={"/"}>Explore Menu <span>
                    <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
            </div>
            <div className="banner">
                <img src='/about.png' alt='about'/>
            </div>
        </div>
      
    </section>
  )
}

export default About
