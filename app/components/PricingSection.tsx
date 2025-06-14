"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const EXCHANGE_API = "https://api.exchangerate-api.com/v4/latest/USD";

const tiers = [
  {
    name: "Starter Build",
    usdPrice: 150,
    description: "Perfect for individuals or small teams needing a fast, professional MVP or static site.",
    features: [
      {
        label: "Up to 5 pages or features",
        tooltip: "Limited-scope project ideal for landing pages or MVPs.",
      },
      {
        label: "Responsive Design",
        tooltip: "Works perfectly on mobile, tablet, and desktop.",
      },
      {
        label: "Basic Auth or Contact Forms",
        tooltip: "Simple login or form submission using Firebase or Formspree.",
      },
      {
        label: "Delivery within 7–10 days",
        tooltip: "Efficient delivery with milestone check-ins.",
      },
      {
        label: "Free 1-week post-launch support",
        tooltip: "Covers bugs or tweaks post-deployment.",
      },
    ],
    cta: "Start Your Build",
  },
  {
    name: "Pro Project",
    usdPrice: 400,
    description: "For startups or serious businesses needing robust, production-ready platforms.",
    features: [
      {
        label: "Full-stack Architecture (Next.js, Firebase, etc.)",
        tooltip: "Complete frontend and backend stack with deployment.",
      },
      {
        label: "User Auth, Dashboards, Admin Panel",
        tooltip: "Secure login systems, custom dashboards & controls.",
      },
      {
        label: "API Integration & CMS Support",
        tooltip: "Stripe, Sanity, Contentful, or other APIs.",
      },
      {
        label: "Deployment & Optimization",
        tooltip: "Includes SEO, performance tuning, and hosting setup.",
      },
      {
        label: "2-week support & maintenance",
        tooltip: "Get fixes, updates, and minor adjustments after launch.",
      },
    ],
    cta: "Book a Discovery Call",
    highlighted: true,
  },
  {
    name: "Enterprise Vision",
    usdPrice: null,
    description: "Tailored systems built for scale, performance, and flexibility.",
    features: [
      {
        label: "Advanced Architecture & Infrastructure",
        tooltip: "Microservices, modular design, or multi-tenant setups.",
      },
      {
        label: "Security, SEO, Analytics",
        tooltip: "Enterprise-grade security with advanced tracking.",
      },
      {
        label: "Team Collaboration or White-label Options",
        tooltip: "Multi-role access and branded deployment options.",
      },
      {
        label: "Ongoing DevOps & Feature Scaling",
        tooltip: "CI/CD pipelines, feature toggles, cloud scaling.",
      },
      {
        label: "Priority Support & NDA if required",
        tooltip: "Private support and contracts for serious partnerships.",
      },
    ],
    cta: "Request Proposal",
  },
];

const PricingSection: FC = () => {
  const [useNaira, setUseNaira] = useState(false);
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    fetch(EXCHANGE_API)
      .then((res) => res.json())
      .then((data) => setRate(data.rates.NGN))
      .catch((err) => console.error("Exchange rate fetch failed", err));
  }, []);

  const formatPrice = (usdPrice: number | null) => {
    if (usdPrice === null) return "Custom Quote";
    if (useNaira && rate) return `₦${Math.round(usdPrice * rate).toLocaleString()}`;
    return `$${usdPrice}+`;
  };

  return (
    <section id="pricing" className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hire Prolific<span className="text-primary">Dev</span>
        </h2>
        <p className="text-gray-600 mb-4 max-w-xl mx-auto">
          Whether you're building an MVP, launching a SaaS, or scaling a vision, I offer pricing that fits your ambition.
        </p>

        <div className="mb-8">
          <button
            onClick={() => setUseNaira(!useNaira)}
            className="px-4 py-1 rounded-full bg-success text-white border border-gray-300 text-sm"
          >
            Show prices in {useNaira ? "USD" : "₦NGN"}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border ${
                tier.highlighted
                  ? "border-indigo-600 shadow-xl bg-white scale-[1.02]"
                  : "border-gray-200 bg-white shadow"
              }`}
            >
              <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-4">{formatPrice(tier.usdPrice)}</p>
              <p className="text-gray-600 mb-6 text-sm">{tier.description}</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="relative group flex items-center gap-2 cursor-help">
                    <FaCheckCircle className="text-green-500" />
                    <span className="underline decoration-dotted">{feature.label}</span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-60 bg-gray-900 text-white text-xs p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {feature.tooltip}
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded-full font-medium transition ${
                  tier.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-dark-text text-white hover:bg-dark-text/90"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
