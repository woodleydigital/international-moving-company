import { ContentShell, DecisionTable } from '../../content-shell';
import { CITATIONS, INVOICE_FIELDS, INVOICE_FIELD_COUNT } from '../../moving-risk-data';
import { DemurrageDetentionDiagram, ExamCascadeDiagram } from '../../moving-risk-graphics';

export const metadata = {
  title: 'The Risks in an International Move, and Who Pays | IMC',
  description:
    'Demurrage, detention, rolled sailings, container availability, customs examinations, cartage, store handling and storage in transit — what each one is, which party invoices you, and what the US billing rules give you.',
};

const cite = (key: keyof typeof CITATIONS) => CITATIONS[key];

export default function MovingRisks() {
  return (
    <ContentShell
      path="/blog/risks-of-international-moving/"
      category="Moving risk"
      title="The risks in an international move, and who sends the invoice."
      intro="Most of what goes wrong with an international move is not damage or loss. It is a cost that moves from one party to another because a container sat somewhere longer than someone's tariff allowed. Those costs are not random: nearly all of them are positions already written into a contract before your shipment leaves, and on the United States leg several are governed by rules that give the paying party more standing than they usually realise."
      related={[
        { href: '/guides/comparing-international-moving-quotes/', label: 'Compare quotations like for like' },
        { href: '/services/shipping-household-goods/', label: 'How household goods ship' },
        { href: '/guides/international-moving-times/', label: 'Where the time actually goes' },
      ]}
    >
      <section>
        <h2>The shape of the problem</h2>
        <p>
          A moving quotation prices the work someone expects to do. The risks below are what
          happens when the shipment stops moving: a box waits, and waiting has an owner. The
          question that decides your exposure is not whether delays happen — they do — but{' '}
          <strong>which party&rsquo;s clock is running while they do</strong>, and whether your
          quotation says who settles the bill when it stops.
        </p>
        <p>
          Almost none of this is visible in a headline price. It sits in the carrier&rsquo;s
          tariff, the destination agent&rsquo;s schedule of ancillary charges, and the paragraph in
          your terms that begins &ldquo;charges beyond our control&rdquo;. Ask before booking and
          these are answerable questions. Ask afterwards and they are invoices.
        </p>
      </section>

      <section>
        <h2>Demurrage and detention: two clocks, not one phrase</h2>
        <p>
          These two words are used interchangeably in conversation and mean different things on an
          invoice. Both are charges for time, but they measure the time of different assets in
          different places, and the event that separates them is the moment the container leaves
          the terminal gate.
        </p>
        <DemurrageDetentionDiagram />
        <p>
          <strong>Demurrage</strong> is charged while your container is still inside the terminal
          after its free time has run out — you are occupying the port&rsquo;s ground.{' '}
          <strong>Detention</strong> is charged once it has left and not yet come back empty — you
          are holding the carrier&rsquo;s equipment. A shipment can incur both, in sequence, from
          the same delay.
        </p>
        <p>
          The United States collapses the distinction for billing purposes. {cite('ddDefinition').ref}{' '}
          defines demurrage or detention as any charge, including per diem, related to the use of
          marine terminal space or shipping containers &mdash; and expressly{' '}
          <em>not</em> freight charges. That matters when you are reading a quotation: a line
          described as freight cannot quietly be either of these.
        </p>

        <h3>What a US invoice has to contain</h3>
        <p>
          {cite('ddInvoice').ref} sets out the minimum information on a demurrage or detention
          invoice in a US trade &mdash; {INVOICE_FIELD_COUNT} items across five groups. The last
          group is the one most people have never seen.
        </p>
        <DecisionTable
          caption={`Required contents of a demurrage or detention invoice (${cite('ddInvoice').ref})`}
          headings={['Group', 'What must appear']}
          rows={INVOICE_FIELDS.map(g => [g.group, g.fields.join('; ')])}
        />
        <p>
          Two of those certifications are worth reading twice. The billing party must state that
          the charge complies with the Commission&rsquo;s demurrage and detention rules, and that{' '}
          <strong>its own performance did not cause or contribute to the charge it is billing you
          for</strong>.
        </p>
        <p>
          The consequences of getting it wrong sit with the biller, not with you.{' '}
          {cite('ddUnenforceable').ref} is blunt: failure to include any of the required minimum
          information <strong>eliminates any obligation of the billed party to pay</strong> the
          charge. {cite('ddThirtyDays').ref} adds a deadline &mdash; the invoice must be issued
          within 30 calendar days of the date the charge was last incurred, and if it is not, you
          are not required to pay it. {cite('ddDispute').ref} then gives you at least 30 calendar
          days from issuance to ask for mitigation, a refund or a waiver, and obliges the billing
          party to attempt to resolve that request within 30 days.
        </p>
        <p>
          Separately, {cite('incentive').ref} sets out an <strong>incentive principle</strong>: in
          judging whether a demurrage or detention practice is reasonable, the Commission considers
          how far the charge is actually serving its purpose of keeping freight moving. Two
          applications of that principle matter to a household shipment. Under{' '}
          {cite('incentiveEmpties').ref}, imposing detention when it cannot incentivise
          anything &mdash; such as when empty containers cannot be returned &mdash; is likely to be
          found unreasonable, absent extenuating circumstances. Under{' '}
          {cite('incentiveInspections').ref}, the Commission may consider the same question in the
          context of government inspections.
        </p>
        <div className="journey-insight">
          <strong>These are United States rules</strong>
          <p>
            Parts 541 and 545 bind ocean common carriers, marine terminal operators and NVOCCs in
            US trades. They do not govern the origin leg of a move leaving the UK, or a
            UK-to-Australia shipment. Elsewhere, demurrage and detention are whatever the tariff
            and your contract say they are &mdash; which is the argument for reading both before
            you book.
          </p>
        </div>
      </section>

      <section>
        <h2>Before the box even sails</h2>
        <p>
          Three risks sit upstream of the terminal, and all three are easier to mistake for a
          settled fact than the ones above.
        </p>
        <DecisionTable
          caption="Risks that attach before departure"
          headings={['Risk', 'What actually happens', 'The question to ask before booking']}
          rows={[
            [
              'Not securing a sailing',
              'A quoted sailing is an intention until space is confirmed against a booking. Cargo can also be rolled to a later vessel after a booking exists, which is a carrier decision.',
              'Is this booking confirmed or requested, and what happens to my dates and my price if it rolls?',
            ],
            [
              'Freight rate increases',
              'Ocean rates move with the market and with general rate increases applied on set dates. A quotation prices a rate that was available when it was written.',
              'How long is this rate valid, what triggers a re-quote, and is a rate increase passed through or absorbed?',
            ],
            [
              'Container availability',
              'Equipment has to be in the right place, of the right type. Availability varies by port, by trade and by season, and a shortage delays loading rather than transit.',
              'Is the equipment allocated for my loading date, and what is the fallback if it is not?',
            ],
          ]}
        />
        <p>
          None of these is unusual and none implies anyone has behaved badly. The failure mode is
          quieter: a date treated as fixed by the customer and as indicative by everyone else.
          Establish which it is in writing, and the same event becomes a rescheduling conversation
          instead of a dispute.
        </p>
      </section>

      <section>
        <h2>A customs examination, and the invoices that follow it</h2>
        <p>
          If US Customs and Border Protection selects your container for physical examination, it
          is moved to a <strong>centralized examination station</strong>. Under {cite('ces').ref} a
          CES is &ldquo;a privately operated facility, not in the charge of a Customs officer, at
          which merchandise is made available to Customs officers for physical examination&rdquo;.
          Both halves of that sentence do work: the examination is the government&rsquo;s, the
          building is a business&rsquo;s.
        </p>
        <ExamCascadeDiagram />
        <p>
          {cite('priceTransfer').ref} is one such operator. It describes itself as running{' '}
          Centralized Examination Station Y265 serving the ports of Los Angeles and Long Beach,
          with CBP, AQI/CBPA and FDA officers stationed on site. That is the company&rsquo;s own
          description of its facilities; we have not assessed its service, and naming it is not a
          recommendation or a criticism. The point is structural rather than particular to any one
          operator: when a station handles your container, you are dealing with a private company
          under a CBP agreement, not with CBP.
        </p>
        <p>
          That is why the charge reaches you the way it does. {cite('cesFees').ref} provides that
          the operator assesses fees from the schedule in its approved application and{' '}
          <strong>bills users directly</strong>. So the examination itself is not something you
          were quoted for, could decline, or can appeal on cost grounds &mdash; but the schedule
          behind the bill is a filed document. {cite('cesFeeChange').ref} requires 90 calendar
          days&rsquo; written notice to the port director before an operator changes it, with a
          justification, public comment and the port director&rsquo;s approval. A fee schedule with
          that much process around it is one you can reasonably ask to see.
        </p>
        <p>
          The examination rarely arrives alone. The container has to be carted to the station and
          back; the station charges for devanning, presentation and restuffing; demurrage may keep
          running at the terminal throughout, which is where {cite('incentiveInspections').ref}{' '}
          becomes relevant; and if the delay pushes past your agreed delivery window, the shipment
          goes into storage. Four parties, four invoices, one decision none of them made.
        </p>
      </section>

      <section>
        <h2>Storage in transit, cartage and store handling</h2>
        <p>
          <strong>Storage in transit</strong> &mdash; SIT &mdash; is warehousing of your shipment
          partway through the move, usually because the destination residence is not ready or the
          shipment has been held up. It is routinely offered as a convenience and routinely
          misread as a single daily rate.
        </p>
        <p>
          It is normally three charges, not one. There is the <strong>cartage</strong> to move the
          shipment from the port or terminal to the warehouse. There is{' '}
          <strong>store handling</strong>, charged for taking the shipment into the warehouse and
          again for taking it out &mdash; in and out are commonly separate lines. Then there is the
          storage itself, per period, usually against volume or against a number of containers or
          vaults. A quotation that gives you a weekly storage rate and nothing else has priced the
          least significant of the three for a short stay.
        </p>
        <DecisionTable
          caption="Questions that make a storage-in-transit quotation comparable"
          headings={['Component', 'What to establish']}
          rows={[
            ['Cartage in', 'Is the run from the port to the warehouse quoted, and does it change if the port changes?'],
            ['Handling in', 'Is handling into store a separate charge from the storage rate, and is it per volume or per vault?'],
            ['Storage', 'What period is billed, what volume basis, and is a part period billed as a whole one?'],
            ['Handling out', 'Is there a second handling charge on release, and is it the same amount as handling in?'],
            ['Cartage out and delivery', 'Does the original delivery price still stand after storage, or is it re-quoted from the warehouse?'],
            ['Access during storage', 'Can you retrieve an item, what does access cost, and how much notice is required?'],
            ['Insurance', 'Does the transit cover continue in store, or does it need a separate arrangement?'],
          ]}
        />
        <p>
          Storage also interacts with the clocks above. Moving a shipment into a warehouse can be
          what stops demurrage accruing, because it gets the container collected, stripped and
          returned. Whether that is worth doing is an arithmetic question &mdash; the storage chain
          against the daily charge it avoids &mdash; and it is one your agent can work out for your
          shipment if you ask them to show the comparison.
        </p>
      </section>

      <section>
        <h2>What to do with this</h2>
        <p>
          The practical value of knowing the mechanisms is that it changes what you ask for, and
          when. Six requests, all of which are reasonable to make before you commit:
        </p>
        <ul>
          <li>
            Ask for the <strong>free time</strong> at the destination port in days, and the daily
            rate after it, in writing, before booking rather than after discharge.
          </li>
          <li>
            Ask whether the sailing is <strong>confirmed or requested</strong>, and what a roll
            does to both your dates and your price.
          </li>
          <li>
            Ask how long the <strong>rate is valid</strong> and what triggers a re-quote.
          </li>
          <li>
            Ask who is <strong>billed and who settles</strong> a destination charge your mover did
            not cause &mdash; an examination, a port delay &mdash; and whether it is passed through
            at cost or with a handling margin.
          </li>
          <li>
            Ask for the <strong>storage chain in full</strong>: cartage in, handling in, storage,
            handling out, cartage out.
          </li>
          <li>
            On a US import, keep any demurrage or detention invoice and check it against{' '}
            {cite('ddInvoice').ref} before paying it. If it is incomplete, or arrived more than 30
            days after the charge last accrued, say so in writing within your 30 days.
          </li>
        </ul>
        <p>
          None of this prevents a delay. What it does is decide, in advance and on the record, who
          absorbs the cost of one &mdash; which is the part that is actually negotiable.{' '}
          <a href="/guides/comparing-international-moving-quotes/">
            Comparing quotations properly
          </a>{' '}
          covers the same discipline applied to the price as a whole.
        </p>
      </section>

      <section>
        <h2>Sources</h2>
        <p>
          Regulatory text was read from the eCFR as current at 1 October 2026 and retrieved on 27
          October 2026. This article explains how these rules work; it is not legal advice, and a
          dispute about a specific invoice should go to someone qualified to advise on it.
        </p>
        <ul>
          {Object.values(CITATIONS).map(c => (
            <li key={c.ref}>
              <a href={c.url} rel="nofollow noopener">
                {c.ref}
              </a>{' '}
              &mdash; {c.title}. {c.holds}
            </li>
          ))}
        </ul>
      </section>
    </ContentShell>
  );
}
