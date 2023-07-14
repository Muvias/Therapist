export function Testimonials() {
    return (
        <section className="flex flex-col justify-centermt-12 px-8 md:px-[25rem] py-12 rounded-lg mt-8 md:mt-0 bg-white">
            <h2 className="text-3xl md:text-5xl mb-12">Depoimentos de Clientes</h2>

            <div className="flex flex-wrap gap-4">
                <div className="flex-1 p-4 bg-blue-100 rounded">
                    <h3 className="text-2xl mb-4">Carla, 25</h3>
                    <p className="">"Fazer terapia com a Vanessa mudou minha vida. Ela me ajudou a superar minha ansiedade e me deu as ferramentas para lidar com o estresse no trabalho."</p>
                </div>

                <div className="flex-1 p-4 bg-blue-100 rounded">
                    <h3 className="text-2xl mb-4">Felipe, 35</h3>
                    <p className="">"A Vanessa me ajudou a melhorar meu relacionamento com minha esposa. Aprendemos a nos comunicar melhor e resolver problemas juntos."</p>
                </div>

                <div className="flex-1 p-4 bg-blue-100 rounded">
                    <h3 className="text-2xl mb-4">Alice, 40</h3>
                    <p className="">"Eu estava lutando contra a depressão e me sentindo sozinha e confusa. A Vanessa me ajudou a identificar meus pensamentos negativos e a encontrar maneiras de me sentir mais positiva todos os dias."</p>
                </div>
            </div>
        </section>
    )
}