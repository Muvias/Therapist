import Image from "next/image";

import therapist from '@/assets/therapist2.jpg';

export function Header() {
    return (
        <section className="flex justify-center items-center py-8 bg-white gap-16">
            <div className="max-w-[30%]">
                <h1 className="mb-8 text-6xl">Terapeuta</h1>
                <p className="text-lg">Bem-vindo ao meu site! Eu sou especialista em terapia cognitivo-comportamental e estou aqui para ajudá-lo a alcançar seus objetivos e superar desafios emocionais.</p>
            </div>

            <div>
                <Image src={therapist} height={400} alt="Foto fictícia do terapeuta" className="rounded-xl" />
            </div>
        </section>
    )
}