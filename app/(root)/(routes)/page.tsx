import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Leaf,
  Users,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero-construction.jpg";
import sConstruction from "@/assets/service-construction.jpg";
import sCommercial from "@/assets/service-commercial.jpg";
import sResidential from "@/assets/service-residential.jpg";
import sInfra from "@/assets/service-infrastructure.jpg";
import sMep from "@/assets/service-mep.jpg";
import sFinishing from "@/assets/service-finishing.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import engineer from "@/assets/about-engineer.jpg";

import gulfLogo from "@/assets/gulf-catering.png";
import tamerLogo from "@/assets/tamer.png";
import riyadLogo from "@/assets/riyad-bank.png";
import govLogo from "@/assets/gov360.png";
import arconLogo from "@/assets/arcon.png";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Electrical Contracting",
    img: sConstruction,
    desc: "Comprehensive LV/MV installations, power distribution systems, transformers, switchgear, industrial electrical works, and street lighting solutions.",
  },
  {
    title: "Underground Network Solutions",
    img: sCommercial,
    desc: "Professional underground cable installation, trenching, cable laying, jointing, distribution network extensions, and fault rectification services.",
  },
  {
    title: "Overhead Line Works",
    img: sResidential,
    desc: "Construction, maintenance, rehabilitation, and emergency restoration of overhead electrical distribution networks across Egypt and Saudi Arabia.",
  },
  {
    title: "Testing & Commissioning",
    img: sInfra,
    desc: "VLF cable testing, transformer testing, protection relay testing, insulation resistance testing, and complete system commissioning.",
  },
  {
    title: "Operation & Maintenance",
    img: sMep,
    desc: "Preventive and corrective maintenance, emergency breakdown support, electrical asset inspections, and annual maintenance contracts (AMC).",
  },
  {
    title: "Infrastructure & Civil Works",
    img: sFinishing,
    desc: "Excavation, duct bank installation, manholes, utility corridors, road crossings, and complete site restoration for utility projects.",
  },
];

const projects = [
  { title: "Sukoon Extended Care Center", img: p2 },
  { title: "Asdaf Al Khobar Project", img: p1 },
  { title: "Mazaen Al Ebel — Aramco Project", img: p3 },
  { title: "NEOM Hotels — Tabuk Project", img: p4 },
];

const why = [
  {
    icon: ShieldCheck,
    title: "Commitment to Quality",
    desc: "ISO-aligned processes and rigorous QA/QC systems ensure excellence at every stage.",
  },
  {
    icon: Clock,
    title: "On-Time, On-Budget Delivery",
    desc: "Advanced project management keeps us on schedule without compromising quality.",
  },
  {
    icon: Leaf,
    title: "Vision 2030 Alignment",
    desc: "Sustainable, future-ready solutions supporting Egypt and Saudi Arabia's transformation.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "Transparent communication and tailored solutions built on long-term trust.",
  },
];

const clients = [
  { name: "Gulf Catering", logo: gulfLogo },
  { name: "Tamer", logo: tamerLogo },
  { name: "Riyad Bank", logo: riyadLogo },
  { name: "Gov 360", logo: govLogo },
  { name: "Arcon", logo: arconLogo },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[640px] lg:min-h-[760px]">
        <Image
          src={hero}
          alt="Construction site at sunset in Egypt and Saudi Arabia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/60" />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,17,36,.88) 0%, rgba(7,17,36,.72) 35%, rgba(7,17,36,.35) 65%, rgba(7,17,36,.15) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="max-w-5xl">
            {/* Tagline */}
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8a1d]">
              <span className="h-px w-12 bg-[#ff8a1d]" />
              <span>
                Building Landmarks, Shaping Saudi Arabia&apos;s Future
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-3xl lg:text-5xl xl:text-[54px]">
              Leading General{" "}
              <span className="inline-block px-2 bg-[#ff8a1d] text-white">
                Contracting
              </span>{" "}
              Company In Egypt and Saudi Arabia
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
              At NSCC (National Service & Contracting Company), we deliver
              reliable electrical and construction solutions for residential,
              commercial, and industrial projects. From complete electrical
              installations and power distribution systems to large-scale
              construction and infrastructure development, we combine technical
              expertise, innovation, and quality craftsmanship to ensure every
              project is completed safely, efficiently, and to the highest
              standards.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-b border-border bg-background py-14">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-foreground/70">
            Trusted By The Best
          </h2>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex h-28 items-center justify-center rounded-xl bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              About Us
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-primary md:text-5xl">
              Building Excellence, <br />
              One Project at a Time
            </h2>
            <p className="mt-6 text-muted-foreground">
              N.S.C.C. is a licensed contracting company in Egypt and Saudi
              Arabia, delivering safe, reliable, and fully compliant electrical,
              infrastructure, testing, commissioning, and maintenance solutions
              for commercial, industrial, and government sectors. Our services
              are executed by certified professionals in accordance with Saudi
              standards and industry best practices.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["On-Time Delivery", "Strict timelines without compromise."],
                ["High Standards", "Premium materials, proven methods."],
                ["Client-Centric", "Designed around your vision."],
                ["Sustainability", "Aligned with Saudi Vision 2030."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <Image
              src={engineer}
              alt="Engineer reviewing blueprints"
              width={900}
              height={700}
              loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-accent p-6 text-accent-foreground shadow-[var(--shadow-glow)] md:block">
              <div className="font-display text-4xl font-extrabold">15+</div>
              <div className="text-xs font-semibold uppercase tracking-widest">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Our Services
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
                Comprehensive contracting <br />
                and engineering solutions
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              See All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-sm transition hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Why Choose NSCC?
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Trusted by clients across Egypt and Saudi Arabia, we deliver
              projects with quality, efficiency, and innovation.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <w.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Our Landmark Projects
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
                Shaping the Future, <br /> One Project at a Time
              </h2>
            </div>
            <p className="max-w-md text-sm text-primary-foreground/70">
              From residential communities to industrial facilities and
              infrastructure, we deliver projects that drive Egypt and Saudi
              Arabia&apos;s progress.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-bold">
                  {p.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-4xl font-extrabold text-primary md:text-5xl">
            Building Excellence Through Our Expert Services
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            We deliver world-class construction, MEP, and engineering solutions
            that bring your vision to life — on time, within budget, and with
            uncompromising quality.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-accent)" }}
          >
            Work With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
