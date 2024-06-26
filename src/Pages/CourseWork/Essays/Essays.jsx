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
            <SingleEssay
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                Absolute and relative sources are two options for describing the
                location of a file being used to develop a program. While both
                methods summon a file, there are some fundamental differences I
                will describe. Absolute sourcing describes the location of the
                file in relation to the hard drive. It tends to be lengthy to
                express, and include information that is highly specific to the
                developer’s computer. Starting from the hard drive, an absolute
                source would detail each folder name until the desired file is
                reached. Relative sourcing instead considers the location of
                files in relationship to each other. Instead of beginning the
                description with the hard drive, the current location is
                assumed, and direction are given that translate to “back out one
                file”, etc. until Somewhere between these two methods falls root
                relative sourcing, which assumes the root file as the starting
                point. This eliminates the need to back out of the current
                location, and still allows an abbreviated source. Although the
                brevity is convenient, the main power of writing sources
                relatively is that they can be modular. Absolute sourcing does
                not transfer correctly to other computers or the cloud, because
                the folder names from the hard drive to the called file are not
                identical to the developers. Relative sourcing is much more
                modular and does not depend on the user’s personal computer
                setup and orientation. These terms and similar concepts can also
                be applied when calling an external resource on a webpage, such
                as a social media link, or routing within an application. When
                calling upon an external resource, absolute should always be
                used, but when routing internally root relative or relative is
                ideal.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between jpg, gif, png and svg images?`}
            >
                JPG, PNG, and GIF are all raster file types. This means that
                they are built with pixels, and the image quality is dependent
                on resolution. Despite these similarities, there are many
                differences and they have unique preferred applications. JPG is
                the best file format for real photos. It utilizes lossy
                compression, which means that the data for the image is not
                stored in the file. This makes the files more lightweight, which
                is ideal for web display of photos. If photos are used in
                another file type such as PNG, they become extremely heavy
                because of all the associated data and make the website much
                less efficient. The recommended size for a JPG photo file is
                100kb, which can be reached by adjusting quality and file size.
                PNG is ideal for logos and other images with minimal color
                pallets and simple graphics. It utilizes lossless compression
                (data kept in tact with image), which typically makes for larger
                file sizes, but it actually outputs lighter weight imagery when
                applied correctly and used for the file type described above.
                PNG is the most commonly used format on the web, and is unique
                because it has transparency channels which allow for an icon
                without a background, etc. GIF is essentially a PNG format that
                allows for animation. You can save multiple images into one
                file, and each one is treated as a layer. In order to adjust the
                animation, you can adjust the delay between each frame, as well
                as decide how many times the frames will loop. SGV sets itself
                apart from the above file types because it is a vector format.
                This means that instead of being based on pixels, the image is
                defined by relationship between shapes, and therefore can scale
                to any size without any compromise in quality. In practical
                application terms, SGV files are suitable for all the same
                applications as PNG, with the benefit of being completely
                scalable, smaller in size, and adjustable using CSS and
                JavaScript.
            </SingleEssay>

            <SingleEssay
                question={`Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                Product Manager *Customer Need Focused. Acts as the voice of the
                customer. Creates user stories, maintains product backlog.
                Ensures the team understands the needs of the customer, and the
                business value of their efforts. Scrum Master: *Team Need
                Focused. Servant leaders focused on delivering the
                customer-defined value. Holds daily SCRUM meetings, ensures each
                member commits to a task and is accountable to their commitment.
                Track progress of sprint. UX Designer: *Technical Design Skill
                Set. Research and empathize with users to identify needs and
                pain points. Share findings with the team, ideate solutions,
                build and test prototypes. Focus on rapid prototyping and
                iteration to get fast feedback from users. Developer/Engineer:
                *Technical Developer Skill Set. Code prototypes and software.
                Focus of sustainable development - good estimations, branching
                strategies to manage code, automated testing to protect quality,
                and continuous deployment to get fast feedback from users.
                QA/SDET -Quality Assurance / Software Development Engineer in
                Test-: *Technical Quality Skill Set. Help the development team
                define and implement automated testing strategies. Identifies
                and fixes bugs and defects. Works with the team to ensure the
                product meets the customers needs. DevOps: *Cross Departmental
                Management. Collaboratively manage and communicate development
                alongside operations. Cross functional knowledge of release
                engineering -writing and deployment of code-, infrastructure
                provisioning and systems administration -deploying and
                maintaining servers, storage, and networking resources required
                to host applications-.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

//style update 6/8 17:25
const EssaysStyled = styled.div`
    h2 {
        color: #1c1c1c;
    }
`;
