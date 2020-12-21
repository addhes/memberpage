import React, {useEffect} from 'react';

import Header from "../parts/Headers"
import Footer from "../parts/Footer"
import LoginForm from '../parts/LoginForm'

export default function Login() {
    useEffect(() => {
        window.scroll(0,0);
    }, []);
    return (
        <>
            <section className="container mx-auto pt-10 w-10/12 guest-page">
                <Header onLight></Header>
            </section>
            <section className="container mx-auto px-4 pt-10">
                <LoginForm></LoginForm>
            </section>
            <section className="mt-24 bg-indigo-1000 py-12">
                <Footer></Footer>
            </section>
        </>
    )
}
