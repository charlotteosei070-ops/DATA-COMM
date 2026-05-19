const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

function setNavOpen(isOpen) {
    navbar.classList.toggle("nav-open", isOpen);
    menuBtn?.setAttribute("aria-expanded", String(isOpen));

    const labelIcon = menuBtn?.querySelector("i");
    if (labelIcon) {
        labelIcon.classList.toggle("fa-bars", !isOpen);
        labelIcon.classList.toggle("fa-xmark", isOpen);
    }
} 


window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.background = "linear-gradient(135deg, #02101f 0%, #0a2f52 100%)";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.background = "linear-gradient(135deg, #0b1f3a 0%, #0d3d66 100%)";
    }
});

if (menuBtn && navLinks) {
    // initialize icon state
    menuBtn.querySelector("i")?.classList.add("fa-bars");

    menuBtn.addEventListener("click", () => {
        const isOpen = navbar.classList.contains("nav-open");
        setNavOpen(!isOpen);
    });

    // close menu on link click (mobile UX)
    navLinks.addEventListener("click", (e) => {
        const target = e.target.closest("a");
        if (!target) return;
        setNavOpen(false);
    });
}


// TOPIC EXPLANATION PAGES
const topicCards = document.querySelectorAll(".card");

const topicDetails = {

    "Introduction to Data Communication": `
        <p>
            1. Introduction to Data Communication

        </p>

        <p>
           Introduction to Data Communication

Data communication is the process of transmitting and receiving data between two or more devices through a communication channel. It allows devices such as computers, smartphones, and servers to exchange information with each other.

In data communication, information can be sent in the form of text, images, audio, or video. The transmission of this data can occur through different types of media such as cables, optical fibers, or wireless signals.

For data communication to occur successfully, there are five basic components involved: the sender (the device that sends the data), the receiver (the device that receives the data), the message (the information being transmitted), the transmission medium (the path through which the data travels), and the protocol (the rules that control how the data is sent and received).

Data communication plays a very important role in modern technology. It makes it possible for people to communicate over the internet, send emails, make phone calls, share files, and access online services from anywhere in the world.

        </p>

        <p>
            Data communication is important because it enables the exchange of information between devices across different locations. It allows people and organizations to connect and share data quickly and efficiently.

Through data communication, people can access the internet to search for information, communicate through emails and social media, and use various online services. It also supports mobile communication, allowing individuals to make calls, send messages, and use mobile applications from their smartphones.

In addition, data communication makes online learning possible by enabling students and teachers to interact through virtual classrooms, share learning materials, and attend lectures remotely. It also plays a key role in banking systems, where financial transactions such as online transfers, ATM services, and digital payments are carried out securely.

Furthermore, data communication supports networking in organizations, allowing computers and other devices to connect and share resources like files, printers, and internet connections. Because of these benefits, data communication has become an essential part of modern life and technology.

        </p>
    `,

    "Networking Fundamentals": `
        <p>
           Networking Fundamentals

Networking fundamentals explain the basic principles of how computers and other devices connect with each other to share information and resources. A network is formed when two or more devices are linked together using communication media such as cables or wireless signals.

These fundamentals include understanding how devices communicate, how data moves across a network, and the technologies used to connect different systems. Devices such as computers, routers, switches, and servers work together to allow communication within the network.

Networking fundamentals also involve concepts like network topologies, IP addressing, protocols, and network security. These concepts help ensure that data is transmitted accurately and reaches the correct destination.

Understanding networking fundamentals is important because it helps people design, manage, and troubleshoot networks effectively. It is the foundation for modern communication systems such as the internet, mobile networks, and organizational computer networks.

        </p>

        <p>
            I learned about network devices such as routers, switches, hubs,
            access points and servers.
        </p>

        <p>
            I also studied network topologies, IP addressing and protocols
            used in communication systems.
        </p>
    `,

    "OSI Reference Model": `
        <p>
           The OSI Reference Model is a seven-layer framework used to explain how communication takes place between devices on a network. It helps people understand how data moves from one computer to another by dividing the communication process into different layers, where each layer performs a specific function.

The seven layers of the OSI model are **Physical, Data Link, Network, Transport, Session, Presentation, and Application.

Physical Layer: This layer deals with the actual transmission of raw data bits through physical media such as cables, fiber optics, or wireless signals.
Data Link Layer: It ensures that data is transferred correctly between devices on the same network and handles error detection and correction.
Network Layer: This layer is responsible for routing data from the source device to the destination device across different networks.
Transport Layer: It manages the reliable delivery of data by controlling data flow and ensuring that packets arrive correctly.
Session Layer: This layer establishes, manages, and terminates communication sessions between devices.
Presentation Layer: It translates data into a format that the application layer can understand and also handles encryption and compression.
Application Layer: This is the layer closest to the user, where applications such as web browsers, email services, and file transfers interact with the network.

The OSI Reference Model is important because it provides a standard way to understand network communication and helps network engineers design, troubleshoot, and improve network systems.

        </p>

        <p>
            The layers include Physical, Data Link, Network, Transport,
            Session, Presentation and Application layers.
        </p>

        <p>
            Each layer performs specific tasks to ensure successful communication.
        </p>
    `,

    "Signals": `
        <p>
            Signals are electronic waves used to transfer information between devices.
        </p>

        <p>
            I learned about analog signals and digital signals,
            including how they are transmitted.
        </p>
     <p>
            Signals are very important in networking, radio communication,
            mobile communication and internet technologies.
        </p>
    `,

    "Wireless Technologies": `
        <p>
           Wireless technologies allow devices to communicate and exchange data without the use of physical cables or wires. Instead of cables, these technologies use electromagnetic waves such as radio waves, infrared signals, or microwaves to transmit information through the air.

With wireless communication, devices such as smartphones, laptops, tablets, and smart devices can connect to networks easily and move freely within a certain range. Common examples of wireless technologies include Wi-Fi, Bluetooth, and mobile networks.

Wireless technologies are widely used in homes, schools, offices, and public places to provide internet access and enable communication between devices. They make networking more flexible, convenient, and easier to set up compared to wired connections.

Overall, wireless technologies play an important role in modern communication by allowing fast and convenient connections without the need for physical cables.

        </p>

        <p>
            I learned about Wi-Fi, Bluetooth, infrared communication
            and mobile wireless systems.
        </p>

        <p>
            Wireless communication improves mobility and makes internet access easier.
        </p>
    `,

    "Cybersecurity": `
        <p>
            Cybersecurity involves protecting networks, computer systems, devices, and information from cyber attacks, unauthorized access, and data breaches. It focuses on keeping digital information safe from hackers, malware, viruses, and other online threats.

Cybersecurity uses different methods such as passwords, encryption, firewalls, and security software to protect systems and data. These security measures help ensure that only authorized users can access sensitive information.

It is very important in many areas such as banking systems, government institutions, businesses, and personal devices because a cyber attack can lead to loss of data, financial damage, or privacy violations.

Overall, cybersecurity helps maintain the confidentiality, integrity, and availability of information, making sure that digital systems remain safe, secure, and reliable.

        </p>

        <p>
            I learned about firewalls, encryption, malware protection,
            passwords and safe networking practices.
        </p>

        <p>
            Cybersecurity is important for protecting privacy and sensitive information.
        </p>
    `
};

