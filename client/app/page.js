"use client";
import styles from "@styles/main.css";
import { Row, Container, Col, Stack, Button } from "react-bootstrap";
//import {Row, Column} from '@carbon/react';
import ConfigSideNav from "@components/ConfigSideNav";
import MainContainer from "@components/MainContainer";
import { ToastContainer, toast } from "react-toastify";
import DashboardHeader from "@components/dashboard-header";
import DashboardHeader1 from "@components/DashBoard";
import DashboardHeader2 from "@components/DashBoardHeader";

export default function Home() {
  return (
    <>
      <Row>
        <DashboardHeader2 />
      </Row>

      <Row className=" pe-3 vh-100 overflow-hidden  g-0">
        <Col className="side-bar-col" lg={3} xs={3}>
          <br />
          <span>
            I’m ready to help!! I am AskHR bot, your virtual HR assistant. I can
            help you answer a wide variety of HR-related questions or initiate a
            series of HR transactions available in the left menu. I am always
            learning and if I am not able to answer your question, I will help
            you find the support you need (create a support request/connect to a
            live chat agent, or check the status of your current support
            requests). Just ask me! Short, specific questions in English with a
            single topic work best.
          </span>
          <br />
          <br />
          <Button variant="outline-primary">Important Links</Button>
          <Button variant="outline-primary">How to Use the Chatbot</Button>
          <Button variant="outline-primary">Contact Us</Button>

          <div>
            <div className="d-flex align-items-center justify-content-center py-4">
              <h3>IBMResolve</h3>
            </div>
            <ConfigSideNav />
          </div>
        </Col>
        <Col lg={9} xs={9} className="main-chat-col mt-3">
          <MainContainer />
        </Col>
        <ToastContainer />
      </Row>
    </>
  );
}
