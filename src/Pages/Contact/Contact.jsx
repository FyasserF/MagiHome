import './Contact.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

export default function Contact() {

  
  return (
    <>
    <NavBar />
    <div className='contact1'>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <h2>contactez-nous aujourd’hui</h2>
          <h3>Siège social</h3>
          <div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>N°82 . Étage 1 , zone industrielle, commune ouled Azzouz, Casablanca</p>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <p>Monahome.home@gmail.com</p>
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>0522906978</p>
              </li>
              <li>
                <i className="fas fa-clock" aria-hidden="true"></i>
                <p>Du lundi au vendredi de 9h00 à 18h00 et samedi de 9h00 à 13h00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3327.5329694266143!2d-7.8075931!3d33.4875081!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDI5JzMyLjUiTiA3wrA0OCczMC4yIlc!5e0!3m2!1sfr!2sma!4v1714175600705!5m2!1sfr!2sma" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section id="form-details">
        <div className='img' style={{width:'50%'}}>
            <img src="assets/bg-19.png" style={{width:'500px'}}/>
        </div>
        <form >
          <span>Laisser un message</span>
          <input type="text" name="from_name" placeholder="votre nom" />
          <input type="email" name="reply_to" placeholder="E-mail" />
          <input type="text" name="subject" placeholder="Sujet" />
          <textarea name="message_html" cols="30" rows="10" placeholder="Votre message"></textarea>
          <button className="normal" type="submit"><i className="fas fa-envelope"></i> Envoyer</button>
        </form>
      </section>
    </div>

    <Footer/>
    </>
  );
}
