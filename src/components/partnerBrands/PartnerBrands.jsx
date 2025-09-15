'use client';

/**
 * PartnerBrands.jsx — Reusable Next.js component (TailwindCSS)
 *
 * Features:
 * - Configurable heading with highlighted word (default: "Industries we serve")
 * - Responsive, accessible logo grid
 * - Optional grayscale-on-hover effect
 * - Optional links per logo
 * - Lazy-loaded images with object-contain for neat sizing
 *
 * Usage:
 *   import PartnerBrands from "./PartnerBrands";
 *   
 *   export default function Page(){
 *     const logos = [
 *       { src: "https://shopskey.com/images/Optic-Gaming.png", alt: "Optic-Gaming" },
 *       { src: "https://shopskey.com/images/LYFE.png", alt: "LYFE" },
 *       { src: "https://shopskey.com/images/Universal.png", alt: "Universal" },
 *       { src: "https://shopskey.com/images/Optic-Gaming.png", alt: "Optic Gaming" },
 *       { src: "https://shopskey.com/images/CareTech.png", alt: "CareTech" },
 *       { src: "https://shopskey.com/images/Boost.png", alt: "Boost" },
 *       { src: "https://shopskey.com/images/Channel-4.png", alt: "Channel 4" },
 *     ];
 *     return (
 *       <PartnerBrands highlight="Industries" titleSuffix=" we serve" logos={logos} />
 *     );
 *   }
 */

/**
 * @typedef {Object} Logo
 * @property {string} src - Image URL
 * @property {string} [alt] - Accessible alt text
 * @property {string} [href] - Optional link for the logo
 * @property {number} [width]
 * @property {number} [height]
 */

/**
 * @param {Object} props
 * @param {string} [props.highlight="Industries"] - Highlighted word
 * @param {string} [props.titleSuffix=" we serve"] - Text after the highlight
 * @param {string} [props.highlightColor="#FC501B"] - CSS color for highlight
 * @param {string} [props.headingColor="#000000"] - CSS color for the non-highlighted text
 * @param {Logo[]} [props.logos=[]] - Array of logos to render
 * @param {boolean} [props.grayscale=true] - Apply grayscale effect with color on hover
 * @param {string} [props.className=""] - Extra classes for the section wrapper
 * @param {string} [props.columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"] - Grid columns classes
 */
export default function PartnerBrands({
  highlight = 'Industries',
  titleSuffix = ' we serve',
  highlightColor = '#FC501B',
  headingColor = '#000000',
  logos = [],
  grayscale = true,
  className = '',
  columns = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
}) {
  const wrapperCN = [
    'partner-brands-section w-full',
    'py-12 sm:py-14',
    className,
  ].join(' ');

  const imageCNBase = 'h-12 w-auto object-contain transition duration-200 ease-out';
  const imageCN = grayscale
    ? `${imageCNBase} grayscale opacity-80 hover:opacity-100 hover:grayscale-0`
    : `${imageCNBase} opacity-90 hover:opacity-100`;

  return (
    <section className={wrapperCN} aria-label="Partner brands">
      <div className="partner-container mx-auto max-w-7xl px-4">
        <h3
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ color: headingColor }}
        >
          <span
            className="capitalize"
            style={{ color: highlightColor }}
          >
            {highlight}
          </span>
          {titleSuffix}
        </h3>

        <ul className={`partner-logos mt-8 grid ${columns} gap-8 place-items-center`}>
          {logos.map((logo, idx) => {
            const img = (
              <img
                src={logo.src}
                alt={logo.alt || 'Brand logo'}
                loading="lazy"
                decoding="async"
                width={logo.width || 180}
                height={logo.height || 48}
                className={imageCN}
              />
            );

            return (
              <li key={`${logo.src}-${idx}`} className="flex items-center justify-center">
                {logo.href ? (
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={logo.alt || 'Brand website'}
                    className="inline-flex"
                  >
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
