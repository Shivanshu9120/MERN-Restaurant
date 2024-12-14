import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const NotFound1 = () => {
  return (
    <>
      <section className='notFound' id='notFound'>
        <div className="container">
            <img src="/notFound.svg" alt="notFound " />
            <h1>LOOKS LIKE YOU ARE LOST</h1>
            <p>We cant not seem to find you the page you are looking for</p>
            <Link to={'/'}>Back to Home{" "} 
            <span> 
                <HiOutlineArrowNarrowRight/> 
            </span> 
            </Link>
        </div>
      </section> 
    </>
  )
}

export default NotFound1;
