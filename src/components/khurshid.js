import React from 'react'

//imprting components
import Navbar from './Navbar';
import Footer from './Footer';

//images
import img from '../images/instructors/Khurshid.png'

function Khurshid(){
    return(
        <div>
            <Navbar/>
            <Khurshid_Main/>
            <Footer/>
        </div>
    )
}

function Khurshid_Main(){
    return(
        <div className='global-sec'>
            <div className='container instructors'>
                <div className='d-flex justify-content-center'>
                    <div className='instructor-head'>
                    <h1>Ustaad Khurshid Hussain</h1>
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
                            <p>One of the few doyens of tabla that remained in Pakistan until recently, Ustad Khurshid Hussain hailed from a family of musicians. His father, Mehboob Hussain, was a sarangi player and entrusted his friend, the great Ustad Habib Khan (also known as Baba Bibia Khan) to teach his son the art of playing tabla. Although Ustad Khurshid Hussain's bloodline is from the Ajrada Gharana, he learned tabla primarily from Ustad Habib Khan; a repository of all gharanas' styles and compositions. Ustad Khurshid Hussain worked with Radio Pakistan and performed live with some of the greatest musicians that Pakistan has witnessed, including Ustad Kabir Khan, Ustad Sharif Khan Poonchwale, Ustad Gulab Khan, Ustad Salamat Ali Khan, Ustad Fateh Ali Khan, Ustad Rais Khan, Mehdi Hassan, Iqbal Bano, Farida Khanum, and Ustad Sajid Hussain, alongside being the accompanist of choice for visiting artists from India.<br/><br/>Ustad Khurshid Hussain, a recipient of the Pride of Performance Award in 2019 by the Government of Pakistan, left an indelible mark on the world of music. He also played a crucial role in training the first cohort of tabla players at Habib University, furthering the aim of the Center for South Asian Music.<br/><br/>In loving remembrance of Ustad Khurshid Hussain, his legacy continues to resonate through the students he mentored and the rich musical tapestry he wove during his illustrious career. May his soul rest in peace.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Khurshid;