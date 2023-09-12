

export default function Home() {
    return (
        <div>
        <h1>About Me</h1>
        <p>
            I am a newly qualified Full-Stack Web Development student based in Gauteng, South Africa. <br/>
            I am 19 years old and I am looking for an entry level position in any Web Development position. <br/>
            I enjoy designing web applications and love to learn new functions and coding languages.<br/>
            I will not stop working on a task untill I am able to solve it and fully understand whatever concept was the issue.
        </p>

        <h2>Education</h2>
        <h2 className="head">2023</h2>
        <h3>Woodlands International College:</h3>
        <ul>
            <li>My matric qualification</li>
        </ul>
        <h3>HyperionDev:</h3>
        <ul>
            <li>Full-Stack Web Development</li>
            <li>Javascript, HTML, React, Express.js, Node.js, MongoDB, CSS, Next.js</li>
        </ul>

        <h2>Work Experience</h2>
        <p>I do not have any current work experience. I have just graduated from matric and decided to take part in <br/> 
        the Full-Stack Web Development Bootcamp offered by HyperionDev.
        </p>
        

        <style jsx>{`
            h1 {
                color: black;
                margin-top: 5px;
            }
            div {
                background: white;
                text-align: center;
                margin-top: 0px;
       
            }
            ul {
                display: inline-block;
            }
            h3 {
                margin-bottom: 5px;
            }
            .head{
                text-decoration: underline;
            }
        `}</style>
    </div>
    )
    
}