"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Globe, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Tradelio"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="Tradelio"
      description="Sophisticated algorithmic trading strategies designed for institutional-grade market performance."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=91mg8p"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Empowering Global Markets",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oexbuk",
          alt: "Trading desk",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Algorithmic Execution",
          description: "High-frequency trade execution with minimal latency.",
          tag: "Strategy",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=iwj7z7",
        },
        {
          id: "f2",
          title: "Portfolio Optimization",
          description: "Custom rebalancing based on rigorous risk metrics.",
          tag: "Management",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lvbke4",
        },
        {
          id: "f3",
          title: "Market Research",
          description: "In-depth analytics on macro trends and volatility.",
          tag: "Insight",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=va8zx4",
        },
      ]}
      title="Core Trading Services"
      description="We leverage advanced quantitative models to provide superior market access."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15.4%",
          title: "Avg. Annual ROI",
          description: "Net of fees",
          icon: TrendingUp,
        },
        {
          id: "m2",
          value: "400+",
          title: "Assets Traded",
          description: "Global coverage",
          icon: Globe,
        },
        {
          id: "m3",
          value: "10ms",
          title: "Avg. Latency",
          description: "Industry leading",
          icon: Zap,
        },
      ]}
      title="Performance Indicators"
      description="Proven results for our institutional partners."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alex Rivers",
          role: "Head of Trading",
          company: "Global Capital",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4tvpdb",
        },
        {
          id: "t2",
          name: "Sarah Chen",
          role: "CEO",
          company: "Innovate Ventures",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=63u4uw",
        },
        {
          id: "t3",
          name: "Marcus Thorne",
          role: "VP Operations",
          company: "Thorne Bank",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=c41yuq",
        },
        {
          id: "t4",
          name: "Elena Rodriguez",
          role: "Senior Analyst",
          company: "Madrid Group",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hem35y",
        },
        {
          id: "t5",
          name: "David Smith",
          role: "Portfolio Manager",
          company: "Smith Financial",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rph4go",
        },
      ]}
      kpiItems={[
        {
          value: "99%",
          label: "Client Retention",
        },
        {
          value: "24/7",
          label: "Support Access",
        },
        {
          value: "Top 5",
          label: "Industry Ranking",
        },
      ]}
      title="Partner Feedback"
      description="Hear from our global network of institutional clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Minimum investment?",
          content: "Our minimum institutional entry is $5M.",
        },
        {
          id: "q2",
          title: "How do you mitigate risk?",
          content: "We employ multi-layer risk management protocols.",
        },
        {
          id: "q3",
          title: "Which markets are available?",
          content: "We support equity, crypto, and fixed income markets.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Clear answers to your institutional trading inquiries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "animated-grid",
      }}
      tag="Contact"
      title="Ready to trade?"
      description="Speak with our analysts today to discuss partnership."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Legal",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Tradelio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
