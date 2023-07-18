export function Testimonials() {
    return (
        <section className="flex flex-col justify-centermt-12 px-8 xl:px-[25rem] lg:px-[10rem] py-12 mt-8 lg:mt-0 rounded-lg bg-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12">Depoimentos de Clientes</h2>

            <div className="flex flex-wrap gap-4">
                <div className="lg:flex-1 flex-[1_0_250px] p-4 bg-blue-100 rounded">
                    <h3 className="text-2xl mb-4">Carla, 25</h3>
                    <p className="">"Fazer terapia com o Júnior mudou minha vida. Ele me ajudou a superar minha ansiedade e me deu as ferramentas para lidar com o estresse no trabalho."</p>
                </div>

                <div className="lg:flex-1 flex-[1_0_250px] p-4 bg-blue-100 rounded">
                    <h3 className="text-2xl mb-4">Felipe, 35</h3>
                    <p className="">"O Júnior me ajudou a melhorar meu relacionamento com minha esposa. Aprendemos a nos comunicar melhor e resolver problemas juntos."</p>
                </div>

                <div className="lg:flex-1 flex-[1_0_250px] p-4 bg-blue-100 rounded">
                    <h3 className="text-2xl mb-4">Alice, 40</h3>
                    <p className="">"Eu estava lutando contra a depressão e me sentindo sozinha e confusa. O Júnior me ajudou a identificar meus pensamentos negativos e a encontrar maneiras de me sentir mais positiva todos os dias."</p>
                </div>
            </div>
        </section>
    )
}