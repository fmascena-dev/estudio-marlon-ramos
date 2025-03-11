import '../../style/_map.scss';

export default function Map() {
  return (
    <div className="map">
      <h2>VENHA CONHECER</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21635.35374263359!2d-43.408286912570915!3d-22.722798966377454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996f8ca437a2e7%3A0xe8597cad153629b8!2sEst%C3%BAdio%20de%20Corte%20Marlon%20Ramos!5e0!3m2!1spt-BR!2sbr!4v1741694617137!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
