import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import engineer from "@/assets/about-engineer.jpg";
import hero from "@/assets/hero-construction.jpg";
import ceo from "@/assets/ceo.jpeg";
import cco from "@/assets/cco.jpeg";
import generalManager from "@/assets/generalManager.jpeg";
import technicalManager from "@/assets/technicalManager.jpeg";
import siteOne from "@/assets/project-1.jpg";
import siteTwo from "@/assets/project-2.jpg";
import siteThree from "@/assets/project-3.jpg";
import Image from "next/image";
import Link from "next/link";

const leaders = [
  {
    image: ceo,
    name: "Chief Executive Officer",
    role: "Chief Executive Officer (CEO)",
    message:
      "At N.S.C.C., we are driven by a clear vision to deliver world-class contracting solutions that contribute to Saudi Arabia's development while upholding the highest standards of safety, quality, and integrity. As the Kingdom advances toward Vision 2030, we remain committed to supporting this transformation through reliable infrastructure, sustainable solutions, and long-term partnerships built on trust and performance.",
    badge: {
      value: "Vision 2030",
      label: "Leading with Vision",
    },
  },
  {
    image: cco,
    name: "Corporate Overview",
    role: "Chief Commercial Officer (CCO)",
    message:
      "N.S.C.C. provides comprehensive electrical and infrastructure solutions for commercial, industrial, and government projects across Saudi Arabia. Backed by certified professionals, we deliver safe, efficient, and fully compliant services while maintaining the highest standards of quality, reliability, and client satisfaction.",
    badge: {
      value: "Licensed",
      label: "Saudi Contractor",
    },
  },
  {
    image: generalManager,
    name: "General Manager",
    role: "General Manager",
    message:
      "Operational excellence is at the core of everything we do. Through effective planning, disciplined execution, and a highly skilled workforce, we ensure every project is delivered safely, on schedule, within budget, and in full compliance with regulatory requirements while building long-term client confidence.",
    badge: {
      value: "Quality",
      label: "Driven by Performance",
    },
  },
  {
    image: technicalManager,
    name: "Technical Manager",
    role: "Technical Manager",
    message:
      "Technical excellence and safety are the foundations of our success. Our certified engineers ensure every project is designed, executed, tested, and maintained in accordance with Saudi regulations, industry-leading engineering standards, and strict HSE requirements for long-term performance.",
    badge: {
      value: "Safety",
      label: "Engineering Excellence",
    },
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-primary py-24 text-primary-foreground">
        <Image
          src={hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            About Us
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold md:text-6xl">
            Building Excellence, One Project at a Time
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Since our inception, we have been committed to delivering
            exceptional construction, engineering, and project management
            services.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <Image
            src={engineer}
            alt="Engineer"
            width={900}
            height={700}
            loading="lazy"
            className="rounded-2xl shadow-[var(--shadow-elegant)]"
          />
          <div>
            <h2 className="font-display text-4xl font-extrabold text-primary">
              Dedicated Engineering Experts
            </h2>
            <p className="mt-5 text-muted-foreground">
              We bring together engineering excellence and construction
              expertise to deliver projects that meet the highest standards of
              quality and safety in Saudi Arabia. Our mission is to provide
              innovative, sustainable, and cost-effective solutions that support
              the Kingdom&apos;s rapid growth and Vision 2030 goals.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "On-time delivery without compromise",
                "Premium materials and proven methods",
                "Client-centric, transparent communication",
                "Sustainable, Vision 2030 aligned",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Three-image project showcase */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Work
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Projects That Speak For Themselves
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                src: siteOne,
                title: "Commercial Towers",
                desc: "High-rise construction across Riyadh.",
              },
              {
                src: siteTwo,
                title: "Infrastructure Works",
                desc: "Roads, utilities, and civil engineering.",
              },
              {
                src: siteThree,
                title: "Industrial Facilities",
                desc: "Plants and warehouses built to spec.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={750}
                  className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership messages: CEO + 2 others, alternating image/text sides */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Leadership
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-primary md:text-5xl">
              Voices Behind the Work
            </h2>
          </div>

           <div className="mt-16 space-y-20">
            {leaders.map((leader, i) => (
              <div
                key={leader.name + i}
                className={`grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 hidden rounded-2xl px-6 py-4 text-accent-foreground md:block"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    <p className="font-display text-2xl font-extrabold">{leader.badge.value}</p>
                    <p className="text-xs uppercase tracking-wide">{leader.badge.label}</p>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">{leader.message}</p>
                  <div className="mt-8">
                    <p className="font-display text-xl font-bold text-primary">{leader.name}</p>
                    <p className="text-sm text-muted-foreground">{leader.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "Deliver innovative, sustainable construction that shapes Saudi Arabia's future.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              desc: "Be the most trusted general contracting partner across the Kingdom.",
            },
            {
              icon: Award,
              title: "Our Values",
              desc: "Quality, integrity, and excellence in every detail of every project.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-card p-8 shadow-sm">
              <div
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: "var(--gradient-accent)" }}
              >
                <c.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl font-extrabold text-primary md:text-5xl">
            Let&apos;s build something great together
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full px-8 py-4 text-sm font-semibold text-accent-foreground"
            style={{ background: "var(--gradient-accent)" }}
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
