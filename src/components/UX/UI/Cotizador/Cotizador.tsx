import { Calculator } from "./Calculator"
import { CotizadorAccordions } from "./CotizadorAccordions"

export const Cotizador = () => {
  return (
    <section className=" min-w-screen rounded-4xl bg-slate-50 px-4">
      <div className="flex flex-col sm:grid sm:grid-cols-2 max-w-screen-lg m-auto py-3 px-4 gap-4">
        <Calculator/>
        <CotizadorAccordions/>
      </div>

    </section>
  )
}
