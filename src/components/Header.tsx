import Image from "next/image";

import therapist from '@/assets/therapist2.jpg';

export function Header() {
    return (
        <section className="flex justify-center items-center py-8 px-8 md:px-16 bg-white md:gap-16">
            <div className="md:max-w-[40%] lg:max-w-[30%]">
                <h1 className="mb-8 text-5xl md:text-6xl">Terapeuta</h1>
                <p className="md:text-lg">Bem-vindo ao meu site! Sou especialista em terapia cognitivo-comportamental e estou aqui para ajudá-lo a alcançar seus objetivos e superar desafios emocionais.</p>
            </div>

            <div className="md:visible md:block hidden invisible">
                <Image src={therapist} height={400} alt="Foto fictícia do terapeuta" className="rounded-xl" />
            </div>
        </section>
    )
}