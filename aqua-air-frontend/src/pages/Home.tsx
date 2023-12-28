import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgvid from '../assets/bg-vid.mp4';
import elbow from '../assets/macaroni-elbow.png';
import fusilli from '../assets/macaroni-fusilli.png';
import ScrollRevealElement from '../components/ScrollRevealElement';

function Home(){
    const [hyphenCount, setHyphenCount] = useState(0);

    useEffect(() => {
        const countHyphens = () => {
        const textContent = document.body.textContent as String;
        const hyphenRegex = /-/g;
        const matches = textContent.match(hyphenRegex);

        if (matches) {
            setHyphenCount((matches.length)+1);
        }
    };

    countHyphens();
  }, []);

    return(
        <div>
            <div className="main-content">
                <video autoPlay loop muted>
                <source src={bgvid} type="video/mp4"/>
                </video>
                <div className="container-content">
                    <div className="content-in-vid">
                        <h1>Offshore Rehydrated</h1>
                        <p>Aqua-Air is as bubbly as ever. Rehydrated with version H2O!<br />Now is the time to  take advantage, Philippines!</p>
                        <Link to='/crud'><button className="snd-btn btn py-3 px-5">Let's CRUD</button></Link>
                    </div>
                </div>
            </div>
            <div className="additional-content container">
                <img className="elbow" src={elbow} alt="Elbow" height="250rem" />
                <img className="fusilli" src={fusilli} alt="Fusilli" height="250rem" />
                <ScrollRevealElement>
                <h4>THERE ARE <span className="bold-txt">{hyphenCount}</span> HYPHENS SATISFIED!</h4>
                </ScrollRevealElement>
                <ScrollRevealElement>
                <h4 className='text-primary'>WHY AQUA-AIR SEASIA?</h4>
                </ScrollRevealElement>
                <ScrollRevealElement>
                <h2>It has distinct personality</h2>
                </ScrollRevealElement>
                <ScrollRevealElement>
                <a href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/"><button className='trd-btn btn'>SURVEY SAYS</button></a>
                </ScrollRevealElement>
            </div>
            <div className="add-on-content container">
            <ScrollRevealElement>
                <h4>GROW THY BUSYNESS</h4>
            </ScrollRevealElement>
            <ScrollRevealElement>
                <h2>Consider offshore utility now</h2>
            </ScrollRevealElement>
                <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                <ScrollRevealElement>
                    <p>Bacon ipsum dolor amet exercitation beef commodo minim non sunt. Shankle in ad excepteur, spare ribs enim bacon sed elit est chislic pork loin. Rump hamburger incididunt short loin. Bresaola pork chop bacon shankle flank. Chicken jerky ribeye dolore landjaeger ullamco porchetta shank pariatur kielbasa sirloin sausage strip steak jowl boudin. Burgdoggen shank cupidatat ball tip filet mignon voluptate. Veniam eu capicola hamburger quis ham spare ribs nulla elit meatball.</p>
                </ScrollRevealElement>
                </div>
                <div className='col-2'></div>
                </div>
                <ScrollRevealElement>
                    <a href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/"><button className='snd-btn btn'>CONTACT US</button></a>
                </ScrollRevealElement>
            </div>
        </div>
    )
}

export default Home;
