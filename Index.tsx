const WHATSAPP_URL = "https://wa.me/77777313626?text=Хочу%20понять%20своего%20ребёнка";

const styles = `
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
.mbi-root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #FAF7F2;
  color: #3A2E2A;
  line-height: 1.7;
  overflow-x: hidden;
}
.mbi-root h1, .mbi-root h2, .mbi-root h3, .mbi-root h4 { font-family: Georgia, serif; }

.hero { background: #FDF9F4; padding: 80px 40px 60px; text-align: center; position: relative; overflow: hidden; border-bottom: 1px solid #F0E8DF; }
.hero::before { content: ''; position: absolute; top: -120px; left: 50%; transform: translateX(-50%); width: 700px; height: 400px; background: radial-gradient(ellipse, #F5E6DC 0%, transparent 70%); pointer-events: none; }
.hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; background: #F5E6DC; color: #A85A35; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 7px 16px; border-radius: 100px; margin-bottom: 32px; }
.hero-badge::before { content: ''; width: 6px; height: 6px; background: #C4714A; border-radius: 50%; }
.hero h1 { font-size: clamp(32px, 5vw, 54px); font-weight: 700; line-height: 1.15; color: #2C2420; margin-bottom: 24px; }
.hero h1 em { font-style: italic; color: #C4714A; }
.hero-sub { font-size: 18px; color: #7A6560; line-height: 1.7; margin-bottom: 16px; max-width: 580px; margin-left: auto; margin-right: auto; }
.hero-sub strong { color: #3A2E2A; font-weight: 600; }

.expert-strip { display: inline-flex; align-items: center; gap: 16px; background: white; border: 1px solid #F0E8DF; border-radius: 12px; padding: 16px 24px; margin: 32px auto; text-align: left; box-shadow: 0 4px 20px rgba(196,113,74,0.08); }
.expert-avatar { width: 56px; height: 56px; background: #E8C4B0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; }
.expert-info { line-height: 1.4; }
.expert-name { font-size: 16px; font-weight: 600; color: #2C2420; }
.expert-desc { font-size: 13px; color: #7A6560; margin-top: 3px; }
.expert-tags { display: flex; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
.expert-tag { background: #F5E6DC; color: #A85A35; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 100px; }

.cta-btn { display: inline-block; background: #C4714A; color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; padding: 18px 44px; border-radius: 4px; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; box-shadow: 0 8px 24px rgba(196,113,74,0.3); }
.cta-btn:hover { background: #A85A35; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(196,113,74,0.4); }
.cta-note { font-size: 13px; color: #9B7B6A; margin-top: 12px; font-style: italic; }

.guarantee-strip { background: #2C2420; padding: 20px 40px; display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap; }
.g-item { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.75); font-size: 13px; font-weight: 500; }
.g-icon { width: 32px; height: 32px; background: rgba(196,113,74,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
.g-item strong { color: white; }

.checklist-section { background: #2C2420; padding: 80px 40px; }
.checklist-inner { max-width: 820px; margin: 0 auto; }
.section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #E8C4B0; opacity: 0.7; margin-bottom: 16px; }
.checklist-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: white; font-weight: 600; margin-bottom: 12px; line-height: 1.25; }
.checklist-section h2 em { font-style: italic; color: #E8C4B0; }
.checklist-lead { font-size: 16px; color: rgba(255,255,255,0.55); margin-bottom: 48px; font-style: italic; font-family: Georgia, serif; }

.story-block { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 36px; margin-bottom: 36px; font-size: 16px; color: rgba(255,255,255,0.78); line-height: 1.85; border-left: 3px solid #C4714A; }
.story-block p { margin-bottom: 14px; }
.story-block p:last-child { margin-bottom: 0; }

.checklist-title { font-size: 14px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 16px; }
.check-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
.check-item { display: flex; align-items: flex-start; gap: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 18px 22px; transition: border-color 0.2s; }
.check-item:hover { border-color: rgba(196,113,74,0.35); }
.check-icon { width: 22px; height: 22px; background: #C4714A; border-radius: 50%; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; font-size: 11px; color: white; font-weight: 700; }
.check-text { font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.55; }
.checklist-bottom { text-align: center; padding-top: 36px; border-top: 1px solid rgba(255,255,255,0.08); }
.checklist-bottom p { font-size: 17px; color: rgba(255,255,255,0.55); font-style: italic; font-family: Georgia, serif; margin-bottom: 24px; }

.forwhom-section { padding: 80px 40px; background: #FAF7F2; }
.forwhom-inner { max-width: 820px; margin: 0 auto; }
.forwhom-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 12px; }
.lead-text { font-size: 17px; color: #7A6560; line-height: 1.75; margin-bottom: 32px; max-width: 680px; }
.lead-text strong { color: #3A2E2A; font-weight: 600; }

.why-section { padding: 80px 40px; background: #FDF9F4; border-top: 1px solid #F0E8DF; border-bottom: 1px solid #F0E8DF; }
.why-inner { max-width: 820px; margin: 0 auto; }
.why-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 32px; line-height: 1.25; }
.why-section h2 em { color: #C4714A; font-style: italic; }
.why-text { font-size: 16px; color: #7A6560; line-height: 1.85; margin-bottom: 16px; }
.why-text strong { color: #3A2E2A; }
.brain-box { background: #2C2420; border-radius: 16px; padding: 36px; margin: 36px 0; color: rgba(255,255,255,0.82); font-size: 16px; line-height: 1.8; }
.brain-box .floor-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #E8C4B0; margin-bottom: 20px; }
.floor-row { background: rgba(255,255,255,0.06); border-radius: 10px; padding: 18px 22px; margin-bottom: 10px; display: flex; gap: 16px; }
.floor-row.active { border-left: 3px solid #C4714A; }
.floor-num { font-size: 28px; font-weight: 700; color: #E8C4B0; line-height: 1; flex-shrink: 0; padding-top: 4px; font-family: Georgia, serif; }
.floor-row.active .floor-num { color: #C4714A; }
.floor-info h4 { font-size: 13px; font-weight: 700; color: white; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
.floor-info p { font-size: 14px; color: rgba(255,255,255,0.6); }
.why-conclusion { background: #F5E6DC; border-radius: 12px; padding: 24px 28px; font-size: 16px; color: #3A2E2A; line-height: 1.7; border-left: 4px solid #C4714A; }

.honest-section { padding: 80px 40px; background: #FAF7F2; }
.honest-inner { max-width: 820px; margin: 0 auto; }
.honest-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 8px; }
.honest-intro { font-size: 16px; color: #7A6560; margin-bottom: 36px; font-style: italic; font-family: Georgia, serif; }
.honest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 36px; }
.honest-card { background: white; border-radius: 14px; padding: 28px 30px; }
.honest-card.no { border-top: 3px solid #D4A5A5; }
.honest-card.yes { border-top: 3px solid #8A9E8C; }
.honest-card-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 18px; }
.honest-card.no .honest-card-label { color: #C07070; }
.honest-card.yes .honest-card-label { color: #5A7A5C; }
.honest-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.honest-list li { font-size: 15px; color: #3A2E2A; line-height: 1.55; padding-left: 20px; position: relative; }
.honest-list li::before { content: ''; position: absolute; left: 0; top: 8px; width: 7px; height: 7px; border-radius: 50%; }
.honest-card.no .honest-list li::before { background: #D4A5A5; }
.honest-card.yes .honest-list li::before { background: #8A9E8C; }

.results-section { padding: 80px 40px; background: #FDF9F4; border-top: 1px solid #F0E8DF; }
.results-inner { max-width: 820px; margin: 0 auto; }
.results-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 36px; line-height: 1.25; }
.result-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
.result-item { display: flex; gap: 20px; background: white; border-radius: 12px; padding: 24px 28px; border-left: 3px solid #C4714A; box-shadow: 0 2px 12px rgba(196,113,74,0.06); }
.result-num { font-size: 32px; font-weight: 700; color: #E8C4B0; line-height: 1; flex-shrink: 0; padding-top: 4px; font-family: Georgia, serif; }
.result-content h4 { font-size: 16px; font-weight: 700; color: #2C2420; margin-bottom: 6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
.result-content p { font-size: 15px; color: #7A6560; line-height: 1.6; }
.results-cta { text-align: center; background: #2C2420; border-radius: 16px; padding: 48px 40px; }
.results-cta p { font-size: 22px; font-style: italic; color: rgba(255,255,255,0.85); margin-bottom: 28px; line-height: 1.5; font-family: Georgia, serif; }

.reviews-section { padding: 80px 40px; background: #FAF7F2; }
.reviews-inner { max-width: 820px; margin: 0 auto; }
.reviews-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 8px; }
.section-sub { font-size: 15px; color: #7A6560; margin-bottom: 48px; font-style: italic; font-family: Georgia, serif; }
.reviews-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 48px; }
.review-card { background: white; border-radius: 14px; padding: 28px; box-shadow: 0 2px 16px rgba(60,40,30,0.06); }
.review-quote-mark { font-family: Georgia, serif; font-size: 40px; color: #E8C4B0; line-height: 1; margin-bottom: 12px; }
.review-text { font-size: 14px; color: #3A2E2A; line-height: 1.7; margin-bottom: 20px; font-style: italic; font-family: Georgia, serif; }
.reviewer { border-top: 1px solid #F5E6DC; padding-top: 16px; }
.reviewer-name { font-size: 13px; font-weight: 700; color: #2C2420; }
.reviewer-info { font-size: 12px; color: #9B7B6A; margin-top: 2px; }
.reviews-cta { text-align: center; }

.modules-section { padding: 80px 40px; background: #FDF9F4; border-top: 1px solid #F0E8DF; }
.modules-inner { max-width: 820px; margin: 0 auto; }
.modules-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 8px; }
.modules-section .section-sub { font-size: 16px; color: #7A6560; margin-bottom: 48px; font-style: normal; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
.modules-list { display: flex; flex-direction: column; gap: 8px; }
.module-item { background: white; border-radius: 12px; padding: 24px 28px; display: grid; grid-template-columns: 48px 1fr; gap: 20px; align-items: start; transition: box-shadow 0.2s, transform 0.15s; }
.module-item:hover { box-shadow: 0 6px 24px rgba(196,113,74,0.1); transform: translateY(-1px); }
.module-num { font-size: 32px; font-weight: 700; color: #E8C4B0; line-height: 1; padding-top: 4px; font-family: Georgia, serif; }
.module-title { font-size: 16px; font-weight: 700; color: #2C2420; margin-bottom: 6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
.module-desc { font-size: 14px; color: #7A6560; line-height: 1.6; }
.module-result { display: inline-block; background: #F5E6DC; color: #A85A35; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 100px; margin-top: 10px; }

.differ-section { padding: 80px 40px; background: #2C2420; }
.differ-inner { max-width: 820px; margin: 0 auto; }
.differ-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: white; margin-bottom: 12px; }
.differ-intro { font-size: 16px; color: rgba(255,255,255,0.55); margin-bottom: 48px; line-height: 1.7; }
.differ-list { display: flex; flex-direction: column; gap: 12px; }
.differ-item { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px 32px; display: flex; gap: 20px; align-items: flex-start; transition: border-color 0.2s; }
.differ-item:hover { border-color: rgba(196,113,74,0.4); }
.differ-icon { width: 40px; height: 40px; background: rgba(196,113,74,0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
.differ-content h4 { font-size: 16px; font-weight: 700; color: white; margin-bottom: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
.differ-content p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.65; }

.expert-section { padding: 80px 40px; background: #FAF7F2; }
.expert-inner { max-width: 820px; margin: 0 auto; display: grid; grid-template-columns: 180px 1fr; gap: 48px; align-items: center; }
.expert-photo { width: 180px; height: 180px; background: #E8C4B0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 56px; flex-shrink: 0; }
.expert-section h2 { font-size: 28px; color: #2C2420; margin-bottom: 8px; }
.expert-title-text { font-size: 14px; color: #9B7B6A; margin-bottom: 20px; }
.expert-bio { font-size: 15px; color: #7A6560; line-height: 1.75; margin-bottom: 12px; }
.expert-principles { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
.principle { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #3A2E2A; font-weight: 500; }
.principle::before { content: ''; width: 6px; height: 6px; background: #C4714A; border-radius: 50%; flex-shrink: 0; }

.price-section { padding: 80px 40px; background: #FDF9F4; border-top: 1px solid #F0E8DF; }
.price-inner { max-width: 820px; margin: 0 auto; }
.price-section h2 { font-size: clamp(26px, 3.5vw, 40px); color: #2C2420; margin-bottom: 8px; }
.price-section h2 em { color: #C4714A; font-style: italic; }
.price-intro { font-size: 16px; color: #7A6560; margin-bottom: 36px; line-height: 1.7; }
.price-box { background: white; border-radius: 20px; border: 2px solid #E8C4B0; overflow: hidden; box-shadow: 0 12px 48px rgba(196,113,74,0.12); }
.price-box-top { background: #2C2420; padding: 32px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.price-box-top h3 { font-size: 22px; color: white; font-weight: 600; }
.price-amount { font-size: 42px; font-weight: 700; color: #E8C4B0; line-height: 1; font-family: Georgia, serif; }
.price-amount span { font-size: 18px; color: rgba(255,255,255,0.5); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: 400; margin-left: 4px; }
.price-box-body { padding: 36px 40px; }
.price-includes-title { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #9B7B6A; margin-bottom: 20px; }
.price-includes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 32px; }
.price-include-item { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: #3A2E2A; line-height: 1.5; }
.pi-icon { width: 22px; height: 22px; background: #F5E6DC; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; margin-top: 1px; }
.price-compare { background: #FAF7F2; border-radius: 10px; padding: 18px 22px; font-size: 14px; color: #7A6560; line-height: 1.6; margin-bottom: 28px; border-left: 3px solid #C4714A; }
.price-compare strong { color: #3A2E2A; }
.price-cta { text-align: center; }

.faq-section { padding: 80px 40px; background: #FAF7F2; }
.faq-inner { max-width: 820px; margin: 0 auto; }
.faq-section h2 { font-size: clamp(26px, 3.5vw, 38px); color: #2C2420; margin-bottom: 48px; }
.faq-list { display: flex; flex-direction: column; gap: 12px; }
.faq-item { background: white; border-radius: 12px; padding: 24px 28px; border-left: 3px solid transparent; transition: border-color 0.2s; }
.faq-item:hover { border-left-color: #C4714A; }
.faq-q { font-size: 16px; font-weight: 700; color: #2C2420; margin-bottom: 10px; }
.faq-a { font-size: 15px; color: #7A6560; line-height: 1.7; }

.final-section { padding: 100px 40px; background: #2C2420; text-align: center; }
.final-inner { max-width: 640px; margin: 0 auto; }
.final-section h2 { font-size: clamp(28px, 4vw, 44px); color: white; margin-bottom: 20px; line-height: 1.2; }
.final-section h2 em { font-style: italic; color: #E8C4B0; }
.final-text { font-size: 17px; color: rgba(255,255,255,0.65); line-height: 1.8; margin-bottom: 16px; font-family: Georgia, serif; font-style: italic; }
.final-tagline { font-size: 14px; color: rgba(255,255,255,0.35); margin-top: 32px; letter-spacing: 0.05em; }

.offer-footer { background: #FAF7F2; padding: 32px 24px 48px; }
.offer-footer-inner { max-width: 820px; margin: 0 auto; font-size: 11px; line-height: 1.6; color: #2C2420; }
.offer-footer summary { cursor: pointer; font-weight: 600; user-select: none; }
.offer-footer .offer-body { margin-top: 16px; white-space: pre-line; }
.offer-footer .offer-body p { margin-bottom: 12px; }

@media (max-width: 700px) {
  .hero { padding: 60px 24px 48px; }
  .expert-strip { flex-direction: column; text-align: center; }
  .guarantee-strip { flex-direction: column; gap: 16px; padding: 24px; }
  .checklist-section, .forwhom-section, .why-section,
  .honest-section, .results-section, .reviews-section,
  .modules-section, .differ-section, .expert-section,
  .price-section, .faq-section, .final-section { padding: 60px 24px; }
  .honest-grid, .reviews-grid, .price-includes { grid-template-columns: 1fr; }
  .expert-inner { grid-template-columns: 1fr; text-align: center; }
  .expert-photo { margin: 0 auto; }
  .price-box-top { flex-direction: column; }
  .module-item { grid-template-columns: 40px 1fr; gap: 14px; }
}
`;

