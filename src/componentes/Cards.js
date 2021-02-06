import React from 'react';
import Countup from 'react-countup';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Cards = ({data}) => {

   if(!data.data) {
      return "...louding";
   }else{
      return(
         <div>
         <Row>
            <Card>
               <Card.Body>
                  <Card.Title>Número de contagiados</Card.Title>
                  <Card.Text>
                     <Countup
                           start={0}
                           end={data.data.confirmed.value}
                           duration={3}
                           separation="."
                     />
                  </Card.Text>
               </Card.Body>
            </Card>

            <Card>
               <Card.Body>
               <Card.Title>Número de muertos</Card.Title>
                  <Card.Text>
                     <Countup
                           start={0}
                           end={data.data.deaths.value}
                           duration={3}
                           separation="."
                     />
                  </Card.Text>
               </Card.Body>
            </Card>

            <Card>
               <Card.Body>
               <Card.Title>Número de Recuperados</Card.Title>
                  <Card.Text>
                     <Countup
                           start={0}
                           end={data.data.recovered.value}
                           duration={3}
                           separation="."
                     />
                  </Card.Text>
               </Card.Body>
            </Card>
         </Row>
      </div>
      )
//32min
   }
}
export default Cards;