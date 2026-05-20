 /* ============================================
   DATA COMMUNICATION COURSE WEBSITE
   JavaScript Functionality
   ============================================ */

// ============================================
// TOPIC DATA - Detailed explanations for each topic
// ============================================
const topicData = {
    intro: {
        title: "Introduction to Data Communication",
        content: `
            <div class="topic-detail">
                <h3>What is Data Communication?</h3>
                <p>Data communication is the process of exchanging data between two or more devices through a transmission medium. It involves the transfer of digital or analog data from a source to a destination using various technologies and protocols.</p>

                <h3>Key Components</h3>
                <ul>
                    <li><strong>Sender (Source):</strong> The device that originates the message. Examples include computers, phones, or any device capable of sending data.</li>
                    <li><strong>Message:</strong> The information or data being communicated. This can be text, numbers, images, audio, or video.</li>
                    <li><strong>Transmission Medium:</strong> The physical path between sender and receiver. This can be wired (cables, fiber optics) or wireless (radio waves, microwaves).</li>
                    <li><strong>Receiver (Destination):</strong> The device that receives the message. It can be a computer, printer, or any receiving device.</li>
                    <li><strong>Protocol:</strong> A set of rules that govern data communication. Protocols ensure that devices can understand each other.</li>
                </ul>

                <h3>Types of Data Communication</h3>
                <ul>
                    <li><strong>Simplex:</strong> One-way communication (e.g., TV broadcasting)</li>
                    <li><strong>Half-Duplex:</strong> Two-way communication, but not simultaneously (e.g., walkie-talkies)</li>
                    <li><strong>Full-Duplex:</strong> Two-way simultaneous communication (e.g., telephone calls)</li>
                </ul>

                <h3>Communication Model</h3>
                <p>The basic communication model consists of five parts: source → transmitter → transmission system → receiver → destination. The transmitter converts the message into a signal suitable for transmission, while the receiver converts the signal back into the original message.</p>

                <h3>Importance in Modern World</h3>
                <p>Data communication forms the backbone of the internet, enabling everything from emails and social media to online banking and remote work. Understanding these fundamentals is essential for anyone pursuing a career in IT, networking, or telecommunications.</p>
            </div>
        `
    },
    telegraph: {
        title: "History: The Telegraph",
        content: `
            <div class="topic-detail">
                <h3>The Birth of Electrical Communication</h3>
                <p>The telegraph, invented by Samuel Morse in the 1830s-1840s, was the first device to send messages over long distances using electrical signals. It revolutionized communication by making it possible to transmit information almost instantly across continents.</p>
 <h3>How the Telegraph Works</h3>
                <ul>
                    <li><strong>The Key (Button):</strong> An operator presses a button to complete an electrical circuit. Pressing briefly creates a "dot" (·), holding longer creates a "dash" (–).</li>
                    <li><strong>The Wire:</strong> A copper wire carries the electrical signal over long distances, often hundreds of miles.</li>
                    <li><strong>The Sounder:</strong> At the receiving end, an electromagnet pulls a metal bar down, creating a clicking sound when electricity arrives.</li>
                    <li><strong>Morse Code:</strong> A system where combinations of dots and dashes represent letters and numbers. For example, SOS is ··· ––– ···</li>
                </ul>

                <h3>Historical Impact</h3>
                <p>The telegraph connected the world in ways never before possible. It enabled:</p>
                <ul>
                    <li>Instant news transmission across countries</li>
                    <li>Coordination of railway systems</li>
                    <li>Faster business transactions</li>
                    <li>Improved military communication</li>
                </ul>

                <h3>Connection to Modern Data Communication</h3>
                <p>The telegraph introduced fundamental concepts still used today:</p>
                <ul>
                    <li><strong>Binary Concept:</strong> On/off signals are the foundation of digital computing</li>
                    <li><strong>Encoding:</strong> Morse code was the first encoding scheme</li>
                    <li><strong>Protocols:</strong> Standardized rules for communication</li>
                    <li><strong>Networking:</strong> The first wide-area network</li>
                </ul>

                <h3>Legacy</h3>
                <p>While the telegraph is obsolete today, its principles live on in every text message, email, and internet packet. The concept of encoding information into electrical signals remains the foundation of all digital communication.</p>
            </div>
        `
    },
    signals: {
        title: "Signals & Transmission",
        content: `
            <div class="topic-detail">
                <h3>Understanding Signals</h3>
                <p>In data communication, a signal is an electromagnetic or electrical wave that carries information. Signals can be classified into two main types: analog and digital.</p>

                <h3>Analog Signals</h3>
                <p>Analog signals are continuous waveforms that vary smoothly over time. They can take any value within a range. Examples include:</p>
                <ul>
                    <li>Sound waves</li>
                    <li>Radio waves</li>
                    <li>Traditional telephone signals</li>
                </ul>

                <h3>Digital Signals</h3>
                <p>Digital signals are discrete, representing information as a series of 0s and 1s (binary). They have distinct, separate levels. Advantages include:</p>
                <ul>
                    <li>Less susceptible to noise and interference</li>
                    <li>Easier to process and store</li>
                    <li>Can be perfectly reproduced</li>
                </ul>

                <h3>Modulation Techniques</h3>
                <p>Modulation is the process of converting digital data into analog signals for transmission:</p>
                <ul>
                    <li><strong>Amplitude Modulation (AM):</strong> Varies the amplitude (height) of the carrier wave</li>
                    <li><strong>Frequency Modulation (FM):</strong> Varies the frequency of the carrier wave</li>
                    <li><strong>Phase Modulation (PM):</strong> Varies the phase of the carrier wave</li>
                </ul>
<h3>Encoding Schemes</h3>
                <p>Encoding converts digital data into digital signals:</p>
                <ul>
                    <li><strong>NRZ (Non-Return to Zero):</strong> Simple 1s and 0s as high/low voltage</li>
                    <li><strong>Manchester Encoding:</strong> Transition in the middle of each bit period</li>
                    <li><strong>4B/5B Encoding:</strong> Maps 4-bit groups to 5-bit codes for better synchronization</li>
                </ul>

                <h3>Transmission Modes</h3>
                <ul>
                    <li><strong>Baseband:</strong> Single signal on the medium (e.g., Ethernet)</li>
                    <li><strong>Broadband:</strong> Multiple signals simultaneously (e.g., cable TV)</li>
                </ul>
            </div>
        `
    },
    media: {
        title: "Transmission Media",
        content: `
            <div class="topic-detail">
                <h3>What is Transmission Media?</h3>
                <p>Transmission media are the physical pathways that connect computers, other devices, and people. They are the channels through which data is transmitted from one place to another.</p>

                <h3>Guided Media (Wired)</h3>
                <p>Signals are guided along a solid medium:</p>
                <ul>
                    <li><strong>Twisted Pair Cable:</strong>
                        <ul>
                            <li>Unshielded (UTP): Common in Ethernet networks, telephone lines</li>
                            <li>Shielded (STP): Better protection against interference</li>
                            <li>Categories: Cat5, Cat5e, Cat6, Cat6a, Cat7 (increasing speed/capacity)</li>
                        </ul>
                    </li>
                    <li><strong>Coaxial Cable:</strong>
                        <ul>
                            <li>Central copper conductor with insulating layers</li>
                            <li>Used in cable TV, older Ethernet networks</li>
                            <li>Better shielding than twisted pair</li>
                        </ul>
                    </li>
                    <li><strong>Fiber Optic Cable:</strong>
                        <ul>
                            <li>Uses light pulses through glass/plastic fibers</li>
                            <li>Extremely high bandwidth (up to terabits per second)</li>
                            <li>Immune to electromagnetic interference</li>
                            <li>Single-mode: Long distances, laser light</li>
                            <li>Multimode: Shorter distances, LED light</li>
                        </ul>
                    </li>
                </ul>

                <h3>Unguided Media (Wireless)</h3>
                <p>Signals travel through air or space:</p>
                <ul>
                    <li><strong>Radio Waves:</strong>
                        <ul>
                            <li>AM/FM radio, TV broadcasting</li>
                            <li>Can travel long distances, penetrate walls</li>
                        </ul>
                    </li>
                    <li><strong>Microwaves:</strong>
                        <ul>
                            <li>High-frequency, directional</li>
                            <li>Used in satellite communication, cellular networks</li>
                            <li>Require line-of-sight</li>
                        </ul>
                    </li>
                    <li><strong>Infrared:</strong>
                        <ul>
                            <li>Short-range communication</li>
                            <li>Used in TV remotes, short-range data transfer</li>
                            <li>Cannot penetrate walls</li>
                        </ul>
                    </li>
                </ul>
 <h3>Comparison</h3>
                <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background: #f1f5f9;">
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Media</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Speed</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Distance</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Cost</th>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Twisted Pair</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Up to 10 Gbps</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">100m</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Low</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Coaxial</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Up to 1 Gbps</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">500m</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Medium</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Fiber Optic</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Up to 100+ Gbps</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Km+</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">High</td>
                    </tr>
                </table>
            </div>
        `
    },
    networks: {
        title: "Network Topologies",
        content: `
            <div class="topic-detail">
                <h3>What is Network Topology?</h3>
                <p>Network topology refers to the physical or logical arrangement of devices and connections in a network. It defines how nodes are connected and how data flows between them.</p>

                <h3>Bus Topology</h3>
                <ul>
                    <li>All devices connected to a single central cable (backbone)</li>
                    <li><strong>Advantages:</strong> Easy to install, requires less cable</li>
                    <li><strong>Disadvantages:</strong> Single point of failure, difficult to troubleshoot</li>
                    <li><strong>Use case:</strong> Small networks, legacy systems</li>
                </ul>

                <h3>Star Topology</h3>
                <ul>
                    <li>All devices connected to a central hub or switch</li>
                    <li><strong>Advantages:</strong> Easy to manage, single cable failure doesn't affect others</li>
                    <li><strong>Disadvantages:</strong> Central point of failure, more cable required</li>
                    <li><strong>Use case:</strong> Modern Ethernet networks, home networks</li>
                </ul>

                <h3>Ring Topology</h3>
                <ul>
                    <li>Devices connected in a circular fashion, each connected to two neighbors</li>
                    <li>Data travels in one direction (unidirectional) or both (bidirectional)</li>
                    <li><strong>Advantages:</strong> Equal access for all devices, easy to install</li>
                    <li><strong>Disadvantages:</strong> Single failure can break the ring</li>
                    <li><strong>Use case:</strong> Token Ring networks (legacy), FDDI</li>
                </ul>
<h3>Mesh Topology</h3>
                <ul>
                    <li>Every device connected to every other device</li>
                    <li><strong>Full Mesh:</strong> All nodes connected to all others (n(n-1)/2 links)</li>
                    <li><strong>Partial Mesh:</strong> Some nodes connected to multiple others</li>
                    <li><strong>Advantages:</strong> High redundancy, fault tolerance</li>
                    <li><strong>Disadvantages:</strong> Expensive, complex to manage</li>
                    <li><strong>Use case:</strong> Internet backbone, critical systems</li>
                </ul>

                <h3>Hybrid Topology</h3>
                <p>Combination of two or more topologies. Most real-world networks use hybrid approaches to balance cost, performance, and reliability.</p>

                <h3>Tree Topology</h3>
                <ul>
                    <li>Hierarchical structure with root node and connected subnets</li>
                    <li>Combination of bus and star topologies</li>
                    <li><strong>Use case:</strong> Corporate networks, university campuses</li>
                </ul>
            </div>
        `
    },
    protocols: {
        title: "Protocols & Standards",
        content: `
            <div class="topic-detail">
                <h3>What are Protocols?</h3>
                <p>Protocols are sets of rules and conventions that govern how devices communicate. They define the format, timing, sequencing, and error checking of data exchange.</p>

                <h3>The OSI Model (Open Systems Interconnection)</h3>
                <p>A conceptual framework with 7 layers:</p>
                <ul>
                    <li><strong>Layer 7 - Application:</strong> Interface for applications (HTTP, FTP, SMTP)</li>
                    <li><strong>Layer 6 - Presentation:</strong> Data translation, encryption, compression</li>
                    <li><strong>Layer 5 - Session:</strong> Manages sessions between applications</li>
                    <li><strong>Layer 4 - Transport:</strong> End-to-end communication (TCP, UDP)</li>
                    <li><strong>Layer 3 - Network:</strong> Routing and addressing (IP, ICMP)</li>
                    <li><strong>Layer 2 - Data Link:</strong> Node-to-node delivery (Ethernet, PPP)</li>
                    <li><strong>Layer 1 - Physical:</strong> Raw bit transmission (cables, signals)</li>
                </ul>

                <h3>TCP/IP Model</h3>
                <p>The practical implementation used on the internet:</p>
                <ul>
                    <li><strong>Application Layer:</strong> HTTP, FTP, DNS, SMTP</li>
                    <li><strong>Transport Layer:</strong> TCP, UDP</li>
                    <li><strong>Internet Layer:</strong> IP, ICMP, ARP</li>
                    <li><strong>Network Access:</strong> Ethernet, Wi-Fi, ARP</li>
                </ul>

                <h3>Key Protocols</h3>
                <ul>
                    <li><strong>HTTP/HTTPS:</strong> Web browsing (port 80/443)</li>
                    <li><strong>FTP:</strong> File transfer (port 21)</li>
                    <li><strong>SMTP/POP3/IMAP:</strong> Email (ports 25/110/143)</li>
                    <li><strong>DNS:</strong> Domain name resolution (port 53)</li>
                    <li><strong>DHCP:</strong> Automatic IP assignment (port 67/68)</li>
                    <li><strong>TCP:</strong> Reliable, connection-oriented</li>
                    <li><strong>UDP:</strong> Fast, connectionless</li>
                </ul>
<h3>Standards Organizations</h3>
                <ul>
                    <li><strong>IEEE:</strong> Defines Ethernet (802.3), Wi-Fi (802.11) standards</li>
                    <li><strong>IETF:</strong> Develops internet standards (RFCs)</li>
                    <li><strong>ITU-T:</strong> International telecommunications standards</li>
                    <li><strong>ISO:</strong> International standards organization</li>
                </ul>
            </div>
        `
    },
    error: {
        title: "Error Detection & Correction",
        content: `
            <div class="topic-detail">
                <h3>Why Error Detection?</h3>
                <p>During transmission, data can be corrupted due to noise, interference, or signal distortion. Error detection and correction mechanisms ensure data integrity.</p>

                <h3>Types of Errors</h3>
                <ul>
                    <li><strong>Single-bit error:</strong> Only one bit in the data unit is changed</li>
                    <li><strong>Burst error:</strong> Two or more bits in the data unit are changed</li>
                </ul>

                <h3>Error Detection Methods</h3>
                <ul>
                    <li><strong>Parity Check:</strong>
                        <ul>
                            <li>Even parity: Total 1s must be even</li>
                            <li>Odd parity: Total 1s must be odd</li>
                            <li>Simple but can only detect single-bit errors</li>
                        </ul>
                    </li>
                    <li><strong>Checksum:</strong>
                        <ul>
                            <li>Sum of data segments sent with data</li>
                            <li>Receiver recalculates and compares</li>
                            <li>Used in TCP/IP, UDP</li>
                        </ul>
                    </li>
                    <li><strong>Cyclic Redundancy Check (CRC):</strong>
                        <ul>
                            <li>Polynomial division generates remainder</li>
                            <li>Very effective at detecting burst errors</li>
                            <li>Widely used in Ethernet, storage devices</li>
                        </ul>
                    </li>
                </ul>

                <h3>Error Correction Methods</h3>
                <ul>
                    <li><strong>Forward Error Correction (FEC):</strong>
                        <ul>
                            <li>Receiver can correct errors without retransmission</li>
                            <li>Used when retransmission is costly or impossible</li>
                        </ul>
                    </li>
                    <li><strong>Hamming Code:</strong>
                        <ul>
                            <li>Can detect and correct single-bit errors</li>
                            <li>Adds redundant bits at calculated positions</li>
                            <li>Used in memory (RAM) error correction</li>
                        </ul>
                    </li>
                    <li><strong>Retransmission (ARQ):</strong>
                        <ul>
                            <li>Stop-and-Wait ARQ: Send one frame, wait for ACK</li>
                            <li>Go-Back-N ARQ: Send multiple frames, resend from error</li>
                            <li>Selective Repeat ARQ: Resend only corrupted frames</li>
                        </ul>
                    </li>
                </ul>
 <h3>Hamming Distance</h3>
                <p>The number of bit positions in which two code words differ. Minimum Hamming distance determines error detection/correction capability:</p>
                <ul>
                    <li>To detect d errors: Hamming distance ≥ d + 1</li>
                    <li>To correct d errors: Hamming distance ≥ 2d + 1</li>
                </ul>
            </div>
        `
    },
    switching: {
        title: "Switching Techniques",
        content: `
            <div class="topic-detail">
                <h3>What is Switching?</h3>
                <p>Switching is the method by which data is transferred from source to destination in a network. It determines how connections are established and maintained.</p>

                <h3>Circuit Switching</h3>
                <ul>
                    <li>Dedicated communication path established before transmission</li>
                    <li>Path remains reserved for the entire session</li>
                    <li><strong>Advantages:</strong> Guaranteed bandwidth, no delay once connected</li>
                    <li><strong>Disadvantages:</strong> Inefficient use of resources, setup time required</li>
                    <li><strong>Examples:</strong> Traditional telephone networks (PSTN)</li>
                </ul>

                <h3>Packet Switching</h3>
                <ul>
                    <li>Data broken into packets that travel independently</li>
                    <li>Packets may take different routes</li>
                    <li>Reassembled at destination</li>
                    <li><strong>Advantages:</strong> Efficient bandwidth use, fault tolerance</li>
                    <li><strong>Disadvantages:</strong> Variable delay, packet ordering issues</li>
                    <li><strong>Examples:</strong> Internet, modern data networks</li>
                </ul>

                <h3>Message Switching</h3>
                <ul>
                    <li>Entire message stored at each intermediate node</li>
                    <li>Store-and-forward approach</li>
                    <li><strong>Advantages:</strong> No dedicated path needed</li>
                    <li><strong>Disadvantages:</strong> High delay, large storage needed</li>
                    <li><strong>Examples:</strong> Early email systems (rarely used today)</li>
                </ul>

                <h3>Virtual Circuit Switching</h3>
                <ul>
                    <li>Combines features of circuit and packet switching</li>
                    <li>Logical connection established (virtual circuit)</li>
                    <li>Packets follow same path but share bandwidth</li>
                    <li><strong>Examples:</strong> ATM, Frame Relay, MPLS</li>
                </ul>
 <h3>Comparison</h3>
                <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background: #f1f5f9;">
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Feature</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Circuit</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Packet</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Message</th>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Path</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Dedicated</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Not dedicated</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Not dedicated</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Delay</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Low (after setup)</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Variable</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">High</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Efficiency</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Low</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">High</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Medium</td>
                    </tr>
                </table>
            </div>
        `
    }
};

