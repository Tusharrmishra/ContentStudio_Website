import { useEffect, useState } from "react";

type TabItem = {
  id: string;
  label: string;
  emoji: string;
  title: string;
  description: string;
  badge: string;
  cards: string[];
};

type ProofBrand = {
  id: string;
  label: string;
  brand: string;
  role: string;
  quotes: string[];
};

const formatItems: TabItem[] = [
  {
    id: "podcast",
    label: "Podcast Style",
    emoji: "🎙",
    title: "Podcast Style",
    description:
      "Two-person conversation format. Builds trust, drives retention, and feels native to how people consume content today. Works brilliantly for D2C, health, and supplements — anywhere social proof matters.",
    badge: "PODCAST",
    cards: ["PODCAST AD 01", "PODCAST AD 02", "PODCAST AD 03"],
  },
  {
    id: "direct",
    label: "Direct Response",
    emoji: "📢",
    title: "Direct Response",
    description:
      "Straight-to-camera. Hook → Problem → Solution → CTA. The proven workhorse of performance advertising — fast, punchy, and built to convert. Works across every category and spend level.",
    badge: "DIRECT",
    cards: ["DIRECT AD 01", "DIRECT AD 02", "DIRECT AD 03"],
  },
  {
    id: "voxpop",
    label: "Voxpop",
    emoji: "🎤",
    title: "Voxpop",
    description:
      "Multiple people, one powerful message. Social proof at scale. Feels completely organic and user-generated, but performs like highly targeted paid creative. Great for fashion, skincare, and lifestyle brands.",
    badge: "VOXPOP",
    cards: ["VOXPOP AD 01", "VOXPOP AD 02", "VOXPOP AD 03"],
  },
];

const industryItems: TabItem[] = [
  {
    id: "fashion",
    label: "Fashion",
    emoji: "👗",
    title: "Fashion",
    description: "",
    badge: "",
    cards: ["FASHION AD 01", "FASHION AD 02", "FASHION AD 03"],
  },
  {
    id: "skincare",
    label: "Skincare",
    emoji: "✨",
    title: "Skincare",
    description: "",
    badge: "",
    cards: ["SKINCARE AD 01", "SKINCARE AD 02", "SKINCARE AD 03"],
  },
  {
    id: "gaming",
    label: "Gaming",
    emoji: "🎮",
    title: "Gaming",
    description: "",
    badge: "",
    cards: ["GAMING AD 01", "GAMING AD 02", "GAMING AD 03"],
  },
];

const proofBrands: ProofBrand[] = [
  {
    id: "brand1",
    label: "MyNaksh",
    brand: "MyNaksh",
    role: "Founder",
    quotes: [
      "Drop MyNaksh client screenshot / DM / WhatsApp reaction here.",
      "Second screenshot from MyNaksh — results, reactions, or metrics.",
      "Third screenshot — ad performance, ROAS, or a happy message.",
    ],
  },
  {
    id: "brand2",
    label: "Pocket52",
    brand: "Pocket52",
    role: "Marketing Head",
    quotes: [
      "Drop Pocket52 client screenshot / DM / WhatsApp reaction here.",
      "Second screenshot from Pocket52 — results, reactions, or metrics.",
      "Third screenshot — ad performance, ROAS, or a happy message.",
    ],
  },
  {
    id: "brand3",
    label: "Zell Education",
    brand: "Zell Education",
    role: "CEO",
    quotes: [
      "Drop Zell Education client screenshot / DM / WhatsApp reaction here.",
      "Second screenshot from Zell — results, reactions, or metrics.",
      "Third screenshot — ad performance, ROAS, or a happy message.",
    ],
  },
];

const whyPoints = [
  {
    id: "01",
    title: "10× Faster Production",
    description:
      "Brief to live creative in days, not weeks. Test more angles, kill losers faster, scale winners immediately.",
  },
  {
    id: "02",
    title: "Fraction of UGC Cost",
    description:
      "High-quality output at a fraction of traditional UGC or influencer shoots — without quality compromise.",
  },
  {
    id: "03",
    title: "Infinite Creative Iterations",
    description:
      "New hook? Different face? Done overnight. No reshoots, no logistics, no waiting.",
  },
  {
    id: "04",
    title: "Built for Meta Performance",
    description:
      "Every format engineered for scroll-stop, retention, and CTR — not just to look good in a deck.",
  },
];

const processSteps = [
  {
    id: "STEP 01",
    title: "Brief & Intake",
    description:
      "Share your product, audience, key message, and top performers.",
    tat: "Day 1",
  },
  {
    id: "STEP 02",
    title: "Script & Concept",
    description: "Hooks, scripts, and ad concept tailored to your category.",
    tat: "Day 2",
  },
  {
    id: "STEP 03",
    title: "AI Production",
    description:
      "Avatar, voiceover, B-roll, text overlays — fully produced AI ad.",
    tat: "Day 3–4",
  },
  {
    id: "STEP 04",
    title: "Review & Revise",
    description: "One structured feedback round. Refined until perfect.",
    tat: "Day 5",
  },
  {
    id: "STEP 05",
    title: "Delivery & Launch",
    description: "Final Meta-ready files. Go live immediately.",
    tat: "Day 6–7",
  },
];