const checks = [
  "Вы даёте себе обещание «сегодня буду спокойной». К восьми вечера оно нарушено.",
  "Ребёнок плачет из-за сломанного печенья — и вы не понимаете: это нормально или с ним что-то не так?",
  "Вы боитесь, что повторяете то, что делали ваши родители. То, что сами в детстве терпеть не могли.",
  "Вы любите ребёнка до боли — и иногда просто не можете его выносить. И за эту мысль вам стыдно.",
  "Родственники: «Будь построже». Психологи: «Принимай чувства». Подруги — каждая своё. А вы по-прежнему не знаете, что делать, когда он падает на пол в магазине и кричит на весь зал.",
];

const results = [
  { n: 1, t: "Вы перестанете бояться его эмоций", d: "Истерика из катастрофы превратится в понятный процесс с началом и концом. Как температура при простуде — неприятно, но объяснимо и проходимо." },
  { n: 2, t: "Появится пауза там, где раньше был автоматический срыв", d: "Не потому что вы сдержались. А потому что вы увидели другое: уставшего ребёнка, которому нужна ваша помощь, — а не врага, который делает назло." },
  { n: 3, t: "Конкретные алгоритмы на каждую сложную ситуацию", d: "Что делать в эпицентре крика. Что сказать, когда он дерётся. Как реагировать на «я тебя ненавижу». Как не сорваться, когда внутри всё горит." },
  { n: 4, t: "Вы наконец поймёте свои триггеры", d: "Почему именно нытьё при одевании вызывает у вас не раздражение, а ярость. Когда увидите откуда это — ярость начнёт отпускать." },
];