// ============================================
// RESOURCE MATERIALS - Content opened from Reference Materials
// ============================================
const resourceData = {
    textbook: {
        title: "Course Textbook PDF",
        content: `
            <div class="topic-detail">
                <h3>Data Communication Course Textbook Summary</h3>
                <p>This material gives a textbook-style overview of the main ideas studied in Data Communication.</p>

                <h3>Chapter 1: Introduction to Data Communication</h3>
                <ul>
                    <li><strong>Data communication</strong> is the transfer of data between devices through a wired or wireless medium.</li>
                    <li>The five main components are sender, receiver, message, transmission medium, and protocol.</li>
                    <li>Communication can be simplex, half-duplex, or full-duplex.</li>
                </ul>

                <h3>Chapter 2: Signals and Transmission</h3>
                <ul>
                    <li><strong>Analog signals</strong> are continuous, while <strong>digital signals</strong> use discrete values such as 0 and 1.</li>
                    <li>Important signal terms include amplitude, frequency, phase, bandwidth, attenuation, and noise.</li>
                    <li>Encoding and modulation help data travel correctly across communication media.</li>
                </ul>

                <h3>Chapter 3: Transmission Media</h3>
                <ul>
                    <li>Guided media include twisted pair cable, coaxial cable, and fiber optic cable.</li>
                    <li>Unguided media include radio waves, microwaves, infrared, Wi-Fi, Bluetooth, and satellite links.</li>
                    <li>Fiber optic cable is fast, reliable, and suitable for long-distance communication.</li>
                </ul>
 <h3>Chapter 4: Networks and Protocols</h3>
                <ul>
                    <li>Networks allow computers and devices to share information and resources.</li>
                    <li>Protocols are rules that control how data is formatted, sent, received, and checked.</li>
                    <li>The OSI model explains networking in seven layers, while TCP/IP is widely used on the internet.</li>
                </ul>
            </div>
        `
    },
    "lecture-notes": {
        title: "Lecture Notes Week 1-6",
        content: `
            <div class="topic-detail">
                <h3>Week 1: Meaning of Data Communication</h3>
                <p>We learned that data communication is the exchange of data between two or more devices. Communication needs a sender, receiver, message, medium, and protocol.</p>

                <h3>Week 2: Telegraph and Early Communication</h3>
                <p>The telegraph was one of the earliest electrical communication systems. It used electrical pulses and Morse code to send messages over long distances.</p>

                <h3>Week 3: Analog and Digital Signals</h3>
                <p>Analog signals are continuous waves, while digital signals represent data as 0s and 1s. Digital communication is common in modern computers and networks.</p>

                <h3>Week 4: Transmission Media</h3>
                <p>Transmission media are the channels used to carry data. Wired media include twisted pair, coaxial, and fiber optic cables. Wireless media include radio waves and microwaves.</p>

                <h3>Week 5: Network Topologies</h3>
                <p>Network topology is the arrangement of devices in a network. Common topologies include bus, star, ring, mesh, tree, and hybrid topology.</p>

                <h3>Week 6: Protocols and Standards</h3>
                <p>Protocols are rules for communication. Standards make it possible for devices from different manufacturers to communicate successfully.</p>
            </div>
        `
    },
    "practice-questions": {
        title: "Practice Questions",
        content: `
            <div class="topic-detail">
                <h3>Short Answer Questions</h3>
                <ul>
                    <li>Define data communication.</li>
                    <li>List five components of a data communication system.</li>
                    <li>Differentiate between analog and digital signals.</li>
                    <li>State two examples of guided transmission media.</li>
                    <li>What is the function of a protocol?</li>
                    <li>Explain simplex, half-duplex, and full-duplex communication.</li>
                </ul>

                <h3>Essay Questions</h3>
                <ul>
                    <li>Explain how the telegraph works and why it is important in the history of communication.</li>
                    <li>Describe the OSI model and state the function of each layer.</li>
                    <li>Compare twisted pair cable, coaxial cable, and fiber optic cable.</li>
                    <li>Discuss four common network topologies with one advantage and one disadvantage each.</li>
                </ul>

                <h3>Revision Answers Guide</h3>
                <p>When answering, use clear definitions, give examples, and explain terms in your own words. Diagrams can help when discussing topologies, the communication model, and the telegraph.</p>
            </div>
        `
    },
    "past-exams": {
        title: "Past Exam Papers",
        content: `
            <div class="topic-detail">
                <h3>Sample Past Exam Paper</h3>
                <p><strong>Instructions:</strong> Answer all questions in Section A and any two questions in Section B.</p>
<h3>Section A: Objective / Short Questions</h3>
                <ul>
                    <li>What is bandwidth?</li>
                    <li>State one advantage of digital signals over analog signals.</li>
                    <li>What is attenuation?</li>
                    <li>Name two wireless transmission media.</li>
                    <li>What is the main purpose of error detection?</li>
                </ul>

                <h3>Section B: Theory Questions</h3>
                <ul>
                    <li>With a diagram, explain the basic data communication model.</li>
                    <li>Explain the difference between guided and unguided transmission media.</li>
                    <li>Describe circuit switching, packet switching, and message switching.</li>
                    <li>Explain error detection using parity check, checksum, and CRC.</li>
                </ul>

                <h3>Exam Preparation Tips</h3>
                <ul>
                    <li>Revise definitions and examples first.</li>
                    <li>Practice drawing network topologies and communication diagrams.</li>
                    <li>Use headings and short paragraphs in theory answers.</li>
                    <li>Always relate your answer to real communication systems such as phones, Wi-Fi, and the internet.</li>
                </ul>
            </div>
        `
    }
};

