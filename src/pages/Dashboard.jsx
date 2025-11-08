import BalanceCard from "../componentes/cards/BalanceCard";
import IngresosGastos from "../componentes/cards/IngresosGastos";
import TransactionCard from "../componentes/cards/TransactionCard";
const DashBoard = () => {
    return(
        <main className="container mx-auto p-6">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <BalanceCard />
         <IngresosGastos />
         <TransactionCard />

      </div>
    </main>
    )
}

export default DashBoard;