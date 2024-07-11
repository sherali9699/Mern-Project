import React from 'react'

//imprting components
import Navbar from './Navbar';
import Footer from './Footer';

//images
import img from '../images/instructors/sajjid.png'

function Sajjid(){
    return(
        <div>
            <Navbar/>
            <Sajjid_Main/>
            <Footer/>
        </div>
    )
}

function Sajjid_Main(){
    return(
        <div className='global-sec'>
            <div className='container instructors'>
                <div className='d-flex justify-content-center'>
                    <div className='instructor-head'>
                    <h1>Ustad Sajid Hussain</h1>
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
                            <p>Hailing from a family of musical virtuosos, Sajid Hussain, is the disciple of his father, Ustad Fida Hussain, and his uncle, Ustad Kabir Khan. Belonging to the Senia Gharana that traces its roots to Mian Tansen, Sajid Hussain began to play the sitar at the age of 16. He has performed for radio, television and music festivals such as the All-Pakistan Music Conference. Sajid Hussain is one of the senior artistes and composers in the new ensemble, Tarz Group which comprises of classically trained musicians who present South Asian musical heritage in a new orchestral style. In addition to performances, Sajid Hussain has focused his attention on educating his children in the art that is his ancestral inheritance. He is one of the few remaining sitar maestros of Pakistan and his artistry lies not only in his playing but also in his magnificent compositions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sajjid;