const clients = [
  "MyNaksh",
  "Pocket52",
  "Zell Education",
  "MPL",
  "Pokerbaazi",
  "Brand Six",
  "Brand Seven",
  "Brand Eight",
  "Brand Nine",
  "Brand Ten",
];

const faqs = [
  {
    question: "Will AI ads look fake or low quality?",
    answer:
      "Not with our production. We use best-in-class AI tools combined with human creative direction. The output is polished, brand-aligned, and indistinguishable from high-quality UGC in most cases.",
  },
  {
    question: "What's the typical turnaround time?",
    answer:
      "End-to-end in 5–7 working days — from brief to final delivered asset. Rush options available for high-urgency campaigns.",
  },
  {
    question: "Can we get different hooks for A/B testing?",
    answer:
      "Yes — that's one of the biggest advantages of AI production. Multiple hook variants cost a fraction of a reshoot. We recommend testing 3–5 hooks per ad.",
  },
  {
    question: "Are these ads approved for Meta?",
    answer:
      "All our ads are produced with Meta's policies in mind. We've run hundreds of AI ads across client accounts with zero policy issues.",
  },
  {
    question: "Do we own the final ads?",
    answer:
      "Yes. Full ownership transfers to you on delivery. Run, modify, or repurpose them however you like — no ongoing licensing fees.",
  },
];

