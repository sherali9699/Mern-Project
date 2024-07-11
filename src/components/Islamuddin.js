import React from 'react'

//imprting components
import Navbar from './Navbar';
import Footer from './Footer';

//images
import img from '../images/instructors/islamuddin.png';

function Islam(){
    return(
        <div>
            <Navbar/>
            <Islam_Main/>
            <Footer/>
        </div>
    )
}

function Islam_Main(){
    return(
        <div className='global-sec'>
            <div className='container instructors'>
                <div className='d-flex justify-content-center'>
                    <div className='instructor-head'>
                    <h1>Islamuddin Meer</h1>
                    <h3>(Violin instructor)</h3>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='instructor-pic'>
                    <img src={img} alt="Khusrshid Sahab" class="image-fluid" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 mx-auto'>
                        <div className='instructor-intro'>
                            <p>His initial instruction in music came from his brother-in-law, Ustad Nathu Khan, from whom he learned to play the harmonium. His knowledge of classical music was broadened by his father, Ustad Noor Khan, an established sarangi player for Radio Pakistan Karachi. Alongside, he was taught the violin by his elder brother, Abdul Shakoor. From 1969 to 1979, Islamuddin Meer served as a violinist for Radio Pakistan Karachi and for the Pakistani film industry. He subsequently had the opportunity to perform abroad as a violinist and ghazal singer. For 24 years he travelled back and forth, and during this time, maintained his position as composer for the audio company, Sonic. Since 2004 he has been in Pakistan, performing for television. In his extensive musical career, he has worked with prestigious musicians such as Nazar Hussain, Ustad Umrao Bundo Khan, Ustad Hamid Hussain, Ustad Kabir Khan, and Ustad Ghulam Mohiuddin Khan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Islam;