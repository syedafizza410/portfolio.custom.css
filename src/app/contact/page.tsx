export default function Contact() {
    return (
      <section className="contact" id="contact">
        <h2 className="h1">Contact <span>Me!</span></h2>
        <form>
          <div className="box-in">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="box-in">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
            <textarea cols={30} rows={10} placeholder="Your Message"></textarea>
            <br />
            <br />
            <button type="submit" className="tsv">Send Message</button>
          </div>
        </form>
      </section>
    )
  }
  