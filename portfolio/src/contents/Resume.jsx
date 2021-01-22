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
                    I am a energetic and committed young professional seeking to find a position to fit my skills, interests and future career aspirations.
                </p>
            </div>

            <div class="clear"></div>

            <dl>
                <dd class="clear"></dd>

                <dt>Education</dt>
                <dd>
                    <h2>University of Waterloo</h2>
                    <p> Honours Bachelor of Applied Science,<br /> Management Engineering, with Distinction, Co-operative Program</p>

                    <h3>Durham College</h3>
                    <p>Certificate in Trade Fundamentals</p>

                    <h3>PMI</h3>
                    <p>Project Management Professional</p>

                </dd>

                <dd class="clear"></dd>

                <dt>Skills</dt>
                <dd>

                    <h2>Programming proficiencies</h2>
                    <p>TypeScript, Python, PHP, C#, VBA, SQL, HTML, CSS, Git, Azure Cloud</p>

                    <h2>Technical skills</h2>
                    <p>Hardware, Soldering, IoT, 3D printing, Microsoft Office Suite, Blender, AutoCad Fusion, Windows, Linux</p>

                    <h2>Office skills</h2>
                    <p>Project Management Professional (PMP), Business analysis, Solution design, Prototyping, Office administration, Records management</p>

                </dd>

                <dd class="clear"></dd>

                <dt>Experience</dt>
                <dd>
                    <h2>Fontur International<span>Solutions Engineer - ON - 2020-2021</span></h2>
                    <p>Solution Engineer building and supporting multiple IoT projects in a variety of industries.</p>
                    <ul>
                        <li>Designed innovative solutions combining multiple technologies</li>
                        <li>Managed the development of customer-facing software and platforms </li>
                        <li>Delivered custom IoT solutions to customers in demanding physical environments.</li>
                    </ul>
                    
                    <h2>Skyrise Prefab<span>Software Development Manager - Kitchener, ON - 2019-2020</span></h2>
                    <p>Project Manager of multiple software projects under development for Skyrise in partnership with different external partners.</p>
                    <ul>
                        <li>Managed the requirements, specifications, and project objectives</li>
                        <li>Liaised between consultants and customers to ensure project schedules and objectives</li>
                        <li>Directed IT department and supported technology initiatives</li>
                    </ul>

                    <h2>Standard Model Partners<span>Technical Business Analyst - Calgary, AB - 2018</span></h2>
                    <p>Acted as a generalist to support major projects with SMP customers.</p>
                    <ul>
                        <li>Moderated between technical consultants and customers to ensure smooth communications</li>
                        <li>Supported customer projects and answered technical questions</li>
                        <li>Completed various unique technical and organizational initiatives for company</li>
                    </ul>

                    <h2>Index Exchange<span>Software Engineer - Kitchener, ON - 2018</span></h2>
                    <p>Participated in agile development on several software engineering projects as directed by program managers.</p>
                    <ul>
                        <li>Wrote code for enterprise level applications</li>
                        <li>Tested and reviewed code in multiple languages</li>
                        <li>Reinforced team processes, supported team on deployment strategies</li>
                    </ul>
                    
                    <h2>Shaw Communications<span>Technical Analyst - Calgary, AB - 2017</span></h2>
                    <p>Maintained information technology control activities for the Governance, Risk and Compliance group.</p>
                    <ul>
                        <li>Supported implementation of an enterprise risk governance software</li>
                        <li>Developed processes for efficiently migrating dat</li>
                        <li>Championed software engineering best practices to non-technical stakeholders</li>
                    </ul>

                    <h2>PepsiCo<span>Supply Chain Analyst - Taber, AB - 2016</span></h2>
                    <p>Revamped inventory processes by introducing new spare part control mechanisms.</p>
                    <ul>
                        <li>Increased accuracy and availability of spare parts</li>
                        <li>Decreased budget costs for storage, shipping and ordering of inventory</li>
                        <li>Led a team of technicians in maintaining and improving storeroom practices</li>
                    </ul>

                    <h2>Jacobs Engineering<span>ERP Project Manager - Pickering, ON - 2013</span></h2>
                    <p>Managed a company-wide ERP project, working with multiple departments to increase company performance</p>
                    <ul>
                        <li>Maintained communication between different departments to decide on company purchase</li>
                        <li>Talked with vendors and organized demonstrations and meetings</li>
                        <li>Managed an organizational project designed to simplify shop floor welding procedure completion</li>
                    </ul>
                </dd>

                <dd class="clear"></dd>

                <dt>Hobbies</dt>
                <dd>DIY projects, Hiking, Snowboarding, 3D modelling and printing, cake-baking </dd>

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