const reviews = [
  { text: "Дочь закатила истерику из-за колготок. Впервые я не закричала. Просто села рядом и подождала. Через пять минут она сама подошла обняться. Я сидела и плакала — но уже от другого.", name: "Асель", info: "мама Амины, 4 года" },
  { text: "Ребёнок не изменился. Истерики всё ещё бывают. Изменилась я. Теперь вижу уставшего малыша, а не «он делает назло». И с этим можно жить.", name: "Динара", info: "мама Тимура, 5 лет" },
  { text: "Перестала просыпаться ночью от мысли «я плохая мать». Это звучит мелко, но для меня это было главное.", name: "Айгерим", info: "мама двоих, 3 и 7 лет" },
];

const modules = [
  { n: "0", t: "«Ты не плохая мама»", d: "Уходит хроническая вина. Появляется точка отсчёта — к ней вы вернётесь в конце курса и увидите, как далеко ушли.", r: "уходит парализующее чувство вины" },
  { n: "1", t: "Нейробиология детского поведения", d: "Вы перестаёте видеть манипуляцию и «назло». Понимаете физиологически, почему он «не слышит» и не может «просто успокоиться».", r: "пауза там, где раньше был автоматический срыв" },
  { n: "2", t: "Эмоции ребёнка изнутри", d: "Рентген-зрение. За любым «плохим поведением» — непрожитое чувство. Истерика из катастрофы превращается в понятный процесс с началом и концом.", r: "его эмоции перестают пугать" },
  { n: "3", t: "Алгоритмы на каждый день", d: "Что говорить в эпицентре истерики. Минута эмоций перед сном. Ритуал воссоединения. Сценарии: «он дерётся», «я тебя ненавижу», «падает на пол в магазине».", r: "конкретные действия на каждую ситуацию" },
  { n: "4", t: "Привязанность как фундамент", d: "Система ежедневных действий, чтобы связь выдержала подростковый возраст. Исчезает страх «потерять» ребёнка в 13 лет.", r: "уверенность в отношениях на годы вперёд" },
  { n: "5", t: "Мама как берег", d: "Ваши триггеры — те места, где реакция непропорционально сильна, потому что «попадает» в ваше детство. Учитесь отличать «это про него» от «это про меня».", r: "ярость начинает отпускать" },
  { n: "★", t: "Финальный модуль. Новая точка старта", d: "Карта прогресса. Письмо себе в будущее. И главное понимание: результат не в том, что ребёнок стал другим. Результат — в том, что изменились вы.", r: "вы видите, как далеко ушли" },
];

