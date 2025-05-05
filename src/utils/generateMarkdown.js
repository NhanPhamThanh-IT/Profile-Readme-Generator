/**
 * Generates a GitHub README-style Markdown string based on user profile data.
 *
 * This function dynamically creates Markdown content sections such as:
 * - Introduction (name, title, about)
 * - Location and portfolio
 * - Skills list
 * - Projects with descriptions and links
 * - Social media badges (GitHub, LinkedIn, Twitter)
 * - GitHub stats (contribution chart and top languages)
 *
 * @param {Object} profileData - User profile information used to build the Markdown content.
 * @param {Object} profileData.basic - Basic information about the user.
 * @param {string} profileData.basic.name - User's full name.
 * @param {string} profileData.basic.title - Professional title or headline.
 * @param {string} profileData.basic.about - A brief personal description or quote.
 * @param {string} profileData.basic.location - User's location.
 * @param {string} profileData.basic.website - URL to user's personal or portfolio website.
 * @param {string} profileData.basic.githubUsername - GitHub username used in stats widgets.
 * 
 * @param {string[]} profileData.skills - List of skills or technologies.
 * 
 * @param {Array<Object>} profileData.projects - List of projects.
 * @param {string} profileData.projects[].name - Project name.
 * @param {string} [profileData.projects[].description] - Optional project description.
 * @param {string} [profileData.projects[].link] - Optional link to the project.
 * 
 * @param {Object} profileData.socials - Social media URLs.
 * @param {string} [profileData.socials.github] - GitHub profile link.
 * @param {string} [profileData.socials.linkedin] - LinkedIn profile link.
 * @param {string} [profileData.socials.twitter] - Twitter profile link.
 * 
 * @param {Object} profileData.stats - GitHub stats display options.
 * @param {boolean} profileData.stats.showGitHubStats - Whether to show GitHub contribution stats.
 * @param {boolean} profileData.stats.showTopLanguages - Whether to show top languages chart.
 * @param {string} profileData.stats.theme - Theme for GitHub stats cards.
 * 
 * @returns {string} A formatted Markdown string ready to be used in a GitHub README.
 */
export const generateMarkdown = (profileData) => {
    let md = '';

    if (profileData.basic.name) {
        md += `# 👋 Hi there! I'm **${profileData.basic.name}**\n\n`;
    }

    if (profileData.basic.title) {
        md += `**${profileData.basic.title}**\n\n`;
    }

    if (profileData.basic.about) {
        md += `## 🚀 **About Me**\n\n> _"${profileData.basic.about}"_\n\n`;
    }

    if (profileData.basic.location) {
        md += `- 🗺️ I come from **${profileData.basic.location}**\n\n`;
    }

    if (profileData.basic.website) {
        md += `- 🌐 Explore my work and projects at **[My Portfolio](${profileData.basic.website})**\n\n`;
    }

    if (profileData.skills.length > 0) {
        md += `## 🔧 **Skills & Technologies**\n`;
        md += profileData.skills.map(skill => `- ${skill}`).join('\n');
        md += '\n\n';
    }

    if (profileData.projects.length > 0) {
        md += `## 🏗️ **Projects**\n\n`;
        profileData.projects.forEach(project => {
            md += `### 🚀 ${project.name}\n`;
            if (project.description) md += `> *${project.description}*\n`;
            if (project.link) md += `[🔗 View Project](${project.link})\n`;
            md += '\n';
        });
    }

    if (Object.values(profileData.socials).some(value => value)) {
        md += `## 🔗 **Connect With Me**\n\n`;

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
        md += `## 📊 **GitHub Stats**\n\n`;
        md += `![GitHub stats](https://github-readme-stats.vercel.app/api?username=${profileData.basic.githubUsername}&show_icons=true&theme=${profileData.stats.theme})\n\n`;

        if (profileData.stats.showTopLanguages) {
            md += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${profileData.basic.githubUsername}&layout=compact&theme=${profileData.stats.theme})\n\n`;
        }
    }

    return md;
};
