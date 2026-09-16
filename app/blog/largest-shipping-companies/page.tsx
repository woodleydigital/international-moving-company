import { ContentShell, DecisionTable } from '../../content-shell';
import { CARRIERS, CAPACITY, RELIABILITY, ALLIANCES, teuMillions, sharePct } from '../../shipping-carriers';
import { ArrivalWindowPlanner, CarrierBrandLookup } from '../../shipping-tools';

export const metadata = {
  title: 'The 10 Largest Shipping Companies in the World (2026) | IMC',
  description: 'The ten biggest container lines ranked by operated capacity, with the schedule-reliability figures the rankings leave out and what both mean for a household shipment.',
};

const fmt = (n: number) => n.toLocaleString('en-GB');

export default function ShippingCompanies() {
  return (
    <ContentShell
      path="/blog/largest-shipping-companies/"
      category="Shipping lines"
      title="The ten largest shipping companies in the world, and what the ranking does not tell you."
      intro={`Ten carriers operate ${CAPACITY.reportedTopTenSharePct}% of the world's container capacity. Every list of them ranks the same way, by fleet size. Fleet size is not what determines whether your shipment arrives when someone said it would — in ${RELIABILITY.month}, ${RELIABILITY.globalPct}% of container ships worldwide arrived inside their advertised window.`}
      related={[
        { href: '/guides/international-moving-times/', label: 'Understand moving timelines' },
        { href: '/services/shared-container/', label: 'Compare container options' },
        { href: '/guides/comparing-international-moving-quotes/', label: 'Compare quotes like for like' },
      ]}
    >
      <section>
        <h2>The ranking, as it stands</h2>
        <p>
          Carriers are ranked by <strong>operated TEU capacity</strong> — the total container slots
          across the ships a group runs, whether it owns them or charters them. A TEU is one
          twenty-foot container; a standard household shipment in a sole-use forty-foot container
          occupies two of them. The figures below are Alphaliner&rsquo;s, as reported for{' '}
          {CAPACITY.asOfLabel}.
        </p>
        <DecisionTable
          caption={`Container lines by operated capacity, ${CAPACITY.source}, ${CAPACITY.asOfLabel}`}
          headings={['Carrier', 'Capacity (TEU)', 'Share of world fleet', 'Alliance', 'Based']}
          rows={CARRIERS.map(c => [
            `${c.rank}. ${c.name}`,
            `${teuMillions(c.teu)}m`,
            `${sharePct(c.teu)}%`,
            c.alliance,
            c.country,
          ])}
        />
        <p>
          The concentration at the top is easy to underread. MSC operates{' '}
          <strong>{fmt(CARRIERS[0].teu - CARRIERS[1].teu)} TEU</strong> more than Maersk in second
          place — a gap larger than the entire fleet of Hapag-Lloyd in fifth, and more than three
          times the whole of Yang Ming in ninth. The top three alone hold{' '}
          {((CARRIERS[0].teu + CARRIERS[1].teu + CARRIERS[2].teu) / CAPACITY.worldFleetTeu * 100).toFixed(1)}%
          of world capacity.
        </p>
        <p>
          Those ten rows sum to <strong>{fmt(CAPACITY.derivedTopTenTeu)} TEU</strong>, against a
          world fleet of {teuMillions(CAPACITY.worldFleetTeu)}m TEU across{' '}
          {fmt(CAPACITY.worldFleetShips)} ships. Alphaliner&rsquo;s own headline for the same
          release is {fmt(CAPACITY.reportedTopTenTeu)} TEU, or{' '}
          {CAPACITY.reportedTopTenSharePct}% of world capacity. The {fmt(97000)} TEU difference is
          a rounding artefact — per-carrier figures are published to the nearest thousand and a
          fleet changes daily — and we mention it because a page about accurate numbers should
          explain its own.
        </p>
      </section>

      <section>
        <h2>Why two &ldquo;top ten&rdquo; lists disagree</h2>
        <p>
          Search for this ranking and you will find versions that contradict each other. Usually
          neither is wrong: they consolidate differently. Alphaliner counts subsidiary brands
          towards the parent group, so a shipment moving on an <strong>APL</strong> bill of lading
          counts towards CMA CGM, and one on <strong>Hamburg S&uuml;d</strong> counts towards
          Maersk. A list that treats those as separate carriers produces a different order.
        </p>
        <p>
          This matters beyond trivia. If a moving company tells you your container is booked with a
          line you cannot find in any ranking, it is very often a consolidated brand rather than an
          obscure operator.
        </p>
        <DecisionTable
          caption="Subsidiary brands consolidated into their parent group"
          headings={['Group', 'Also trades as']}
          rows={CARRIERS.filter(c => c.brands?.length).map(c => [c.name, c.brands!.join(', ')])}
        />
        <CarrierBrandLookup />
      </section>

      <section>
        <h2>The number the rankings leave out</h2>
        <p>
          Fleet size tells you how much a carrier <em>can</em> move. It tells you nothing about
          whether a ship turns up on the day the schedule says. That measure is called{' '}
          <strong>schedule reliability</strong>: the share of vessel arrivals landing inside the
          advertised window. Sea-Intelligence publishes it monthly, and it is close to absent from
          articles ranking the same carriers by size.
        </p>
        <p>
          For {RELIABILITY.month}, global schedule reliability was{' '}
          <strong>{RELIABILITY.globalPct}%</strong> — down {Math.abs(RELIABILITY.momChangePp)}{' '}
          percentage points on the month and {Math.abs(RELIABILITY.yoyChangePp)} on the year. Ships
          that did arrive late averaged <strong>{RELIABILITY.averageDelayDays} days</strong> behind
          schedule.
        </p>
        <DecisionTable
          caption={`Schedule reliability, ${RELIABILITY.source}, ${RELIABILITY.month}`}
          headings={['Measure', 'Figure', 'What it means for a shipment']}
          rows={[
            ['All carriers worldwide', `${RELIABILITY.globalPct}%`, 'Roughly two ships in five missed their advertised arrival window'],
            [`Most reliable (${RELIABILITY.best.name})`, `${RELIABILITY.best.pct}%`, 'Still around one arrival in four outside the window'],
            [`Second (${RELIABILITY.secondBest.name})`, `${RELIABILITY.secondBest.pct}%`, 'Both leaders are Gemini Cooperation members'],
            [`Least reliable (${RELIABILITY.worst.name})`, `${RELIABILITY.worst.pct}%`, 'Fewer than one arrival in three inside the window'],
            ['Average delay when late', `${RELIABILITY.averageDelayDays} days`, 'The buffer a realistic delivery plan needs, before destination handling'],
          ]}
        />
        <p>
          The spread is the point. Between the most and least reliable carrier in a single month
          there is a gap of{' '}
          <strong>
            {(RELIABILITY.best.pct - RELIABILITY.worst.pct).toFixed(1)} percentage points
          </strong>
          . Neither the best nor the worst performer is the largest carrier, and the two most
          reliable are not the two biggest. Size and punctuality are separate properties.
        </p>
        <ArrivalWindowPlanner />
      </section>

      <section>
        <h2>The alliances matter more than the rank</h2>
        <p>
          Carriers share vessels through alliances, so the line that sold the slot is frequently not
          the line whose ship carries the box. The groupings were rebuilt in February 2025, when
          the 2M partnership between Maersk and MSC ended.
        </p>
        <DecisionTable
          caption="Container shipping alliances from February 2025"
          headings={['Alliance', 'Members', 'Why it matters']}
          rows={ALLIANCES.map(a => [a.name, a.members.join(', '), a.note])}
        />
        <p>
          The practical consequence: booking with a Gemini member does not guarantee a Gemini ship
          on every leg, and a delay on a shared service affects every carrier selling space on it.
          When a schedule slips, the question worth asking is which service the container is on,
          not which brand issued the paperwork.
        </p>
      </section>

      <section>
        <h2>What this means for a household move</h2>
        <p>
          Almost nobody moving a home contracts with these carriers directly. Household shipments
          are booked through moving companies and consolidators who hold the relationship with the
          line. You will generally not choose your carrier, and a mover promising a specific one
          is describing an intention rather than a guarantee — space is allocated when the shipment
          is ready, not when the quote is signed.
        </p>
        <p>
          That does not make the ranking useless. It tells you which names should be recognisable on
          your documents, and the reliability data tells you what to build into a plan. Ask these
          questions instead of asking for a carrier by name.
        </p>
        <DecisionTable
          caption="Questions that are answerable, in place of asking for a carrier by name"
          headings={['Ask', 'Why it is the better question', 'What a useful answer contains']}
          rows={[
            ['Which service and routing is the shipment planned on?', 'A routing with transhipment has more points at which a schedule can move than a direct service', 'Named load port, discharge port and whether a transfer is expected'],
            ['Is the advertised transit time a sailing time or a door-to-door estimate?', 'Sailing time excludes collection, consolidation, destination release and the delivery appointment', 'A separate figure for each stage'],
            ['What happens to my delivery date if the vessel is a week late?', `Late arrivals averaged ${RELIABILITY.averageDelayDays} days in ${RELIABILITY.month}, so this is a normal case, not a worst case`, 'How you are told, and how the delivery appointment is rebooked'],
            ['Is my shipment shared or sole-use?', 'Shared shipments wait for consolidation, which adds a dependency before the ship is even relevant', 'Expected consolidation window and what triggers dispatch'],
            ['Who do I contact when the schedule changes?', 'The carrier will not talk to you; the relationship sits with whoever booked the space', 'A named point of contact and an update interval'],
          ]}
        />
        <p>
          Our guide to{' '}
          <a href="/guides/international-moving-times/">international moving times</a> sets out the
          stages a door-to-door estimate has to cover, and{' '}
          <a href="/guides/comparing-international-moving-quotes/">comparing moving quotes</a>{' '}
          explains how to check that two estimates describe the same scope.
        </p>
      </section>

      <section>
        <h2>How these figures were compiled</h2>
        <p>
          Capacity figures are Alphaliner&rsquo;s consolidated operated-capacity ranking as reported
          for {CAPACITY.asOfLabel}, cross-checked against two independent write-ups of the same
          release which agree on the leading positions and the combined total. Schedule reliability
          is from Sea-Intelligence&rsquo;s Global Liner Performance report covering{' '}
          {RELIABILITY.month}, published {RELIABILITY.reportedOn}. Alliance membership is as
          constituted from February 2025.
        </p>
        <p>
          Capacity rankings change continuously as ships are delivered, chartered and redelivered,
          and schedule reliability is republished monthly. Treat every figure here as carrying the
          date attached to it rather than as a live number. We revisit the page when a top-ten
          position changes hands, when monthly reliability moves by more than five percentage
          points, or when an alliance membership changes.
        </p>
        <p>
          We have no commercial relationship with any carrier named on this page, and no carrier
          pays for its position in the table or the way it is described.
        </p>
      </section>
    </ContentShell>
  );
}
