import Image from 'next/image';

import glacierMountains from '@/assets/glacierMountains.jpg';

export function Sessions() {
    return (
        <section className="flex justify-center items-center mt-12 px-[20rem] py-12 rounded-lg bg-white">
            <div className="w-1/2">
                <Image src={glacierMountains} alt='' className='w-2/3 mx-auto rounded-md' />
            </div>

            <div className="w-1/2">
                <h2 className="text-5xl w-[80%] mb-12">Como funciona uma Sessão</h2>
                <p className='text-lg w-[80%] opacity-80'>Cada sessão é personalizada com base nas necessidades e objetivos do cliente. Durante a primeira sessão, criaremos um plano de tratamento e definiremos metas específicas. As sessões subsequentes envolvem discussão e reflexão sobre o progresso e problemas atuais.</p>
            </div>
        </section>
    );
}