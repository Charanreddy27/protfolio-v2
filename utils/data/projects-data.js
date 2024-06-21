import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Meet Here - Real-Time Meetings, Seamless Connections',
        description: "Engineered adaptive video streaming technology that adjusts video quality in real-time based on users' bandwidth, ensuring smooth meetings even with varying internet speeds.Provided advanced host controls, including participant muting, camera control, and attendance tracking, for better management of meetings.",
        tools: ['NextJS', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Clerk', 'StreamHub'],
        // role: 'Backend Developer',
        code: 'https://github.com/Charanreddy27/zoom-clone',
        demo: 'meethere.vercel.app',
        image: crefin,
    },
    {
        id: 2,
        name: 'Realtime Collaborative Code Editor',
        description: 'Developed a real-time collaborative code editor enabling multiple users to write and edit code simultaneously.  Leveraged WebSockets for low-latency bi-directional communication to ensure immediate synchronization of code changes across all connected clients.',
        tools: [ 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'SocketIO', 'Tailwind CSS'],
        // role: 'Full Stack Developer',
        code: 'https://github.com/Charanreddy27/RealTime-Collabarative-Code-Editor',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Social Media Application',
        description: ' Developed an innovative social media platform using the MERN stack, integrating OpenAIs cutting-edge image generation technology to provide users with a unique content creation experience.',
        tools: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'SocketIO', 'Tailwind CSS' ,' Open AI', 'Material UI'],
        code: '',
        // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'DSA Tracker',
        description: "Developed a comprehensive web application designed to help users monitor their progress on various data structures and algorithms problems typically found on competitive programming platforms.",
        tools: [ 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Tailwind CSS' , 'Material UI'],
        code: 'https://github.com/Charanreddy27/DSATracker',
        demo: '',
        image: ayla,
        // role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },