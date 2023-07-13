import Image from "next/image";

import bgContact from '@/assets/bg-mountain.jpg';

export function Contact() {
    return (
        <section className="relative">
            <div className="w-3/5 px-16 py-20 mx-auto mt-12">
                <h2 className="text-5xl mb-12 brightness-75">Contato</h2>
                
                <p className="text-lg text-[#15213F]">Entre em contato comigo hoje para marcar sua primeira consulta. Vamos trabalhar juntos para ajudá-lo a alcançar seus objetivos e superar desafios emocionais.</p>
            </div>

            <Image src={bgContact} alt="" className="absolute w-full h-full top-0 left-0 object-cover opacity-20 -z-10" />
        </section>
    )
}