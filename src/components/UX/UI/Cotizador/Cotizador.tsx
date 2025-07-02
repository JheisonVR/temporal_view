import { Calculator } from "./Calculator"
import { CotizadorAccordions } from "./CotizadorAccordions"

export const Cotizador = () => {
  return (
    <section className="grid grid-cols-2 max-w-screen-lg rounded-lx bg-slate-50 m-auto py-3 px-2 gap-4">
        <Calculator/>
        <CotizadorAccordions/>

    </section>
  )
}
