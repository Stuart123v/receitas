import React, { useState } from 'react';
import { CheckCircle2, XCircle, X, AlertTriangle, Apple, ChevronDown, Monitor, Smartphone, Tablet, Printer, Heart, ThumbsUp, RefreshCw, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const recipeImages = [
  "https://i.postimg.cc/WTdqCFXC/rqn-foto4-300x216-(1).webp",
  "https://i.postimg.cc/VfsdRdJh/rqn-foto6-300x216-(1).webp",
  "https://i.postimg.cc/GRzQ1Dx9/rqn-foto5-300x216-(1).webp",
  "https://i.postimg.cc/TT8jcJfH/rqn-foto1-300x216-(1).webp",
  "https://i.postimg.cc/dJ82NZ0m/rqn-foto3-300x216-(1).webp",
  "https://i.postimg.cc/7HQ0JgB8/rqn-foto2-300x216-(1).webp",
  "https://i.postimg.cc/dwnv242J/rqn-foto9-300x216-(1).webp",
  "https://i.postimg.cc/T2fMmDh9/rqn-foto10-300x216-(1).webp",
  "https://i.postimg.cc/sVhtNchW/rqn-foto11-300x216-(1).webp",
  "https://i.postimg.cc/tqd8X4D3/rqn-foto7-300x216-(1).webp",
  "https://i.postimg.cc/V113KXLr/15-300x216-(1).webp",
  "https://i.postimg.cc/fZK1pkVz/rqn-foto8-300x216-(1).webp"
];

const testimonialImages = [
  "https://i.postimg.cc/yVs4GGFD/Chat-GPT-Image-7-mar-2026-20-31-25.png",
  "https://i.postimg.cc/54Kh6NDn/Chat-GPT-Image-7-mar-2026-20-32-37.png",
  "https://i.postimg.cc/zJJ67gNm/Chat-GPT-Image-7-mar-2026-20-34-52.png",
  "https://i.postimg.cc/NgMbL7tS/Chat-GPT-Image-7-mar-2026-20-36-41.png"
];

export default function App() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Top Banner */}
      <div className="bg-amber-200 text-amber-900 py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>¡Usa el código de cupón <strong>MIHIJOSANO</strong> y obtén un descuento exclusivo! Sólo hoy: <strong>{formattedDate}</strong></span>
        <AlertTriangle className="w-4 h-4 shrink-0" />
      </div>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-stone-800 mb-4 leading-tight uppercase tracking-tight">
          DESCUBRE EL MÉTODO COMPROBADO PARA QUE TU HIJO <span className="text-orange-600">COMA SALUDABLE TODOS LOS DÍAS</span> (SIN PELEAS Y SIN ESTRÉS)
        </h1>
        <p className="text-lg md:text-2xl text-red-600 font-bold mb-8">
          Incluso si es extremadamente selectivo o si no tienes tiempo para cocinar.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 text-left max-w-2xl mx-auto mb-8 space-y-4 text-stone-700 text-lg">
          <p className="flex items-start gap-2"><span className="text-red-500 font-bold">❌</span> ¿Estás cansada de cocinar con amor y que tu hijo rechace el plato?</p>
          <p className="flex items-start gap-2"><span className="text-red-500 font-bold">❌</span> ¿Te sientes culpable por darle comida procesada por falta de tiempo?</p>
          <p className="flex items-start gap-2"><span className="text-red-500 font-bold">❌</span> ¿Las comidas se han convertido en un campo de batalla?</p>
          <p className="font-bold text-green-700 mt-4 text-xl text-center">¡Basta de sufrir! Existe un atajo directo hacia comidas felices y nutritivas.</p>
        </div>

        {/* Mockup Image */}
        <div className="relative max-w-3xl mx-auto mb-8 flex justify-center">
           <img src="https://i.postimg.cc/bzKrb3QC/Chat-GPT-Image-7-mar-2026-16-20-01-removebg-preview.png" alt="Recetas Saludables para Niños" className="w-full max-w-2xl h-auto object-contain drop-shadow-2xl" />
        </div>

        <CTAButton text="¡SÍ! ¡QUIERO RECETAS SALUDABLES Y PRÁCTICAS YA!" />
      </header>

      {/* Sabias que */}
      <section className="bg-amber-50 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
            <h2 className="text-2xl font-bold text-amber-600 mb-6 flex items-center gap-2">
              <span className="text-3xl">💡</span> ¿SABÍAS QUÉ?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <p className="text-stone-700">La dieta de un niño puede incidir directamente en su capacidad de aprendizaje;</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <p className="text-stone-700">También influye directamente en su comportamiento y concentración;</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <p className="text-stone-700">Comer bien desde una edad temprana los prepara para un futuro más saludable y feliz;</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sliding Images */}
      <section className="py-16 max-w-full overflow-hidden text-center bg-stone-50">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-700 mb-10 px-4">
          RECETAS QUE DELEITAN EL PALADAR <span className="text-orange-600">Y CUIDAN LA SALUD DE TU HIJO:</span>
        </h2>
        <div className="relative w-full overflow-hidden flex">
          <div className="flex w-max animate-slide-right">
            {[...recipeImages, ...recipeImages].map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Receta ${index + 1}`} 
                className="w-64 md:w-80 h-auto object-cover rounded-xl shadow-md mx-3 flex-shrink-0 border-4 border-white" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-700 mb-8">
            RECETAS QUE HACEN LAS COMIDAS <span className="text-orange-600">MÁS SALUDABLES, SABROSAS Y SIN INGREDIENTES QUE PROVOQUEN PREOCUPACIONES.</span>
          </h2>
          <div className="mb-8">
            <CTAButton text="SÍ, QUIERO RECETAS SALUDABLES PARA EMPEZAR HOY" />
          </div>
          <ul className="text-left space-y-4 max-w-xl mx-auto text-stone-700">
            <li className="flex items-center gap-3"><div className="bg-red-100 p-1.5 rounded-full shrink-0"><X className="w-5 h-5 text-red-600" /></div> Opciones sin azúcar, sin gluten y sin lactosa.</li>
            <li className="flex items-center gap-3"><div className="bg-pink-100 p-1.5 rounded-full shrink-0"><Heart className="w-5 h-5 text-pink-600" /></div> Delicias saludables dulces y saladas que le ENCANTARÁN a tu hijo.</li>
            <li className="flex items-center gap-3"><div className="bg-orange-100 p-1.5 rounded-full shrink-0"><ThumbsUp className="w-5 h-5 text-orange-600" /></div> Textura y sabor iguales a las versiones tradicionales.</li>
            <li className="flex items-center gap-3"><div className="bg-green-100 p-1.5 rounded-full shrink-0"><Check className="w-5 h-5 text-green-600" /></div> Probado y aprobado con instrucciones completas paso a paso</li>
            <li className="flex items-center gap-3"><div className="bg-blue-100 p-1.5 rounded-full shrink-0"><RefreshCw className="w-5 h-5 text-blue-600" /></div> Actualizaciones frecuentes de recetas</li>
          </ul>
        </div>
      </section>

      {/* Aprenderas a hacer */}
      <section className="py-16 bg-amber-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-700 mb-12">
            APRENDERÁS<br/><span className="text-orange-600">A HACER:</span>
          </h2>

          <div className="space-y-8">
            <RecipeCard
              image="https://i.postimg.cc/x03P8ND9/image.png"
              title="GALLETAS DE AVENA Y PLÁTANO"
              desc="Basta de galletas procesadas con etiquetas que ni siquiera entendemos. Aprende una receta que nutre con cariño y atención."
            />
            <RecipeCard
              image="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80"
              title="PANQUEQUE DE AVENA Y PLÁTANO"
              desc="¿Tienes poco tiempo? Este panqueque está listo en minutos y te salvará el desayuno: sabroso, nutritivo y sin remordimientos para tu hijo."
            />
            <RecipeCard
              image="https://i.postimg.cc/V1ZcG4Gh/image.png"
              title="ALBÓNDIGAS DE POLLO"
              desc="Una receta rica en nutrientes que realmente nutre y que incluso puede prepararse con antelación y servirse durante varios días. ¡Más nutrición, menos prisas!"
            />
            <RecipeCard
              image="https://i.postimg.cc/jxqGvJzK/image.png"
              title="TORTILLA DE VERDURAS"
              desc="Colorida, nutritiva e irresistible incluso para los más pequeños. ¡Una receta que te conquistará por su atractivo visual y que además aporta una nutrición de calidad!"
            />
            <RecipeCard
              image="https://i.postimg.cc/cdq22zQF/image.png"
              title="GELATINA DE FRUTAS"
              desc="¡Sí, puedes endulzar tu día de forma saludable! Una deliciosa gelatina, llena de color y con ingredientes que cuidan a tu hijo por dentro y por fuera."
            />
            <RecipeCard
              image="https://i.postimg.cc/92xSC0dB/image.png"
              title="COMIDA PARA BEBÉS 100% NATURAL"
              desc="Introduciendo alimentos sólidos sin dudas, sin etiquetas y sin ingredientes procesados. Alimentos para bebés 100% naturales, seguros y nutritivos — con opciones variadas para cada etapa del desarrollo de tu bebé."
            />
          </div>

          <p className="text-2xl font-bold text-stone-700 mt-12">
            ¡Y MUCHO, <span className="text-orange-600">MUCHO MÁS!</span>
          </p>
          <div className="flex justify-center mt-4 -mb-8">
            <img src="https://i.postimg.cc/syXKxYYL/logo-rqn-transparente-(1).webp" alt="Cuchara decorativa" className="w-48 md:w-64 h-auto object-contain drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* Yellow Banner */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-amber-100 border-2 border-amber-300 rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Desde la introducción de alimentos sólidos hasta la merienda escolar.
            </h3>
            <p className="text-lg text-stone-700">
              Recetas que evolucionan junto con tu hijo: con sabor, nutrición y cuidado en cada etapa.
            </p>
          </div>
          <div className="mt-8 text-center">
            <CTAButton text="¡SÍ! ¡QUIERO RECETAS SALUDABLES AHORA!" />
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-700 mb-12">
            RECIBE <span className="underline decoration-orange-500">RECETAS SALUDABLES PARA NIÑOS</span> EN TU EMAIL Y <span className="text-orange-600">ACCEDE A ELLAS COMO PREFIERAS.</span>
          </h2>

          <div className="flex justify-center mb-12">
            <img src="https://i.postimg.cc/bzKrb3QC/Chat-GPT-Image-7-mar-2026-16-20-01-removebg-preview.png" alt="Recetas Saludables para Niños en varios dispositivos" className="w-full max-w-3xl h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-8 flex items-center justify-center gap-2">
            <span className="text-3xl">💡</span> CREADO POR QUIENES VIVEN LA RUTINA Y ENTIENDEN LA NUTRICIÓN INFANTIL
          </h2>
          <div className="space-y-6 text-stone-700 max-w-3xl mx-auto">
            <p>Recetas Saludables para Niños nació de la unión de chefs, nutricionistas y madres reales que necesitaban soluciones sencillas, prácticas y saludables para alimentar a sus hijos.</p>
            <p>Más de 50 recetas fueron probadas, ajustadas y aprobadas por familias que buscaban una mejor salud sin sacrificar el sabor ni la conveniencia.</p>
            <p>Todo esto para ofrecer material que funcione en <strong>situaciones de la vida real</strong>, desde la introducción de alimentos sólidos hasta las meriendas escolares.</p>
            <p>Cientos de familias ya utilizan cada día nuestras recetas para transformar la dieta de los niños en algo más ligero y consciente.</p>
            <p className="italic">Hecho con amor. Creado con un propósito. Diseñado para nutrir.</p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
              <Apple className="w-16 h-16 text-red-500" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-700 mb-12">
            Y ADEMÁS RECIBE<br/><span className="text-orange-600">+ 3 BONOS EXCLUSIVOS:</span>
          </h2>

          <div className="space-y-12">
            {/* Bono 1 */}
            <div className="border border-stone-200 rounded-2xl p-8 shadow-sm">
              <img src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80" alt="Smoothies" className="w-full h-64 object-cover rounded-xl mb-6" />
              <h3 className="text-2xl font-bold text-stone-800 mb-2">BONO 1:</h3>
              <h4 className="text-xl font-bold text-orange-600 mb-4">BEBIDAS NUTRITIVAS Y REFRESCANTES</h4>
              <p className="text-stone-600 mb-4">Recetas sencillas, saludables y deliciosas para acompañar cualquier comida.</p>
              <p className="text-sm text-stone-500 mb-6">Jugos, smoothies, batidos y tés realmente nutritivos, con combinaciones para todos los gustos y listos en minutos.</p>
              <div className="text-2xl font-bold">
                <span className="line-through text-stone-400 mr-2">$ 4.90</span>
                <span className="text-stone-700">HOY ES <span className="text-green-500">GRATIS</span></span>
              </div>
            </div>

            {/* Bono 2 */}
            <div className="border border-stone-200 rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-green-100 p-4 rounded-xl flex flex-col items-center justify-center border-2 border-green-300 aspect-square">
                    <span className="font-bold text-xs mb-2">ABACATE</span>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">🥑</div>
                 </div>
                 <div className="bg-purple-100 p-4 rounded-xl flex flex-col items-center justify-center border-2 border-purple-300 aspect-square">
                    <span className="font-bold text-xs mb-2">UVA</span>
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl">🍇</div>
                 </div>
                 <div className="bg-yellow-100 p-4 rounded-xl flex flex-col items-center justify-center border-2 border-yellow-300 aspect-square">
                    <span className="font-bold text-xs mb-2">BANANA</span>
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl">🍌</div>
                 </div>
                 <div className="bg-green-100 p-4 rounded-xl flex flex-col items-center justify-center border-2 border-green-300 aspect-square">
                    <span className="font-bold text-xs mb-2">ABACATE</span>
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">🥑</div>
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">BONO 2:</h3>
              <h4 className="text-xl font-bold text-orange-600 mb-4">JUEGO DE MEMORIA DE COMIDA</h4>
              <p className="text-stone-600 mb-4">Fomenta el aprendizaje y fortalece el vínculo con tu hijo mientras juegan juntos.</p>
              <p className="text-sm text-stone-500 mb-6">Imprime un divertido y educativo juego de memoria diseñado para presentar la comida de forma amena y cariñosa, a la vez que desarrolla la memoria, la atención y el lenguaje.</p>
              <div className="text-2xl font-bold">
                <span className="line-through text-stone-400 mr-2">$ 3.50</span>
                <span className="text-stone-700">HOY ES <span className="text-green-500">GRATIS</span></span>
              </div>
            </div>

            {/* Bono 3 */}
            <div className="border border-stone-200 rounded-2xl p-8 shadow-sm">
              <div className="flex justify-center gap-4 mb-6 opacity-50">
                 <Apple className="w-24 h-24 text-stone-800" strokeWidth={1} fill="none" />
                 <div className="w-24 h-24 border border-stone-800 rounded-full flex items-center justify-center text-4xl">🍉</div>
                 <div className="w-24 h-24 border border-stone-800 rounded-full flex items-center justify-center text-4xl">🍌</div>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">BONO 3:</h3>
              <h4 className="text-xl font-bold text-orange-600 mb-4">PÁGINAS PARA COLOREAR Y UNIR LOS PUNTOS</h4>
              <p className="text-sm text-stone-500 mb-6">Páginas para colorear, unir puntos y explorar el mundo de la comida de forma lúdica. Tu hijo aprende mientras se divierte: desarrolla la coordinación, la creatividad e incluso conecta con la comida real.</p>
              <div className="text-2xl font-bold">
                <span className="line-through text-stone-400 mr-2">$ 3.50</span>
                <span className="text-stone-700">HOY ES <span className="text-green-500">GRATIS</span></span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <CTAButton text="QUIERO RECETAS SALUDABLES PARA NIÑOS AHORA" />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-stone-800 mb-8 uppercase">
            SI TE IDENTIFICAS CON <span className="text-red-600 underline">AL MENOS UNA</span> DE ESTAS SITUACIONES, ESTÁS EN PELIGRO:
          </h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto font-medium text-lg">
            <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-red-100">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <span className="text-stone-800">Sientes una <strong>frustración inmensa</strong> al ver a tu hijo rechazar alimentos saludables y preferir solo dulces o procesados.</span>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-red-100">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <span className="text-stone-800">Te consume la <strong>culpa</strong> al enviar snacks industriales en la lonchera porque no tuviste tiempo de preparar algo mejor.</span>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-red-100">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <span className="text-stone-800">Vives con el <strong>miedo constante</strong> de que la mala alimentación afecte su crecimiento, inmunidad y desarrollo cognitivo.</span>
            </li>
            <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-red-100">
              <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <span className="text-stone-800">Estás <strong>agotada</strong> de buscar recetas en internet que terminan siendo un desastre o que a tu hijo simplemente no le gustan.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-700 mb-8">
            VEA LAS<br/><span className="text-green-600">VENTAJAS</span>
          </h2>
          <ul className="text-left space-y-4 max-w-xl mx-auto mb-10">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-stone-700">Fomentar con éxito hábitos saludables con ligereza y cariño.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-stone-700">Para tener la tranquilidad de saber qué comerá tu hijo en el colegio.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-stone-700">Aprenda sobre los bocadillos que los niños realmente disfrutan.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-stone-700">Reemplace los alimentos procesados con opciones que nutran y sostengan.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <span className="text-stone-700">Ganando confianza en la construcción de un futuro más saludable para su hijo.</span>
            </li>
          </ul>
          <CTAButton text="QUIERO RECETAS SALUDABLES AHORA" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-stone-700 mb-8">
            VEA LO QUE<br/><span className="text-orange-600">DICEN QUIENES LO COMPRARON:</span>
          </h2>
          {/* Testimonial Image Carousel */}
          <div className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentTestimonialIndex}
                src={testimonialImages[currentTestimonialIndex]}
                alt={`Testimonio ${currentTestimonialIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {testimonialImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentTestimonialIndex ? 'bg-orange-600 w-4' : 'bg-white/70'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Offer */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img src="https://i.postimg.cc/BShGGvmZ/image.png" alt="Recetas Saludables para Niños en varios dispositivos" className="w-full max-w-3xl h-auto object-contain drop-shadow-2xl" />
          </div>
          
          <h2 className="text-2xl font-bold text-orange-600 mb-4">RECETAS SALUDABLES PARA NIÑOS®</h2>
          <h3 className="text-xl font-bold text-stone-700 mb-6 italic">
            NUTRICIÓN REAL PARA CADA ETAPA DEL DESARROLLO DE TU HIJO: CON SABOR, CONVENIENCIA Y CUIDADO.
          </h3>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-200 mb-8 max-w-2xl mx-auto text-left">
            <h4 className="text-xl font-bold text-center mb-4 text-stone-800">MIRA TODO LO QUE TE LLEVAS HOY:</h4>
            <ul className="text-lg text-stone-700 space-y-3 mb-6 font-medium">
              <li className="flex justify-between border-b pb-2"><span>✅ Más de 50 Recetas Saludables para Niños</span> <span className="text-red-500 line-through">$ 19.90</span></li>
              <li className="flex justify-between border-b pb-2"><span>🎁 Bono 1: Bebidas Refrescantes</span> <span className="text-red-500 line-through">$ 4.90</span></li>
              <li className="flex justify-between border-b pb-2"><span>🎁 Bono 2: Juego de Memoria</span> <span className="text-red-500 line-through">$ 3.50</span></li>
              <li className="flex justify-between border-b pb-2"><span>🎁 Bono 3: Páginas para Colorear</span> <span className="text-red-500 line-through">$ 3.50</span></li>
              <li className="flex justify-between pt-2 font-black text-xl text-stone-800"><span>VALOR TOTAL:</span> <span className="text-red-600 line-through">$ 31.80</span></li>
            </ul>
            <div className="text-center bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="text-lg font-bold text-stone-600 uppercase">Pero solo por hoy, llevas todo por:</div>
              <div className="text-6xl font-black text-green-600 my-2 drop-shadow-sm">$ 6.50</div>
              <div className="text-sm text-stone-500 font-medium">(Menos de lo que cuesta un café)</div>
            </div>
          </div>

          <CTAButton text="¡SÍ! ¡QUIERO RECETAS SALUDABLES Y PRÁCTICAS AHORA!" />
          
          <div className="mt-6 text-orange-600 font-bold text-lg">
            **LA OFERTA VENCE HOY {formattedDate} **
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
          <img src="https://i.postimg.cc/tXrfmMSy/image-removebg-preview-4.png" alt="Garantía de 7 días" className="w-48 h-48 object-contain mb-8 drop-shadow-xl" />
          <h2 className="text-3xl font-bold text-orange-600 mb-4">¡SATISFACCIÓN GARANTIZADA<br/>Y CERO RIESGO!</h2>
          <p className="text-stone-600">Si compra este producto y por cualquier motivo no queda satisfecho, le reembolsaremos su dinero en un plazo de 7 días.</p>
        </div>
      </section>

      {/* Footer / FAQ */}
      <footer className="bg-stone-100 py-12 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-2 mb-12">
            <div className="flex items-center gap-2 bg-white p-3 border border-stone-300 rounded shadow-sm">
              <Check className="w-5 h-5 text-green-600" /> Compra 100% segura
            </div>
            <div className="flex items-center gap-2 bg-white p-3 border border-stone-300 rounded shadow-sm">
              <Check className="w-5 h-5 text-green-600" /> Garantía de 7 días
            </div>
            <div className="flex items-center gap-2 bg-white p-3 border border-stone-300 rounded shadow-sm">
              <Check className="w-5 h-5 text-green-600" /> Reembolso garantizado
            </div>
            <div className="flex items-center gap-2 bg-white p-3 border border-stone-300 rounded shadow-sm">
              <Check className="w-5 h-5 text-green-600" /> Calidad garantizada
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-stone-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-stone-100 px-3 text-sm text-stone-500 uppercase tracking-wider">Preguntas frecuentes</span>
            </div>
          </div>

          <div className="space-y-2">
            <FAQItem question="¿Cómo accedo al contenido?" answer="En cuanto se confirme tu compra, recibirás un correo electrónico con un enlace para acceder inmediatamente al material. Puedes acceder desde tu móvil, tableta o computadora, desde donde quieras." />
            <FAQItem question="¿Puedo imprimir las recetas?" answer="¡Sí, puedes! El material es 100 % imprimible para facilitarte la vida diaria." />
            <FAQItem question="¿Necesito saber cocinar bien?" answer="¡No! Las recetas están explicadas paso a paso y son muy fáciles de seguir, incluso si no tienes experiencia en la cocina." />
            <FAQItem question="¿Las recetas son realmente tan rápidas de preparar?" answer="¡Sí! Fueron diseñadas para adaptarse a tu rutina, con una preparación fácil y pocos ingredientes." />
            <FAQItem question="¿Necesito ingredientes que sean difíciles de encontrar?" answer="¡No! Todo está hecho con ingredientes sencillos y asequibles, fáciles de encontrar en el mercado o la feria." />
            <FAQItem question="¿Estas recetas son adecuadas para introducir alimentos sólidos?" answer="¡Sí! Encontrarás opciones para cada etapa de la vida de tu hijo, desde los primeros meses hasta la edad escolar." />
            <FAQItem question="¿Me ayudarás con mis almuerzos escolares?" answer="Por supuesto. Tenemos varias ideas nutritivas y atractivas para refrigerios diarios, evitando los alimentos procesados." />
            <FAQItem question="¿Me costará mucho preparar las recetas?" answer="¡No! Son recetas económicas, diseñadas para ajustarse al presupuesto familiar y, al mismo tiempo, muy nutritivas." />
            <FAQItem question="¿Las recetas ayudan a la salud y al desarrollo?" answer="¡Sí! Están elaboradas por especialistas en nutrición infantil. Contribuyen a la inmunidad, el crecimiento y el bienestar del niño." />
            <FAQItem question="¿Recibiré apoyo si tengo preguntas?" answer="¡Claro! Puedes contactarnos por correo electrónico y te responderemos rápidamente." />
            <FAQItem question="¿Durante cuánto tiempo tendré acceso?" answer="El acceso es de por vida: una vez que lo compras, es tuyo para siempre." />
            <FAQItem question="¿Cuánto cuesta acceder al material?" answer="Solo $6.50. ¡Y además recibes 3 bonos exclusivos!" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function CTAButton({ text }: { text: string }) {
  return (
    <a 
      href="https://pay.hotmart.com/Q104812377I?checkoutMode=10" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-500 text-white font-black py-5 px-8 rounded-xl shadow-[0_6px_0_rgb(21,128,61)] hover:shadow-[0_3px_0_rgb(21,128,61)] hover:translate-y-1 transform transition-all active:scale-95 w-full md:w-auto text-lg md:text-xl uppercase tracking-wide flex flex-col items-center justify-center gap-1 mx-auto cursor-pointer"
    >
      <span>{text}</span>
      <span className="text-xs font-medium text-green-100 normal-case tracking-normal">🔒 Pago 100% Seguro y Acceso Inmediato</span>
    </a>
  );
}

function RecipeCard({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-amber-200 flex flex-col">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6 bg-amber-100/50 flex-grow">
        <h3 className="text-xl font-bold text-orange-600 mb-3">{title}</h3>
        <p className="text-stone-700 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-stone-300 bg-white rounded overflow-hidden">
      <button 
        className="w-full px-4 py-3 text-left flex justify-between items-center font-medium text-stone-700 hover:bg-stone-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-3 text-stone-600 text-sm border-t border-stone-200 bg-stone-50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