const differs = [
  { i: "🧠", t: "Построен на нейробиологии, а не на советах", d: "Вы не услышите «просто будьте спокойнее». Вы поймёте, как устроен мозг вашего ребёнка — и почему он физически не может вести себя иначе. Когда вы это видите — кричать становится незачем. Не потому что вы сдерживаетесь. А потому что картинка другая." },
  { i: "⚡", t: "Результат уже в первый вечер", d: "Каждый модуль заканчивается конкретным действием на сегодня. Не «подумайте об этом». А «сегодня вечером, когда он начнёт ныть — сделайте вот это одно». Вы увидите разницу не через месяц — а в первый же вечер." },
  { i: "🪞", t: "Работает с вами, а не только с ребёнком", d: "Модуль 5 — это про ваши триггеры, ваше детство, ваши запрещённые эмоции. Потому что главный принцип: когда маме спокойно — ребёнку легче. Большинство курсов это игнорируют." },
];

const faqs = [
  { q: "«А если я куплю и не найду времени пройти?»", a: "Доступ к курсу не ограничен по времени. Уроки короткие — один урок можно пройти за вечер после укладки. Вы идёте в своём ритме. Даже если проходите по одному уроку в неделю — за два месяца пройдёте весь курс. И он останется с вами навсегда." },
  { q: "«Мой ребёнок слишком маленький / слишком большой?»", a: "Курс работает для мам детей от 2 до 10 лет. Нейробиология мозга и принципы привязанности универсальны — но внутри курса есть адаптация под разные возрасты." },
  { q: "«Я уже читала Петрановскую. Чем это отличается?»", a: "Петрановская даёт понимание. Этот курс даёт понимание + конкретные алгоритмы действий + работу с вашими собственными триггерами. Здесь вы не просто узнаете, как устроен ребёнок — вы получаете пошаговые инструкции, что делать в каждой конкретной ситуации." },
  { q: "«А вдруг не поможет?»", a: "Вот что произойдёт первым. Вы пройдёте Модуль 1 — и в тот же вечер, когда ребёнок начнёт ныть из-за чего-то мелкого, вы впервые подумаете не «он опять!», а «его второй этаж ещё не достроен, он сейчас не может иначе». Эта одна мысль — уже другая реакция. Дальше — больше." },
  { q: "«Я уже покупала похожие курсы и они не помогли»", a: "Я это знаю — именно с этим ко мне приходят. Большинство курсов дают красивую теорию, которая рассыпается при первом же вечернем крике. Этот курс построен иначе: нейробиология вместо советов + конкретное действие после каждого модуля + работа с вашими триггерами, а не только с поведением ребёнка." },
];

