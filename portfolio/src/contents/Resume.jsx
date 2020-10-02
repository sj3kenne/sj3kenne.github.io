import React from "react"
import { Helmet } from "react-helmet"
import './Resume.css';

import My_Picture from "../images/SamKennedy.JPG";

const Title = "Sam Kennedy's Resume"

function Resume(props) {
  return (
      <>
        {/* <Helmet>
            <title>{Title}</title>
        </Helmet> */}

        <div id="page-wrap" style={{textAlign: "left"}}>

            <img src={My_Picture} alt="Photo of Me" id="pic" />

            <div id="contact-info" class="vcard">

                <h1 class="fn">Sam Kennedy</h1>

                <p>
                    Cell: <span class="tel">647-703-7898</span><br /> Email: <a class="email" href="mailto:sam.kennedy@live.ca">sam.kennedy@live.ca</a> <br/> Linkedin: <a class="Linkedin" href="linkedin.com/in/samken415">linkedin.com/in/samken415</a> <br/>                Github: <a class="Github" href="github.com/sj3kenne">github.com/sj3kenne</a> <br/>
                </p>
            </div>

            <div id="objective">
                <p>
                    I am a energetic and commited young professional seeking to find a position to fit my skills, interests and future career aspirations.
                </p>
            </div>

            <div class="clear"></div>

            <dl>
                <dd class="clear"></dd>

                <dt>Education</dt>
                <dd>
                    <h2>University of Waterloo</h2>
                    <p>Bachelor of Applied Science,<br /> Management Engineering</p>

                    <h3>Durham College</h3>
                    <p>Certificate in Trade Fundamentals</p>
                </dd>

                <dd class="clear"></dd>

                <dt>Skills</dt>
                <dd>
                    <h2>Office skills</h2>
                    <p>Project Management, Business analysis, Design, Office administration, Records management</p>

                    <h2>Computer skills</h2>
                    <p>Microsoft Office (Word, Excel, etc), Blender, AutoCad, Windows, Linux</p>

                    <h2>Programming proficiencies</h2>
                    <p>TypeScript, Python, PHP, C#, VBA, SQL, HTML, CSS</p>
                </dd>

                <dd class="clear"></dd>

                <dt>Experience</dt>
                <dd>
                    <h2>Skyrise Prefab<span>Software Development Manager - Kitchener, ON - 2019-2020</span></h2>
                    <p>Project Manager of multiple software projects under development for Skyrise in partnership with different external partners.</p>
                    <ul>
                        <li>Managed the requirements, specifications, and project objectives</li>
                        <li>Liaised between consultants and customers</li>
                        <li>Directed IT department and supported employees</li>
                    </ul>

                    <h2>Standard Model Partners <span>Technical Business Analyst - Calgary, AB - 2018</span></h2>
                    <p>Acted as a generalist to support major projects with SMP customers.</p>
                    <ul>
                        <li>Mediated between technical consultants and customers</li>
                        <li>Supported customer projects and answered technical questions</li>
                        <li>Completed various special technical and organizational projects for company</li>
                    </ul>

                    <h2>Index Exchange <span>Software Engineer - Kitchener, ON - 2018</span></h2>
                    <p>Participated in agile development on several software engineering projects as directed by program managers.</p>
                    <ul>
                        <li>Wrote code for enterprise level applications</li>
                        <li>Tested and reviewed code in multiple languages</li>
                        <li>Reinforced team processes, supported team on deployment strategies</li>
                    </ul>
                </dd>

                <dd class="clear"></dd>

                <dt>Hobbies</dt>
                <dd>DIY projects, Hiking, Snowboarding, 3D modelling </dd>

                <dd class="clear"></dd>

                <dt>References</dt>
                <dd>Available on request</dd>

                <dd class="clear"></dd>
            </dl>

            <div class="clear"></div>

        </div>
        </>
  )
}
 
export default Resume;