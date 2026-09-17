import { ContentShell, DecisionTable } from "../content-shell";
import { imcBrand } from "../brand-system";
import "../brand-reference.css";

export const metadata = {
  title: "IMC Brand Reference | Internal",
  description: "The working reference for applying the IMC identity: the mark and its files, colour roles with measured contrast, the type system, voice, and the production work still outstanding.",
  // An internal working reference. It is deliberately crawlable but not
  // indexable, so the noindex is actually read; a robots.txt block would hide
  // the page from the crawler without ever removing it from the index.
  robots: { index: false, follow: false },
};

// Colour roles are quoted from the live tokens in globals.css and
// brand-application.css. Ratios are calculated solid-colour pairs, checked
// against the same values; they are pair checks, not whole-page conformance.
const colourRoles = [
  { name: "Ink", hex: "#142D3B", token: "--ink", on: "#fff", use: "Text, major surfaces and the identity itself.", ratio: "14.30:1 on white · 12.91:1 on paper" },
  { name: "Accent", hex: "#167D8D", token: "--teal", on: "#fff", use: "Primary actions, connectors and the rules on diagrams and the enquiry panel.", ratio: "4.83:1 carrying white text" },
  { name: "Action hover", hex: "#116A78", token: "--brand-accent-hover", on: "#fff", use: "The darker companion for an action in its hover and active state.", ratio: "6.26:1 carrying white text" },
  { name: "Paper", hex: "#F6F3ED", token: "--ivory", on: "#142d3b", use: "Quiet surfaces, and the backing the mark sits on over dark artwork.", ratio: "Surface only — pair with ink or slate" },
  { name: "Muted text", hex: "#526572", token: "--slate", on: "#fff", use: "Supporting text, captions and table cells on light surfaces.", ratio: "6.06:1 on white · 5.48:1 on paper" },
  { name: "Light accent", hex: "#A7D2CE", token: "—", on: "#142d3b", use: "Selected display text and eyebrows on navy sections.", ratio: "8.69:1 on ink" },
];

