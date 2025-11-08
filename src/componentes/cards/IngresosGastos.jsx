import BigText from "../helper/BigText";
const IngresosGastos = () =>{
    return(
        <section className="flex flex-col shadow-[12px_12px_24px_#b8bec7,-12px_-12px_24px_#ffffff]  rounded-xl p-6 bg-[#e0e5ec] gap-2"> 
            <div className="flex justify-between ">
                {/* Ingresos */}
            
                <h2 className="text-slate-500">Ingresos</h2>

                <BigText color="text-green-500">$2,850.00</BigText>
            </div>

            <div className="flex justify-between ">
                {/* Gastos */}
            
                <h2 className="text-slate-500">Gastos</h2>
                <BigText color="text-red-600">$1,420.50</BigText>
            </div>

            <div className="flex justify-between ">
                {/* Ahorro */}
                <h2 className="text-slate-500">Ahorro</h2>
                <BigText color="text-blue-600">$429.25</BigText>
            </div>
           

        </section>
    )
}

export default IngresosGastos;