const aiAdsPageStyles = `
.ai-ads-page{
  --p:#7c3aed;
  --pl:#8b5cf6;
  --navy:#1e1b4b;
  --deep:#13103a;
  --acc:#a78bfa;
  --off:#f8f8fb;
  --border:rgba(124,58,237,0.12);
  --mut:#6b7280;
  --lp:#ede9fe;
  font-family:Inter,system-ui,sans-serif;
  color:#111827;
  background:#fff;
  overflow-x:hidden;
}
.ai-ads-page *{box-sizing:border-box;}
.ai-ads-page a,.ai-ads-page button{transition:all .2s ease;}
.ai-ads-page section[id],.ai-ads-page div[id]{scroll-margin-top:90px;}
.ai-ads-page .space-mono{font-family:"Space Mono",ui-monospace,monospace;}
.ai-ads-page .hero{min-height:100vh;background:linear-gradient(145deg,#1a0a3d 0%,#1e1b4b 35%,#16213e 70%,#0f1b35 100%);display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 40px 80px;position:relative;overflow:hidden;}
.ai-ads-page .hero-glow{position:absolute;inset:0;background:radial-gradient(ellipse 65% 55% at 50% 40%,rgba(124,58,237,0.22) 0%,transparent 70%);pointer-events:none;}
.ai-ads-page .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:72px 72px;-webkit-mask-image:radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 100%);mask-image:radial-gradient(ellipse 85% 85% at 50% 50%,black 20%,transparent 100%);pointer-events:none;}
.ai-ads-page .hero-inner{position:relative;z-index:2;max-width:720px;}
.ai-ads-page .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(167,139,250,0.14);border:1px solid rgba(167,139,250,0.3);border-radius:100px;padding:6px 18px;font-size:11px;font-weight:600;letter-spacing:1.5px;color:var(--acc);text-transform:uppercase;margin-bottom:28px;}
.ai-ads-page .hero-dot{width:6px;height:6px;border-radius:50%;background:var(--acc);display:inline-block;animation:ai-ads-blink 2s ease infinite;}
.ai-ads-page .hero h1{font-size:clamp(44px,7vw,86px);font-weight:900;line-height:1;color:#fff;letter-spacing:-2.5px;margin:0 0 24px;}
.ai-ads-page .hero h1 em{font-style:normal;color:var(--acc);}
.ai-ads-page .hero-sub{font-size:17px;color:rgba(255,255,255,0.62);max-width:500px;margin:0 auto 44px;line-height:1.75;}
.ai-ads-page .hero-sub strong{color:#fff;font-weight:600;}
.ai-ads-page .hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;align-items:center;margin-bottom:72px;}
.ai-ads-page .btn-hero-main,.ai-ads-page .btn-cta,.ai-ads-page .btn-claim,.ai-ads-page .nav-cta{background:linear-gradient(135deg,var(--p),var(--pl));color:#fff;font-weight:700;border:none;text-decoration:none;}
.ai-ads-page .btn-hero-main{background:#fff;color:var(--p);font-weight:800;font-size:15px;padding:15px 34px;border-radius:10px;display:inline-flex;align-items:center;gap:8px;box-shadow:0 0 0 4px rgba(255,255,255,0.14),0 8px 32px rgba(0,0,0,0.28);}
.ai-ads-page .btn-hero-main:hover,.ai-ads-page .btn-cta:hover,.ai-ads-page .btn-claim:hover,.ai-ads-page .nav-cta:hover{transform:translateY(-1px);}
.ai-ads-page .btn-hero-ghost{background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.22);color:rgba(255,255,255,0.78);font-weight:500;font-size:14px;padding:14px 28px;border-radius:10px;text-decoration:none;}
.ai-ads-page .btn-hero-ghost:hover{border-color:rgba(255,255,255,0.35);color:#fff;}
.ai-ads-page .hero-stats{display:flex;gap:0;border-top:1px solid rgba(255,255,255,0.1);padding-top:40px;justify-content:center;}
.ai-ads-page .hero-stat{text-align:center;padding:0 48px;border-right:1px solid rgba(255,255,255,0.1);}
.ai-ads-page .hero-stat:last-child{border-right:none;}
.ai-ads-page .hs-n{font-size:44px;font-weight:900;background:linear-gradient(135deg,#fff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
.ai-ads-page .hs-l{font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;margin-top:6px;font-weight:500;text-transform:uppercase;}
.ai-ads-page .sec{padding:88px 60px;}
.ai-ads-page .sec-c{max-width:1160px;margin:0 auto;}
.ai-ads-page .s-tag{display:inline-block;font-size:9px;letter-spacing:3px;color:var(--p);text-transform:uppercase;margin-bottom:10px;font-weight:700;}
.ai-ads-page .s-tag.lt{color:var(--acc);}
.ai-ads-page .s-h2{font-size:clamp(30px,4vw,48px);font-weight:900;letter-spacing:-1.5px;line-height:1.05;margin:0 0 12px;color:#111;}
.ai-ads-page .s-h2.lt{color:#fff;}
.ai-ads-page .s-sub{font-size:15px;color:var(--mut);max-width:500px;margin:0 0 52px;line-height:1.7;}
.ai-ads-page .s-sub.lt{color:rgba(255,255,255,0.5);}
.ai-ads-page .why-sec,.ai-ads-page .proof-sec,.ai-ads-page .upcoming-sec,.ai-ads-page .cta-band{background:linear-gradient(135deg,#2d1b69 0%,#1e1b4b 100%);}
.ai-ads-page .why-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:80px;align-items:center;}
.ai-ads-page .why-hl{font-size:clamp(44px,6vw,68px);font-weight:900;color:#fff;line-height:1;letter-spacing:-2px;margin:0 0 16px;}
.ai-ads-page .why-hl span{color:var(--acc);}
.ai-ads-page .why-desc{color:rgba(255,255,255,0.5);font-size:15px;line-height:1.65;}
.ai-ads-page .why-pts{display:flex;flex-direction:column;}
.ai-ads-page .why-row{display:flex;gap:20px;align-items:flex-start;padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.07);}
.ai-ads-page .why-row:last-child{border-bottom:none;padding-bottom:0;}
.ai-ads-page .wn{font-size:10px;color:var(--acc);font-weight:700;letter-spacing:1px;min-width:24px;padding-top:2px;}
.ai-ads-page .wt-h{font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;}
.ai-ads-page .wt-p{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6;margin:0;}
.ai-ads-page .formats-sec,.ai-ads-page .offer-sec,.ai-ads-page .process-sec,.ai-ads-page .pricing-sec{background:var(--off);}
.ai-ads-page .ind-tabs{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;}
.ai-ads-page .ind-tab,.ai-ads-page .proof-tab{padding:10px 22px;border-radius:100px;font-weight:600;font-size:13px;cursor:pointer;}
.ai-ads-page .ind-tab{border:1.5px solid rgba(124,58,237,0.18);background:transparent;color:var(--mut);}
.ai-ads-page .ind-tab:hover{border-color:var(--p);color:var(--p);}
.ai-ads-page .ind-tab.on{background:var(--p);color:#fff;border-color:var(--p);}
.ai-ads-page .proof-tab{border:1.5px solid rgba(255,255,255,0.18);background:transparent;color:rgba(255,255,255,0.55);}
.ai-ads-page .proof-tab:hover{border-color:rgba(255,255,255,0.4);color:#fff;}
.ai-ads-page .proof-tab.on{background:rgba(255,255,255,0.12);color:#fff;border-color:rgba(255,255,255,0.4);}
.ai-ads-page .fmt-grid,.ai-ads-page .ind-grid,.ai-ads-page .proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.ai-ads-page .fmt-card,.ai-ads-page .ind-card{border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#2d1b69,#1e1b4b);border:1px solid rgba(124,58,237,0.14);position:relative;}
.ai-ads-page .fmt-card{aspect-ratio:4/5;display:flex;align-items:flex-end;}
.ai-ads-page .fmt-inner{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;}
.ai-ads-page .fmt-emoji{font-size:52px;opacity:.18;position:absolute;}
.ai-ads-page .fmt-badge{position:absolute;top:12px;left:12px;background:var(--p);color:#fff;font-size:7px;letter-spacing:2px;padding:3px 8px;border-radius:3px;font-weight:700;}
.ai-ads-page .fmt-play{position:absolute;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.12);border:2px solid rgba(255,255,255,0.26);display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;}
.ai-ads-page .fmt-foot{position:absolute;bottom:0;left:0;right:0;padding:14px 12px;background:linear-gradient(to top,rgba(13,10,42,0.92) 0%,transparent 100%);}
.ai-ads-page .fmt-lbl,.ai-ads-page .ic-lbl,.ai-ads-page .proof-lbl,.ai-ads-page .up-soon,.ai-ads-page .ob-ttl,.ai-ads-page .ps-n,.ai-ads-page .ps-tat,.ai-ads-page .p-note{font-family:"Space Mono",ui-monospace,monospace;}
.ai-ads-page .fmt-lbl{font-size:9px;color:rgba(255,255,255,0.44);letter-spacing:1px;font-weight:700;}
.ai-ads-page .fmt-desc-box{background:#fff;border:1px solid var(--border);border-radius:12px;padding:24px 28px;margin-top:20px;}
.ai-ads-page .fmt-desc-box h4{font-size:18px;font-weight:800;color:#111;margin:0 0 8px;}
.ai-ads-page .fmt-desc-box p{font-size:14px;color:var(--mut);line-height:1.7;margin:0;}
.ai-ads-page .ind-card{aspect-ratio:4/5;display:flex;align-items:center;justify-content:center;font-size:52px;color:rgba(255,255,255,0.12);}
.ai-ads-page .ic-lbl{position:absolute;bottom:12px;left:12px;font-size:9px;color:rgba(255,255,255,0.44);letter-spacing:1px;font-weight:700;}
.ai-ads-page .ic-badge{position:absolute;top:12px;right:12px;font-size:6px;letter-spacing:1.5px;background:rgba(167,139,250,0.2);color:var(--acc);border:1px solid rgba(167,139,250,0.28);padding:3px 7px;border-radius:3px;font-weight:700;}
.ai-ads-page .offer-grid,.ai-ads-page .up-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;}
.ai-ads-page .offer-pill{display:inline-block;background:rgba(124,58,237,0.1);color:var(--p);font-weight:700;font-size:9px;letter-spacing:2px;padding:6px 14px;border-radius:100px;margin-bottom:18px;text-transform:uppercase;}
.ai-ads-page .offer-hl{font-size:clamp(36px,4.5vw,54px);font-weight:900;letter-spacing:-1.5px;line-height:1;margin:0 0 18px;color:#111;}
.ai-ads-page .offer-hl span{color:var(--p);}
.ai-ads-page .offer-desc{font-size:15px;color:var(--mut);line-height:1.7;margin:0;}
.ai-ads-page .offer-box{background:#fff;border-radius:16px;border:1.5px solid var(--border);padding:36px;box-shadow:0 4px 32px rgba(124,58,237,0.07);}
.ai-ads-page .ob-ttl{font-size:9px;font-weight:700;letter-spacing:3px;color:var(--p);text-transform:uppercase;margin-bottom:22px;}
.ai-ads-page .cond{display:flex;gap:14px;align-items:flex-start;padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.05);}
.ai-ads-page .cond:last-of-type{border-bottom:none;padding-bottom:0;}
.ai-ads-page .cond-ico{width:36px;height:36px;border-radius:10px;flex-shrink:0;background:var(--lp);border:1px solid rgba(124,58,237,0.14);display:flex;align-items:center;justify-content:center;font-size:15px;}
.ai-ads-page .cond-txt{font-size:14px;color:#111;line-height:1.5;padding-top:2px;}
.ai-ads-page .cond-txt strong{color:var(--p);}
.ai-ads-page .btn-claim{display:block;text-align:center;margin-top:26px;font-size:15px;padding:15px;border-radius:10px;cursor:pointer;width:100%;}
.ai-ads-page .proof-card{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:14px;overflow:hidden;}
.ai-ads-page .proof-card:hover,.ai-ads-page .up-card:hover{background:rgba(255,255,255,0.11);}
.ai-ads-page .proof-img{aspect-ratio:16/9;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-size:28px;color:rgba(255,255,255,0.18);position:relative;}
.ai-ads-page .proof-lbl{position:absolute;top:10px;left:10px;background:var(--p);color:#fff;font-size:7px;font-weight:700;letter-spacing:1px;padding:3px 8px;border-radius:3px;}
.ai-ads-page .proof-body{padding:18px;}
.ai-ads-page .proof-q{font-size:13px;color:rgba(255,255,255,0.52);font-style:italic;line-height:1.6;margin:0 0 12px;}
.ai-ads-page .proof-brand{font-weight:700;font-size:14px;color:#fff;}
.ai-ads-page .proof-role{font-size:11px;color:rgba(255,255,255,0.36);margin-top:2px;}
.ai-ads-page .process-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:48px;}
.ai-ads-page .ps{background:#fff;padding:24px 18px;border:1px solid var(--border);border-radius:12px;position:relative;}
.ai-ads-page .ps:hover{border-color:var(--p);box-shadow:0 8px 28px rgba(124,58,237,0.1);}
.ai-ads-page .ps-arr{position:absolute;right:-16px;top:50%;transform:translateY(-50%);font-size:16px;color:var(--p);font-weight:700;z-index:2;}
.ai-ads-page .ps:last-child .ps-arr{display:none;}
.ai-ads-page .ps-n{font-size:9px;letter-spacing:2px;color:var(--p);font-weight:700;margin-bottom:10px;}
.ai-ads-page .ps-t{font-weight:800;font-size:14px;margin-bottom:7px;color:#111;}
.ai-ads-page .ps-d{font-size:12px;color:var(--mut);line-height:1.6;margin:0;}
.ai-ads-page .ps-tat{display:inline-block;margin-top:12px;background:var(--lp);color:var(--p);font-size:8px;letter-spacing:1px;padding:4px 10px;border-radius:100px;font-weight:700;}
.ai-ads-page .clients-sec,.ai-ads-page .faq-sec,.ai-ads-page .ind-sec{background:#fff;}
.ai-ads-page .cl-grid{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:36px;}
.ai-ads-page .cl{display:flex;align-items:center;justify-content:center;padding:28px 14px;font-weight:700;font-size:13px;color:var(--mut);border-right:1px solid var(--border);border-bottom:1px solid var(--border);}
.ai-ads-page .cl:nth-child(5n){border-right:none;}
.ai-ads-page .cl:nth-child(n+6){border-bottom:none;}
.ai-ads-page .cl:hover{background:rgba(124,58,237,0.04);color:var(--p);}
.ai-ads-page .up-grid{gap:20px;margin-top:44px;}
.ai-ads-page .up-card{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:36px 32px;position:relative;overflow:hidden;}
.ai-ads-page .up-soon{position:absolute;top:18px;right:18px;font-size:7px;letter-spacing:2.5px;color:rgba(255,255,255,0.25);font-weight:700;}
.ai-ads-page .up-ico{font-size:40px;margin-bottom:18px;}
.ai-ads-page .up-h3{font-size:24px;font-weight:900;color:#fff;margin:0 0 10px;letter-spacing:-.5px;}
.ai-ads-page .up-p{font-size:14px;color:rgba(255,255,255,0.48);line-height:1.7;margin:0;}
.ai-ads-page .pricing-sec{text-align:center;}
.ai-ads-page .pricing-card{max-width:580px;margin:0 auto;background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:50px 44px;box-shadow:0 8px 48px rgba(124,58,237,0.08);position:relative;overflow:hidden;}
.ai-ads-page .pc-bar{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--p),var(--pl));}
.ai-ads-page .pc-h3{font-size:28px;font-weight:900;letter-spacing:-1px;margin:0 0 12px;color:#111;}
.ai-ads-page .pc-p{font-size:15px;color:var(--mut);line-height:1.7;margin:0 0 28px;}
.ai-ads-page .perks{list-style:none;text-align:left;margin:0 0 32px;display:flex;flex-direction:column;gap:12px;padding:0;}
.ai-ads-page .perks li{display:flex;align-items:center;gap:12px;font-size:14px;color:#111;font-weight:500;}
.ai-ads-page .perks li::before{content:"✦";color:var(--p);font-size:9px;flex-shrink:0;}
.ai-ads-page .p-note{font-size:11px;color:#9ca3af;margin-top:14px;letter-spacing:.5px;}
.ai-ads-page .faq-list{display:flex;flex-direction:column;gap:8px;max-width:780px;margin-top:44px;}
.ai-ads-page .fi{background:var(--off);border:1px solid var(--border);border-radius:12px;overflow:hidden;}
.ai-ads-page .fq{width:100%;padding:18px 22px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-weight:600;font-size:14px;color:#111;background:none;border:none;text-align:left;}
.ai-ads-page .fq:hover{background:rgba(124,58,237,0.03);}
.ai-ads-page .fq-ico{width:26px;height:26px;border-radius:50%;background:var(--lp);display:flex;align-items:center;justify-content:center;font-size:17px;color:var(--p);flex-shrink:0;transition:transform .2s;}
.ai-ads-page .fi.open .fq-ico{transform:rotate(45deg);}
.ai-ads-page .fa{display:none;padding:0 22px 18px;font-size:13px;color:var(--mut);line-height:1.7;}
.ai-ads-page .fi.open .fa{display:block;}
.ai-ads-page .cta-band{padding:96px 60px;text-align:center;}
.ai-ads-page .cta-band h2{font-size:clamp(38px,6vw,76px);font-weight:900;color:#fff;letter-spacing:-2px;line-height:1;margin:0 0 18px;}
.ai-ads-page .cta-band h2 span{color:var(--acc);}
.ai-ads-page .cta-band p{font-size:16px;color:rgba(255,255,255,0.5);margin:0 0 36px;}
.ai-ads-page .btn-cta{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--p);font-weight:800;font-size:15px;padding:16px 40px;border-radius:10px;text-decoration:none;box-shadow:0 0 0 4px rgba(255,255,255,0.14),0 8px 32px rgba(0,0,0,0.28);}
@keyframes ai-ads-blink{0%,100%{opacity:1}50%{opacity:.25}}
@media (max-width: 1180px){
  .ai-ads-page .sec{padding:72px 32px;}
  .ai-ads-page .why-grid{gap:48px;}
}
@media (max-width: 960px){
  .ai-ads-page .hero{padding:112px 24px 72px;}
  .ai-ads-page .sec{padding:60px 24px;}
  .ai-ads-page .why-grid,.ai-ads-page .offer-grid,.ai-ads-page .up-grid,.ai-ads-page .process-row,.ai-ads-page .fmt-grid,.ai-ads-page .proof-grid{grid-template-columns:1fr;}
  .ai-ads-page .ind-grid{grid-template-columns:repeat(2,1fr);}
  .ai-ads-page .cl-grid{grid-template-columns:repeat(3,1fr);}
  .ai-ads-page .cl:nth-child(5n){border-right:1px solid var(--border);}
  .ai-ads-page .cl:nth-child(3n){border-right:none;}
  .ai-ads-page .cl:nth-child(n+6){border-bottom:1px solid var(--border);}
  .ai-ads-page .cl:nth-child(n+10){border-bottom:none;}
  .ai-ads-page .cta-band{padding:64px 24px;}
  .ai-ads-page .hero-stat{padding:0 24px;}
  .ai-ads-page .hero-btns{flex-direction:column;align-items:center;}
}
@media (max-width: 640px){
  .ai-ads-page .hero{padding:96px 16px 56px;min-height:auto;}
  .ai-ads-page .hero-badge{margin-bottom:20px;}
  .ai-ads-page .hero-sub{font-size:15px;margin-bottom:32px;}
  .ai-ads-page .hero-stats{flex-direction:column;gap:20px;padding-top:28px;}
  .ai-ads-page .hero-stat{padding:0;border-right:none;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:20px;}
  .ai-ads-page .hero-stat:last-child{border-bottom:none;padding-bottom:0;}
  .ai-ads-page .sec{padding:52px 16px;}
  .ai-ads-page .ind-grid,.ai-ads-page .cl-grid{grid-template-columns:1fr;}
  .ai-ads-page .cl{border-right:none;}
  .ai-ads-page .cl:nth-child(n){border-bottom:1px solid var(--border);}
  .ai-ads-page .cl:last-child{border-bottom:none;}
  .ai-ads-page .offer-box,.ai-ads-page .pricing-card{padding:24px 20px;}
  .ai-ads-page .cta-band{padding:56px 16px;}
}
`;

