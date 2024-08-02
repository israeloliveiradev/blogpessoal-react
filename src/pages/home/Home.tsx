import './Home.css';

function Home() {

    const handleClick = () => {
        const image = document.querySelector('.img-principal');
        if (image) {
            image.classList.toggle('girar');
        }
    };

    return (
        <main>
            <div className='interface'>
                <div className="foto-israel">
                    <article><h1>HOME</h1></article>
                    <img 
                        src="https://i.im.ge/2024/08/02/fQooFz.FT-ISRAEL.png" 
                        alt="teste" 
                        className='img-principal' 
                        onClick={handleClick} 
                    />
                </div>
            </div>
        </main>
    );
}

export default Home;
