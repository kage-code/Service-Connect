import React from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../components/ui/CommonHeader";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <CommonHeader title="ABOUT" onBack={() => navigate(-1)} />

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <section className="space-y-5 text-gray-900 mx-2 mt-10">
          <div >
            <h2 className="text-base font-semibold mb-2 ">dasdasdas</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe,
              stare movere, quadratum rotundum. At certe gravius. Nullus est
              igitur cuiquam dies natalis. Paulum, cum regem Persen captum
              adduceret, eodem flumine invectio?
            </p>

            <p className="text-sm leading-relaxed text-gray-700 mt-3">
              Quare hoc videndum est, possitne nobis hoc ratio philosophorum
              dare. Sed finge non solum callidum eum, qui aliquid improbe faciat,
              verum etiam praepotentem, ut M. Est autem officium, quod ita factum
              est, ut eius facti probabilis ratio reddi possit.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold mb-2">sljkhbhad</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Ut proverbia non nulla veriora sint quam vestra dogmata. Tamen
              aberramus a proposito, et, ne longius, purus, inguam, Piso, si ista
              mala sunt, placet. Omnes enim iucundum motum, quo sensus hilaretur.
              Cum id fugerit, re eadem defunctum, quae Peripatetici, verba.
              Quibusnam praetervis? Potentae hae esse dici, quidem hactenus; Si
              id dicis, viciamus. Qui ita affectus, beatum esse numquam probabis;
              Igitur neque stultorum quisquam beatus neque sapientium non beatus.
            </p>

            <p className="text-sm leading-relaxed text-gray-700 mt-3">
              Diocan, inquam, et quidem discendi causa magis, quam quo te aut
              Epicurum reprehensum velim. Dolor ergo, id est summum malum,
              metuetur semper, etiamsi non aderit.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