// ============================================
// NAVIGATION
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
    }
});

// ============================================
// TOPIC MODAL
// ============================================
const topicModal = document.getElementById('topicModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const topicCards = document.querySelectorAll('.topic-card');
const resourceLinks = document.querySelectorAll('[data-resource]');

topicCards.forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.getAttribute('data-topic');
        const data = topicData[topic];

        if (data && topicModal && modalTitle && modalBody) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            topicModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

resourceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const resource = link.getAttribute('data-resource');
        const data = resourceData[resource];

        if (data && topicModal && modalTitle && modalBody) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            topicModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    if (!topicModal) return;
    topicModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
 // Close modal on outside click
if (topicModal) {
    topicModal.addEventListener('click', (e) => {
        if (e.target === topicModal) {
            closeModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeFileModal();
    }
});

// ============================================
// FILE UPLOAD
// ============================================
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const uploadList = document.getElementById('uploadList');

if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', (e) => {
        if (e.target !== fileInput) {
            fileInput.click();
        }
    });

    fileInput.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

if (uploadArea) {
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--primary)';
        uploadArea.style.background = 'rgba(37, 99, 235, 0.05)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'var(--border)';
        uploadArea.style.background = 'transparent';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--border)';
        uploadArea.style.background = 'transparent';

        const files = e.dataTransfer.files;
        handleFiles(files);
    });
}

