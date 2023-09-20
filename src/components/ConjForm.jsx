import React, { useState } from 'react';
import { Form, FloatingLabel, Container, Row, Col, Button } from 'react-bootstrap'
import verbChecker from '../logic/verbChecker';
import jpVerbConjugator from '../logic/verbConjugator';
import ConjugationDisplay from './ConjugationDisplay';

function ConjForm() {
  const [verbForm, setVerbForm] = useState({
    verb: '',
    romaji: '',
    group: 1,
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [verbResults, setVerbResults] = useState({});

  const setField = (field, value) => {
    setVerbForm({
      ...verbForm,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const check = verbChecker(verbForm.verb, verbForm.romaji, verbForm.group);
    if (!check) {
      setShowError(true);
      setSuccess(false);
    } else {
      setShowError(false);
      setSuccess(true);
      try {
        const conjugator = new jpVerbConjugator(verbForm.verb, verbForm.romaji, verbForm.group);
        const results = conjugator.allConjugations();
        setVerbResults(results);
      } catch (e) {
        setShowError(true);
      }
    }
  };

  return (
    <Form className='form'>
      <Container className='bg-secondary-subtle shadow rounded mx-auto p-3 border border-2 border-info-subtle'>
        <h2 >Introduce your Verb:</h2>
        <hr />
        <Row className='d-flex justify-content-lg-around align-center align-items-stretch'>
          <Col xs={6} lg={4}>
            <FloatingLabel
              controlId='jpVerbInput'
              label='Verb to conjugate'
            >
              <Form.Control type='text' placeholder='Kanji verb'
                className='my-2'
                onChange={(e) => setField('verb', e.target.value)}
                value={verbForm.verb}
                isInvalid={!!errors.verb}
              />
            </FloatingLabel>
            <Form.Control.Feedback type='invalid'>
              {errors.verb}
            </Form.Control.Feedback>
          </Col>
          <Col xs={6} lg={4}>
            <FloatingLabel
              controlId='jpVerbInput'
              label='Romaji Reading'
            >
              <Form.Control type='text' placeholder='Romaji'
                className='my-2'
                onChange={(e) => setField('romaji', e.target.value)}
                value={verbForm.romaji}
                isInvalid={!!errors.romaji}
              />
            </FloatingLabel>
            <Form.Control.Feedback type='invalid'>
              {errors.romaji}
            </Form.Control.Feedback>
          </Col>
          <Col xs={6} lg={3}>
            <FloatingLabel
              controlId='jpVerbInput'
              label='Verb to conjugate'
            >
              <Form.Select aria-label="Verb Language"
                className='my-2'
                placeholder='Group'
                value={verbForm.group}
                isInvalid={!!errors.group}
                onChange={(e) => setField('group', parseInt(e.target.value))}
              >
                <option value={1}>Godan</option>
                <option value={2}>Ichidan</option>
                <option value={3}>Irregular</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <hr />
        <Row >
          <Col>
            <Button type="submit"
              onClick={handleSubmit}
            >Conjugate
            </Button>
            {showError &&
              <p className='text-danger'>The verb is not valid</p>
            }
          </Col>
        </Row>
        {success &&
          <>
            <hr />
            <ConjugationDisplay verbConjugations={verbResults} />
          </>
        }
      </Container>
    </Form>
  )
}

export default ConjForm;
