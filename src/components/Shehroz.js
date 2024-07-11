import React from 'react'

//imprting components
import Navbar from './Navbar';
import Footer from './Footer';

//images
import img from '../images/instructors/shehroz.png'

function Shehroz(){
    return(
        <div>
            <Navbar/>
            <Shehroz_Main/>
            <Footer/>
        </div>
    )
}

function Shehroz_Main(){
    return(
        <div className='global-sec'>
            <div className='container instructors'>
                <div className='d-flex justify-content-center'>
                    <div className='instructor-head'>
                    <h1>Shehroz Hussain</h1>
                    <h3>(Sitar instructor)</h3>
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
                            <p>A student of his father, the late sitar maestro Ustad Sajid Hussain, Shehroze has received a musical education steeped in the South Asian classical tradition. With unmatched musical mastery on the sitar and similar agility with his vocals, Shehroze has made a name for himself in the musical landscape of Karachi and Lahore in his teenage years. He has performed in every prestigious music conference and festival, namely All Pakistan Music Conference, Lahore Music Forum and Tehzeeb Foundation and he has been a vital performer since the inception of Tarz Group, an ensemble of classically trained musicians that are trying to rethink and reshape the way South Asian music is performed. With the ensemble, Shehroze has experimented with fusion music, juxtaposing genres with that of the South Asian aesthetic, and has also composed music to suit the <br/> new performance style. Alongside, he has also accompanied in lecture demos and courses on the music of South Asia at the Aga Khan University FAS/HASS first-year program for medical students, at T2F and at the Faiz International Festivals. Habib University is fortunate to have Shehroze continue his father's legacy as a great teacher and musician.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shehroz;