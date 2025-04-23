export const generateMarkdown = (profileData) => {
    let md = '';

    if (profileData.basic.name) {
        md += `# 👋 Hi there! I'm ${profileData.basic.name}\n\n`;
    }

    if (profileData.basic.title) {
        md += `${profileData.basic.title}\n\n`;
    }

    if (profileData.basic.about) {
        md += `## 🚀 About Me\n${profileData.basic.about}\n\n`;
    }

    if (profileData.skills.length > 0) {
        md += `## 🔧 Skills & Technologies\n`;
        md += profileData.skills.join(' | ');
        md += '\n\n';
    }

    if (profileData.projects.length > 0) {
        md += `## 🏗️ Projects\n\n`;
        profileData.projects.forEach(project => {
            md += `### ${project.name}\n`;
            if (project.description) md += `${project.description}\n`;
            if (project.link) md += `[View Project](${project.link})\n`;
            md += '\n';
        });
    }

    if (Object.values(profileData.socials).some(value => value)) {
        md += `## 🔗 Connect With Me\n\n`;

        if (profileData.socials.github) {
            md += `[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](${profileData.socials.github}) `;
        }

        if (profileData.socials.linkedin) {
            md += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${profileData.socials.linkedin}) `;
        }

        if (profileData.socials.twitter) {
            md += `[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](${profileData.socials.twitter}) `;
        }

        md += '\n\n';
    }

    if (profileData.stats.showGitHubStats && profileData.basic.githubUsername) {
        md += `## 📊 GitHub Stats\n\n`;
        md += `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${profileData.basic.githubUsername}&show_icons=true&theme=${profileData.stats.theme})\n\n`;

        if (profileData.stats.showTopLanguages) {
            md += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${profileData.basic.githubUsername}&layout=compact&theme=${profileData.stats.theme})\n\n`;
        }
    }

    return md;
};