const Cta = ({ children = "Хочу понять своего ребёнка" }: { children?: React.ReactNode }) => (
  <a className="cta-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{children}</a>
);

const Index = () => {
  return (
    <div className="mbi-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Курс для мам · дети 2–10 лет</div>
          <h1>
            Вы читали книги.<br />
            Вы знаете теорию.<br />
            И всё равно <em>кричите</em> на ребёнка каждый вечер.
          </h1>
          <p className="hero-sub">
            Курс для мам, которые устали срываться — и хотят наконец понять, что происходит с их ребёнком.
          </p>

          <div className="expert-strip">
            <div className="expert-avatar">👩‍💼</div>
            <div className="expert-info">
              <div className="expert-name">Психолог, специалист по эмоциональному развитию детей</div>
              <div className="expert-desc">Более 7 лет работы с мамами · подход основан на теории привязанности Ньюфелда</div>
              <div className="expert-tags">
                <span className="expert-tag">Нейробиология</span>
                <span className="expert-tag">Теория привязанности</span>
                <span className="expert-tag">Без лайфхаков послушания</span>
              </div>
            </div>
          </div>

          <div>
            <Cta />
            <div className="cta-note">25 000 ₸ · доступ навсегда</div>
          </div>
        </div>
      </section>

      {/* GUARANTEE STRIP */}
      <div className="guarantee-strip">
        <div className="g-item"><div className="g-icon">⏱</div><span><strong>Доступ навсегда</strong> — идёте в своём ритме</span></div>
        <div className="g-item"><div className="g-icon">📲</div><span><strong>15–20 минут в день</strong> — вписывается в жизнь мамы</span></div>
        <div className="g-item"><div className="g-icon">🧠</div><span><strong>Результат с первого вечера</strong> — уже после Модуля 1</span></div>
      </div>

      {/* CHECKLIST */}
      <section className="checklist-section">
        <div className="checklist-inner">
          <div className="section-label">Это про вас?</div>
          <h2>Типичный вечер. <em>Узнаёте себя?</em></h2>
          <p className="checklist-lead">Не нужно ничего отвечать — просто читайте.</p>

          <div className="story-block">
            <p>Вы пришли домой выжатой. Хотите одного — два спокойных часа. Ужин, ванна, сказка, сон.</p>
            <p>Но ребёнок словно не слышит этого плана. Не ест. Ноет из-за «не той кружки». Требует мультик прямо сейчас. Вы просите убрать игрушки — три раза. На четвёртый вы слышите свой голос — и он совсем не такой, каким вы хотели бы звучать.</p>
            <p>Потом тишина. Он плачет. Вы стоите посреди комнаты. Уже не злость. Вина.</p>
            <p>А ночью — в темноте — одна мысль: «Я уже что-то сломала в нём. Что если это не исправить?»</p>
          </div>

          <div className="checklist-title">Проверьте себя — три из пяти это вы?</div>
          <div className="check-list">
            {checks.map((c, i) => (
              <div className="check-item" key={i}>
                <div className="check-icon">✓</div>
                <div className="check-text">{c}</div>
              </div>
            ))}
          </div>

          <div className="checklist-bottom">
            <p>Три пункта из пяти — про вас? Читайте дальше.</p>
            <Cta />
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="forwhom-section">
        <div className="forwhom-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Для кого этот курс</div>
          <h2>Вы не начинающая. <em style={{ color: "#C4714A", fontStyle: "italic" }}>Вы уставшая.</em></h2>
          <p className="lead-text">
            Для мам детей от 2 до 10 лет, которые уже пробовали разобраться — читали, смотрели, спрашивали — но в моменте всё равно срываются.
            <br /><br />
            Вам нужны не новые знания. Вам нужны <strong>работающие инструменты</strong> и понимание, почему старые не работали.
          </p>
        </div>
      </section>

      {/* WHY BOOKS FAIL */}
      <section className="why-section">
        <div className="why-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Почему книги и советы не работают в моменте</div>
          <h2>Ответ не в вашем характере. <em>Ответ — в его мозге.</em></h2>
          <p className="why-text">
            Вы читали. Вы знаете теорию. И всё равно срываетесь. Потому что проблема не в том, чего вы не знаете — а в том, <strong>как устроен мозг вашего ребёнка</strong>. И ваш.
          </p>

          <div className="brain-box">
            <div className="floor-label">Мозг ребёнка — двухэтажный дом</div>
            <div className="floor-row">
              <div className="floor-num">2</div>
              <div className="floor-info">
                <h4>Второй этаж — ещё строится</h4>
                <p>Логика, самоконтроль, способность сказать «это просто кружка, не страшно». До 5–7 лет его просто нет.</p>
              </div>
            </div>
            <div className="floor-row active">
              <div className="floor-num">1</div>
              <div className="floor-info">
                <h4>Первый этаж — работает на 100%</h4>
                <p>Эмоции, инстинкты, реакции. Включён с рождения и работает на полную мощность.</p>
              </div>
            </div>
          </div>

          <p className="why-text">
            Это не метафора. Это анатомия. Он не манипулирует. Не делает назло. Не «проверяет границы». Он физически не может успокоиться сам. Ему нужен ваш берег.
          </p>
          <div className="why-conclusion">
            А вы не можете быть берегом — потому что вас никто не научил, как это делать, когда внутри всё кипит. Вот это и решает курс.
          </div>
        </div>
      </section>

      {/* HONEST */}
      <section className="honest-section">
        <div className="honest-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Честный разговор</div>
          <h2>Что этот курс НЕ обещает — и что обещает на самом деле</h2>
          <p className="honest-intro">Я хочу быть честной до того, как вы заплатите.</p>

          <div className="honest-grid">
            <div className="honest-card no">
              <div className="honest-card-label">❌ Не обещаю</div>
              <ul className="honest-list">
                <li>Ваш ребёнок не перестанет истерить. Истерики — часть нормального развития. Убрать их полностью — значит что-то сломать.</li>
                <li>Вы не станете мамой, которая никогда не повышает голос. Такой мамы не существует.</li>
                <li>Результата за неделю не будет. Привычки, которые складывались годами — так не меняются.</li>
              </ul>
            </div>
            <div className="honest-card yes">
              <div className="honest-card-label">✓ Вот что произойдёт</div>
              <ul className="honest-list">
                <li>Вы будете точно понимать, что происходит с ребёнком в момент истерики. Не примерно — а точно.</li>
                <li>Его эмоции перестанут казаться катастрофой. Станут понятными — как температура при простуде.</li>
                <li>У вас появятся конкретные алгоритмы на каждую сложную ситуацию. Что говорить. Как реагировать. Как не сорваться.</li>
                <li>Вы перестанете быть растерянной мамой, которая не справляется. И станете мамой, которая понимает.</li>
              </ul>
            </div>
          </div>

          <p className="lead-text" style={{ marginBottom: 0 }}>
            Если вам нужны обещания «ваш ребёнок станет послушным за 3 дня» — это не сюда. Здесь по-честному.
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results-section">
        <div className="results-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Конкретные результаты</div>
          <h2>Что изменится в вашей жизни</h2>

          <div className="result-list">
            {results.map((r) => (
              <div className="result-item" key={r.n}>
                <div className="result-num">{r.n}</div>
                <div className="result-content">
                  <h4>{r.t}</h4>
                  <p>{r.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="results-cta">
            <p>«Вы не плохая мама. Вы мама, у которой пока нет нужных инструментов. Это решаемо.»</p>
            <Cta />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <div className="reviews-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Что говорят мамы</div>
          <h2>Реальные истории</h2>
          <p className="section-sub">Без глянца. Истерики не исчезли — изменилось кое-что важнее.</p>

          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-quote-mark">«</div>
                <p className="review-text">{r.text}</p>
                <div className="reviewer">
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-info">{r.info}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-cta">
            <Cta />
            <div className="cta-note">25 000 ₸ · доступ навсегда</div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="modules-section">
        <div className="modules-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Программа</div>
          <h2>7 модулей, которые меняют линзу</h2>
          <p className="section-sub">Не знания — а новый способ видеть своего ребёнка и себя.</p>

          <div className="modules-list">
            {modules.map((m) => (
              <div className="module-item" key={m.n}>
                <div className="module-num">{m.n}</div>
                <div>
                  <div className="module-title">{m.t}</div>
                  <div className="module-desc">{m.d}</div>
                  <div className="module-result">Результат: {m.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFER */}
      <section className="differ-section">
        <div className="differ-inner">
          <div className="section-label">Чем отличается</div>
          <h2>Почему этот курс — не «ещё один курс»</h2>
          <p className="differ-intro">
            Вы уже покупали курсы. Возможно, не доходили до конца. Возможно, получали красивую теорию, которая рассыпалась при первом же вечернем крике. Этот курс отличается тремя вещами.
          </p>
          <div className="differ-list">
            {differs.map((d, i) => (
              <div className="differ-item" key={i}>
                <div className="differ-icon">{d.i}</div>
                <div className="differ-content">
                  <h4>{d.t}</h4>
                  <p>{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT */}
      <section className="expert-section">
        <div className="expert-inner">
          <div className="expert-photo">👩‍💼</div>
          <div>
            <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Кто ведёт курс</div>
            <h2>Психолог, специалист по эмоциональному развитию детей</h2>
            <div className="expert-title-text">Более 7 лет работы с мамами · теория привязанности Гордона Ньюфелда · нейробиология детского развития</div>
            <p className="expert-bio">Я не учу подавлять поведение ребёнка. Я не предлагаю лайфхаки «послушания». Я не обвиняю родителей.</p>
            <p className="expert-bio">Я учу одному: понимать. А когда понимаешь — неизбежно действуешь иначе.</p>
            <div className="expert-principles">
              <div className="principle">Подход основан на научных исследованиях, а не на мнениях</div>
              <div className="principle">Без осуждения — только понимание и инструменты</div>
              <div className="principle">7 лет работы с реальными мамами в реальных ситуациях</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="price-section">
        <div className="price-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Стоимость</div>
          <h2>Инвестиция в то, что <em>уже уходит каждый день</em></h2>
          <p className="price-intro">
            Каждый день без изменений — это день его детства, который уже не вернуть. Не идеального детства. Просто — понятого.
          </p>

          <div className="price-box">
            <div className="price-box-top">
              <h3>Курс «Материнство без истерик»</h3>
              <div>
                <div className="price-amount">25 000 ₸</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 6 }}>разовый платёж · доступ навсегда</div>
              </div>
            </div>
            <div className="price-box-body">
              <div className="price-includes-title">Что входит в курс</div>
              <div className="price-includes">
                <div className="price-include-item"><div className="pi-icon">📚</div><span>7 модулей с конкретными алгоритмами действий</span></div>
                <div className="price-include-item"><div className="pi-icon">♾</div><span>Доступ навсегда — возвращаетесь в любой момент</span></div>
                <div className="price-include-item"><div className="pi-icon">🪞</div><span>Работа с триггерами мамы — не только ребёнка</span></div>
                <div className="price-include-item"><div className="pi-icon">📋</div><span>Сценарии: истерика в магазине, «я тебя ненавижу», драки, нытьё</span></div>
                <div className="price-include-item"><div className="pi-icon">⚡</div><span>Конкретное действие после каждого модуля — результат с первого вечера</span></div>
                <div className="price-include-item"><div className="pi-icon">⏱</div><span>15–20 минут в день — вписывается в жизнь занятой мамы</span></div>
              </div>

              <div className="price-compare">
                Это <strong>меньше одной консультации психолога</strong>. Но это не разовый час — это система, которая остаётся с вами навсегда. Уроки, алгоритмы, инструменты — вы возвращаетесь к ним каждый раз, когда снова будет трудный вечер.
              </div>

              <div className="price-cta">
                <Cta />
                <div className="cta-note">Нажмите, чтобы перейти к оплате</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="section-label" style={{ color: "#A85A35", opacity: 1 }}>Частые вопросы</div>
          <h2>Отвечаю честно</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="final-section">
        <div className="final-inner">
          <h2>Каждый день без изменений — это день его детства, который уже не вернуть.</h2>
          <p className="final-text">Не идеального детства. Просто — <em>понятого</em>.</p>
          <p className="final-text">Вы не плохая мама. Вы мама, у которой пока нет нужных инструментов. Это решаемо. Прямо сейчас.</p>
          <div style={{ marginTop: 28 }}>
            <Cta />
            <div className="cta-note" style={{ color: "rgba(255,255,255,0.5)" }}>25 000 ₸ · доступ навсегда</div>
          </div>
          <div className="final-tagline">
            Нет сложных детей. Есть дети, которых взрослые пока не научились понимать 🤍
          </div>
        </div>
      </section>

      {/* OFFER CONTRACT */}
      <footer className="offer-footer">
        <div className="offer-footer-inner">
          <details>
            <summary>Договор оферты</summary>
            <div className="offer-body">
              <p><strong>Договор оферты</strong></p>

              <p><strong>1. Общие положения</strong>{"\n"}
              1.1. Настоящий документ является официальным предложением (публичной офертой) ИП Садыкова, далее — «Исполнитель», и содержит все существенные условия предоставления услуг.{"\n"}
              1.2. В соответствии с гражданским законодательством Республики Казахстан, акцептом настоящей оферты является оплата услуг Заказчиком.{"\n"}
              1.3. С момента оплаты Заказчик считается принявшим условия оферты в полном объёме.</p>

              <p><strong>2. Предмет договора</strong>{"\n"}
              2.1. Исполнитель предоставляет Заказчику доступ к онлайн-практикуму «Материнство без истерик», направленному на развитие эмоционального интеллекта у родителей и улучшение взаимодействия с детьми.{"\n"}
              2.2. Формат: онлайн-доступ к материалам (видеоуроки, задания, чек-листы, дополнительные материалы).{"\n"}
              2.3. Услуга считается оказанной с момента предоставления доступа к материалам.</p>

              <p><strong>3. Стоимость и порядок оплаты</strong>{"\n"}
              3.1. Стоимость практикума указывается на сайте / странице продажи.{"\n"}
              3.2. Оплата производится в 100% размере до получения доступа.{"\n"}
              3.3. Оплата означает согласие с условиями оферты.</p>

              <p><strong>4. Порядок предоставления доступа</strong>{"\n"}
              4.1. Доступ к практикуму предоставляется в течение 24 часов после оплаты.{"\n"}
              4.2. Доступ может предоставляться через: личный кабинет, закрытый Telegram-канал, электронную почту.{"\n"}
              4.3. Заказчик самостоятельно несёт ответственность за корректность указанных данных.</p>

              <p><strong>5. Права и обязанности сторон</strong>{"\n"}
              Исполнитель обязуется: предоставить доступ к материалам практикума; обеспечить техническую возможность их просмотра.{"\n"}
              Заказчик обязуется: не передавать доступ третьим лицам; не распространять материалы практикума.</p>

              <p><strong>6. Возврат денежных средств</strong>{"\n"}
              6.1. Учитывая нематериальный характер услуги и факт предоставления доступа к материалам, денежные средства после получения доступа возврату не подлежат.{"\n"}
              6.2. Заказчик подтверждает, что до оплаты ознакомился с программой, описанием и форматом практикума.{"\n"}
              6.3. Возврат возможен только в случае: непредоставления доступа по вине Исполнителя; существенного несоответствия заявленному описанию.</p>

              <p><strong>7. Ограничение ответственности</strong>{"\n"}
              7.1. Практикум носит информационный и образовательный характер.{"\n"}
              7.2. Исполнитель не гарантирует конкретных результатов, так как они зависят от действий Заказчика.</p>

              <p><strong>8. Интеллектуальная собственность</strong>{"\n"}
              8.1. Все материалы являются собственностью Исполнителя.{"\n"}
              8.2. Копирование, распространение и передача третьим лицам запрещены.</p>

              <p><strong>9. Заключительные положения</strong>{"\n"}
              9.1. Исполнитель имеет право вносить изменения в оферту без предварительного уведомления.{"\n"}
              9.2. Актуальная версия размещается на странице продажи.{"\n"}
              9.3. Все споры решаются путём переговоров, при невозможности — в соответствии с законодательством Республики Казахстан.</p>

              <p><strong>Реквизиты Исполнителя:</strong>{"\n"}
              ИП Садыкова{"\n"}
              ИИН: 650412403035{"\n"}
              Контакты: +77777313626</p>
            </div>
          </details>
        </div>
      </footer>
    </div>
  );
};

export default Index;
