export function About() {
    return (
        <section className="w-3/5 px-16 py-20 mx-auto my-6 rounded-lg bg-white">
            <h2 className="text-5xl mb-12">Sobre Mim</h2>

            <div className="flex gap-8">
                <div>
                    <h3 className="text-2xl mb-4">Formação</h3>
                    <p className="opacity-80">Graduado em Psicologia pela Universidade de São Paulo, com especialização em terapia cognitivo-comportamental.</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-4">Experiência</h3>
                    <p className="opacity-80">Tenho mais de 10 anos de experiência ajudando indivíduos e casais a superar problemas emocionais e melhorar a qualidade de vida.</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-4">Abordagem</h3>
                    <p className="opacity-80">Minha abordagem é baseada em terapia cognitivo-comportamental, que é uma terapia breve e focalizada na resolução de problemas.</p>
                </div>
            </div>
        </section>
    )
}