if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    if (!uploadList) return;
    Array.from(files).forEach(file => {
        const item = document.createElement('div');
        item.className = 'upload-item';
        item.innerHTML = `
            <i class="fas fa-check-circle" style="color: #10b981;"></i>
            <span>${file.name}</span>
            <span style="color: var(--text-light); font-size: 0.85rem;">${(file.size / 1024).toFixed(1)} KB</span>
        `;
        uploadList.appendChild(item);
    });
}

// ============================================
// FILE READER MODAL
// ============================================
const fileModal = document.getElementById('fileModal');
const fileModalTitle = document.getElementById('fileModalTitle');
const previewFileName = document.getElementById('previewFileName');
const openFileBtn = document.getElementById('openFileBtn');
const pdfViewer = document.getElementById('pdfViewer');

function readFile(title, filePath = 'Assignment.pdf') {
    if (!fileModal) return;
    if (fileModalTitle) {
        fileModalTitle.textContent = 'View ' + title;
    }
    if (previewFileName) {
        previewFileName.textContent = title;
    }
    if (pdfViewer) {
        pdfViewer.src = filePath;
        pdfViewer.title = title;
    }
    if (openFileBtn) {
        openFileBtn.href = filePath;
    }
    fileModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeFileModal() {
    if (!fileModal) return;
    fileModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (fileModal) {
    fileModal.addEventListener('click', (e) => {
        if (e.target === fileModal) {
            closeFileModal();
        }
    });
}

// ============================================
// YOUTUBE VIDEO
// ============================================
const videoIds = [
    'dQw4w9WgXcQ',  // Placeholder - replace with actual data communication video IDs
    'x3c1ih2NJEg',  // Example networking video
    'qiQR5rJykeI',  // Example data communication
];
let currentVideoIndex = 0;

function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    const iframe = document.getElementById('youtubeVideo');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoIds[currentVideoIndex]}`;
    }
}
// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observe all cards
document.querySelectorAll('.topic-card, .resource-card, .assignment-card, .info-card, .component-item').forEach(el => {
    if ('IntersectionObserver' in window) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.topic-card, .resource-card, .assignment-card, .info-card, .component-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href  href === '#') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 70; // Navbar height
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// STUDENT INFO UPDATE
// ============================================
// You can update your name and ID here
const studentInfo = {
    name: 'Your Name',
    id: 'Your Student ID'
};

// Update the DOM with student info
const studentNameEl = document.getElementById('studentName');
const studentIDEl = document.getElementById('studentID');

if (studentNameEl) {
    studentNameEl.textContent = studentInfo.name;
}

if (studentIDEl) {
    studentIDEl.textContent = studentInfo.id;
}

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c Data Communication Course Website ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Built with HTML, CSS & JavaScript ', 'color: #2563eb; font-size: 14px;');
console.log('%c Student: ' + studentInfo.name + ' | ID: ' + studentInfo.id, 'color: #64748b; font-size: 12px;');
/* ============================================
   DATA COMMUNICATION COURSE WEBSITE
   JavaScript Functionality
   ============================================ */

// ============================================
// TOPIC DATA - Detailed explanations for each topic
// ============================================
const topicData = {
    intro: {
        title: "Introduction to Data Communication",
        content: `
            <div class="topic-detail">
                <h3>What is Data Communication?</h3>
                <p>Data communication is the process of exchanging data between two or more devices through a transmission medium. It involves the transfer of digital or analog data from a source to a destination using various technologies and protocols.</p>

                <h3>Key Components</h3>
                <ul>
                    <li><strong>Sender (Source):</strong> The device that originates the message. Examples include computers, phones, or any device capable of sending data.</li>
                    <li><strong>Message:</strong> The information or data being communicated. This can be text, numbers, images, audio, or video.</li>
                    <li><strong>Transmission Medium:</strong> The physical path between sender and receiver. This can be wired (cables, fiber optics) or wireless (radio waves, microwaves).</li>
                    <li><strong>Receiver (Destination):</strong> The device that receives the message. It can be a computer, printer, or any receiving device.</li>
                    <li><strong>Protocol:</strong> A set of rules that govern data communication. Protocols ensure that devices can understand each other.</li>
                </ul>

                <h3>Types of Data Communication</h3>
                <ul>
                    <li><strong>Simplex:</strong> One-way communication (e.g., TV broadcasting)</li>
                    <li><strong>Half-Duplex:</strong> Two-way communication, but not simultaneously (e.g., walkie-talkies)</li>
                    <li><strong>Full-Duplex:</strong> Two-way simultaneous communication (e.g., telephone calls)</li>
                </ul>

                <h3>Communication Model</h3>
                <p>The basic communication model consists of five parts: source → transmitter → transmission system → receiver → destination. The transmitter converts the message into a signal suitable for transmission, while the receiver converts the signal back into the original message.</p>

                <h3>Importance in Modern World</h3>
                <p>Data communication forms the backbone of the internet, enabling everything from emails and social media to online banking and remote work. Understanding these fundamentals is essential for anyone pursuing a career in IT, networking, or telecommunications.</p>
            </div>
        `
    },
    telegraph: {
        title: "History: The Telegraph",
        content: `
            <div class="topic-detail">
                <h3>The Birth of Electrical Communication</h3>
                <p>The telegraph, invented by Samuel Morse in the 1830s-1840s, was the first device to send messages over long distances using electrical signals. It revolutionized communication by making it possible to transmit information almost instantly across continents.</p>

                <h3>How the Telegraph Works</h3>
                <ul>
                    <li><strong>The Key (Button):</strong> An operator presses a button to complete an electrical circuit. Pressing briefly creates a "dot" (·), holding longer creates a "dash" (–).</li>
                    <li><strong>The Wire:</strong> A copper wire carries the electrical signal over long distances, often hundreds of miles.</li>
                    <li><strong>The Sounder:</strong> At the receiving end, an electromagnet pulls a metal bar down, creating a clicking sound when electricity arrives.</li>
                    <li><strong>Morse Code:</strong> A system where combinations of dots and dashes represent letters and numbers. For example, SOS is ··· ––– ···</li>
                </ul>

                <h3>Historical Impact</h3>
                <p>The telegraph connected the world in ways never before possible. It enabled:</p>
                <ul>
                    <li>Instant news transmission across countries</li>
                    <li>Coordination of railway systems</li>
                    <li>Faster business transactions</li>
                    <li>Improved military communication</li>
                </ul>
 <h3>Connection to Modern Data Communication</h3>
                <p>The telegraph introduced fundamental concepts still used today:</p>
                <ul>
                    <li><strong>Binary Concept:</strong> On/off signals are the foundation of digital computing</li>
                    <li><strong>Encoding:</strong> Morse code was the first encoding scheme</li>
                    <li><strong>Protocols:</strong> Standardized rules for communication</li>
                    <li><strong>Networking:</strong> The first wide-area network</li>
                </ul>

                <h3>Legacy</h3>
                <p>While the telegraph is obsolete today, its principles live on in every text message, email, and internet packet. The concept of encoding information into electrical signals remains the foundation of all digital communication.</p>
            </div>
        `
    },
    signals: {
        title: "Signals & Transmission",
        content: `
            <div class="topic-detail">
                <h3>Understanding Signals</h3>
                <p>In data communication, a signal is an electromagnetic or electrical wave that carries information. Signals can be classified into two main types: analog and digital.</p>

                <h3>Analog Signals</h3>
                <p>Analog signals are continuous waveforms that vary smoothly over time. They can take any value within a range. Examples include:</p>
                <ul>
                    <li>Sound waves</li>
                    <li>Radio waves</li>
                    <li>Traditional telephone signals</li>
                </ul>

                <h3>Digital Signals</h3>
                <p>Digital signals are discrete, representing information as a series of 0s and 1s (binary). They have distinct, separate levels. Advantages include:</p>
                <ul>
                    <li>Less susceptible to noise and interference</li>
                    <li>Easier to process and store</li>
                    <li>Can be perfectly reproduced</li>
                </ul>

                <h3>Modulation Techniques</h3>
                <p>Modulation is the process of converting digital data into analog signals for transmission:</p>
                <ul>
                    <li><strong>Amplitude Modulation (AM):</strong> Varies the amplitude (height) of the carrier wave</li>
                    <li><strong>Frequency Modulation (FM):</strong> Varies the frequency of the carrier wave</li>
                    <li><strong>Phase Modulation (PM):</strong> Varies the phase of the carrier wave</li>
                </ul>

                <h3>Encoding Schemes</h3>
                <p>Encoding converts digital data into digital signals:</p>
                <ul>
                    <li><strong>NRZ (Non-Return to Zero):</strong> Simple 1s and 0s as high/low voltage</li>
                    <li><strong>Manchester Encoding:</strong> Transition in the middle of each bit period</li>
                    <li><strong>4B/5B Encoding:</strong> Maps 4-bit groups to 5-bit codes for better synchronization</li>
                </ul>

                <h3>Transmission Modes</h3>
                <ul>
                    <li><strong>Baseband:</strong> Single signal on the medium (e.g., Ethernet)</li>
                    <li><strong>Broadband:</strong> Multiple signals simultaneously (e.g., cable TV)</li>
                </ul>
            </div>
        `
    },
    media: {
        title: "Transmission Media",
        content: `
            <div class="topic-detail">
                <h3>What is Transmission Media?</h3>
                <p>Transmission media are the physical pathways that connect computers, other devices, and people. They are the channels through which data is transmitted from one place to another.</p>
<h3>Guided Media (Wired)</h3>
                <p>Signals are guided along a solid medium:</p>
                <ul>
                    <li><strong>Twisted Pair Cable:</strong>
                        <ul>
                            <li>Unshielded (UTP): Common in Ethernet networks, telephone lines</li>
                            <li>Shielded (STP): Better protection against interference</li>
                            <li>Categories: Cat5, Cat5e, Cat6, Cat6a, Cat7 (increasing speed/capacity)</li>
                        </ul>
                    </li>
                    <li><strong>Coaxial Cable:</strong>
                        <ul>
                            <li>Central copper conductor with insulating layers</li>
                            <li>Used in cable TV, older Ethernet networks</li>
                            <li>Better shielding than twisted pair</li>
                        </ul>
                    </li>
                    <li><strong>Fiber Optic Cable:</strong>
                        <ul>
                            <li>Uses light pulses through glass/plastic fibers</li>
                            <li>Extremely high bandwidth (up to terabits per second)</li>
                            <li>Immune to electromagnetic interference</li>
                            <li>Single-mode: Long distances, laser light</li>
                            <li>Multimode: Shorter distances, LED light</li>
                        </ul>
                    </li>
                </ul>

                <h3>Unguided Media (Wireless)</h3>
                <p>Signals travel through air or space:</p>
                <ul>
                    <li><strong>Radio Waves:</strong>
                        <ul>
                            <li>AM/FM radio, TV broadcasting</li>
                            <li>Can travel long distances, penetrate walls</li>
                        </ul>
                    </li>
                    <li><strong>Microwaves:</strong>
                        <ul>
                            <li>High-frequency, directional</li>
                            <li>Used in satellite communication, cellular networks</li>
                            <li>Require line-of-sight</li>
                        </ul>
                    </li>
                    <li><strong>Infrared:</strong>
                        <ul>
                            <li>Short-range communication</li>
                            <li>Used in TV remotes, short-range data transfer</li>
                            <li>Cannot penetrate walls</li>
                        </ul>
                    </li>
                </ul>
<h3>Comparison</h3>
                <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background: #f1f5f9;">
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Media</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Speed</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Distance</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Cost</th>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Twisted Pair</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Up to 10 Gbps</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">100m</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Low</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Coaxial</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Up to 1 Gbps</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">500m</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Medium</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Fiber Optic</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Up to 100+ Gbps</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Km+</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">High</td>
                    </tr>
                </table>
            </div>
        `
    },
    networks: {
        title: "Network Topologies",
        content: `
            <div class="topic-detail">
                <h3>What is Network Topology?</h3>
                <p>Network topology refers to the physical or logical arrangement of devices and connections in a network. It defines how nodes are connected and how data flows between them.</p>

                <h3>Bus Topology</h3>
                <ul>
                    <li>All devices connected to a single central cable (backbone)</li>
                    <li><strong>Advantages:</strong> Easy to install, requires less cable</li>
                    <li><strong>Disadvantages:</strong> Single point of failure, difficult to troubleshoot</li>
                    <li><strong>Use case:</strong> Small networks, legacy systems</li>
                </ul>

                <h3>Star Topology</h3>
                <ul>
                    <li>All devices connected to a central hub or switch</li>
                    <li><strong>Advantages:</strong> Easy to manage, single cable failure doesn't affect others</li>
                    <li><strong>Disadvantages:</strong> Central point of failure, more cable required</li>
                    <li><strong>Use case:</strong> Modern Ethernet networks, home networks</li>
                </ul>

                <h3>Ring Topology</h3>
                <ul>
                    <li>Devices connected in a circular fashion, each connected to two neighbors</li>
                    <li>Data travels in one direction (unidirectional) or both (bidirectional)</li>
                    <li><strong>Advantages:</strong> Equal access for all devices, easy to install</li>
                    <li><strong>Disadvantages:</strong> Single failure can break the ring</li>
                    <li><strong>Use case:</strong> Token Ring networks (legacy), FDDI</li>
                </ul>
 <h3>Mesh Topology</h3>
                <ul>
                    <li>Every device connected to every other device</li>
                    <li><strong>Full Mesh:</strong> All nodes connected to all others (n(n-1)/2 links)</li>
                    <li><strong>Partial Mesh:</strong> Some nodes connected to multiple others</li>
                    <li><strong>Advantages:</strong> High redundancy, fault tolerance</li>
                    <li><strong>Disadvantages:</strong> Expensive, complex to manage</li>
                    <li><strong>Use case:</strong> Internet backbone, critical systems</li>
                </ul>

                <h3>Hybrid Topology</h3>
                <p>Combination of two or more topologies. Most real-world networks use hybrid approaches to balance cost, performance, and reliability.</p>

                <h3>Tree Topology</h3>
                <ul>
                    <li>Hierarchical structure with root node and connected subnets</li>
                    <li>Combination of bus and star topologies</li>
                    <li><strong>Use case:</strong> Corporate networks, university campuses</li>
                </ul>
            </div>
        `
    },
    protocols: {
        title: "Protocols & Standards",
        content: `
            <div class="topic-detail">
                <h3>What are Protocols?</h3>
                <p>Protocols are sets of rules and conventions that govern how devices communicate. They define the format, timing, sequencing, and error checking of data exchange.</p>

                <h3>The OSI Model (Open Systems Interconnection)</h3>
                <p>A conceptual framework with 7 layers:</p>
                <ul>
                    <li><strong>Layer 7 - Application:</strong> Interface for applications (HTTP, FTP, SMTP)</li>
                    <li><strong>Layer 6 - Presentation:</strong> Data translation, encryption, compression</li>
                    <li><strong>Layer 5 - Session:</strong> Manages sessions between applications</li>
                    <li><strong>Layer 4 - Transport:</strong> End-to-end communication (TCP, UDP)</li>
                    <li><strong>Layer 3 - Network:</strong> Routing and addressing (IP, ICMP)</li>
                    <li><strong>Layer 2 - Data Link:</strong> Node-to-node delivery (Ethernet, PPP)</li>
                    <li><strong>Layer 1 - Physical:</strong> Raw bit transmission (cables, signals)</li>
                </ul>

                <h3>TCP/IP Model</h3>
                <p>The practical implementation used on the internet:</p>
                <ul>
                    <li><strong>Application Layer:</strong> HTTP, FTP, DNS, SMTP</li>
                    <li><strong>Transport Layer:</strong> TCP, UDP</li>
                    <li><strong>Internet Layer:</strong> IP, ICMP, ARP</li>
                    <li><strong>Network Access:</strong> Ethernet, Wi-Fi, ARP</li>
                </ul>

                <h3>Key Protocols</h3>
                <ul>
                    <li><strong>HTTP/HTTPS:</strong> Web browsing (port 80/443)</li>
                    <li><strong>FTP:</strong> File transfer (port 21)</li>
                    <li><strong>SMTP/POP3/IMAP:</strong> Email (ports 25/110/143)</li>
                    <li><strong>DNS:</strong> Domain name resolution (port 53)</li>
                    <li><strong>DHCP:</strong> Automatic IP assignment (port 67/68)</li>
                    <li><strong>TCP:</strong> Reliable, connection-oriented</li>
                    <li><strong>UDP:</strong> Fast, connectionless</li>
                </ul>
<h3>Standards Organizations</h3>
                <ul>
                    <li><strong>IEEE:</strong> Defines Ethernet (802.3), Wi-Fi (802.11) standards</li>
                    <li><strong>IETF:</strong> Develops internet standards (RFCs)</li>
                    <li><strong>ITU-T:</strong> International telecommunications standards</li>
                    <li><strong>ISO:</strong> International standards organization</li>
                </ul>
            </div>
        `
    },
    error: {
        title: "Error Detection & Correction",
        content: `
            <div class="topic-detail">
                <h3>Why Error Detection?</h3>
                <p>During transmission, data can be corrupted due to noise, interference, or signal distortion. Error detection and correction mechanisms ensure data integrity.</p>

                <h3>Types of Errors</h3>
                <ul>
                    <li><strong>Single-bit error:</strong> Only one bit in the data unit is changed</li>
                    <li><strong>Burst error:</strong> Two or more bits in the data unit are changed</li>
                </ul>

                <h3>Error Detection Methods</h3>
                <ul>
                    <li><strong>Parity Check:</strong>
                        <ul>
                            <li>Even parity: Total 1s must be even</li>
                            <li>Odd parity: Total 1s must be odd</li>
                            <li>Simple but can only detect single-bit errors</li>
                        </ul>
                    </li>
                    <li><strong>Checksum:</strong>
                        <ul>
                            <li>Sum of data segments sent with data</li>
                            <li>Receiver recalculates and compares</li>
                            <li>Used in TCP/IP, UDP</li>
                        </ul>
                    </li>
                    <li><strong>Cyclic Redundancy Check (CRC):</strong>
                        <ul>
                            <li>Polynomial division generates remainder</li>
                            <li>Very effective at detecting burst errors</li>
                            <li>Widely used in Ethernet, storage devices</li>
                        </ul>
                    </li>
                </ul>

                <h3>Error Correction Methods</h3>
                <ul>
                    <li><strong>Forward Error Correction (FEC):</strong>
                        <ul>
                            <li>Receiver can correct errors without retransmission</li>
                            <li>Used when retransmission is costly or impossible</li>
                        </ul>
                    </li>
                    <li><strong>Hamming Code:</strong>
                        <ul>
                            <li>Can detect and correct single-bit errors</li>
                            <li>Adds redundant bits at calculated positions</li>
                            <li>Used in memory (RAM) error correction</li>
                        </ul>
                    </li>
                    <li><strong>Retransmission (ARQ):</strong>
                        <ul>
                            <li>Stop-and-Wait ARQ: Send one frame, wait for ACK</li>
                            <li>Go-Back-N ARQ: Send multiple frames, resend from error</li>
                            <li>Selective Repeat ARQ: Resend only corrupted frames</li>
                        </ul>
                    </li>
                </ul>
 <h3>Hamming Distance</h3>
                <p>The number of bit positions in which two code words differ. Minimum Hamming distance determines error detection/correction capability:</p>
                <ul>
                    <li>To detect d errors: Hamming distance ≥ d + 1</li>
                    <li>To correct d errors: Hamming distance ≥ 2d + 1</li>
                </ul>
            </div>
        `
    },
    switching: {
        title: "Switching Techniques",
        content: `
            <div class="topic-detail">
                <h3>What is Switching?</h3>
                <p>Switching is the method by which data is transferred from source to destination in a network. It determines how connections are established and maintained.</p>

                <h3>Circuit Switching</h3>
                <ul>
                    <li>Dedicated communication path established before transmission</li>
                    <li>Path remains reserved for the entire session</li>
                    <li><strong>Advantages:</strong> Guaranteed bandwidth, no delay once connected</li>
                    <li><strong>Disadvantages:</strong> Inefficient use of resources, setup time required</li>
                    <li><strong>Examples:</strong> Traditional telephone networks (PSTN)</li>
                </ul>

                <h3>Packet Switching</h3>
                <ul>
                    <li>Data broken into packets that travel independently</li>
                    <li>Packets may take different routes</li>
                    <li>Reassembled at destination</li>
                    <li><strong>Advantages:</strong> Efficient bandwidth use, fault tolerance</li>
                    <li><strong>Disadvantages:</strong> Variable delay, packet ordering issues</li>
                    <li><strong>Examples:</strong> Internet, modern data networks</li>
                </ul>

                <h3>Message Switching</h3>
                <ul>
                    <li>Entire message stored at each intermediate node</li>
                    <li>Store-and-forward approach</li>
                    <li><strong>Advantages:</strong> No dedicated path needed</li>
                    <li><strong>Disadvantages:</strong> High delay, large storage needed</li>
                    <li><strong>Examples:</strong> Early email systems (rarely used today)</li>
                </ul>

                <h3>Virtual Circuit Switching</h3>
                <ul>
                    <li>Combines features of circuit and packet switching</li>
                    <li>Logical connection established (virtual circuit)</li>
                    <li>Packets follow same path but share bandwidth</li>
                    <li><strong>Examples:</strong> ATM, Frame Relay, MPLS</li>
                </ul>
 <h3>Comparison</h3>
                <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background: #f1f5f9;">
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Feature</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Circuit</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Packet</th>
                        <th style="padding: 12px; border: 1px solid #e2e8f0; text-align: left;">Message</th>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Path</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Dedicated</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Not dedicated</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Not dedicated</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Delay</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Low (after setup)</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Variable</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">High</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Efficiency</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Low</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">High</td>
                        <td style="padding: 12px; border: 1px solid #e2e8f0;">Medium</td>
                    </tr>
                </table>
            </div>
        `
    }
};

// ============================================
// RESOURCE MATERIALS - Content opened from Reference Materials
// ============================================
const resourceData = {
    textbook: {
        title: "Course Textbook PDF",
        content: `
            <div class="topic-detail">
                <h3>Data Communication Course Textbook Summary</h3>
                <p>This material gives a textbook-style overview of the main ideas studied in Data Communication.</p>

                <h3>Chapter 1: Introduction to Data Communication</h3>
                <ul>
                    <li><strong>Data communication</strong> is the transfer of data between devices through a wired or wireless medium.</li>
                    <li>The five main components are sender, receiver, message, transmission medium, and protocol.</li>
                    <li>Communication can be simplex, half-duplex, or full-duplex.</li>
                </ul>

                <h3>Chapter 2: Signals and Transmission</h3>
                <ul>
                    <li><strong>Analog signals</strong> are continuous, while <strong>digital signals</strong> use discrete values such as 0 and 1.</li>
                    <li>Important signal terms include amplitude, frequency, phase, bandwidth, attenuation, and noise.</li>
                    <li>Encoding and modulation help data travel correctly across communication media.</li>
                </ul>

                <h3>Chapter 3: Transmission Media</h3>
                <ul>
                    <li>Guided media include twisted pair cable, coaxial cable, and fiber optic cable.</li>
                    <li>Unguided media include radio waves, microwaves, infrared, Wi-Fi, Bluetooth, and satellite links.</li>
                    <li>Fiber optic cable is fast, reliable, and suitable for long-distance communication.</li>
                </ul>
 <h3>Chapter 4: Networks and Protocols</h3>
                <ul>
                    <li>Networks allow computers and devices to share information and resources.</li>
                    <li>Protocols are rules that control how data is formatted, sent, received, and checked.</li>
                    <li>The OSI model explains networking in seven layers, while TCP/IP is widely used on the internet.</li>
                </ul>
            </div>
        `
    },
    "lecture-notes": {
        title: "Lecture Notes Week 1-6",
        content: `
            <div class="topic-detail">
                <h3>Week 1: Meaning of Data Communication</h3>
                <p>We learned that data communication is the exchange of data between two or more devices. Communication needs a sender, receiver, message, medium, and protocol.</p>

                <h3>Week 2: Telegraph and Early Communication</h3>
                <p>The telegraph was one of the earliest electrical communication systems. It used electrical pulses and Morse code to send messages over long distances.</p>

                <h3>Week 3: Analog and Digital Signals</h3>
                <p>Analog signals are continuous waves, while digital signals represent data as 0s and 1s. Digital communication is common in modern computers and networks.</p>

                <h3>Week 4: Transmission Media</h3>
                <p>Transmission media are the channels used to carry data. Wired media include twisted pair, coaxial, and fiber optic cables. Wireless media include radio waves and microwaves.</p>

                <h3>Week 5: Network Topologies</h3>
                <p>Network topology is the arrangement of devices in a network. Common topologies include bus, star, ring, mesh, tree, and hybrid topology.</p>

                <h3>Week 6: Protocols and Standards</h3>
                <p>Protocols are rules for communication. Standards make it possible for devices from different manufacturers to communicate successfully.</p>
            </div>
        `
    },
    "practice-questions": {
        title: "Practice Questions",
        content: `
            <div class="topic-detail">
                <h3>Short Answer Questions</h3>
                <ul>
                    <li>Define data communication.</li>
                    <li>List five components of a data communication system.</li>
                    <li>Differentiate between analog and digital signals.</li>
                    <li>State two examples of guided transmission media.</li>
                    <li>What is the function of a protocol?</li>
                    <li>Explain simplex, half-duplex, and full-duplex communication.</li>
                </ul>

                <h3>Essay Questions</h3>
                <ul>
                    <li>Explain how the telegraph works and why it is important in the history of communication.</li>
                    <li>Describe the OSI model and state the function of each layer.</li>
                    <li>Compare twisted pair cable, coaxial cable, and fiber optic cable.</li>
                    <li>Discuss four common network topologies with one advantage and one disadvantage each.</li>
                </ul>

                <h3>Revision Answers Guide</h3>
                <p>When answering, use clear definitions, give examples, and explain terms in your own words. Diagrams can help when discussing topologies, the communication model, and the telegraph.</p>
            </div>
        `
    },
    "past-exams": {
        title: "Past Exam Papers",
        content: `
            <div class="topic-detail">
                <h3>Sample Past Exam Paper</h3>
                <p><strong>Instructions:</strong> Answer all questions in Section A and any two questions in Section B.</p>
 <h3>Section A: Objective / Short Questions</h3>
                <ul>
                    <li>What is bandwidth?</li>
                    <li>State one advantage of digital signals over analog signals.</li>
                    <li>What is attenuation?</li>
                    <li>Name two wireless transmission media.</li>
                    <li>What is the main purpose of error detection?</li>
                </ul>

                <h3>Section B: Theory Questions</h3>
                <ul>
                    <li>With a diagram, explain the basic data communication model.</li>
                    <li>Explain the difference between guided and unguided transmission media.</li>
                    <li>Describe circuit switching, packet switching, and message switching.</li>
                    <li>Explain error detection using parity check, checksum, and CRC.</li>
                </ul>

                <h3>Exam Preparation Tips</h3>
                <ul>
                    <li>Revise definitions and examples first.</li>
                    <li>Practice drawing network topologies and communication diagrams.</li>
                    <li>Use headings and short paragraphs in theory answers.</li>
                    <li>Always relate your answer to real communication systems such as phones, Wi-Fi, and the internet.</li>
                </ul>
            </div>
        `
    }
};

// ============================================
// NAVIGATION
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
    }
});

// ============================================
// TOPIC MODAL
// ============================================
const topicModal = document.getElementById('topicModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const topicCards = document.querySelectorAll('.topic-card');
const resourceLinks = document.querySelectorAll('[data-resource]');

topicCards.forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.getAttribute('data-topic');
        const data = topicData[topic];

        if (data && topicModal && modalTitle && modalBody) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            topicModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

resourceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const resource = link.getAttribute('data-resource');
        const data = resourceData[resource];

        if (data && topicModal && modalTitle && modalBody) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            topicModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    if (!topicModal) return;
    topicModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
 // Close modal on outside click
if (topicModal) {
    topicModal.addEventListener('click', (e) => {
        if (e.target === topicModal) {
            closeModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeFileModal();
    }
});

// ============================================
// FILE UPLOAD
// ============================================
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const uploadList = document.getElementById('uploadList');

if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', (e) => {
        if (e.target !== fileInput) {
            fileInput.click();
        }
    });

    fileInput.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

if (uploadArea) {
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--primary)';
        uploadArea.style.background = 'rgba(37, 99, 235, 0.05)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'var(--border)';
        uploadArea.style.background = 'transparent';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--border)';
        uploadArea.style.background = 'transparent';

        const files = e.dataTransfer.files;
        handleFiles(files);
    });
}

if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    if (!uploadList) return;
    Array.from(files).forEach(file => {
        const item = document.createElement('div');
        item.className = 'upload-item';
        item.innerHTML = `
            <i class="fas fa-check-circle" style="color: #10b981;"></i>
            <span>${file.name}</span>
            <span style="color: var(--text-light); font-size: 0.85rem;">${(file.size / 1024).toFixed(1)} KB</span>
        `;
        uploadList.appendChild(item);
    });
}

// ============================================
// FILE READER MODAL
// ============================================
const fileModal = document.getElementById('fileModal');
const fileModalTitle = document.getElementById('fileModalTitle');
const previewFileName = document.getElementById('previewFileName');
const openFileBtn = document.getElementById('openFileBtn');
const pdfViewer = document.getElementById('pdfViewer');

function readFile(title, filePath = 'Assignment.pdf') {
    if (!fileModal) return;
    if (fileModalTitle) {
        fileModalTitle.textContent = 'View ' + title;
    }
    if (previewFileName) {
        previewFileName.textContent = title;
    }
    if (pdfViewer) {
        pdfViewer.src = filePath;
        pdfViewer.title = title;
    }
    if (openFileBtn) {
        openFileBtn.href = filePath;
    }
    fileModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeFileModal() {
    if (!fileModal) return;
    fileModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (fileModal) {
    fileModal.addEventListener('click', (e) => {
        if (e.target === fileModal) {
            closeFileModal();
        }
    });
}

// ============================================
// YOUTUBE VIDEO
// ============================================
const videoIds = [
    'dQw4w9WgXcQ',  // Placeholder - replace with actual data communication video IDs
    'x3c1ih2NJEg',  // Example networking video
    'qiQR5rJykeI',  // Example data communication
];
let currentVideoIndex = 0;

function changeVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    const iframe = document.getElementById('youtubeVideo');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoIds[currentVideoIndex]}`;
    }
}
 // ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observe all cards
document.querySelectorAll('.topic-card, .resource-card, .assignment-card, .info-card, .component-item').forEach(el => {
    if ('IntersectionObserver' in window) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.topic-card, .resource-card, .assignment-card, .info-card, .component-item').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href  href === '#') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 70; // Navbar height
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// STUDENT INFO UPDATE
// ============================================
// You can update your name and ID here
const studentInfo = {
    name: 'Your Name',
    id: 'Your Student ID'
};

// Update the DOM with student info
const studentNameEl = document.getElementById('studentName');
const studentIDEl = document.getElementById('studentID');

if (studentNameEl) {
    studentNameEl.textContent = studentInfo.name;
}

if (studentIDEl) {
    studentIDEl.textContent = studentInfo.id;
}

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c Data Communication Course Website ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Built with HTML, CSS & JavaScript ', 'color: #2563eb; font-size: 14px;');
console.log('%c Student: ' + studentInfo.name + ' | ID: ' + studentInfo.id, 'color: #64748b; font-size: 12px;');
