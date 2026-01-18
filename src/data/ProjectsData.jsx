export const projects = [
        {
            id: 1,
            title: "Counter App",
            slug: "counter-app",
            description: "A simple counter app",
            tech: ["React ", "useState"],
            link: "https://github.com/abdulsamishaikh/Counter-App"
        },
        {
            id: 2,
            title: "Timer App",
            slug: "timer-app",
            description: "A simple timer app",
            tech: ["React ", "useState"],
            link: "https://github.com/abdulsamishaikh/Timer-App"
        },
        {
            id: 3,
            title: "Texting App",
            slug: "texting-app",
            description: "A simple texting app",
            tech: ["React ", "useState"],
            link: "https://github.com/abdulsamishaikh/Texting-App"
        },
        {
            id: 4,
            title: "Insta App",
            slug: "insta-app",
            description: "A simple insta app",
            tech: ["React ", "useState"],
            link: "https://github.com/abdulsamishaikh/Insta-App"
        },
        {
            id: 5,
            title: "Snap App",
            slug: "snap-app",
            description: "A simple snap app",
            tech: ["React ", "useState"],
            link: "https://github.com/abdulsamishaikh/Snap-App"
        },
        {
            id: 6,
            title: "Tele App",
            slug: "tele-app",
            description: "A simple tele app",
            tech: ["React ", "useState"],
            link: "https://github.com/abdulsamishaikh/Tele-App"
        }
    ];

    export function getProjectById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const project = projects.find((p) => p.id === Number(id));

                if (project) {
                    resolve(project)
                } else {
                    reject("Project not found");
                }
                
            }, 1500);
        });
    }