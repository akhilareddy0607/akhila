import './Home.css'
function Home(){
    return(
        <div className="main-container">
            <div className="sub-container">
                <h1 className='heading'> CRAFT YOUR RESUME</h1>
                <p className='para'>build,preview and download your beautiful resume</p>
                <a href="/edit">
                <button className='button'>Get Started</button></a>
            </div>
        </div>
    )
}
export default Home