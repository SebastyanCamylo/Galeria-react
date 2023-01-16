import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
  return (
    <section className="d-flex flex-column justify-content-between">
      <Header text="Galería de Imágenes con React" color="primary" />
      <div className="d-flex gap-4 card-container justify-content-center">
        <Card
          link="https://picsum.photos/id/100/200"
          titulo="Imagen random #1"
          descripcion="Imagen Mar"
          width="400"
        />
        <Card
          link="https://picsum.photos/id/103/200"
          titulo="Imagen random #2"
          descripcion="Descanso"
          width="500"
        />
        <Card
          link="https://picsum.photos/id/140/200"
          titulo="Imagen random #3"
          descripcion="Otoño nuevamente"
          width="600"
        />
        <Card
          link="https://picsum.photos/id/15/200"
          titulo="Imagen random #4"
          descripcion="Tranquilidad de una cascada"
          width="700"
        />
      </div>
      <Footer />
    </section>
  );
};

export default App;

