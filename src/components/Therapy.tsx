import Image from 'next/image';

import treatmentCycle from '@/assets/cognitivoComportamental.jpeg';
import hands from '@/assets/hands.png';
import couple from '@/assets/couple.jpg';
import onlineTherapy from '@/assets/onlineTherapy.jpg';

export function Therapy() {
    return (
        <section className="w-3/5 px-16 py-20 mx-auto mt-12 rounded-lg bg-white">
            <h2 className="text-5xl mb-12">Abordagem Terapêutica</h2>

            <div className="flex flex-wrap text-center justify-between gap-4">
                <div className='flex flex-col gap-4 flex-[1_0_30rem] mt-8'>
                    <Image src={treatmentCycle} alt='' className='aspect-video w-4/5 mx-auto rounded-md' />
                    
                    <h3 className='text-2xl w-1/2 mx-auto'>Terapia Cognitivo-Comportamental</h3>
                    <p className='px-8'>Minha abordagem de terapia é baseada na TCC, que identifica e modifica padrões de pensamento e comportamento disfuncionais.</p>
                </div>

                <div className='flex flex-col gap-4 flex-[1_0_30rem] mt-8'>
                     <Image src={hands} alt='' className='aspect-video w-4/5 mx-auto rounded-md' />
                    
                    <h3 className='text-2xl w-1/2 mx-auto'>Terapia Individual</h3>
                    <p className='px-8'>Eu trabalho individualmente com meus clientes para garantir que suas necessidades e objetivos sejam atendidos de maneira personalizada.</p>
                </div>

                <div className='flex flex-col gap-4 flex-[1_0_30rem] mt-8'>
                     <Image src={couple} alt='' className='aspect-video w-4/5 mx-auto rounded-md' />
                    
                    <h3 className='text-2xl w-1/2 mx-auto'>Terapia de Casais</h3>
                    <p className='px-8'>A terapia de casais pode ser uma ferramenta poderosa para melhorar a comunicação e o relacionamento.</p>
                </div>

                <div className='flex flex-col gap-4 flex-[1_0_30rem] mt-8'>
                     <Image src={onlineTherapy} alt='' className='aspect-video w-4/5 mx-auto rounded-md' />
                    
                    <h3 className='text-2xl w-1/2 mx-auto'>Terapia Online</h3>
                    <p className='px-8'>Ofereço a opção de terapia online para atender às necessidades e limitações dos meus clientes.</p>
                </div>
            </div>
        </section>
    )
}