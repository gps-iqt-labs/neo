import {default as Component} from '../../../../src/component/Base.mjs';

/**
 * @class Website.view.home.DeveloperIntroComponent
 * @extends Neo.component.Base
 */
class DeveloperIntroComponent extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.home.DeveloperIntroComponent'
         * @protected
         */
        className: 'Website.view.home.DeveloperIntroComponent',
        /**
         * @member {String[]} cls=['website-intro-component']
         * @protected
         */
        cls: ['website-intro-component'],
        /**
         * @member {Object[]} domListeners
         * @protected
         */
        domListeners: [{
            click   : 'onNavLinkClick',
            delegate: '.nav-link'
        }],
        /**
         * @member {Object} vdom
         */
        vdom: {innerHTML: [
            '<h1>Content</h1>',
            '<ol>',
                '<li><a class="nav-link" data-target="exec-nav-1">Introduction</a></li>',
                '<li>',
                    '<a class="nav-link" data-target="exec-nav-2">Current pain points inside the UI sector</a>',
                    '<ul>',
                        '<li>2.1 <a class="nav-link" data-target="dev-nav-2.1">Performance</a></li>',
                        '<li>2.2 <a class="nav-link" data-target="dev-nav-2.2">Multi Browser Window Apps</a></li>',
                        '<li>2.3 <a class="nav-link" data-target="dev-nav-2.3">Developing UIs inside nodejs</a></li>',
                        '<li>2.4 <a class="nav-link" data-target="dev-nav-2.4">Scalable Architectures</a></li>',
                        '<li>2.5 <a class="nav-link" data-target="dev-nav-2.5">Memory Leaks</a></li>',
                        '<li>2.6 <a class="nav-link" data-target="dev-nav-2.6">Templates</a></li>',
                        '<li>2.7 <a class="nav-link" data-target="dev-nav-2.7">Consistent Code</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="nav-link" data-target="dev-nav-3">How to get up to speed?</a></li>',
                '<li><a class="nav-link" data-target="dev-nav-4">Join neo.mjs as a Contributor</a></li>',
                '<li><a class="nav-link" data-target="dev-nav-5">Incentives for Contributors</a></li>',
            '<ol>',
            '<h1 class="nav-target" id="dev-nav-1">1. Introduction</h1>',
            '<p>',
                'neo.mjs is the next generation UI framework for creating desktop & mobile Web Apps. ',
                'It has a very strong focus on performance and creating scalable & modular architectures. ',
                'A clean & consistent API, as well as the ability to run without any build processes, ',
                'will increase the productivity of your team, while creating better solutions at the same time.',
            '</p>',
            '<h1 class="nav-target" id="dev-nav-2">2. Current pain points inside the UI sector</h1>',
            '<ol>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.1">Performance</b>',
                    '<p>',
                        '<b>Problem:</b> While current libraries / frameworks like Angular, React or Vue provide a reasonable performance for ',
                        'small or mostly static Apps, they lack when it comes to big Apps or complex Components. ',
                        'The problem is, that most Apps today run within a single thread (CPU), while each computer or mobile ',
                        'device has several CPUs available. Some Apps move expensive tasks into separate threads, but this ',
                        'is by far not enough.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, most parts of the framework as well as the Apps which you create ',
                        'with it, run inside a separate thread. This architecture leaves the main thread mostly idle, so ',
                        'it can fully concentrate on its purpose: to only manipulate the real DOM (HTML). Expensive tasks ',
                        'simply can not interfere with your animations or even freeze your UI.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.2">Multi Browser Window Apps</b>',
                    '<p>',
                        '<b>Problem:</b> Expanding Single Page Apps into multiple Browser Windows is simply impossible ',
                        'with any other library or framework out there.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can do it today. With the SharedWorkers setup, you can not ',
                        'only directly communicate between Windows, but you can move entire Component trees around, ',
                        're-using the same JS instances and no need to care about DOM events. This architecture will rock ',
                        'on mobile devices as well, as soon as the Webkit team catches up. Imagine a Native Shell using ',
                        'multiple WebViews. Take a look at:',
                    '</p>',
                    '<p>',
                        '<a target="_blank" href="https://medium.com/swlh/expanding-single-page-apps-into-multiple-browser-windows-e6d9bd155d59?source=friends_link&sk=bbfe1dada95c5674669e463f93360822">Expanding Single Page Apps into multiple Browser Windows</a>',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.3">Developing UIs inside nodejs</b>',
                    '<p>',
                        '<b>Problem:</b> nodejs evolved faster than JS inside Browsers, but did not stick to W3C standards. ',
                        'Libraries / frameworks like Angular, React & Vue picked this up and moved the entire UI development ',
                        'into nodejs. This allows developers to use ES6+ features like classes & JS modules, but at an extremely ',
                        'high cost: every change inside your code base requires a build or transpilation, before you can see it. ',
                        'An entire ecosystem evolved, like hot module replacements & using source maps to reduce the pain point a bit.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> In a couple of years, we will most likely look back at this madness and laugh. Calling it ',
                        '"a hiccup in the history of Web Development". Browsers did catch up. Using neo.mjs, you can run the Development ',
                        'Mode directly inside the Browser. No build processes or source maps needed. You can debug the real ES8+ code. ',
                        'This has saved me a lot of time already, since it is the best possible debugging experience.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.4">Scalable Architectures</b>',
                    '<p>',
                        '<b>Problem:</b> While scalability is an important item inside the backend area (Cloud), it got mostly ',
                        'ignored on the frontend side so far.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> With the current worker setup, you already have a solid starting point. We can further enhance this, ',
                        'if needed. E.g. add a second Vdom worker, in case this one is a bottle-neck. You can stick to common ',
                        'patterns like MVC or MVVM, if you like to. You can create multiple Apps on one page and with using ',
                        'JS Modules, you can lazy load classes => packages as needed.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.5">Memory Leaks</b>',
                    '<p>',
                        '<b>Problem:</b> Destroying & re-creating Component Trees can easily lead to memory leaks. Especially in case the destruction ',
                        'logic of self created Components is not fully polished.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can easily re-use existing ',
                        'JS instances and just unmount & re-mount their (V)DOM. You can easily move Components Trees to different ',
                        'spots inside your App as well.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.6">Templates</b>',
                    '<p>',
                        '<b>Problem:</b> Close to all current libraries / frameworks out there are template driven. Developers have to create ',
                        'a compact, but very messy pseudo XML markup. Variables and methods get mixed into them, with various ',
                        'combinations of brackets. Especially complex Components like a Grid (Table) can contain over 1000 lines ',
                        'including big amounts of template if & else statements. While you can compile them at build time (e.g. Svelte), ',
                        'they are very static. Changes at runtime',
                        'this leaves',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> There are no templates inside neo.mjs. Instead, you create a JSON based virtual DOM tree ',
                        '(a bit similar to creating a simplified JSX output). You can dynamically change these structures any way ',
                        'you like to. There is no need for parsing the structures, since JS is meant to work with objects & arrays. ',
                        'The performance gain for run-time changes is significant. The best part is that you can modify the vdom tress ',
                        'exactly the same way throughout the entire Component lifecycle (e.g. before & after mounting).',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="dev-nav-2.7">Consistent Code</b>',
                    '<p>',
                        '<b>Problem:</b> Especially when working with libraries (e.g. React), you don\'t get everything you need ',
                        'for creating an UI. You will need several 3rd party extensions, which won\'t provide a consistent code ',
                        'base. Another big problem is, that libraries like React do not expose a core. Component is the base class ',
                        'for everything and this makes no sense. A router, controller or utility class does not have a DOM output, ',
                        'so they really should not use Component as the base class.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> neo.mjs is a framework, not a library. The core is exposed (core.Base). There are already ',
                        'a big amount a classes available, which follow the same design patterns & API. neo.mjs is created with a ',
                        'strong focus on being extendable. It is very easy to create new Components or other classes on your own.',
                    '</p>',
                '</li>',
            '</ol>',
            '<h1 class="nav-target" id="dev-nav-3">3. How to get up to speed?</h1>',
            '<p>',
                'As a first step, explore the Blog Posts & Examples on this page to figure out if you like the framework in general.',
            '</p>',
            '<p>',
                'Afterwards, I strongly recommend to follow the first 2 Tutorials:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://medium.com/swlh/how-to-create-a-webworkers-driven-multithreading-app-part-1-fa0cc78a4237?source=friends_link&sk=a10ca85002f5f9c3ee8c69f53c79d95f">How to create a webworkers driven multithreading App — Part 1</a>',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://medium.com/swlh/how-to-create-a-webworkers-driven-multithreading-app-part-2-3c5b3c2d1adb?source=friends_link&sk=cf4b5c0e014fcfd6fc1d9845f4eb3097">How to create a webworkers driven multithreading App — Part 2</a>',
            '</p>',
            '<p>',
                'At this point, you are definitely ready to create a first neo.mjs App on your own.',
            '</p>',
            '<p>',
                'Use the neo.mjs issues tracker to create new tickets or comment on existing ones:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://github.com/neomjs/neo/issues">neo.mjs issues tracker</a>',
            '</p>',
            '<p>',
                'Join the Slack Channel for questions & feedback:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://join.slack.com/t/neotericjs/shared_invite/enQtNDk2NjEwMTIxODQ2LWRjNGQ3ZTMzODRmZGM2NDM2NzZmZTMzZmE2YjEwNDM4NDhjZDllNWY2ZDkwOWQ5N2JmZWViYjYzZTg5YjdiMDc">Slack Channel Invite Link</a>',
            '</p>',
            '<p>',
                'I am willing to help getting the first developers up to speed. For free. Don\'t miss out on this.',
            '</p>',
            '<h1 class="nav-target" id="dev-nav-4">4. Join neo.mjs as a Contributor</h1>',
            '<p>',
                'Open source projects rely on <b>your</b> support. Successful projects require contributors to bring the ideas, ',
                'innovations and collaboration required for a robust and solid project.',
            '</p>',
            '<p>',
                'Contributions do not necessariy have to be code based. While we encourage you to use the code base and contribute to it, ',
                'we can also use your help in providing other input. Some examples of helpful contributions include: ',
                '<ul>',
                '<li>Work on the source code, enhancing and improving it</li>',
                '<li>Providing documentation content, review and editing</li>',
                '<li>Sample application creation</li>',
                '<li>Blog content</li>',
                '<li>Guides and How-To docs</li>',
                '</ul>',
            '</p>',
            '<p>',
                'With your help, especially in case you are a curious and passionate developer, we can speed up the development of Neo. A lot.',
            '</p>',
            '<p>',
                'To get started, make sure to join our Slack Channel - neotericjs.slack.com - as it is a great resource and a way to ',
                'communicate with the growing Neo community. You may also comment on existing tickets which you find interesting or ', 
                'create new ones as needed. Please feel free to fork the repository and create pull requests as much as you want',
            '</p>',
            '<p>',
                'For more information, please review our contribution guide <a target="_blank" href="https://github.com/neomjs/neo/blob/dev/CONTRIBUTING.md">here</a>.',
            '</p>',
            '<h1 class="nav-target" id="dev-nav-5">5. Incentives for Contributors</h1>',
            '<p>',
                'The Neo.mjs project is in its infancy, but growing every day in both content and exposure. We firmly believe that Neo ',
                'will gain traction and adoption as it matures and this is where your contributions don\'t end with just source code and ',
                'content. Your active participation in sharing your experiences and knowledge of Neo is crucial to its growth. ',
            '</p>',
            '<p>',
                'Additionally, actively contributing to open source projects increases your exposure to different projects and gives you ',
                'more experience in code design and collaborating with other developers. This is a much sought after skill set for employers ',
                'and gives you better professional credit. This experience can also result in better salaries for you as an employee, or ',
                'better hourly rates for you as a contractor.',
            '</p>',
            '<p>',
                'As Neo grows and adoption increases, there will be projects and jobs requiring skilled and experienced Neo developers. ',
                'While it can be very hard to get a reputation of being a skilled Angular, React or Vue developer (primarily because of the ', 
                'established large developer community) it will be the pioneer contributors and adopters of Neo who will gain reputation ', 
                'as being an expert in this framework.',
            '</p>',
            '<p>',
                'We plan on creating a <b>Certified Developer</b> program and those who show a true interest in being a contributor and ',
                'ambassador for Neo will be the first to receive such certification. This will be our way of thanking you for your work and ',
                'dedication to Neo.',
            '</p>',
            '<p>',
                'And finally, if you have had the chance to read the Executives\' Introduction, you will also know that we plan on ',
                'creating jobs and contractor positions when we get financially sustainable. Of course, we will be looking to our ',
                'contributors first to fulfill these positions.',
            '</p>',
            '<p>',
                'Thank you for taking the time to read this and we look forward to the future of Neo and your participation in it!',
            '</p>',
        ].join('')}
    }}
}

Neo.applyClassConfig(DeveloperIntroComponent);

export {DeveloperIntroComponent as default};
