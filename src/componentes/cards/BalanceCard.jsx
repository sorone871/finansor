import BigText from "../helper/BigText";
const BalanceCard = () =>{
    return(
        <section className="flex flex-col shadow-[12px_12px_24px_#b8bec7,-12px_-12px_24px_#ffffff]  rounded-xl p-6 bg-[#e0e5ec] gap-2"> 
            <div>
                {/* Titulo */}
                <h2 className="text-slate-500">Balance Total</h2>
            </div>

            <div>
                {/* Dinero */}
                <BigText color="text-slate-600">
                    $4,250.75
                </BigText>
            </div>

            <div>
                <p className="text-green-500">
                    ↑ 12.5% desde el mes pasado
                </p>
            </div>
           

        </section>
    )
}

export default BalanceCard;