export default function BrandReference() {
  return <ContentShell
    path="/brand/"
    category="Brand reference"
    title="The IMC identity, applied."
    intro="This is the working reference for anyone producing IMC material. It records what the identity is, where its files live and how they behave in use — and, just as deliberately, which production work has not been done. It mirrors docs/BRAND-APPLICATION-GUIDE.md in the site repository."
    schema={false}
    showCta={false}
    bodyClass="brand-reference"
    related={[{ href: "/", label: "See the identity in use" }, { href: "/site-map/", label: "Browse every page" }]}
  >

    <section>
      <h2>What this page is for</h2>
      <p>A brand holds together through repetition, not through a single striking application. This page exists so that the next piece of IMC material — a proposal, a form, a slide, a sign — can reach the same mark, the same six colours and the same two typefaces without anyone re-deriving them.</p>
      <p>Everything below describes the identity as it is currently implemented, and every measurement is taken from the live stylesheets rather than restated from memory. Where an asset is a working file rather than a master, the page says so.</p>
      <div className="brand-note">
        <p><b>This page is not indexed.</b> It carries a <code>noindex</code> and is kept out of the sitemap. It is a reference for people working on IMC material, not a page competing for search results.</p>
        <p>It is also not a certification. Nothing here has been through brand recognition research, and no numerical brand score has been assigned.</p>
      </div>
    </section>

    <section>
      <h2>The promise, and the order it is told in</h2>
      <p>The working promise is <strong>&ldquo;{imcBrand.promise}&rdquo;</strong> The homepage compresses it to &ldquo;International moving. Clearly managed.&rdquo; Whichever form is used, follow the headline immediately with what IMC actually manages: collection, international transport and home delivery.</p>
      <p>Message order is fixed: <strong>name and service → useful outcome → evidence → action</strong>. Introduce the company as International Moving Company (IMC) at the first substantive mention, then use IMC naturally. IMC is still a developing identifier, so pair the lettermark with the visible full name rather than assuming the initials are recognised.</p>
      <p>The action is an invitation to plan, not a promise of a price: the enquiry label is &ldquo;{imcBrand.enquiryLabel}&rdquo;.</p>
      <div className="brand-rules">
        <div>
          <h3>Say</h3>
          <ul>
            <li>What is collected, transported and delivered, and by whom.</li>
            <li>Which milestone a transit estimate actually describes.</li>
            <li>What information is still needed, and how to supply it.</li>
            <li>A supplied career fact attributed to the named person.</li>
          </ul>
        </div>
        <div>
          <h3>Do not say</h3>
          <ul>
            <li>&ldquo;Seamless global solutions&rdquo; — or anything else that skips the service definition.</li>
            <li>That a price or booking is being produced while the form is gathering a brief.</li>
            <li>That IMC owns fleets or warehouses, or that partners are accredited.</li>
            <li>Guaranteed response times, smooth arrivals or other outcomes.</li>
            <li>A person&rsquo;s previous employer as though it were an IMC partner.</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>The mark</h2>
      <p>The mark is the selected original artwork at its established crop and proportions. It has not been redrawn or generatively altered. HTML text pairs it with the company name everywhere it appears, and the full name is carried in the home link&rsquo;s accessible name.</p>
      <p>The artwork has no transparent ground. It is navy on its own near-ivory field (#F8F4EE), which the header and footer composite with <code>mix-blend-mode: multiply</code>. Multiply hides a pure white ground; it cannot hide this one — over white it returns the artwork unchanged, and over the paper colour it darkens the field slightly. On either light surface the mark therefore sits in a faint rectangle rather than on the page.</p>
      <p>This is subtle, and it is exactly what the live header and footer do today; a vector master with a real transparent ground is what removes it. On navy the field becomes useful rather than awkward: back the mark on a paper panel, as the footer&rsquo;s identity block does, and never reverse or recolour it — there is no reversed master to reverse to.</p>
      <div className="brand-stages">
        <figure className="brand-stage">
          <div className="brand-stage-art stage-white"><img src="/imc-mark.webp" width="328" height="126" alt="The IMC lettermark, navy letterforms with a teal doorway in the M, on white." /></div>
          <figcaption><b>On white</b>What the header does today. Multiply returns the artwork unchanged, so its ivory ground reads as a faint rectangle.</figcaption>
        </figure>
        <figure className="brand-stage">
          <div className="brand-stage-art stage-paper"><img src="/imc-mark.webp" width="328" height="126" alt="The same IMC lettermark on the ivory paper colour." /></div>
          <figcaption><b>On paper #F6F3ED</b>The surface the mark is drawn for, and the closest it gets to sitting on the page. Its ground still darkens slightly under multiply.</figcaption>
        </figure>
        <figure className="brand-stage">
          <div className="brand-stage-art stage-ink"><img src="/imc-mark.webp" width="328" height="126" alt="The IMC lettermark on an ivory panel, itself placed on a navy background." /></div>
          <figcaption><b>On ink #142D3B</b>Backed on a paper panel, as the footer&rsquo;s identity block does. Never reversed or recoloured.</figcaption>
        </figure>
      </div>

      <h3>Sizes in use</h3>
      <p>These are the implementation settings the site runs at, not research-validated minimum sizes. At default text settings, the mark is <strong>108&nbsp;px</strong> wide in the header, dropping to <strong>64&nbsp;px</strong> below 600&nbsp;px viewport width; the footer mark is <strong>80&nbsp;px</strong> there. The name beside it is 14&nbsp;px and stays visible at every breakpoint — at narrow widths the header wraps rather than dropping the full name.</p>

      <h3>Files</h3>
      <table className="brand-files">
        <caption className="specimen-label">Where the artwork lives</caption>
        <thead><tr><th scope="col">File</th><th scope="col">What it is</th><th scope="col">Use it for</th></tr></thead>
        <tbody>
          <tr>
            <th scope="row"><a href="/imc-mark.webp" download>imc-mark.webp</a></th>
            <td>Lossy WebP<span>328 × 126</span></td>
            <td>What the site serves. The smallest correct file for anything on the web.</td>
          </tr>
          <tr>
            <th scope="row"><a href="/imc-mark.png" download>imc-mark.png</a></th>
            <td>8-bit RGBA, opaque<span>656 × 252</span></td>
            <td>Screen work in tools that cannot open WebP. Exported from the WebP at twice display size, so it preserves those pixels rather than recovering detail. Do not enlarge it past its pixel size.</td>
          </tr>
          <tr>
            <th scope="row"><a href="/favicon.svg" download>favicon.svg</a></th>
            <td>SVG wrapper around embedded raster artwork</td>
            <td>The browser tab. It is not a vector master — do not relabel it as scalable artwork.</td>
          </tr>
          <tr>
            <th scope="row"><a href="/favicon.ico" download>favicon.ico</a></th>
            <td>ICO, 16 / 32 / 48 px entries</td>
            <td>Crawlers and browsers that request an icon at the site root by convention.</td>
          </tr>
        </tbody>
      </table>
      <div className="brand-note">
        <p><b>No master exists yet.</b> Every file above descends from raster artwork. A production vector master, optically tested compact, one-colour and reversed variants, and physical print proofs are all outstanding work — see the last section.</p>
        <p>Do not add a trade mark symbol to the mark. No rights or clearance position has been established.</p>
      </div>
    </section>

    <section>
      <h2>Colour</h2>
      <p>Six roles, each with a job. Ink and paper carry surfaces; accent carries action; slate carries supporting text; the light accent exists so display text can survive on a navy ground. Contrast ratios below are calculated solid-colour pairs — they check a pairing, not a whole page.</p>
      <ul className="brand-swatches">
        {colourRoles.map(role => <li key={role.name}>
          <div className="brand-chip" style={{ background: role.hex, color: role.on }}>{role.hex}</div>
          <strong>{role.name}</strong>
          <p>{role.use}</p>
          <span>{role.token !== "—" ? `${role.token} · ` : ""}{role.ratio}</span>
        </li>)}
      </ul>
      <div className="brand-note">
        <p>Colour never carries a state on its own. In the scope and planning tools, keep the written label and the pattern alongside the colour, so a reader who cannot separate two hues still gets the answer.</p>
      </div>
    </section>

    <section>
      <h2>Typography</h2>
      <p>Two families, held centrally in <code>app/typography.css</code>. Georgia sets editorial headings; Arial carries body copy and every interface role. Neither is a webfont — the pairing is deliberately made from faces that are already on the reader&rsquo;s machine, so headings never arrive late or reflow the page. Do not introduce a page-specific scale; the steps below are the whole system.</p>
      <dl className="brand-type">
        <div>
          <dt><b>Display</b>Georgia · clamp 42–72&nbsp;px</dt>
          <dd className="specimen-editorial specimen-display">International moving.</dd>
        </div>
        <div>
          <dt><b>Page title</b>Georgia · clamp 36–56&nbsp;px</dt>
          <dd className="specimen-editorial specimen-title">How an international move works.</dd>
        </div>
        <div>
          <dt><b>Section</b>Georgia · clamp 28–32&nbsp;px</dt>
          <dd className="specimen-editorial specimen-section">The records to keep at each handoff</dd>
        </div>
        <div>
          <dt><b>Card heading</b>Arial semibold · 22&nbsp;px</dt>
          <dd className="specimen-interface specimen-card">Start with the right assessment</dd>
        </div>
        <div>
          <dt><b>Body</b>Arial · 17&nbsp;px / 1.7</dt>
          <dd className="specimen-interface specimen-body">An international move is a sequence of decisions and handoffs. Keep your inventory, agreed scope and timing in one working plan, and revisit it whenever something changes.</dd>
        </div>
        <div>
          <dt><b>Label</b>Arial bold · 14&nbsp;px · tracked</dt>
          <dd className="specimen-interface specimen-label">Moving process</dd>
        </div>
        <div>
          <dt><b>Figures</b>Arial · tabular numerals</dt>
          <dd className="specimen-interface specimen-figures">10 × 0.05 m³ + 2 × 0.80 m³ = 2.10 m³</dd>
        </div>
      </dl>
      <p>Quantities and comparisons always use tabular numerals, so a column of figures lines up and a changing result does not shift its neighbours.</p>
    </section>

    <section>
      <h2>Voice</h2>
      <p>Calm, direct British and New Zealand English. Explain what happens, what information is needed, and what is still uncertain. Be considerate without making guarantees — the useful sentence is the one that tells someone what to do next.</p>
      <DecisionTable
        caption="The same situations, handled well and handled badly"
        headings={["Situation", "Preferred treatment", "Avoid"]}
        rows={[
          ["First introduction", "Explain collection, transport and delivery management", "A global-solutions claim with no service definition"],
          ["Starting an enquiry", "“Start with where you’re moving from and to.”", "Implying a price or booking is already being produced"],
          ["Moving through the form", "“Move details”, “Contact details”, “Back”", "Ambiguous labels or manufactured urgency"],
          ["Missing information", "Name what is missing and how to provide it", "Blame, alarm or an unexplained error code"],
          ["Timing", "Say which milestone is estimated", "“Guaranteed smooth arrival”"],
          ["Expert background", "Attribute a supplied fact to the named person", "Turning a previous employer into an IMC partner"],
          ["After a submitted enquiry", "Confirm what was received and what happens next", "Promising a response time that has not been agreed"],
        ]}
      />
    </section>

    <section>
      <h2>Diagrams, figures and imagery</h2>
      <p>A diagram earns its place by showing a mechanism the prose cannot. A row of labelled cards is not a diagram — if a figure only restates a list, it should be a list.</p>
      <ul>
        <li>Every figure carries a title in the editorial serif, and a caption that states its assumptions. A numeric figure says what it measures and what it excludes.</li>
        <li>A teal top rule marks a diagram and the enquiry panel. The open-corner rule marks selected introductions. Both are supporting geometric cues — they are not additional logos, and they are not evidence of anything.</li>
        <li>Labels stay legible on a phone. Figures set a minimum width and scroll within their own container rather than shrinking their type below readable size.</li>
        <li>Spacing uses the 8 / 16 / 24 / 32 / 48&nbsp;px tokens at default settings.</li>
        <li>A reduced-motion preference disables decorative transition, animation and smooth scrolling.</li>
      </ul>
      <p>On photography: keep Warwick&rsquo;s supplied portrait and the existing profile facts. Do not present a generated image as a real IMC move, and do not invent a team photograph, a customer story or a badge. Future photography should show permissioned people doing real work, with the explanation next to it. Never add an image purely to make a page feel branded.</p>
    </section>

    <section>
      <h2>What has not been done</h2>
      <p>Recording the gaps is part of the guide. None of the following has been completed, and none of it should be described as though it had.</p>
      <dl className="brand-gaps">
        <div><dt>Vector master</dt><dd>No production vector artwork exists. Every current file is raster, including the SVG favicon, which wraps an embedded bitmap. This is also why the mark has no transparent ground and shows a faint field on light surfaces.</dd></div>
        <div><dt>Variant set</dt><dd>No optically tested compact, one-colour or reversed variants have been drawn.</dd></div>
        <div><dt>Print</dt><dd>No physical print proofs. The palette has not been through a print colour match.</dd></div>
        <div><dt>Rights</dt><dd>No legal clearance or exclusivity position has been established. Generation alone confers nothing.</dd></div>
        <div><dt>Recognition</dt><dd>No brand recognition, delayed recall or competitive overlap research. No commercial impact measured.</dd></div>
        <div><dt>Accessibility</dt><dd>Contrast pairs are calculated; the site has not had a full assistive-technology audit. Keyboard flow, text enlargement and screen-reader behaviour across the enquiry remain to be tested end to end.</dd></div>
      </dl>
    </section>

  </ContentShell>;
}
