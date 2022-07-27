import * as React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";

export default () => {
  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <h1 className="text-center">To Do List</h1>
            <p className="text-center">
              Please add a Todo App Here
              <br />
              (See README.md for more info)
            </p>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