topicCards.forEach(card => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const topicTitle = card.querySelector("h3").innerText;

        const explanation = topicDetails[topicTitle];

        const newPage = window.open("", "_blank");

        newPage.document.write(`

        <!DOCTYPE html>

        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>${topicTitle}</title>

            <style>

                *{
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                    font-family: 'Poppins', Arial, sans-serif;
                    scroll-behavior: smooth;
                }

                body{
                    background: linear-gradient(135deg, #e0f7ff 0%, #cfe8ff 50%, #e5f1ff 100%);
                    padding:clamp(16px, 4vw, 40px);
                    line-height:1.9;
                }

                .container{
                    width:min(100%, 1000px);
                    margin:auto;
                    background:white;
                    padding:clamp(20px, 5vw, 50px);
                    border-radius:20px;
                    box-shadow:0 10px 40px rgba(0,0,0,0.15);
                }

                h1{
                    color:#0b1f3a;
                    margin-bottom:clamp(16px, 3vw, 30px);
                    font-size:clamp(28px, 5vw, 44px);
                    line-height:1.2;
                    font-weight: 700;
                }

                p{
                    margin-bottom:clamp(12px, 2vw, 20px);
                    color:#555;
                    font-size:clamp(14px, 2.4vw, 18px);
                    line-height:1.8;
                }

                @media (max-width: 480px){
                    .container{ 
                        border-radius: 14px;
                        padding: 20px;
                    }
                    h1{
                        font-size: 24px;
                    }
                }


            </style>

        </head>

        <body>

            <div class="container">

                <h1>${topicTitle}</h1>

                ${explanation}

            </div>

        </body>

        </html>

        `);

    });

});