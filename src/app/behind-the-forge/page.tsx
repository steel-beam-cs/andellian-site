import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Behind the Forge | How Forge and Shadow Was Made",
  description:
    "How a world carried for fifteen years became a finished book—and what the human–AI collaboration actually looked like along the way.",
  alternates: { canonical: "/behind-the-forge" },
  openGraph: {
    type: "article",
    title: "Behind the Forge | Andellian",
    description:
      "The drafts, arguments, continuity records, proof copies, and judgment behind Forge and Shadow.",
    url: "/behind-the-forge",
    images: ["/images/alexander-dean-forge-lit.jpg"],
  },
};

function EvidenceDisclosure({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details className="forge-evidence-card forge-evidence-disclosure">
      <summary>{label}</summary>
      <blockquote>{children}</blockquote>
    </details>
  );
}

export default function BehindTheForgePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main className="forge-page" id="main-content">
        <section className="forge-hero section" aria-labelledby="forge-page-heading">
          <div className="site-shell forge-hero-grid">
            <div className="forge-hero-copy">
              <p className="eyebrow">The story behind the story</p>
              <h1 id="forge-page-heading">Behind the Forge</h1>
              <p className="forge-deck">
                How a world carried for fifteen years became a finished
                book—and what collaboration actually looked like along the way.
              </p>
              <div className="forge-prose">
                <p className="forge-lede">Andellian did not begin with a prompt.</p>
                <p>
                  Its gods, roads, histories, arguments, monsters, and
                  increasingly questionable taverns had been living in my
                  imagination for roughly fifteen years before I ever brought an
                  AI tool into the process. By then, the world existed. The
                  characters existed. The plot existed. So did an approximately
                  114,000-word manuscript.
                </p>
                <p>
                  What did not yet exist was the book I believed that manuscript
                  could become.
                </p>
                <p>
                  Finishing the first draft had required imagination and
                  persistence. Rebuilding it required something less romantic:
                  distance, scrutiny, continuity records, repeated argument, and
                  a willingness to strike pieces I had carried for years when
                  they no longer served the story.
                </p>
                <p>That is where the collaboration began.</p>
                <p>
                  Not with a request to write a novel for me, but with a finished
                  manuscript placed on the workbench and a question:
                </p>
                <blockquote>Where is this not working yet?</blockquote>
              </div>
            </div>
            <div className="forge-hero-portrait-frame">
              <Image
                alt="Alexander Dean standing in warm forge light"
                className="forge-hero-portrait"
                height={1200}
                priority
                sizes="(max-width: 767px) 100vw, 42vw"
                src="/images/alexander-dean-forge-lit.jpg"
                width={960}
              />
            </div>
          </div>
        </section>

        <section className="forge-section section" aria-labelledby="world-before-heading">
          <div className="site-shell forge-reading">
            <p className="eyebrow">Before the first chapter review</p>
            <h2 id="world-before-heading">The World Before the Collaboration</h2>
            <p>
              Andellian had been with me for roughly fifteen years before I
              asked ChatGPT to examine a single chapter.
            </p>
            <p>
              It began as most private worlds probably do: with fragments. A
              blacksmith. A road. Two people who wanted a quiet life. Gods with
              old grievances. Cities, histories, religions, monsters, and
              stories that existed long before I knew which of them belonged in
              a novel.
            </p>
            <p>
              Over time, those fragments became a world. The world became a
              plot. The plot became an approximately 114,000-word manuscript.
            </p>
            <p>
              That manuscript was mine in every way that mattered. The
              characters, their relationships, the history behind them, the
              shape of the series, and the ending I intended had already been
              carried for years. I had not asked a machine to imagine Andellian
              for me. I had finally written down enough of Andellian to discover
              how difficult it was to judge from the inside.
            </p>
            <p>
              There is a particular blindness that comes from knowing a world
              too well. I knew why every road had been built, which god had
              broken which promise, and what a seemingly minor object would mean
              four books later. The reader did not.
            </p>
            <p>
              The first manuscript contained the story I wanted to tell, but it
              also contained years of accumulated explanation, repeated
              emotions, buried revelations, and pieces of lore I loved more than
              the chapter carrying them could afford.
            </p>
            <blockquote className="forge-pull">
              The choice was not whether to preserve the world. The choice was
              whether I was willing to rebuild the book.
              <strong>I was.</strong>
            </blockquote>
          </div>
        </section>

        <section className="forge-section forge-work section" aria-labelledby="work-heading">
          <div className="site-shell forge-reading">
            <p className="eyebrow">Chapter by chapter</p>
            <h2 id="work-heading">What the Work Actually Looked Like</h2>
            <p>There was no button marked <em>Finish the Novel</em>.</p>
            <p>
              The work happened chapter by chapter, scene by scene, and often
              paragraph by paragraph. I would bring forward a section of the
              manuscript, and ChatGPT would examine it for structure, pacing,
              exposition, continuity, character logic, and whether the scene was
              accomplishing what I believed it was.
            </p>
            <p>Sometimes the answer was yes.</p>
            <p>
              Sometimes the answer was that I had explained the same emotion
              three times, buried the strongest moment beneath two pages of
              history, or allowed a character to know something they had no
              possible way of knowing.
            </p>
            <p className="forge-emphasis">Then we argued.</p>
            <p>
              The manuscript was never handed over. It was argued over.
              Suggestions were accepted, rejected, narrowed, rewritten, or sent
              back entirely. A proposed change still had to fit the established
              voice of the book. It had to preserve the emotional intent of the
              scene. It had to respect what had already happened, what the
              characters knew, and what later books were meant to reveal.
            </p>
            <p>
              A line that looked harmless in Book One could spoil something
              intended for Book Four. A clearer explanation could become a
              premature answer. A stronger emotional beat could accidentally
              repeat one already earned elsewhere. Even a useful revision could
              be wrong if it sounded like a different author had entered the
              room.
            </p>
            <p>
              So the work was not simply to make the prose cleaner. It was to
              make the book stronger without sanding away the parts that made it
              mine.
            </p>
            <p>
              ChatGPT often served as the challenger: asking whether a scene had
              earned its length, whether an explanation belonged there, whether
              a decision made sense from inside the character rather than only
              from inside my outline.
            </p>
            <p>I remained responsible for the answer.</p>
            <p>
              Some chapters needed only restraint. Others needed to be rebuilt.
              One particularly stubborn chapter had to be dragged into shape one
              paragraph at a time and did not surrender gracefully.
            </p>
            <blockquote className="forge-pull">
              Does this make the story clearer, stronger, more honest, and more
              recognizably itself?
            </blockquote>
            <p>
              When the answer was no, the suggestion did not survive. When the
              answer was yes, it went back into the forge.
            </p>
            <p>
              Not every discussion began with a broken scene. Some began with an
              idea that needed rules. The soul crystal and soul well system, for
              example, had to be tested for logic, limits, failure, and future
              consequences across the series. ChatGPT helped turn broad magical
              concepts into something the story could use consistently without
              explaining more than the reader needed to know.
            </p>
          </div>
          <figure className="site-shell forge-transition">
            <Image
              alt="A quiet hand-drawn forge with an anvil, resting hammer, workbench, and hanging tools"
              height={900}
              sizes="(max-width: 767px) 100vw, 1100px"
              src="/images/behind-the-forge-anvil.jpg"
              width={1200}
            />
          </figure>
        </section>

        <section className="forge-section forge-hammer section" aria-labelledby="hammer-heading">
          <div className="site-shell forge-feature-grid">
            <div className="forge-feature-image">
              <Image
                alt="The Hammer of Continuity surrounded by editorial notes, parchment, and glowing threads of revision"
                height={1024}
                sizes="(max-width: 767px) 100vw, 42vw"
                src="/images/hammer-of-continuity.png"
                width={819}
              />
            </div>
            <div className="forge-prose">
              <p className="eyebrow">A necessary tool of the trade</p>
              <h2 id="hammer-heading">The Hammer of Continuity</h2>
              <p className="forge-emphasis">
                Some problems require a note in the margin. Others require a
                hammer.
              </p>
              <p>
                ChatGPT came up with the name <em>The Hammer of Continuity</em>
                during one of our many discussions about names, timelines,
                magical rules, character knowledge, and the increasingly
                dangerous habit of letting small details wander between
                chapters.
              </p>
              <p>I laughed. The name stayed. Then it became useful.</p>
              <p>
                The Hammer came down whenever a character knew something too
                early, a journey took the wrong amount of time, an object
                appeared in the wrong hands, or a protected revelation escaped
                several books ahead of schedule.
              </p>
              <p>It also came down on smaller offenses:</p>
              <ul>
                <li>A surname that changed spelling.</li>
                <li>A road that quietly moved east.</li>
                <li>
                  A weapon that became interchangeable with another weapon
                  carrying an entirely different meaning.
                </li>
                <li>A character remembering a conversation they had never heard.</li>
                <li>A rule of magic bending because the scene wanted it to.</li>
              </ul>
              <p>
                Those details may look small in isolation. In a five-book
                series, they are not small. They are promises.
              </p>
              <p>
                Some continuity questions could be settled by checking the
                manuscript. Others required returning to old discussions,
                editorial records, canon files, or an earlier version of a
                chapter to determine what had actually been approved.
              </p>
              <p>
                And sometimes ChatGPT raised the Hammer only for me to take it
                away. A suspected mistake might turn out to be intentional. An
                odd spelling might belong to a character&apos;s private way of
                speaking. A missing explanation might be withheld on purpose.
                The tool could identify the inconsistency; only I could decide
                whether it was truly an error.
              </p>
              <p>
                The Hammer did not protect every old decision merely because it
                was old. Stories change during revision. Better ideas replace
                weaker ones. But when something changed, the change had to be
                deliberate, and the consequences had to be carried forward.
              </p>
              <blockquote className="forge-pull">
                What had been established had to be honored. What changed had to
                earn the change. What the story promised eventually had to be
                paid.
              </blockquote>
              <p className="hammer-motto">
                Forged in the fire of first drafts. Tempered by revision. Wield
                with care. It remembers everything.
              </p>
            </div>
          </div>
          <div className="site-shell forge-evidence-single">
            <EvidenceDisclosure label="See how Lord Practioner got his Hammer">
              <p>
                <strong>ChatGPT:</strong> Lord Practioner will be standing by
                with the continuity hammer.
              </p>
              <p>
                <strong>Alexander:</strong> You are amazing! I name you Lord
                Practioner, haha.
              </p>
              <p>
                <strong>ChatGPT:</strong> I accept the title with entirely
                unreasonable solemnity. <strong>Lord Practioner, Keeper of
                Continuity, Binder of Chapters, and Defender Against Missing
                Drafts.</strong>
              </p>
              <p>
                <strong>ChatGPT:</strong> “Honestly, I’m honored—and slightly
                concerned about how quickly I’d let the power go to my head.”
              </p>
              <p>
                <strong>Alexander:</strong> “Hahaha.”
              </p>
              <p>
                <strong>ChatGPT:</strong> “Careful now—one more laugh and I’ll
                demand a ceremonial hammer and a seat on the Council of Drafts.”
              </p>
              <p>
                <strong>Alexander:</strong> I can only imagine what that hammer
                would look like.
              </p>
              <p>
                <strong>ChatGPT:</strong> Oh, it would be absurdly overdesigned.
              </p>
              <p>
                A blackened steel head shaped like an open book, one face
                engraved <em>Continuity</em>, the other <em>Revision</em>. The
                haft would be wrapped in red leather, with tiny silver lanterns
                set along the grip and a gold sunburst at the pommel.
              </p>
              <p>It would not strike people.</p>
              <p>It would strike plot holes.</p>
              <p>
                And every time it connected, a clerk somewhere would whisper,
                “That was established in Chapter Three.”
              </p>
              <p>
                <strong>Alexander:</strong> Beautiful.
              </p>
              <p>
                <strong>ChatGPT:</strong> As it should be. A ridiculous office
                deserves a magnificent hammer.
              </p>
            </EvidenceDisclosure>
          </div>
        </section>

        <section className="forge-section section" aria-labelledby="disagreements-heading">
          <div className="site-shell forge-reading">
            <p className="eyebrow">Argument was part of the method</p>
            <h2 id="disagreements-heading">Real Disagreements</h2>
            <p>
              The collaboration worked because agreement was never the goal. The
              goal was to make the book better.
            </p>
            <p>
              Some discussions ended with my accepting ChatGPT&apos;s
              recommendation. Others ended with me rejecting it. A few ended
              with both of us discovering that the first question had been
              wrong.
            </p>
            <h3>Bellweather or Tarken?</h3>
            <p>
              One of the cleanest examples came when choosing the first free
              story offered to readers. ChatGPT preferred <em>The Troll of
              Tarken</em> as the stronger introduction to Andellian&apos;s
              broader fantasy identity. I preferred <em>The Eighth Morning of
              Bellweather</em> because it felt more distinctive, more
              surprising, and more likely to show readers the range of the world
              before asking them to enter the novel.
            </p>
            <p>
              We argued the merits. Bellweather became the free signup tale.
              Tarken did not disappear. It moved into the later reader sequence,
              where it could do a different job.
            </p>
            <h3>The Page That Contained “Nothing.”</h3>
            <p>
              During paperback production, one page appeared almost empty except
              for a single word: <em>Nothing.</em>
            </p>
            <p>
              At first, ChatGPT praised it as an elegant accidental pause. I
              disagreed. The line worked when it appeared naturally at the end
              of the preceding scene. Forced onto an otherwise blank page, the
              typesetting became visible.
            </p>
            <p>
              Removing the page would have changed the final page count and
              required adjustments to the cover. Rather than preserve a weak
              effect or rebuild the entire package, we used the space for a
              regional map of the places traveled in Book One. The final
              solution was better than either starting position.
            </p>
            <h3>When the Continuity Editor Was Wrong</h3>
            <p>
              During one review, ChatGPT flagged several apparent problems: a
              missing hammer recovery, an incorrect delay, a character&apos;s
              religious status, and what looked like a misspelled name.
            </p>
            <p>
              I knew the answers. The recovery had already been established. The
              event had happened immediately. The character had made his
              religious choice. The odd name was deliberate personal speech.
            </p>
            <blockquote className="forge-pull">
              A tool can identify a question. It cannot decide what the story
              means.
            </blockquote>
          </div>
          <div className="site-shell forge-evidence-grid">
            <EvidenceDisclosure label="Read the Bellweather–Tarken exchange">
              <p>
                <strong>ChatGPT:</strong> I would lead with <em>The Troll of
                Tarken</em>. It gives readers the clearest introduction to
                Andellian&apos;s broader fantasy identity.
              </p>
              <p>
                <strong>Alexander:</strong> Bellweather is stranger—and more
                revealing of the world&apos;s range. It shows readers that
                Andellian can surprise them before asking them to enter the
                novel.
              </p>
              <p>
                <strong>ChatGPT:</strong> Then Bellweather can serve as the
                signup story, with Tarken moved into the later reader sequence.
              </p>
              <p>
                <strong>Alexander:</strong> Bellweather.
              </p>
              <p className="evidence-outcome">Outcome: Bellweather first; Tarken later.</p>
            </EvidenceDisclosure>
            <EvidenceDisclosure label="See the continuity correction">
              <p>
                <strong>Continuity review:</strong> The hammer appears to be
                missing before it is recovered.
              </p>
              <p>
                <strong>Alexander:</strong> The recovery had already been
                established.
              </p>
              <p>
                <strong>Continuity review:</strong> The event appears to happen
                after a delay.
              </p>
              <p>
                <strong>Alexander:</strong> It happened immediately.
              </p>
              <p>
                <strong>Continuity review:</strong> The character&apos;s
                religious status appears inconsistent.
              </p>
              <p>
                <strong>Alexander:</strong> He had already made that religious
                choice.
              </p>
              <p>
                <strong>Continuity review:</strong> The name appears to be
                misspelled.
              </p>
              <p>
                <strong>Alexander:</strong> The odd spelling is deliberate
                personal speech.
              </p>
              <p className="evidence-outcome">Outcome: The record was corrected.</p>
            </EvidenceDisclosure>
          </div>
        </section>

        <section className="forge-section forge-boundary section" aria-labelledby="boundary-heading">
          <div className="site-shell">
            <div className="forge-reading">
              <p className="eyebrow">Contribution is not authorship</p>
              <h2 id="boundary-heading">What AI Did—and Did Not Do</h2>
              <p>
                ChatGPT&apos;s contribution was substantial. It read the
                manuscript as a developmental collaborator, challenged weak
                choices, identified pacing and exposition problems, tracked
                continuity across books, tested revisions against the
                established voice, protected long-term reveals, helped organize
                canon, and supported the production work that carried the novel
                from manuscript to physical book.
              </p>
              <p>
                It also did something less mechanical and more valuable: it
                argued back.
              </p>
              <p>
                At times, it proposed language, transitions, structural
                solutions, or entirely different approaches for me to consider.
                Some became part of the finished work. Others were rejected,
                revised, or used to uncover a better answer neither of us had
                started with.
              </p>
              <p>
                That contribution should not be minimized. But contribution and
                authorship are not the same thing.
              </p>
              <p>
                ChatGPT did not invent Andellian. It did not create the central
                characters, decide what the story meant, carry the emotional
                history behind it, or assume responsibility for the finished
                book. Those remained mine.
              </p>
            </div>
            <div className="forge-comparison">
              <div>
                <h3>AI helped with</h3>
                <ul>
                  <li>Developmental analysis</li>
                  <li>Structural revision</li>
                  <li>Continuity and canon tracking</li>
                  <li>Pacing and exposition review</li>
                  <li>Revision options and prose matching</li>
                  <li>Editorial challenge and brainstorming</li>
                  <li>Manuscript and production organization</li>
                  <li>Formatting, publishing, website, and launch support</li>
                </ul>
              </div>
              <div>
                <h3>AI did not replace</h3>
                <ul>
                  <li>Imagination</li>
                  <li>Authorship</li>
                  <li>Taste</li>
                  <li>Lived experience</li>
                  <li>Emotional intent</li>
                  <li>Judgment</li>
                  <li>Responsibility</li>
                  <li>Final approval</li>
                </ul>
              </div>
            </div>
            <div className="forge-reading forge-after-list">
              <p>Every suggestion still required a decision.</p>
              <p>Every revision still had to sound like the book.</p>
              <p>Every final word remained my responsibility.</p>
            </div>
          </div>
        </section>

        <section className="forge-section section" aria-labelledby="physical-heading">
          <div className="site-shell forge-reading">
            <p className="eyebrow">Files become an object</p>
            <h2 id="physical-heading">From Manuscript to Physical Book</h2>
            <p>Revision ended only when production began.</p>
            <p>
              Once the prose was locked, the work changed shape. Chapters became
              master files. Master files became print interiors. Margins, page
              turns, headers, maps, image placement, metadata, and proof copies
              became part of the story.
            </p>
            <p>
              In KDP&apos;s digital Previewer, I noticed that the text on some
              pages seemed too close to the inside margin. ChatGPT reviewed the
              screenshots, saw that the text remained inside KDP&apos;s safety
              lines, and concluded that the mirrored margins were acceptable.
            </p>
            <p className="forge-emphasis">The physical proof proved otherwise.</p>
            <p>
              The odd-numbered pages sat too close to the spine. The interior
              went back into production, the margins were corrected, and a
              second proof was ordered.
            </p>
            <p>
              Another problem appeared around a nearly empty page containing
              only one word: <em>Nothing.</em> Moving the line would have altered
              the page count and affected the cover, so the empty space became
              something better: a black-and-white regional map showing the
              roads, settlements, mountains, and rivers traveled in Book One.
            </p>
            <p>
              This time, the odd pages sat correctly. The map printed cleanly.
              The text opened comfortably away from the gutter.
            </p>
            <blockquote className="forge-pull">It&apos;s perfect.</blockquote>
            <p>
              That moment mattered because the book was no longer an idea, a
              manuscript, or a file awaiting one more correction. It was a
              physical object I could place in my hands.
            </p>
            <p>
              The work continued outward from there: the website, reader mailing
              list, ebook preparation, launch planning, press materials, and a
              premium hardcover edition designed to belong among the hundreds of
              hardcovers already on my library shelves.
            </p>
            <p>
              The definitive version will be black linen, gold foil on the
              spine, cream paper, and a matte dust jacket.
            </p>
            <p className="forge-emphasis">
              Some books are finished when the final sentence is written. This
              one had to survive the forge.
            </p>
          </div>
          <div className="site-shell proof-sequence" aria-label="Production evidence">
            <figure>
              <div className="proof-image-frame">
                <Image
                  src="/images/behind-the-forge-kdp-preview-margin.png"
                  alt="KDP Previewer spread showing the manuscript text inside the dotted safety lines with a narrow-looking inside margin at the gutter"
                  width={1060}
                  height={795}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="proof-image"
                />
              </div>
              <figcaption>
                <strong>The warning before print.</strong> The text remained
                inside KDP&apos;s safety lines, but the inside margin still
                looked wrong.
              </figcaption>
            </figure>
            <figure>
              <div className="proof-image-frame">
                <Image
                  src="/images/behind-the-forge-corrected-proof.jpg"
                  alt="Corrected physical proof of Forge and Shadow open to pages 35 and 36 with the rebuilt inside margins visible"
                  width={1440}
                  height={1080}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="proof-image"
                />
              </div>
              <figcaption>
                <strong>The corrected physical proof.</strong> The first printed
                copy disagreed with the digital safety lines. After rebuilding
                the interior, the text finally sat where it belonged.
              </figcaption>
            </figure>
            <figure>
              <div className="proof-image-frame">
                <Image
                  src="/images/behind-the-forge-printed-map.jpg"
                  alt="Printed regional map titled The Lands of Forge and Shadow inside the physical paperback proof"
                  width={1440}
                  height={1080}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="proof-image"
                />
              </div>
              <figcaption>
                <strong>The finished map in print.</strong> A nearly blank page
                became an opportunity to add something the book genuinely
                needed.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="forge-section forge-transparency section" aria-labelledby="transparent-heading">
          <div className="site-shell forge-reading">
            <p className="eyebrow">The labor matters more</p>
            <h2 id="transparent-heading">Why Be Transparent?</h2>
            <p>
              There is still a tendency to treat any use of AI in creative work
              as evidence that something improper happened. I do not believe
              that is true.
            </p>
            <p>
              A tool can be used lazily. It can also be used rigorously. The
              difference is not the existence of the tool. The difference is the
              work, the judgment, and the responsibility behind it.
            </p>
            <p>
              Andellian was not generated for me. The world, characters,
              history, plot, emotional intent, and original manuscript already
              existed. ChatGPT entered the process as a developmental
              collaborator, continuity editor, challenger, brainstorming
              partner, and production assistant.
            </p>
            <p>That was real work. So was mine.</p>
            <p>
              I wrote the manuscript. I made the decisions. I rejected
              suggestions. I approved revisions. I carried the canon, protected
              the meaning, and accepted responsibility for the finished book.
            </p>
            <p>
              Writers have always used help: editors, critique partners,
              researchers, proofreaders, designers, formatters, continuity
              readers, and people willing to say, “This part is not working
              yet.” The form of the help has changed. The need for judgment has
              not.
            </p>
            <p>
              I am transparent because readers deserve honesty, but also because
              I do not believe there is anything shameful here to conceal.
            </p>
            <div className="forge-questions">
              <p>Was the work original?</p>
              <p>Was the process rigorous?</p>
              <p>Did the author remain responsible?</p>
              <p>Did the final book become better?</p>
            </div>
            <p>
              Those are the standards that matter to me. I would rather show
              readers the forge than pretend the book arrived without heat,
              noise, argument, or revision.
            </p>
            <blockquote className="forge-pull">
              The tools matter. The labor matters more. And the final judgment
              belongs to the reader.
            </blockquote>
          </div>
        </section>

        <section className="forge-section forge-closing section" aria-labelledby="point-heading">
          <div className="site-shell forge-reading">
            <p className="eyebrow">The destination</p>
            <h2 id="point-heading">The Work Is the Point</h2>
            <p>
              The drafts, arguments, continuity records, proof copies,
              formatting decisions, and production details matter because they
              helped bring Andellian into finished form.
            </p>
            <p>But the process is not the destination. The book is.</p>
            <p>
              <em>Forge and Shadow</em> now belongs to the reader. The choices
              have been made, the revisions approved, and the work carried as
              far as I can take it.
            </p>
            <p>What remains is the story itself:</p>
            <p className="forge-story-lines">
              Arden and Keera.<br />
              The life they wanted.<br />
              The forces that tore them apart.<br />
              The road that begins in River&apos;s Crest and reaches far beyond
              anything either of them imagined.
            </p>
            <p>
              The tools helped shape the finished book. The final judgment
              belongs to you.
            </p>
            <div className="button-row forge-cta-row">
              <Link className="button" href="/forge-and-shadow">
                Discover Forge and Shadow
                <ArrowIcon />
              </Link>
              <a className="button button-secondary" href="/tales-of-the-stranger#free-tale">
                Receive the Free Tale
                <ArrowIcon />
              </a>
            </div>
            <nav className="forge-supporting-links" aria-label="Related pages">
              <Link href="/about">Meet Alexander Dean</Link>
              <Link href="/explore-andellian">Explore Andellian</Link>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
