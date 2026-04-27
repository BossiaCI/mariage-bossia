'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";

const GIFT_LIST_URL = "https://app.mywishlist.co/ednialima/edenia-and-bossia-wedding-list"; 

// 🔁 Replace with your actual banking details
const BANK_INFO = {
  accountHolder: "Mr Daha Ou Garnacho Da Cruz Lima",
  bank: "SOCIETE GENERALE",
  iban: "FR76 3000 3034 8000 0506 4263 04",
  bic: "SOGEFRPP",
  reference: "Wedding Gift",
};

type CopiedKey = "iban" | "bic" | null;

export default function WeddingGiftSection() {
  const [registryHovered, setRegistryHovered] = useState(false);
  const [ripple, setRipple] = useState(false);
  const [copied, setCopied] = useState<CopiedKey>(null);

  const t = useTranslations('Gift');
  

  const handleRegistryClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    window.open(GIFT_LIST_URL, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = (text: string, key: CopiedKey) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .gift-section {
          min-height: 100vh;
          background-color: #FAF8F4;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
        .gift-section::before,
        .gift-section::after {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          opacity: 0.06;
          background: #B8935A;
          pointer-events: none;
        }
        .gift-section::before { top: -120px; left: -120px; }
        .gift-section::after  { bottom: -120px; right: -120px; }

        .gift-inner {
          max-width: 960px;
          width: 100%;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
        }
        .ornament-line {
          width: 72px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C9A96E);
        }
        .ornament-line.right {
          background: linear-gradient(90deg, #C9A96E, transparent);
        }
        .ornament-diamond {
          width: 8px; height: 8px;
          background: #C9A96E;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .ornament-dot {
          width: 4px; height: 4px;
          background: #C9A96E;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .section-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: #C9A96E; margin-bottom: 20px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 7vw, 68px);
          font-weight: 300; line-height: 1.1;
          color: #2A2015; margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .section-title em { font-style: italic; font-weight: 400; color: #B8935A; }
        .section-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-weight: 300; font-style: italic;
          color: #7A6B54; margin: 0 0 48px;
          line-height: 1.6; max-width: 440px;
        }
        .section-body {
          font-size: 15px; font-weight: 300;
          color: #6B5E4A; line-height: 1.85;
          max-width: 540px; margin: 0 0 52px;
        }

        /* Two-card grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          width: 100%;
          align-items: start;
        }
        @media (max-width: 680px) {
          .cards-grid { grid-template-columns: 1fr; }
        }

        /* Shared card base */
        .cta-card {
          border: 1px solid #D9C9A8;
          border-radius: 2px;
          padding: 40px 36px;
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .cta-card:hover {
          border-color: #C9A96E;
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(42,32,21,0.08);
        }
        .cta-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,169,110,0.04) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-card.clickable { cursor: pointer; }

        .card-corner {
          position: absolute;
          width: 20px; height: 20px;
          border-color: #C9A96E; border-style: solid;
          opacity: 0.4;
          transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
        }
        .cta-card:hover .card-corner { opacity: 1; width: 26px; height: 26px; }
        .card-corner.tl { top: 10px; left: 10px; border-width: 1px 0 0 1px; }
        .card-corner.tr { top: 10px; right: 10px; border-width: 1px 1px 0 0; }
        .card-corner.bl { bottom: 10px; left: 10px; border-width: 0 0 1px 1px; }
        .card-corner.br { bottom: 10px; right: 10px; border-width: 0 1px 1px 0; }

        .card-inner {
          display: flex; flex-direction: column;
          align-items: center; gap: 18px;
          position: relative; z-index: 1;
        }
        .card-eyebrow {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A96E;
        }
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 400;
          color: #2A2015; margin: 0; line-height: 1.2;
        }
        .card-desc {
          font-size: 14px; color: #8A7A62;
          line-height: 1.7; font-weight: 300;
          max-width: 300px; margin: 0; text-align: center;
        }

        /* Gift box icon */
        .gift-box-wrap { position: relative; display: inline-block; margin-bottom: 4px; }
        .gift-box {
          width: 64px; height: 52px;
          border: 2px solid #C9A96E; border-radius: 3px;
          position: relative; background: #FAF8F4;
          transition: transform 0.3s ease;
        }
        .cta-card:hover .gift-box { transform: scale(1.07); }
        .gift-lid {
          width: 72px; height: 16px;
          border: 2px solid #C9A96E; border-radius: 2px;
          position: absolute; top: -11px; left: -6px;
          background: #FAF8F4;
        }
        .gift-ribbon-v {
          position: absolute; width: 2px; background: #C9A96E;
          height: 100%; left: 50%; top: 0; transform: translateX(-50%);
        }
        .gift-ribbon-h {
          position: absolute; height: 2px; background: #C9A96E;
          width: 100%; top: 50%; left: 0; transform: translateY(-50%);
        }
        .gift-bow-left, .gift-bow-right {
          position: absolute; width: 16px; height: 10px;
          border: 2px solid #C9A96E; border-radius: 50% 0 50% 0; top: -20px;
        }
        .gift-bow-left  { left: calc(50% - 16px); transform: rotate(-30deg); }
        .gift-bow-right { left: calc(50%); transform: rotate(30deg) scaleX(-1); }

        .particles {
          position: absolute; inset: -40px; pointer-events: none;
        }
        .particle {
          position: absolute; width: 4px; height: 4px;
          background: #C9A96E; border-radius: 50%;
          opacity: 0; animation: float-particle 3s ease-in-out infinite;
        }
        @keyframes float-particle {
          0%   { opacity: 0; transform: translateY(0) scale(0.5); }
          40%  { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-60px) scale(1); }
        }

        /* CTA Button */
        .cta-button {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 10px; padding: 14px 32px;
          background: #2A2015; color: #F5EDDE;
          font-family: 'Jost', sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          border: none; border-radius: 1px; cursor: pointer;
          position: relative; overflow: hidden;
          transition: background 0.3s ease, color 0.3s ease, gap 0.3s ease;
          outline: none; width: 100%; margin-top: 4px;
        }
        .cta-button:hover { background: #C9A96E; color: #2A2015; gap: 16px; }
        .cta-button:active { transform: scale(0.98); }
        .cta-button .arrow { transition: transform 0.3s ease; display: inline-block; }
        .cta-button:hover .arrow { transform: translateX(4px) rotate(-45deg); }

        .ripple-effect {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,0.25);
          width: 100px; height: 100px;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple 0.6s ease-out forwards;
          pointer-events: none;
        }
        @keyframes ripple {
          to { transform: translate(-50%, -50%) scale(6); opacity: 0; }
        }

        .external-note {
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; color: #A8967A; letter-spacing: 0.05em;
        }
        .external-note svg { width: 11px; height: 11px; opacity: 0.7; }

        /* ── Bank card ── */
        .bank-icon {
          width: 56px; height: 40px;
          border: 2px solid #C9A96E; border-radius: 6px;
          position: relative; background: #FAF8F4;
          transition: transform 0.3s ease; margin-bottom: 4px;
        }
        .cta-card:hover .bank-icon { transform: scale(1.07); }
        .bank-icon-strip {
          position: absolute; top: 9px; left: 0; right: 0;
          height: 8px; background: #C9A96E; opacity: 0.45;
        }
        .bank-icon-chip {
          position: absolute; bottom: 8px; left: 8px;
          width: 14px; height: 10px;
          border: 1.5px solid #C9A96E; border-radius: 2px;
        }
        .bank-icon-dots {
          position: absolute; bottom: 11px; right: 8px;
          display: flex; gap: 3px;
        }
        .bank-icon-dot {
          width: 5px; height: 5px;
          background: #C9A96E; border-radius: 50%;
        }
        .bank-icon-dot:last-child { opacity: 0.35; }

        .bank-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, #D9C9A8, transparent);
        }

        .bank-details {
          width: 100%;
          border: 1px solid #EDE3D0;
          border-radius: 4px; overflow: hidden;
        }
        .bank-row {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: #FDFAF6; gap: 12px;
        }
        .bank-row + .bank-row { border-top: 1px solid #EDE3D0; }
        .bank-row-left {
          display: flex; flex-direction: column;
          gap: 2px; min-width: 0; flex: 1; text-align: left;
        }
        .bank-row-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: #C9A96E;
        }
        .bank-row-value {
          font-size: 13px; font-weight: 400;
          color: #2A2015; letter-spacing: 0.04em;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .bank-row-value.mono {
          font-family: 'Courier New', monospace;
          font-size: 12px; letter-spacing: 0.06em;
        }

        .copy-btn {
          flex-shrink: 0;
          display: flex; align-items: center; gap: 5px;
          padding: 5px 10px;
          border: 1px solid #D9C9A8; border-radius: 3px;
          background: transparent; color: #8A7A62;
          font-family: 'Jost', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s ease;
          white-space: nowrap;
        }
        .copy-btn:hover { border-color: #C9A96E; color: #C9A96E; background: rgba(201,169,110,0.05); }
        .copy-btn.copied { border-color: #6B8F5E; color: #6B8F5E; background: rgba(107,143,94,0.06); }
        .copy-btn svg { width: 10px; height: 10px; }

        .secure-note {
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; color: #A8967A; letter-spacing: 0.04em;
        }
        .secure-note svg { width: 11px; height: 11px; opacity: 0.6; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gift-inner > * { animation: fade-up 0.7s ease both; }
        .gift-inner > *:nth-child(1) { animation-delay: 0.05s; }
        .gift-inner > *:nth-child(2) { animation-delay: 0.12s; }
        .gift-inner > *:nth-child(3) { animation-delay: 0.18s; }
        .gift-inner > *:nth-child(4) { animation-delay: 0.24s; }
        .gift-inner > *:nth-child(5) { animation-delay: 0.30s; }
        .gift-inner > *:nth-child(6) { animation-delay: 0.38s; }
        .cards-grid > *:nth-child(1) { animation: fade-up 0.7s ease both 0.42s; }
        .cards-grid > *:nth-child(2) { animation: fade-up 0.7s ease both 0.54s; }
      `}</style>

      <section className="gift-section">
        <div className="gift-inner">

          <p className="section-label">{t('title')}</p>

          <div className="ornament">
            <div className="ornament-line" />
            <div className="ornament-dot" />
            <div className="ornament-diamond" />
            <div className="ornament-dot" />
            <div className="ornament-line right" />
          </div>

          <h2 className="section-title">{t('Gifts')} &amp; <em>{t('Wishes')}</em></h2>
          <p className="section-subtitle">{t('subtitle')}</p>
          <p className="section-body">
            {t('body')}
          </p>

          <div className="cards-grid">

            {/* ── Card 1: Gift Registry ── */}
            <div
              className="cta-card clickable"
              onMouseEnter={() => setRegistryHovered(true)}
              onMouseLeave={() => setRegistryHovered(false)}
              onClick={handleRegistryClick}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleRegistryClick()}
              aria-label="View our gift registry"
            >
              <div className="card-corner tl" /><div className="card-corner tr" />
              <div className="card-corner bl" /><div className="card-corner br" />
              <div className="card-inner">
                <div className="gift-box-wrap">
                  <div className="gift-bow-left" />
                  <div className="gift-bow-right" />
                  <div className="gift-lid">
                    <div className="gift-ribbon-v" /><div className="gift-ribbon-h" />
                  </div>
                  <div className="gift-box">
                    <div className="gift-ribbon-v" /><div className="gift-ribbon-h" />
                  </div>
                  {registryHovered && (
                    <div className="particles">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="particle" style={{
                          left: `${15 + i * 14}%`, bottom: "10%",
                          animationDelay: `${i * 0.25}s`,
                        }} />
                      ))}
                    </div>
                  )}
                </div>
                <span className="card-eyebrow">{t('registry')}</span>
                <h3 className="card-title">{t('registry-title')}</h3>
                <p className="card-desc">{t('registry-body')}</p>
                <button className="cta-button" onClick={handleRegistryClick}>
                  {ripple && <span className="ripple-effect" />}
                  {t('link-element')}
                  <span className="arrow">↗</span>
                </button>
                <div className="external-note">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7" />
                    <path d="M8 1h3m0 0v3m0-3L5.5 6.5" />
                  </svg>
                  {t('link-body')}
                </div>
              </div>
            </div>

            {/* ── Card 2: Bank Transfer ── */}
            <div className="cta-card" role="region" aria-label="Bank transfer information">
              <div className="card-corner tl" /><div className="card-corner tr" />
              <div className="card-corner bl" /><div className="card-corner br" />
              <div className="card-inner">
                <div className="bank-icon">
                  <div className="bank-icon-strip" />
                  <div className="bank-icon-chip" />
                  <div className="bank-icon-dots">
                    <div className="bank-icon-dot" />
                    <div className="bank-icon-dot" />
                  </div>
                </div>
                <span className="card-eyebrow">Bank Transfer</span>
                <h3 className="card-title">{t('send-gift')}</h3>
                <p className="card-desc">{t('send-body')}</p>

                <div className="bank-divider" />

                <div className="bank-details">
                  <div className="bank-row">
                    <div className="bank-row-left">
                      <span className="bank-row-label">Account holder</span>
                      <span className="bank-row-value">{BANK_INFO.accountHolder}</span>
                    </div>
                  </div>
                  <div className="bank-row">
                    <div className="bank-row-left">
                      <span className="bank-row-label">Bank</span>
                      <span className="bank-row-value">{BANK_INFO.bank}</span>
                    </div>
                  </div>
                  <div className="bank-row">
                    <div className="bank-row-left">
                      <span className="bank-row-label">IBAN</span>
                      <span className="bank-row-value mono">{BANK_INFO.iban}</span>
                    </div>
                    <button
                      className={`copy-btn${copied === "iban" ? " copied" : ""}`}
                      onClick={() => copyToClipboard(BANK_INFO.iban.replace(/\s/g, ""), "iban")}
                    >
                      {copied === "iban" ? (
                        <><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied</>
                      ) : (
                        <><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="7" height="7" rx="1"/><path d="M1 8V2a1 1 0 011-1h6"/></svg>Copy</>
                      )}
                    </button>
                  </div>
                  <div className="bank-row">
                    <div className="bank-row-left">
                      <span className="bank-row-label">BIC / SWIFT</span>
                      <span className="bank-row-value mono">{BANK_INFO.bic}</span>
                    </div>
                    <button
                      className={`copy-btn${copied === "bic" ? " copied" : ""}`}
                      onClick={() => copyToClipboard(BANK_INFO.bic, "bic")}
                    >
                      {copied === "bic" ? (
                        <><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied</>
                      ) : (
                        <><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="7" height="7" rx="1"/><path d="M1 8V2a1 1 0 011-1h6"/></svg>Copy</>
                      )}
                    </button>
                  </div>
                  <div className="bank-row">
                    <div className="bank-row-left">
                      <span className="bank-row-label">Reference</span>
                      <span className="bank-row-value">{BANK_INFO.reference}</span>
                    </div>
                  </div>
                </div>

                <div className="secure-note">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M6 1L1.5 3v3.5C1.5 9.1 3.5 11 6 11s4.5-1.9 4.5-4.5V3L6 1z"/>
                  </svg>
                  {t('secure')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}