export function Faq() {
    return (
        <section className="flex flex-col justify-centermt-12 px-[25rem] py-12 rounded-lg bg-white">
            <h2 className="text-5xl mb-12">FAQs</h2>

            <div className="flex flex-wrap gap-4">
                <div className="flex-1 p-2">
                    <h3 className="text-2xl mb-4">Quanto tempo dura uma sessão?</h3>
                    <p className='text-lg opacity-80'>Cada sessão dura entre 50 e 60 minutos, dependendo das necessidades e objetivos do cliente.</p>
                </div>

                <div className="flex-1 p-2">
                    <h3 className="text-2xl mb-4">Qual é a duração do tratamento?</h3>
                    <p className='text-lg opacity-80'>O tempo de tratamento pode variar de alguns meses a um ano, variando de pessoa para pessoa.</p>
                </div>

                <div className="flex-1 p-2">
                    <h3 className="text-2xl mb-4">Posso fazer terapia online?</h3>
                    <p className='text-lg opacity-80'>Sim, ofereço a opção de terapia online para atender às necessidades e limitações dos meus clientes.</p>
                </div>

                <div className="flex-1 p-2">
                    <h3 className="text-2xl mb-4">Qual é o seu horário disponível?</h3>
                    <p className='text-lg opacity-80'>Meu horário é flexível e eu posso marcar sessões em vários horários, dependendo da disponibilidade na agenda.</p>
                </div>
            </div>
        </section>
    )
}