'use client'

import { useState } from "react";
import { useTranslations } from 'next-intl';




export default function GiftSection() {
  const [hovered, setHovered] = useState(false);
  const [ripple, setRipple] = useState(false);

  const t = useTranslations('Gift');

  const lang = t('lang')

  const GIFT_LIST_URL = "https://app.mywishlist.co/ednialima/edenia-and-bossia-wedding-list"; // 🔁 Replace with actual URL

  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    window.open(GIFT_LIST_URL, "_blank", "noopener,noreferrer");
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

        /* Decorative corner flourishes */
        .gift-section::before,
        .gift-section::after {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          opacity: 0.06;
          background: #B8935A;
        }
        .gift-section::before { top: -120px; left: -120px; }
        .gift-section::after  { bottom: -120px; right: -120px; }

        .gift-inner {
          max-width: 680px;
          width: 100%;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
        }

        /* Ornamental divider */
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
          width: 8px;
          height: 8px;
          background: #C9A96E;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .ornament-dot {
          width: 4px;
          height: 4px;
          background: #C9A96E;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Gift icon — pure CSS */
        .gift-icon-wrap {
          position: relative;
          margin-bottom: 40px;
        }
        .gift-box {
          width: 72px;
          height: 60px;
          border: 2px solid #C9A96E;
          border-radius: 4px;
          position: relative;
          background: #FAF8F4;
        }
        .gift-lid {
          width: 80px;
          height: 18px;
          border: 2px solid #C9A96E;
          border-radius: 3px;
          position: absolute;
          top: -12px;
          left: -6px;
          background: #FAF8F4;
        }
        .gift-ribbon-v {
          position: absolute;
          width: 2px;
          background: #C9A96E;
          height: 100%;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }
        .gift-ribbon-h {
          position: absolute;
          height: 2px;
          background: #C9A96E;
          width: 100%;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        .gift-lid .gift-ribbon-h { top: 50%; }
        .gift-lid .gift-ribbon-v { height: 100%; }
        .gift-bow-left,
        .gift-bow-right {
          position: absolute;
          width: 18px;
          height: 12px;
          border: 2px solid #C9A96E;
          border-radius: 50% 0 50% 0;
          top: -22px;
        }
        .gift-bow-left  { left: calc(50% - 18px); transform: rotate(-30deg); }
        .gift-bow-right { left: calc(50% + 0px);  transform: rotate(30deg) scaleX(-1); }

        /* Floating particles */
        .particles {
          position: absolute;
          inset: -40px;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: #C9A96E;
          border-radius: 50%;
          opacity: 0;
          animation: float-particle 3s ease-in-out infinite;
        }
        @keyframes float-particle {
          0%   { opacity: 0; transform: translateY(0) scale(0.5); }
          40%  { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-60px) scale(1); }
        }

        /* Typography */
        .section-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 7vw, 68px);
          font-weight: 300;
          line-height: 1.1;
          color: #2A2015;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }
        .section-title em {
          font-style: italic;
          font-weight: 400;
          color: #B8935A;
        }

        .section-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          font-style: italic;
          color: #7A6B54;
          margin: 0 0 48px 0;
          line-height: 1.6;
          max-width: 440px;
        }

        .section-body {
          font-size: 15px;
          font-weight: 300;
          color: #6B5E4A;
          line-height: 1.85;
          max-width: 500px;
          margin: 0 0 52px 0;
        }

        /* The CTA card */
        .cta-card {
          width: 100%;
          max-width: 480px;
          border: 1px solid #D9C9A8;
          border-radius: 2px;
          padding: 40px 44px;
          background: #FFFFFF;
          position: relative;
          overflow: hidden;
          transition: border-color 0.35s ease, transform 0.35s ease;
          cursor: pointer;
        }
        .cta-card:hover {
          border-color: #C9A96E;
          transform: translateY(-3px);
        }
        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,169,110,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Corner decorations on card */
        .card-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #C9A96E;
          border-style: solid;
          opacity: 0.5;
          transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
        }
        .cta-card:hover .card-corner { opacity: 1; width: 26px; height: 26px; }
        .card-corner.tl { top: 10px; left: 10px; border-width: 1px 0 0 1px; }
        .card-corner.tr { top: 10px; right: 10px; border-width: 1px 1px 0 0; }
        .card-corner.bl { bottom: 10px; left: 10px; border-width: 0 0 1px 1px; }
        .card-corner.br { bottom: 10px; right: 10px; border-width: 0 1px 1px 0; }

        .card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .card-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C9A96E;
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: #2A2015;
          margin: 0;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 14px;
          color: #8A7A62;
          line-height: 1.7;
          font-weight: 300;
          max-width: 320px;
          margin: 0;
        }

        /* CTA Button */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #2A2015;
          color: #F5EDDE;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, color 0.3s ease, gap 0.3s ease;
          outline: none;
          width: 100%;
          justify-content: center;
        }
        .cta-button:hover {
          background: #C9A96E;
          color: #2A2015;
          gap: 16px;
        }
        .cta-button:active { transform: scale(0.98); }

        .cta-button .arrow {
          font-size: 14px;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .cta-button:hover .arrow { transform: translateX(4px) rotate(-45deg); }

        /* Ripple */
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          width: 100px;
          height: 100px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple 0.6s ease-out forwards;
          pointer-events: none;
        }
        @keyframes ripple {
          to { transform: translate(-50%, -50%) scale(6); opacity: 0; }
        }

        .external-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #A8967A;
          letter-spacing: 0.05em;
        }
        .external-note svg { width: 11px; height: 11px; opacity: 0.7; }

        /* Fade-in animation */
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gift-inner > * {
          animation: fade-up 0.7s ease both;
        }
        .gift-inner > *:nth-child(1) { animation-delay: 0.05s; }
        .gift-inner > *:nth-child(2) { animation-delay: 0.12s; }
        .gift-inner > *:nth-child(3) { animation-delay: 0.18s; }
        .gift-inner > *:nth-child(4) { animation-delay: 0.24s; }
        .gift-inner > *:nth-child(5) { animation-delay: 0.30s; }
        .gift-inner > *:nth-child(6) { animation-delay: 0.38s; }
        .gift-inner > *:nth-child(7) { animation-delay: 0.46s; }
      `}</style>

      <section className="gift-section">
        <div className="gift-inner">

          {/* Label */}
          <p className="section-label">{t('title')}</p>

          {/* Ornamental divider */}
          <div className="ornament">
            <div className="ornament-line" />
            <div className="ornament-dot" />
            <div className="ornament-diamond" />
            <div className="ornament-dot" />
            <div className="ornament-line right" />
          </div>

          {/* Accroche */}
          <h2 className="section-title">
            Gifts &amp; <em>Wishes</em>
          </h2>

          {/* Subtitle */}
          <p className="section-subtitle">
            {t('subtitle')}
          </p>

          {/* Body */}
          <p className="section-body">
            {t('body')}
          </p>

          {/* CTA Card */}
          <div
            className="cta-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
            aria-label="View our gift registry — opens in new tab"
          >
            <div className="card-corner tl" />
            <div className="card-corner tr" />
            <div className="card-corner bl" />
            <div className="card-corner br" />

            <div className="card-inner">
              {/* CSS Gift box icon */}
              <div className="gift-icon-wrap">
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div className="gift-bow-left" />
                  <div className="gift-bow-right" />
                  <div className="gift-lid">
                    <div className="gift-ribbon-v" />
                    <div className="gift-ribbon-h" />
                  </div>
                  <div className="gift-box">
                    <div className="gift-ribbon-v" />
                    <div className="gift-ribbon-h" />
                  </div>

                  {/* Floating particles on hover */}
                  {hovered && (
                    <div className="particles">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="particle"
                          style={{
                            left: `${15 + i * 14}%`,
                            bottom: "10%",
                            animationDelay: `${i * 0.25}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <span className="card-eyebrow">{t('registry')}</span>
              <h3 className="card-title">{t('registry-title')}</h3>
              <p className="card-desc">
                {t('registry-body')}
              </p>

              <button className="cta-button" onClick={handleClick}>
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

        </div>
      </section>
    </>
  );
}