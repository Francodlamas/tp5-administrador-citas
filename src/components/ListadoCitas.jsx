import Cita from "./Citas"

export default function ListadoCitas({ citas, setCitas }) {
    return (
        <div className="flex-1 p-16 md:pl-4 max-w-[600px]">
            <h2 className="text-3xl font-semibold text-center pb-16">ADMINISTRA TUS CITAS</h2>
            <div className="flex flex-col gap-4">{citas.map((cita, i) => <Cita
                {...cita}
                delete={() => {
                    const copy = [...citas]
                    copy.splice(i, 1)
                    setCitas(copy)
                }}
                key={i}
            />)}</div>
        </div>
    )
}