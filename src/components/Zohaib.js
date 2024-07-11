import React from 'react'

//imprting components
import Navbar from './Navbar';
import Footer from './Footer';

//images
import img from '../images/instructors/zohaib.png'

function Zohaib(){
    return(
        <div>
            <Navbar/>
            <Zohaib_Main/>
            <Footer/>
        </div>
    )
}

function Zohaib_Main(){
    return(
        <div className='global-sec'>
            <div className='container instructors'>
                <div className='d-flex justify-content-center'>
                    <div className='instructor-head'>
                    <h1>Zohaib Hussain</h1>
                    <h3>(Tabla instructor)</h3>
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
                            <p>Zohaib Hussain is the son of (late) Ustad Khursheed Hussain and is the inheritor of the musical heritage in his father's bloodline. He started learning tabla at a very early age and before he knew it, by the age of 16, he was training for classical tabla repertoire. Assisted by his father's senior most disciples, Yousuf Kerai, Zohaib has performed live for the ensemble, Tarz Group, and for the All-Pakistan Music Conference. His playing carries not only the flavors of his father's techniques but also employs rhythmic nuances from other tabla players that inspire him.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zohaib;