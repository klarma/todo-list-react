import Container from "../../common/Container";
import Header from "../../common/Container/Header";
import Section from "../../common/Container/Section";

const Author = () => (
  <>
    <Container>
      <Header title="O autorze" />
      <Section
        title="Kasia Napierała"
        body={
          <p>
            Mam 35 lat. Programowanie stało się moją pasją, a później pracą. Uwielbiam zdrowy styl życia -
            fitness i bieganie to mój motor napędowy. Interesuję się tym jak funkconuje nasz mózg - uwielbiam
            wspierać się technikami pamięciowymi w pracy i w życiu. Jeżeli moja duchowość potrzebuje
            pokrzepienia zaglądam do "Langusty na palmie" - dobrze czasem tam wrócić.
          </p>
        }
      />
    </Container>
  </>
);

export default Author;