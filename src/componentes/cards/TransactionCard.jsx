import BigText from "../helper/BigText";
const TransactionCard = () =>{
    return(
        <section className="flex flex-col shadow-[12px_12px_24px_#b8bec7,-12px_-12px_24px_#ffffff]  rounded-xl p-6 bg-[#e0e5ec] gap-2"> 
            <div>
                {/* Titulo */}
                <BigText>Transacciones Recientes</BigText>

                
            </div>

          

        </section>
    )
}

export default TransactionCard;