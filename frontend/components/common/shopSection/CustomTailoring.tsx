import Image from "next/image";
import Link from "next/link";

export default function CustomTailoring() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[520px] overflow-hidde sm:min-h-[580px]">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1800&q=85"
            alt="Custom tailoring"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.02] rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 rounded-2xl" />

          {/* Content */}
          <div className="relative flex min-h-[520px] items-end p-7 sm:min-h-[580px] sm:p-10 lg:p-16">
            <div className="max-w-2xl text-white">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-400">
                Custom Made
              </p>

              <h2 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your vision.
                <br />
                Crafted for you.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                Have something specific in mind? Work with Emifex to
                create a piece tailored to your measurements, personal
                style, and occasion.
              </p>

              <Link
                href="/custom"
                className="mt-8 inline-flex items-center border border-white px-7 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-zinc-950"
              >
                Request a Custom Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}