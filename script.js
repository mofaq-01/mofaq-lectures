// Event data extracted from Meetup with actual images
const events = [
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
        title: "",
        date: "",
        attendees: 6,
        image: "images/event9.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/272933783/?eventOrigin=your_events"
    },
    {
        id: 10,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event10.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/272632119/?eventOrigin=your_events"
    },
    {
        id: 11,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event11.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/271452744/?eventOrigin=your_events"
    },
    {
        id: 12,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event12.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270912467/?eventOrigin=your_events"
    },
    {
        id: 13,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event13.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/271030213/?eventOrigin=your_events"
    },
    {
        id: 14,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event14.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270912437/?eventOrigin=your_events"
    },
    {
        id: 15,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event15.webp",
        description: ``,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270912339/?eventOrigin=your_events"
    },
    {
        id: 16,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event16.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/270315504/?eventOrigin=your_events"
    },
    {
        id: 17,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event17.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/270312925/?eventOrigin=your_events"
    },
    {
        id: 18,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event18.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270263642/?eventOrigin=your_events"
    },
    {
        id: 19,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event19.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/270077707/?eventOrigin=your_events"
    },
    {
        id: 20,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event20.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-cloud-mea/events/269972773/?eventOrigin=your_events"
    },
    {
        id: 21,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event21.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/269959741/?eventOrigin=your_events"
    },
    {
        id: 22,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event22.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/269953231/?eventOrigin=your_events"
    },
    {
        id: 23,
        title: "Enabling Trust and Transparency in AI",
        date: "Monday, February 17, 2020",
        attendees: 32,
        image: "images/event23.webp",
        description: `This event addresses the challenge of trust and transparency in AI, showcasing how IBM AI OpenScale provides visibility, control, and improvement capabilities for AI deployments.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/268137281/?eventOrigin=your_events"
    },
    {
        id: 24,
        title: "Webinar: Fraud Prediction using AutoAI",
        date: "Wednesday, February 12, 2020",
        attendees: 46,
        image: "images/event24.webp",
        description: `This webinar focuses on using IBM's AutoAI to automate the building of predictive models, specifically for fraud detection, to save time and effort in various scenarios.`,
        url: "https://www.meetup.com/ibmdeveloper-dubai/events/268209729/?eventOrigin=your_events"
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
    {
        id: 26,
        title: "",
        date: "",
        attendees: 6,
        image: "images/event26.webp",
        description: `sumarized in one sentence`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/267394358/?eventOrigin=your_events"
    },  
    {
        id: 27,
        title: "(استفهامات حول الذكاء الاصطناعي و علم البيانات - (نقاش مفتوح",
        date: "Sunday, December 15, 2019",
        attendees: 174,
        image: "images/event27.webp",
        description: `An open discussion on artificial intelligence and data science, featuring Saudi experts, addressing questions about data privacy and the nature of big data.`,
        url: "https://www.meetup.com/ibm-developer-ksa/events/266974086/?eventOrigin=your_events"
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

