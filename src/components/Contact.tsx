import Image from "next/image";

import bgContact from '@/assets/bg-mountain.jpg';

export function Contact() {
    return (
        <section className="relative">
            <div className="xl:w-3/5 lg:w-4/5 lg:px-16 px-8 lg:py-20 py-12 mx-auto lg:mt-12">
                <h2 className="text-5xl mb-12 brightness-75">Contato</h2>
                
                <p className="text-lg text-[#15213F]">Entre em contato comigo hoje para marcar sua primeira consulta. Vamos trabalhar juntos para ajudá-lo a alcançar seus objetivos e superar desafios emocionais.</p>
            </div>

            <Image src={bgContact} alt="" className="absolute w-full h-full top-0 left-0 object-cover opacity-20 -z-10" />
        </section>
    )
}