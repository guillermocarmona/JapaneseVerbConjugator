import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ConjugationDisplay({ verbConjugations }) {
  const jpConjugations = verbConjugations.verb;
  const romajiConjugations = verbConjugations.romaji;

  return (
    <Row className='m-1'>
      <Col xs={12} md={4}>
        <Row>
          <Col xs={12}>
            <h3>Present:</h3>
          </Col>
          <Col xs={12}><hr /></Col>
          <Col xs={4}>
            <h4>Plain:</h4>
          </Col>
          <Col xs={8}>
            <h5>Positive</h5>
            <p>{jpConjugations.present.plain.positive}</p>
            <p>{romajiConjugations.present.plain.positive}</p>
            <hr />
            <h5>Negative</h5>
            <p>{jpConjugations.present.plain.negative}</p>
            <p>{romajiConjugations.present.plain.negative}</p>
            
          </Col>
          <Col xs={12}><hr /></Col>
          
          <Col xs={4}>
            <h4>Polite:</h4>
          </Col>
          <Col xs={8}>
            <h5>Positive</h5>
            <p>{jpConjugations.present.polite.positive}</p>
            <p>{romajiConjugations.present.polite.positive}</p>
            <hr />
            <h5>Negative</h5>
            <p>{jpConjugations.present.polite.negative}</p>
            <p>{romajiConjugations.present.polite.negative}</p>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <Row>
          <Col xs={12}>
            <h3>Past:</h3>
          </Col>
          <Col xs={12}><hr /></Col>
          <Col xs={4}>
            <h4>Plain:</h4>
          </Col>
          <Col xs={8}>
            <h5>Positive</h5>
            <p>{jpConjugations.past.plain.positive}</p>
            <p>{romajiConjugations.past.plain.positive}</p>
            <hr />
            <h5>Negative</h5>
            <p>{jpConjugations.past.plain.negative}</p>
            <p>{romajiConjugations.past.plain.negative}</p>
          </Col>
          <Col xs={12}><hr /></Col>
          <Col xs={4}>
            <h4>Polite:</h4>
          </Col>
          <Col xs={8}>
            <h5>Positive</h5>
            <p>{jpConjugations.past.polite.positive}</p>
            <p>{romajiConjugations.past.polite.positive}</p>
            <hr />
            <h5>Negative</h5>
            <p>{jpConjugations.past.polite.negative}</p>
            <p>{romajiConjugations.past.polite.negative}</p>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <Row>
          <Col xs={12}>
            <h3>Te Form:</h3>
          </Col>
          <Col xs={12}><hr /></Col>
          <Col xs={4}>
            <h4>Plain:</h4>
          </Col>
          <Col xs={8}>
            <h5>Positive</h5>
            <p>{jpConjugations.teForm.positive}</p>
            <p>{romajiConjugations.teForm.positive}</p>
            <hr />
            <h5>Negative</h5>
            <p>{jpConjugations.teForm.negative}</p>
            <p>{romajiConjugations.teForm.negative}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ConjugationDisplay;
