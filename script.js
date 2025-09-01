// Event data extracted from Meetup with actual images
const events = [
       {
        id: 0,
        title: "BSOK Bootcamp: Integrate Deep Learning models into a Microservices App",
        date: "Thursday, July 15, 2021",
        attendees: 5,
        image: "images/event0.webp",
        description: `Deploy and consume ready-to-use deep learning microservices on OpenShift. Data contains a wealth of information that can be used to solve certain types of problems. Traditional data analysis approaches, like a person manually inspecting the data or a specialized computer program that automates the human analysis, quickly reach their limits due to the amount of data to be analyzed or the complexity of the problem.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/279271102/?eventOrigin=group_events_list"
    },
    {
        id: 1,
        title: "Introduction to Containers with Node.js and Kubernetes on Red Hat OpenShift 4.x",
        date: "Thursday, June 10, 2021",
        attendees: 10,
        image: "images/event1.webp",
        description: `Join our Build Smart on Kubernetes World Tour series. Explore the Red Hat OpenShift development environment and learn how to use many of the best parts of OpenShift. You use OpenShift to deploy a sample Node.js application on IBM Cloud. If you are new to OpenShift and Kubernetes, this webinar can help you understand core skills.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/278446742/?eventOrigin=your_events"
    },
    {
        id: 2,
        title: "Get started with Node-Red on Red Hat OpenShift",
        date: "Thursday, June 3, 2021",
        attendees: 7,
        image: "images/event2.webp",
        description: `In this session, we will introduce to you the Red Hat OpenShift Container Platform. What is it exactly? What are the benefits of using it, and how can it add to an organization? We will go through some of the platform's specifications and capabilities, features, and benefits that mostly encourage developers to learn all about it and organizations to adapt to it.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/278446631/?eventOrigin=your_events"
    },
     {
        id: 21,
        title: "Build scalable solutions with Docker and IBM Cloud Container Registry",
        date: "Thursday, May 27, 2021",
        attendees: 2,
        image: "images/event01.webp",
        description: `This event focuses on building scalable solutions using Docker and IBM Cloud Container Registry, covering Docker architecture, its benefits, and a hands-on lab for containerizing Node.js applications.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/278108491/?eventOrigin=group_events_list"
    },
    {
        id: 3,
        title: "News Mining Using Watson Discovery and Red Hat OpenShift",
        date: "Thursday, May 20, 2021",
        attendees: 4,
        image: "images/event3.webp",
        description: `In the hands-on session, we will deploy Watson Discovery's news mining application on OpenShift on IBM Cloud.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/278216583/?eventOrigin=your_events"
    },
    {
        id: 4,
        title: "Explore Industries AI Use Cases",
        date: "Wednesday, April 7, 2021",
        attendees: 12,
        image: "images/event4.webp",
        description: `In attending this workshop, you learn and explore different use cases in AI applications. You will also learn about fundamental concepts; such as, Containers and Kubernetes projects. You will be able to learn how to deploy and consume ready-to-use deep learning microservices on Red Hat® OpenShift® to follow along with the speaker on the approach to deploy an object Detector microservice using the OpenShift web console and how to deploy an Image Caption Generator microservice using the OpenShift command-line interface (CLI).`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/277278416/?eventOrigin=your_events"
    },
    {
        id: 5,
        title: "A quick lab to explore the OpenShift development environment",
        date: "Thursday, March 11, 2021",
        attendees: 10,
        image: "images/event5.webp",
        description: `This session is for all the developers and technology enthusiasts out there who are interested in learning more about the Red Hat OpenShift World Tour series and learning some resources that would help them continue their learning journey afterward.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/276560041/?eventOrigin=your_events"
    },
    {
        id: 6,
        title: "[Arabic]: Automate model building with AutoAI Cloud Pak for Data",
        date: "Tuesday, February 23, 2021",
        attendees: 6,
        image: "images/event6.webp",
        description: `In attending this webinar, you will be going over the fundamentals and theory of AutoAI, which will pave the road to the next steps in the session, where the speaker will dig deeper into the benefits of the services that are offered with AutoAI, which is a service on IBM Watson Studio. The use case along the tutorial presented in this session will clarify the objectives of using this service, as you will be able to follow along and see how this service could be applied easily, with few steps using IBM Cloud.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/276361974/?eventOrigin=your_events"
    },
    {
        id: 7,
        title: "(Arabic) Part.1: Deep dive into Artificial Intelligence",
        date: "Monday, January 25, 2021",
        attendees: 11,
        image: "images/event7.webp",
        description: `In attending this workshop, you will learn and explore different use cases in AI applications. You will also learn about fundamental concepts; such as, Containers and Kubernetes projects. You will be able to learn how to deploy and consume ready-to-use deep learning microservices on Red Hat® OpenShift® to follow along with the speaker on the approach to deploy an object Detector microservice using the OpenShift web console and how to deploy an Image Caption Generator microservice using the OpenShift command-line interface (CLI).`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/275929159/?eventOrigin=your_events"
    },
    {
        id: 8,
        title: "Automate Model building with AutoAI",
        date: "Friday, October 30, 2020",
        attendees: 14,
        image: "images/event8.webp",
        description: `This webinar covers the fundamentals and benefits of AutoAI services on IBM Watson Studio, demonstrating how to automate model building for regression and classification problems without code.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/273746025/?eventOrigin=your_events"
    },
    {
        id: 9,
        title: "Deploy end to end deep learning microservices app on Red Hat OpenShift",
        date: "Wednesday, September 30, 2020",
        attendees: 13,
        image: "images/event9.webp",
        description: `This webinar teaches how to deploy and consume ready-to-use deep learning microservices on Red Hat OpenShift on IBM Cloud, including deploying object detector and image caption generator microservices.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/272933783/?eventOrigin=your_events"
    },
    {
        id: 10,
        title: "Automate model building with AutoAI Cloud Pak for Data",
        date: "Friday, August 28, 2020",
        attendees: 9,
        image: "images/event10.webp",
        description: `This webinar covers the fundamentals and benefits of AutoAI services on IBM Watson Studio, demonstrating how to automate model building for regression and classification problems without code.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/272632119/?eventOrigin=your_events"
    },
    {
        id: 11,
        title: "(English): Build a Docker container and Deploy it onto Red Hat OpenShift",
        date: "Sunday, July 19, 2020",
        attendees: 18,
        image: "images/event11.webp",
        description: `This webinar teaches how to write Dockerfiles, execute them in containers, and deploy them on OpenShift.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/271452744/?eventOrigin=your_events"
    },
    {
        id: 14,
        title: "(English): COVID-19 Research assistant: Watson Discovery in Healthcare",
        date: "Thursday, June 18, 2020",
        attendees: 22,
        image: "images/event14.webp",
        description: `This webinar teaches how Watson Discovery can be used to combat world-wide issues like COVID-19, demonstrating how to utilize a search engine to navigate articles and retrieve answers from trustable sources.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270912437/?eventOrigin=your_events"
    },
    {
        id: 15,
        title: "(English): Data Science in Transportation Industry",
        date: "Wednesday, June 10, 2020",
        attendees: 29,
        image: "images/event15.webp",
        description: `This webinar explores data science applications in the transportation industry, covering business understanding, AI vision, machine learning, deep learning, and object detection.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270912339/?eventOrigin=your_events"
    },
    {
        id: 16,
        title: "(English): Create an Object Detection app using IBM Cloud",
        date: "Saturday, May 30, 2020",
        attendees: 8,
        image: "images/event16.webp",
        description: `This webinar provides a step-by-step tutorial on building an object detection app using IBM Cloud, enhancing knowledge in cloud technologies and integrating skills with IBM services.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/270315504/?eventOrigin=your_events"
    },
    {
        id: 17,
        title: "Call For Code (English): Build an app using the Disaster Resiliency Starter Kit",
        date: "Thursday, May 14, 2020",
        attendees: 8,
        image: "images/event17.webp",
        description: `This webinar teaches how to build an app using the Disaster Resiliency Starter Kit, which includes a React Native frontend and Node.js backend integrated with Watson Assistant and Here Location Services.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/270312925/?eventOrigin=your_events"
    },
    {
        id: 19,
        title: "Call For Code - Webinar (Arabic): Build a Video Transcriber Service",
        date: "Friday, April 17, 2020",
        attendees: 8,
        image: "images/event19.webp",
        description: `This webinar introduces Call for Code and demonstrates building an Arabic video transcriber service.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270077707/?eventOrigin=your_events"
    },
    {
        id: 20,
        title: "Call For Code - Webinar (Arabic): Build a Video Transcriber Service",
        date: "Tuesday, April 14, 2020",
        attendees: 6,
        image: "images/event20.webp",
        description: `This webinar focuses on building a video transcriber service in Arabic, as part of the Call for Code initiative addressing COVID-19 and Climate Change.`,
        url: "https://www.meetup.com/ibm-cloud-mea/events/269972773/?eventOrigin=your_events"
    },
    {
        id: 25,
        title: "IBM Power AI Vision workshop",
        date: "Sunday, February 2, 2020",
        attendees: 44,
        image: "images/event25.webp",
        description: `This workshop teaches how to build iOS, Android, or Web React apps for object detection using IBM Power AI Vision, IBM Cloud Object Storage, and IBM Machine Learning.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/268261069/?eventOrigin=your_events"
    },
];

// DOM elements
const eventsGrid = document.getElementById('eventsGrid');
const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalSource = document.getElementById('modalSource');
const closeBtn = document.querySelector('.close');

// Function to create event card HTML
function createEventCard(event) {
    return `
        <div class="event-card" onclick="openModal(${event.id})">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'display: flex; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%); color: white; font-weight: 500;\\'>Technical Presentation</div>'">
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <span class="event-date">${event.date}</span>
                    <span class="event-attendees">${event.attendees} attendees</span>
                </div>
            </div>
        </div>
    `;
}

// Function to populate events grid
function populateEvents() {
    eventsGrid.innerHTML = events.map(event => createEventCard(event)).join('');
}

// Function to open modal
function openModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        modalTitle.textContent = event.title;
        modalBody.innerHTML = `
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Attendees:</strong> ${event.attendees}</p>
            <div style="margin-top: 20px;">${event.description}</div>
        `;
        modalSource.href = event.url;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateEvents();
});

// Make openModal function global so it can be called from onclick
window.openModal = openModal;