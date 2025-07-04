import { AlternativeCountries,  Cotizador, Ecosistema } from "@/components/UX";
import SecondIntGlobe from "@/components/UX/UI/Hero/SecondIntGlobe";

export default function Home() {
  return (
    <section
      className="bg-[linear-gradient(120deg,_#1E1C2E_0%,_#323042_60%,_#545362_100%)] mt-10 overflow-x-hidden relative"
      style={{
      backgroundImage: "linear-gradient(120deg, #1E1C2E 0%, #323042 60%, #545362 100%), url('/assets/bgPoints.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      }}
    >
      <SecondIntGlobe/>
      <Cotizador/>
      <Ecosistema/>
      <AlternativeCountries/>
      {/* <Angilexa/> */}
    </section>

  );
}
