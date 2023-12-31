import Image from 'next/image';

import glacierMountains from '@/assets/glacierMountains.jpg';

export function Sessions() {
    return (
        <section className="flex justify-center items-center mt-8 lg:mt-12 xl:px-[18rem] lg:px-[10rem] px-8 py-12 rounded-lg bg-white">
            <div className="w-1/2 hidden invisible lg:visible lg:block">
                <Image src={glacierMountains} alt='' className='w-2/3 max-h-[630px] object-cover mx-auto rounded-md' />
            </div>

            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl lg:w-[80%] lg:mb-12 mb-8">Como funciona uma Sessão</h2>
                <p className='text-lg lg:w-[80%] opacity-80'>Cada sessão é personalizada com base nas necessidades e objetivos do cliente. Durante a primeira sessão, criaremos um plano de tratamento e definiremos metas específicas. As sessões subsequentes envolvem discussão e reflexão sobre o progresso e problemas atuais.</p>
            </div>
        </section>
    );
}