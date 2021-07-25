import React from 'react';

import image from '../assets/img/dog404.svg'
import '../assets/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Dog illustration"/>
            <p className="text-not-found">
                Ooops, essa página não existe!
            </p>
        </main>
    );
}

export default Page404;