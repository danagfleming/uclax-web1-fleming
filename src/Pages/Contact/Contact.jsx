import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SubmissionList from "./SubmissionList";
import Form from "./Form";

//import 3rd party ModalImage 6/8 16:23
import ModalImage from "react-modal-image";

//import CV as pdf 8/6 16:30
import DanaFlemingResume1 from "./img/DanaFlemingResume1.jpg";
import DanaFlemingResume2 from "./img/DanaFlemingResume2.jpg";

const Contact = () => {
    const [submissions, setSubmissions] = useState([]);

    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        setSubmissions(data);
    };

    useEffect(() => {
        getSubmissions();
    }, []);

    /* remove all info from return 6/8 16:24
    (
    <h1>Contact</h1>
                <Form getSubmissions={getSubmissions} />
                <SubmissionList submissions={submissions} />
    )
*/

    //Add ModalImages and tie to import 16:31 df "src/Pages/contact/img/DanaFlemingResume1.jpg"

    return (
        <ContactStyled>
            <Inset>
                <ModalImageStyled>
                    <ModalImage
                        small={"src/Pages/contact/img/DanaFlemingResume1.jpg"}
                        large={"src/Pages/contact/img/DanaFlemingResume1.jpg"}
                        alt="Dana Fleming Resume Page 1"
                    />
                    <ModalImage
                        small={"src/Pages/contact/img/DanaFlemingResume2.jpg"}
                        large={"src/Pages/contact/img/DanaFlemingResume2.jpg"}
                        alt="Dana Fleming Resume Page 1"
                    />
                </ModalImageStyled>
            </Inset>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div`
    background-color: #f9f9f9;
`;

const ModalImageStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
    padding-left: 300px;
    padding-right: 300px;
`;
