import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Quicko Demo Page</title>
      </Head>
      <header>
        <h1>Quicko Demo Page</h1>
      </header>
      <main>
        <h2>Headings</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa
          praesentium, fugit inventore ex excepturi aperiam voluptatibus et
          doloremque tempora repellendus nihil exercitationem vero quaerat natus
          ipsum recusandae placeat iste? Ratione quis ea, pariatur eum autem
          praesentium ducimus, ex, earum consequatur fuga quam expedita
          repudiandae culpa esse hic dolorum libero.
        </p>

        <h3>Heading 3</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea veritatis
          aut eum sit, dignissimos, molestias culpa doloribus voluptas
          consectetur non vitae necessitatibus sapiente iure tempora unde
          impedit iusto id suscipit. Architecto ullam necessitatibus porro
          dolores laudantium aliquid maxime nisi atque.
        </p>

        <h4>Heading 4</h4>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima totam
          officiis sequi obcaecati ad blanditiis sapiente fugit debitis dolore
          reiciendis quibusdam quia quam, dicta, accusantium facere dolorem
          suscipit ipsam maiores.
        </p>

        <h2>Inline Elements</h2>

        <p>
          Lorem <mark>ipsum</mark> dolor sit amet <strong>consectetur</strong>{" "}
          adipisicing elit. Aut
          <i>harum molestias</i> labore amet possimus{" "}
          <s>exercitationem aperiam</s> earum, doloribus
          <u>nobis ducimus</u> maiores quia voluptates quis omnis molestiae
          quisquam.
          <a href="#">Voluptatibus, officiis laudantium?</a>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <code>Hic culpa, nobis doloremque</code> veniam non, nihil cupiditate
          odit repellat est
          <kbd>ALT + F4</kbd> expedita facilis. Fuga aspernatur, alias debitis
          eveniet totam minima vel.
        </p>

        <h2>List Elements</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          iusto illum harum pariatur nostrum voluptas odio unde explicabo vero
          mollitia!
        </p>

        <ul>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Adipisicing elit Quisquam quo ipsum at.</li>
          <li>Debitis nulla, atque incidunt voluptatem similique.</li>
          <li>Deleniti impedit id adipisci repellat maiores.</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque
          veritatis nisi autem placeat, a impedit assumenda? Quia cumque
          quisquam, expedita voluptas odio neque, sapiente suscipit ex aut
          perferendis saepe facere labore. Nobis asperiores illum dolorem alias
          nostrum fuga ad!
        </p>

        <ol>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Adipisicing elit Quisquam quo ipsum at.</li>
          <li>Debitis nulla, atque incidunt voluptatem similique.</li>
          <li>Deleniti impedit id adipisci repellat maiores.</li>
        </ol>

        <p>
          Quibusdam iste voluptatum inventore fugiat ea totam suscipit placeat
          dicta. Magni maxime perferendis, nisi doloremque ex amet, consectetur
          expedita, autem numquam dicta est voluptatibus vitae quod porro
          libero. Reprehenderit vitae repudiandae ducimus.
        </p>

        <dl>
          <dt>HTML</dt>
          <dd>
            Hypertext Markup Language (HTML) is the standard markup language for
            documents designed to be displayed in a web browser.
          </dd>
          <dt>CSS</dt>
          <dd>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML.
          </dd>
          <dt>Tailwind</dt>
          <dd>
            A wind blowing in the direction of travel of a vehicle or aircraft;
            a wind blowing from behind.
          </dd>
        </dl>

        <h2>Foreign Content Elements</h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          porro sunt id animi vitae repellendus! Maxime, cupiditate velit culpa
          quisquam nobis repudiandae odit unde aut omnis sint voluptates rem a.
        </p>

        <figure>
          <img
            src="https://images.unsplash.com/photo-1602697990684-d3e0ef78c4d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Coffee beans"
          />
          <figcaption>
            Dolorem inventore aspernatur repellendus. Magni quisquam quod,
            aliquam fugiat cupiditate adipisci quasi.
          </figcaption>
        </figure>

        <h2>Other Block Elements</h2>

        <p>
          Fuga exercitationem accusamus asperiores illum laboriosam! Nulla
          accusamus placeat nisi adipisci itaque ea rem asperiores, vel, nihil
          iusto eligendi exercitationem quasi.
        </p>

        <blockquote cite="https://en.wikiquote.org/wiki/Edward_Snowden">
          &quot;People work better when they know what the goal is and why. It
          is important that people look forward to coming to work in the morning
          and enjoy working.&quot;
          <br />
          <br />– Elon Musk
        </blockquote>

        <p>
          Placeat ratione vero, provident eveniet quaerat sed vel porro rem
          tempore quasi omnis laborum maiores reprehenderit tenetur dolores in
          dolorem! Repudiandae rerum sed sequi veritatis inventore mollitia.
        </p>

        <pre>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>`}</pre>

        <p>
          Deleniti, deserunt. Nihil iste quasi quod amet, dignissimos beatae
          odio expedita, eum inventore sit optio ab blanditiis temporibus
          dolorum tempora voluptatem quis necessitatibus. Vero quis magnam
          debitis rem molestias fuga dolorum sequi eligendi ad distinctio, quia
          in voluptatem quod architecto, voluptate explicabo. Maiores quo saepe
          dolores.
        </p>

        <hr />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus maiores
          fuga iure ratione, doloribus illo dolores doloremque quisquam
          molestias deleniti ut labore nisi eius! Nobis amet temporibus iure
          perferendis ea.
        </p>

        <h2>Tables</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta
          modi nemo illo, assumenda nesciunt?
        </p>

        <table>
          <caption>Ho-kago Tea Time</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Instrument</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yui Hirasawa</td>
              <td>Lead Guitar</td>
            </tr>
            <tr>
              <td>Mio Akiyama</td>
              <td>Bass</td>
            </tr>
            <tr>
              <td>Ritsu Tainaka</td>
              <td>Drums</td>
            </tr>
            <tr>
              <td>Tsumugi Kotobuki</td>
              <td>Keyboard</td>
            </tr>
            <tr>
              <td>Azusa Nakano</td>
              <td>Rhythm Guitar</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Instrument</th>
            </tr>
          </tfoot>
        </table>

        <hr />

        <h2>Form Elements</h2>

        <form>
          <p>
            <label>First name</label>
            <br />
            <input type="text" name="first_name" placeholder="e.g. John" />
          </p>
          <p>
            <label>Last name</label>
            <br />
            <input type="text" name="last_name" placeholder="e.g. Doe" />
          </p>
          <p>
            <label>Gender</label>
            <br />
            <label>
              <input type="radio" name="gender" value="Male" />
              &nbsp;Male
            </label>
            <br />
            <label>
              <input type="radio" name="gender" value="Female" />
              &nbsp;Female
            </label>
            <br />
            <label>
              <input type="radio" name="gender" value="other-none-na" />
              &nbsp;Non-binary
            </label>
          </p>
          <p>
            <label>Email</label>
            <br />
            <input
              type="email"
              name="email"
              required={true}
              placeholder="e.g. john.doe@example.com"
            />
          </p>
          <p>
            <label>Phone number</label>
            <br />
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +49 1234 5678901"
            />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" />
          </p>
          <p>
            <label>Country</label>
            <br />
            <select>
              <option>Germany</option>
              <option>China</option>
              <option>India</option>
              <option>United States</option>
              <option>Indonesia</option>
              <option>Brazil</option>
            </select>
          </p>
          <p>
            <label>Comments</label>
            <br />
            <textarea placeholder="What do you think?"></textarea>
          </p>
          <p>
            <label>
              <input type="checkbox" value="terms" />
              &nbsp;I agree to the <a>terms and conditions</a>
            </label>
          </p>
          <p className="space-x-1">
            <button>Sign up</button>
            <button type="reset">Reset form</button>
            <button disabled={true}>Disabled</button>
          </p>
        </form>
      </main>
      <footer>
        <div>
          <a href="https://twitter.com">twitter</a>
        </div>
        <div>
          <a href="https://github.com">github</a>
        </div>
        <div>copyright quicko</div>
      </footer>
    </>
  );
}