export function AIAdsPage() {
  const [activeFormat, setActiveFormat] = useState(formatItems[0].id);
  const [activeIndustry, setActiveIndustry] = useState(industryItems[0].id);
  const [activeProofBrand, setActiveProofBrand] = useState(proofBrands[0].id);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const interId = "ai-ads-inter-font";
    const monoId = "ai-ads-space-mono-font";

    if (!document.getElementById(interId)) {
      const interLink = document.createElement("link");
      interLink.id = interId;
      interLink.rel = "stylesheet";
      interLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";
      document.head.appendChild(interLink);
    }

    if (!document.getElementById(monoId)) {
      const monoLink = document.createElement("link");
      monoLink.id = monoId;
      monoLink.rel = "stylesheet";
      monoLink.href =
        "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap";
      document.head.appendChild(monoLink);
    }
  }, []);

  const activeFormatItem =
    formatItems.find((item) => item.id === activeFormat) ?? formatItems[0];
  const activeIndustryItem =
    industryItems.find((item) => item.id === activeIndustry) ??
    industryItems[0];
  const activeProofItem =
    proofBrands.find((item) => item.id === activeProofBrand) ?? proofBrands[0];

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <div className="ai-ads-page">
      <style>{aiAdsPageStyles}</style>

      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-dot"></span>
            AI-Powered Advertising
          </div>
          <h1>
            The Future of
            <br />
            <em>Your Ads</em> Is Here
          </h1>
          <p className="hero-sub">
            We build <strong>high-converting AI video ads</strong> — podcast
            style, direct response, voxpop — that look real, move fast, and
            outperform your existing creative.
          </p>
          <div className="hero-btns">
            <a href="#offer" className="btn-hero-main">
              ✦ Get 2 Free AI Ads
            </a>
            <a href="#contact" className="btn-hero-ghost">
              Book a Call
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hs-n">200+</div>
              <div className="hs-l">AI Ads Made</div>
            </div>
            <div className="hero-stat">
              <div className="hs-n">15</div>
              <div className="hs-l">Unique Formats</div>
            </div>
            <div className="hero-stat">
              <div className="hs-n">3</div>
              <div className="hs-l">Core Styles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec why-sec">
        <div className="sec-c">
          <div className="why-grid">
            <div>
              <div className="s-tag lt space-mono">Why It Matters</div>
              <h2 className="why-hl">
                Why
                <br />
                <span>AI Ads?</span>
              </h2>
              <p className="why-desc">
                Not a gimmick. A genuine competitive edge for brands scaling on
                Meta in 2025.
              </p>
            </div>
            <div className="why-pts">
              {whyPoints.map((point) => (
                <div key={point.id} className="why-row">
                  <div className="wn space-mono">{point.id}</div>
                  <div>
                    <div className="wt-h">{point.title}</div>
                    <p className="wt-p">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec formats-sec" id="formats">
        <div className="sec-c">
          <div className="s-tag space-mono">What We Make</div>
          <h2 className="s-h2">AI Ad Formats</h2>
          <p className="s-sub">
            Three battle-tested styles. Click each to see the format.
          </p>
          <div className="ind-tabs">
            {formatItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`ind-tab ${activeFormat === item.id ? "on" : ""}`}
                onClick={() => setActiveFormat(item.id)}
              >
                {item.emoji} {item.label}
              </button>
            ))}
          </div>

          <div>
            <div className="fmt-grid">
              {activeFormatItem.cards.map((card) => (
                <div key={card} className="fmt-card">
                  <div className="fmt-inner">
                    <span className="fmt-emoji">{activeFormatItem.emoji}</span>
                    <div className="fmt-badge space-mono">
                      {activeFormatItem.badge}
                    </div>
                    <div className="fmt-play">▶</div>
                    <div className="fmt-foot">
                      <div className="fmt-lbl">{card}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="fmt-desc-box">
              <h4>{activeFormatItem.title}</h4>
              <p>{activeFormatItem.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec ind-sec" id="industries">
        <div className="sec-c">
          <div className="s-tag space-mono">By Vertical</div>
          <h2 className="s-h2">Ads by Industry</h2>
          <p className="s-sub">
            We speak the language of every category. Click to browse.
          </p>
          <div className="ind-tabs">
            {industryItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`ind-tab ${activeIndustry === item.id ? "on" : ""}`}
                onClick={() => setActiveIndustry(item.id)}
              >
                {item.emoji} {item.label}
              </button>
            ))}
          </div>
          <div className="ind-grid">
            {activeIndustryItem.cards.map((card, index) => (
              <div key={card} className="ind-card">
                {activeIndustryItem.emoji}
                <div className="ic-lbl">{card}</div>
                <div className="ic-badge space-mono">
                  {formatItems[index]?.badge ?? "FORMAT"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec offer-sec" id="offer">
        <div className="sec-c">
          <div className="offer-grid">
            <div>
              <div className="offer-pill">★ Exclusive Offer</div>
              <h2 className="offer-hl">
                Get <span>2 Free</span>
                <br />
                AI Ads
              </h2>
              <p className="offer-desc">
                If you're already scaling on Meta, we want to show you what AI
                ads can do for your account — completely on us. No pitch, no
                catch. Just two ads that might change how you think about
                creative.
              </p>
            </div>
            <div className="offer-box">
              <div className="ob-ttl">You Qualify If —</div>
              <div className="cond">
                <div className="cond-ico">₹</div>
                <div className="cond-txt">
                  Monthly Meta spend of <strong>Rs 2 Lakhs or more</strong> per
                  month
                </div>
              </div>
              <div className="cond">
                <div className="cond-ico">📊</div>
                <div className="cond-txt">
                  <strong>20+ active ads</strong> currently running on Meta at
                  any given time
                </div>
              </div>
              <div className="cond">
                <div className="cond-ico">✓</div>
                <div className="cond-txt">
                  You get <strong>2 fully produced AI ads</strong> — your
                  format, your product, your brand voice
                </div>
              </div>
              <a href="#contact" className="btn-claim">
                Claim Your Free Ads →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec proof-sec" id="proof">
        <div className="sec-c">
          <div className="s-tag lt space-mono">What Brands Say</div>
          <h2 className="s-h2 lt">Brands Loving the Work</h2>
          <p className="s-sub lt">
            Real reactions from clients — unprompted. Click a brand to see their
            feedback.
          </p>
          <div className="ind-tabs">
            {proofBrands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                className={`proof-tab ${
                  activeProofBrand === brand.id ? "on" : ""
                }`}
                onClick={() => setActiveProofBrand(brand.id)}
              >
                {brand.label}
              </button>
            ))}
          </div>

          <div className="proof-grid">
            {activeProofItem.quotes.map((quote, index) => (
              <div
                key={`${activeProofItem.id}-${index}`}
                className="proof-card"
              >
                <div className="proof-img">
                  📱
                  <div className="proof-lbl">SCREENSHOT</div>
                </div>
                <div className="proof-body">
                  <p className="proof-q">"{quote}"</p>
                  <div className="proof-brand">{activeProofItem.brand}</div>
                  <div className="proof-role">{activeProofItem.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec process-sec" id="process">
        <div className="sec-c">
          <div className="s-tag space-mono">How It Works</div>
          <h2 className="s-h2">Our Process & TAT</h2>
          <p className="s-sub">Brief to Meta-ready in 7 days. Every time.</p>
          <div className="process-row">
            {processSteps.map((step) => (
              <div key={step.id} className="ps">
                <div className="ps-arr">→</div>
                <div className="ps-n">{step.id}</div>
                <div className="ps-t">{step.title}</div>
                <p className="ps-d">{step.description}</p>
                <span className="ps-tat">{step.tat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec clients-sec" id="clients">
        <div className="sec-c">
          <div className="s-tag space-mono">Our Network</div>
          <h2 className="s-h2">Brands We Work With</h2>
          <p className="s-sub">
            Trusted by performance-focused brands across India.
          </p>
          <div className="cl-grid">
            {clients.map((client) => (
              <div key={client} className="cl">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec upcoming-sec" id="upcoming">
        <div className="sec-c">
          <div className="s-tag lt space-mono">What's Next</div>
          <h2 className="s-h2 lt">On the Horizon</h2>
          <p className="s-sub lt">
            We're building the next generation of AI ad formats. Here's what's
            coming.
          </p>
          <div className="up-grid">
            <div className="up-card">
              <div className="up-soon">COMING SOON</div>
              <div className="up-ico">🎬</div>
              <h3 className="up-h3">AI Microdramas</h3>
              <p className="up-p">
                60–90 second narrative ads built entirely with AI. Drama,
                tension, resolution — your product at the centre. Blowing up in
                Southeast Asia, coming to India.
              </p>
            </div>
            <div className="up-card">
              <div className="up-soon">COMING SOON</div>
              <div className="up-ico">🤖</div>
              <h3 className="up-h3">AI Influencers for Brands</h3>
              <p className="up-p">
                Build your own always-on AI brand ambassador. Custom face,
                custom voice, infinite content — no shoots, no contracts, no
                controversies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec pricing-sec" id="contact">
        <div className="sec-c">
          <div className="s-tag space-mono" style={{ display: "block" }}>
            Pricing
          </div>
          <h2
            className="s-h2"
            style={{
              textAlign: "center",
              maxWidth: "420px",
              margin: "0 auto 12px",
            }}
          >
            Every Brand is Different
          </h2>
          <p
            className="s-sub"
            style={{ textAlign: "center", margin: "0 auto 44px" }}
          >
            We don't do one-size-fits-all. Your goals, your spend, your category
            — we build the right engagement around you.
          </p>
          <div className="pricing-card">
            <div className="pc-bar"></div>
            <h3 className="pc-h3">Let's Talk Numbers</h3>
            <p className="pc-p">
              Jump on a 20-minute call. We'll look at your account, tell you
              what formats will work best, and give you a clear proposal — no
              fluff, no pressure.
            </p>
            <ul className="perks">
              <li>Custom pricing based on your volume and frequency</li>
              <li>
                Performance-first creative recommendations for your category
              </li>
              <li>Direct line to our AI production team</li>
              <li>Free audit of your existing Meta creatives</li>
            </ul>
            <a
              href="https://wa.me/919892995829"
              target="_blank"
              rel="noreferrer"
              className="btn-claim"
            >
              📞 Book a 20-Min Call on WhatsApp
            </a>
            <p className="p-note">or email parth@yourcontentstudio.in</p>
          </div>
        </div>
      </section>

      <section className="sec faq-sec" id="faq">
        <div className="sec-c">
          <div className="s-tag space-mono">Common Questions</div>
          <h2 className="s-h2">FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqs.includes(index);

              return (
                <div
                  key={faq.question}
                  className={`fi ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="fq"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="fq-ico">+</span>
                  </button>
                  <div className="fa">{faq.answer}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <h2>
          Ready to Test
          <br />
          <span>AI Ads?</span>
        </h2>
        <p>
          Brands scaling on Meta in 2025 are testing faster, spending smarter,
          and using AI creative.
        </p>
        <a
          href="https://wa.me/919892995829"
          target="_blank"
          rel="noreferrer"
          className="btn-cta"
        >
          Book a Call — It's Free
        </a>
      </div>
    </div>
  );
}
