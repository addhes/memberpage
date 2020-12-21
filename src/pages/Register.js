import React, {useEffect} from 'react';

import Header from "../parts/Headers"
import Footer from "../parts/Footer"
import RegisterForm from '../parts/RegisterForm'

export default function Login() {
    useEffect(() => {
        window.scroll(0,0);
    }, []);
    return (
        <>
            <section className="container mx-auto pt-5 w-10/12 guest-page">
                <Header onLight></Header>
            </section>
            <section>
                <RegisterForm></RegisterForm>
            </section>
            <section className="mt-24 bg-indigo-1000 py-12">
                <Footer></Footer>
            </section>
        </>
    )
}
