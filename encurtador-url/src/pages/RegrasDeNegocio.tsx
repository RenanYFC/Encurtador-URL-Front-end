import { BlackGlassContainer } from "../components/BlackGlassContainer/BlackGlassContainer"

const RegrasDeNegocio = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[var(--primary)] text-4xl font-bold">Regras de Negócio</h1>
            <ul className="flex flex-col gap-5">
                <li className="mt-8">
                    <BlackGlassContainer className="p-4 rounded-md">
                        <p className="font-bold text-lg mb-1">Fácil de Ler</p>
                        <p>Duração de <span className="text-[var(--primary)] font-bold">2 horas</span></p>
                        <p>1.102.500 links possíveis</p>
                    </BlackGlassContainer>
                </li>
                <li>
                    <BlackGlassContainer className="p-4 rounded-md">
                        <p className="font-bold text-lg mb-1">5 Caracteres</p>
                        <p>Duração de <span className="text-[var(--primary)] font-bold">12 horas</span></p>
                        <p>9.161.132.832 links possíveis</p>
                    </BlackGlassContainer>
                </li>
                <li>
                    <BlackGlassContainer className="p-4 rounded-md">
                        <p className="font-bold text-lg mb-1">6 Caracteres</p>
                        <p>Duração de <span className="text-[var(--primary)] font-bold">24 horas</span></p>
                        <p>56.800.235.584 links possíveis</p>
                    </BlackGlassContainer>
                </li>
                <li>
                    <BlackGlassContainer className="p-4 rounded-md">
                        <p className="font-bold text-lg mb-1">7 Caracteres</p>
                        <p>Duração de <span className="text-[var(--primary)] font-bold">2 dias</span></p>
                        <p>3.521.614.606.208 links possíveis</p>
                    </BlackGlassContainer>
                </li>
            </ul>
        </div>
    )
}

export {RegrasDeNegocio}