import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                HTML, CSS and Javascript are all front-end development
                languages. However, they are used for different purposes. HTML
                dictates the content of the page. This includes text and images.
                These aspects are presented via HTML without any visual stylings
                or motion. CSS, or Cascading Style Sheets, is used to describe
                the style and visual elements of the content. This includes
                things like color, size, and margins. Javascript brings the
                elemental and visual components to life through animation and
                interaction. It allows the webpage to change when a link is
                clicked, for instance! I have begun to imagine the three
                front-end languages as aspects of the human body. I’m not sure I
                completely believe in this metaphor yet but I’m gonna take it
                for a spin here. HTML is like the skeleton. Although everyone’s
                skeleton is a bit different, there are no major visual
                identification cues to tell them one apart from the other. CSS
                is like flesh and physical features - it gives everyone our
                totally unique appearances! Javascript is our ability to move,
                dance, sing, cook - all the life!
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                Git is a version control system used to manage iterations of
                code. It is commonly referred to as “the ultimate undo”. Every
                time a user “commits” a change in their code, a new version is
                created and saved. This leaves a trail of version history that
                users can access anytime. While this system is incredibly useful
                and arguably necessary, it would be very challenging to interact
                with without a host platform. This is where Github comes in.
                Github is a host platform where users can view their code as
                well as all the previous versions. All of the versions are
                stored on a cloud, always accessible, and shareable. Github also
                offers additional services such as templates, and is a conducive
                workplace for teams. All my reading on the topic has made it
                clear that there is a lot more to understand about these two
                entities, but I can’t say I’m there yet. I’m looking forward to
                interacting with both git and github more throughout the course
                to improve my ability to conceptualize not just what they are,
                but how they work.
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                JQuery was the first Javascript library. It was created to store
                frequently used bits of code, which allowed developers to be
                more efficient. Without having to write commonly used sections
                of code every time they were needed, the developers could work
                much faster, and had a lower risk of error. React JS is another
                Javascript library that was developed by Facebook years later,
                and is now the most commonly used JS library in the world. It
                set itself apart by being component based. This means that
                developers can re-use components throughout projects and between
                projects. This saves time, as well as reduces time spent
                debugging. It also means that teams can work on the same project
                simultaneously without overlap - one person can work on
                navigation while the other works on the primary CTA.
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                Backend developers are responsible for building all the unseen
                aspects of a website. This includes website architecture,
                scripting, and code that communicates between the website’s
                database and server. Aside from building the website, they also
                have to maintain and debug the entire backend of the application
                or system. Common backend development languages are Python and
                SQL. Frontend developers are responsible for building the part
                of the website that users interact with. This includes the
                actual content, such as images or text, the style of the
                website, and the interactions. Critical front end development
                languages are HTML, CSS, and Javascript.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
