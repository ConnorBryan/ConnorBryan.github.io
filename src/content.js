export default {
    personal: {
        fullName: 'Connor Bryan',
        jobTitle: 'Software Engineer',
        overview: {
            avatar: 'images/avatar.jpg',
            text: 'A future-minded, goal-oriented technology enthusiast who goes home after a day of coding only to jump back on and work on personal projects. A strong attention to detail and a passion for success through teamwork combine with a legendary work ethic to produce a quick learner well suited for the challenges of modern software development.'
        }
    },
    content: [
        {
            name: 'skills',
            icon: 'fa fa-graduation-cap',
            tagline: 'What I bring to the table',
            items: [
                {
                    image: 'images/stack.svg',
                    heading: 'Full Stack Application Development',
                    text: [
                        'From start to finish, I\'ve got what it takes to deliver a high-speed, reliable, fully customizable solution for a wide variety of purposes. Whether you need a high-impact isomorphic React application, or a more standard CRUD-shoveling RESTFUL API with a normal index.html, I\'m the man for the job.'
                    ]
                },
                {
                    image: 'images/react.svg',
                    heading: 'Component-based Design with React',
                    text: [
                        'The Model-View-ViewModel pattern has grown from an insatiable curiosity to an accepted standard in this golden era of JavaScript, and React is the king of the hill. The cream of the crop. Given a particular state, the tree of components will initialize in a particular configuration, and then instantly react to any change in that state. For any given input, there is exactly one output.',
                        'Developed by Facebook and refined by the open source community, React has become the defacto standard for MVVM rendering in ES2016+ JavaScript. Together with Jest, it provides a solution that requires less maintenance than traditional Object-Oriented Patterns.'
                    ]
                },
                {
                    image: 'images/redux.svg',
                    heading: 'Application State Management with Redux',
                    text: [
                        'React\'s baked-in state management system can often get the job done, but some applications are too large to accurately handle every asynchronous action they need without misfiring. Dan Abramov\'s Redux library provides a revolutionary way of storing state in a functional paradigm. The end result is a robust solution that provides useful debugging capabilities and dependable performance.'
                    ]
                },
                {
                    image: 'images/microservice.svg',
                    heading: 'Enterprise-level Microservice Architecture',
                    text: [
                        'Instead of building a single, giant, monolithic application with millions of lines of code, a better approach is often a collection of microservices that each perform a specific task. These smaller projects are more maintainable and allow for greater flexibility in the development process.'
                    ]
                },
                {
                    image: 'images/appengine.svg',
                    heading: 'Scalability and Performance Using Amazon Web Services and Google App Engine',
                    text: [
                        'Gone are the days of in-house data centers with technicians you know by name. Software-as-a-Service is the name of the game, and industry leaders Amazon Web Services and Google App Engine are two of the most respected names in technology. These all-in-one platforms allow for insta-scalability and a promising platform on which a future can be constructed.'
                    ]
                },
                {
                    image: 'images/tdd.svg',
                    heading: 'High-quality Delivery through Test Driven Design',
                    text: [
                        'A vital part of the software engineering process is quality assurance. Generally, a team will have a collection of these professionals on staff to comb through new work for defects, so they may be resolved prior to being released to production.',
                        'To aid their process, a paradigm known as test-driven development (or TDD) can be utilized in order to craft a framework from which unit and regression tests are written prior to the actual code. By developing "to the test", developers are less likely to make trivial errors.'
                    ]
                },
                {
                    image: 'images/agile.png',
                    heading: 'Progressive Iteration with the Agile Methodology',
                    text: [
                        'This is the universe with unicorn startups in it, and if  their extravagance has taught us anything, it\'s that constantly adapting to the market is essential for success. By taking only as much time as necessary to develop a minimum viable product (or MVP), and then getting it in front of people as fast as possible, a team can quickly pivot if necessary and avoid overcomitting to a flawed idea.',
                        'Customers love progressive iteration, too: they can count on a predictable release schedule with predictable outage times.'
                    ]
                },
                {
                    image: 'images/git.png',
                    heading: 'Code Integrity through Version Control and Reviews',
                    text: [
                        'It\'s the closest thing to time travel we\'ve got. Linus Torvald\'s git revolutionized the world of source control, and learning his tool has spared me from much heartache over the course of my career.',
                        'Next to data, a company\'s source code is their life blood. Services like GitHub and BitBucket allow us to keep it in a neutral, safe location, but it\'s important to always have backups in more than a single place.'
                    ]
                }
            ]
        },
        {
            name: 'resume',
            icon: 'fa fa-file-text-o',
            tagline: 'What I\'ve done for others',
            items: [
                {
                    image: 'images/dealersocket.png',
                    heading: 'Software Engineer at DealerSocket',
                    text: [
                        'Develop progressive, scalable, responsive single page applications that consume JSON data and output React components reacting to state changes issued through Redux',
                        'Collaborate in a tight-knit Agile Scrum environment by utilizing Atlassian JIRA to create user stories and follow documentation standards in Atlassian Confluence, while taking part in ceremonies to strengthen inter-team bonds',
                        'Utilize Grunt and Angular.js to perform maintenance and unit testing on a key application module',
                        'Update and maintain legacy code and transform it into modern code via consistent refactoring efforts',
                        'Build solutions with a strong, test-driven approach for maximum automation capability using Mocha/Chai/Sinon and Jest for React components',
                        'Contribute to the various artifact projects spread across the company in a code-unifying effort across all teams, particularly through use of versioning control with git and BitBucket'
                    ]
                },
                {
                    image: 'images/flowtrac.jpg',
                    heading: 'Mobile Software Engineer at FlowTrac',
                    text: [
                        'Created cross-platform mobile applications for iOS and Android by utilizing Appcelerator Titanium SDK',
                        'Integrated customer warehouse data into the mobile UI and devised a scheme to keep an offline cache to improve performance for areas which may be out of service',
                        'Performed automated testing complete with branching statements for both the iOS and Android paths'
                    ]
                },
            ]
        }
    ],
    contact: {
        phone: '(214) 677-6265',
        email: 'me@connorbryan.com',
        location: 'In the Dallas/Fort Worth metroplex',
        github: 'https://www.github.com/ConnorBryan',
        linkedin: 'https://www.linkedin.com/in/connor-bryan-40b992111/'
    },
    stack: [
        {
            image: 'images/react.svg',
            name: 'React',
            link: 'https://facebook.github.io/react/'
        },
        {
            image: 'images/semantic-ui.png',
            name: 'Semantic-UI',
            link: 'https://react.semantic-ui.com/'
        },
        {
            image: 'images/jetbrains.svg',
            name: 'WebStorm',
            link: 'https://www.jetbrains.com/webstorm/'
        }
    ],
    copyright: {
        holder: 'Connor Bryan',
        year: 2017,
        allRightsReserved: true
    }
};