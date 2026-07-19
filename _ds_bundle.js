/* @ds-bundle: {"format":4,"namespace":"EcoReportsDesignSystem_e3fff4","components":[{"name":"ArticleCard","sourcePath":"components/cards/ArticleCard.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/Card.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"AudienceCard","sourcePath":"components/marketing/AudienceCard.jsx"},{"name":"CredentialStrip","sourcePath":"components/marketing/CredentialStrip.jsx"},{"name":"GoogleRatingBadge","sourcePath":"components/marketing/GoogleRatingBadge.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavHeader","sourcePath":"components/navigation/NavHeader.jsx"}],"sourceHashes":{"components/cards/ArticleCard.jsx":"832bf50df00f","components/cards/Card.jsx":"d9b558423571","components/cards/TestimonialCard.jsx":"11c626d608cd","components/core/Badge.jsx":"22c77882f235","components/core/Button.jsx":"8f6da321df8a","components/forms/Input.jsx":"bdebf20405a0","components/marketing/AudienceCard.jsx":"38b2c5f4b580","components/marketing/CredentialStrip.jsx":"cd9d4a5e07f2","components/marketing/GoogleRatingBadge.jsx":"b2207c5ac721","components/marketing/ProcessStep.jsx":"b94ebf01f7f0","components/navigation/Footer.jsx":"2d6017cb67d2","components/navigation/NavHeader.jsx":"93f61886441a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EcoReportsDesignSystem_e3fff4 = window.EcoReportsDesignSystem_e3fff4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ArticleCard.jsx
try { (() => {
function ArticleCard({
  image,
  date,
  title,
  size = 'md'
}) {
  const h = size === 'lg' ? 480 : 380;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'block',
      position: 'relative',
      height: h,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    className: "img-zoom",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 40%, rgba(32,72,50,0.85) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--space-6)',
      right: 'var(--space-6)',
      bottom: 'var(--space-6)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      opacity: 0.85,
      marginBottom: 8
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size === 'lg' ? 'var(--text-3xl)' : 'var(--text-xl)',
      lineHeight: 1.12
    }
  }, title)));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function Card({
  children,
  padded = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      padding: padded ? 'var(--space-6)' : 0
    }
  }, children);
}
function ServiceCard({
  image,
  title,
  description,
  cta = 'Read More'
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    className: "img-zoom",
    style: {
      width: '100%',
      height: 160,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--color-primary)',
      marginBottom: 'var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-700)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 var(--space-4)'
    }
  }, description), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      background: 'var(--sage-100)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 16px',
      cursor: 'pointer',
      color: 'var(--forest-700)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { Card, ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  source = 'google'
}) {
  const sourceMark = {
    google: 'G',
    facebook: 'f'
  }[source];
  const starColor = source === 'google' ? '#FBBC04' : '#1877F2';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: starColor,
      letterSpacing: '2px'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-700)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: source === 'google' ? '#fff' : '#1877F2',
      color: '#fff',
      border: source === 'google' ? '1px solid var(--color-border)' : 'none',
      fontSize: 12,
      fontWeight: 700
    }
  }, source === 'google' ? /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/icon-google.png",
    alt: "Google",
    style: { width: 13, height: 13 }
  }) : sourceMark)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'green'
}) {
  const tones = {
    green: {
      background: 'var(--green-600)',
      color: '#fff'
    },
    lime: {
      background: 'var(--lime-500)',
      color: 'var(--forest-800)'
    },
    sage: {
      background: 'var(--sage-200)',
      color: 'var(--forest-700)'
    },
    outline: {
      background: '#fff',
      color: 'var(--ink-700)',
      border: '1px solid var(--color-border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone]
    }
  }, children);
}
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-700)',
      background: 'var(--sage-100)',
      border: '1px solid var(--color-border)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-sm)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    border: '2px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
  };
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '12px 22px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '16px 30px',
      fontSize: 'var(--text-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--sage-200)',
      color: 'var(--forest-700)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-primary)'
    },
    'outline-light': {
      background: 'rgba(255,255,255,0.15)',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.7)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: variant === 'primary' ? 'cta-btn' : undefined,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  textarea = false
}) {
  const fieldStyle = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--color-text)',
    background: '#fff',
    border: '1px solid var(--color-border-strong)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    outline: 'none',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--ink-700)',
      marginBottom: '6px'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    rows: 4,
    style: fieldStyle
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    style: fieldStyle
  }));
}
function Select({
  label,
  options = []
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--ink-700)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text)',
      background: '#fff',
      border: '1px solid var(--color-border-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))));
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/AudienceCard.jsx
try { (() => {
function AudienceCard({
  title,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--forest-700)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-700)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description));
}
Object.assign(__ds_scope, { AudienceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/AudienceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CredentialStrip.jsx
try { (() => {
function CredentialStrip({
  logos
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sage-100)',
      padding: 'var(--space-12) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: `repeat(${logos.length}, 1fr)`,
      gap: 'var(--space-6)'
    }
  }, logos.map(src => /*#__PURE__*/React.createElement("div", {
    key: src,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      height: 140,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  })))));
}
Object.assign(__ds_scope, { CredentialStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CredentialStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/GoogleRatingBadge.jsx
try { (() => {
function GoogleRatingBadge({
  rating = 4.9,
  count = 128,
  variant = 'light'
}) {
  const light = variant === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      background: light ? 'rgba(255,255,255,0.95)' : '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '10px 16px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/icon-google.png",
    alt: "Google",
    style: {
      width: 26,
      height: 26,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FBBC04',
      fontSize: 'var(--text-sm)',
      letterSpacing: 1
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)'
    }
  }, rating)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-500)'
    }
  }, count, " Google reviews")));
}
Object.assign(__ds_scope, { GoogleRatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/GoogleRatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
function ProcessStep({
  number,
  title,
  description
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-5)',
      borderTop: '3px solid var(--lime-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--lime-500)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.75)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function SocialDot({
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12
    }
  }, label);
}
function Footer({
  onNavClick
} = {}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  };
  const heading = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: 'var(--text-sm)',
    color: 'var(--green-400)',
    marginBottom: 'var(--space-2)'
  };
  const link = {
    color: 'rgba(255,255,255,0.82)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)'
  };
  const go = k => e => {
    e.preventDefault();
    onNavClick && onNavClick(k);
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest-800)',
      color: '#fff',
      padding: 'var(--space-16) var(--space-8) var(--space-8)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr 1fr 1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/logo-black-ecoreports.png",
    alt: "Eco Reports",
    style: {
      height: 32,
      marginBottom: 'var(--space-4)',
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...link,
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 220
    }
  }, "BASIX Certificates and NatHERS Assessments, NSW & Australia-wide.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Our Services"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: go('service')
  }, "BASIX Certificates"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: go('service')
  }, "NatHERS Assessments"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: go('service')
  }, "Section J Reports")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "We Work With"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Architects"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Draftsmen & Designers"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Developers"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Home Owners")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Resources"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: go('blog')
  }, "Blog & Articles"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: go('process')
  }, "How It Works"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#",
    onClick: go('contact')
  }, "Contact Us")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Head Office"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "Level 26, 44 Market Street", /*#__PURE__*/React.createElement("br", null), "Sydney NSW 2000"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "(02) 7910 9379"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(SocialDot, {
    label: "f"
  }), /*#__PURE__*/React.createElement(SocialDot, {
    label: /*#__PURE__*/React.createElement("img", {
      src: "assets/logos/icon-google.png",
      alt: "Google",
      style: { width: 14, height: 14 }
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-12) auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "\xA9 2018\u20132026 Eco Reports | BASIX Certificates and NatHERS Assessments Australia-wide"), /*#__PURE__*/React.createElement("a", {
    href: "https://wollongongwebdesignco.com.au",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,0.45)',
      textDecoration: 'none'
    }
  }, "Website by Web Design Wollongong Co")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavHeader.jsx
try { (() => {
function NavHeader({
  links = ['Home', 'Services', 'Process', 'Resources', 'About', 'Contact'],
  active = 'Home',
  phone,
  onNavClick
}) {
  const keyOf = l => ({
    services: 'service'
  })[l.toLowerCase()] || l.toLowerCase();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--color-border)',
      padding: '0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 80,
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/logo-black-ecoreports.png",
    alt: "Eco Reports",
    style: {
      height: 30,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavClick && onNavClick(keyOf(l));
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: l === active ? 'var(--green-600)' : 'var(--ink-700)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexShrink: 0
    }
  }, phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/[^0-9+]/g, '')}`,
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-900)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600
    }
  }, phone), /*#__PURE__*/React.createElement("button", {
    className: "cta-btn",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      background: 'var(--color-accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '11px 22px',
      cursor: 'pointer'
    }
  }, "Get a Quote"))));
}
Object.assign(__ds_scope, { NavHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.AudienceCard = __ds_scope.AudienceCard;

__ds_ns.CredentialStrip = __ds_scope.CredentialStrip;

__ds_ns.GoogleRatingBadge = __ds_scope.GoogleRatingBadge;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavHeader = __ds_scope.NavHeader;

})();
