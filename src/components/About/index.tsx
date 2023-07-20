import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat iusto neque, quisquam distinctio praesentium ipsum odio? Aspernatur doloribus perspiciatis ab quam! Repellendus, quod? Veritatis eaque architecto maiores debitis sapiente minima.</p>

        <div className="d-flex justify-content-center w-100 gap-2">
            <Link onClick={() => {
                    localStorage.clear()
                }} to='/login' preventScrollReset={true}>Login</Link>

            <Link to='/' preventScrollReset={true}>CountDownTimer</Link>   

        </div>
    </div>
  )
}

export default About