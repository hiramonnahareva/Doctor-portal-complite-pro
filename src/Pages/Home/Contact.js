import React from 'react';
import image from '../../assets/images/appointment.png';
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <section>
            <div style={{background:`url(${image})`}} className='text-center py-20 my-5'>
           <div>
           <h4 className='text-xl font-bold text-secondary'>Contact Us</h4>
           <h2 className='text-3xl text-white font-bold py-3'>Stay Connected With Us</h2>
           <form className='mx-auto w-full p-5 text-xl font-thin'>
           <input className='lg:w-96 h-8 rounded-lg p-5 my-2' placeholder='Email Address' type="text" />
           <br />
           <input className='lg:w-96 h-8 rounded-lg p-5 my-2' placeholder='Subject' type="text" />
           <br />
           <textarea className='my-5 mx-15 rounded-lg lg:w-96 h-32 p-5' placeholder='Your message' name="" id="" cols="30" rows="10"></textarea>
           <br />
           <Button>Submit</Button>
           </form>
           </div>
         </div>
        </section>
    );
};

export default Contact;