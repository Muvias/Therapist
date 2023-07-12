export function Expertise() {
    return (
        <section className="w-3/5 px-16 py-20 mx-auto mt-12 rounded-lg bg-white">
            <h2 className="text-5xl mb-12">Especialidades de Atendimento</h2>

            <div className="flex">
                <div>
                    <h3 className="text-2xl mb-4">Depressão</h3>
                    <ul className="flex flex-col gap-2 list-disc w-3/4 ml-6">
                        <li>Identificação de pensamentos negativos automáticos</li>
                        <li>Desenvolvimento de estratégias para lidar com emoções difíceis</li>
                        <li>Reestruturação cognitiva</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl mb-4">Ansiedade</h3>
                    <ul className="flex flex-col gap-2 list-disc w-3/4 ml-6">
                        <li>Desenvolvimento de ferramentas para lidar com a ansiedade</li>
                        <li>Técnicas de controle da respiração e relaxamento</li>
                        <li>Mindfulness</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl mb-4">Relacionamentos</h3>
                    <ul className="flex flex-col gap-2 list-disc w-3/4 ml-6">
                        <li>Comunicação efetiva</li>
                        <li>Resolução de conflitos</li>
                        <li>Desenvolvimento de conexão emocional</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}