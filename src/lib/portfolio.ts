import type { JournalArticle, ProjectCaseStudy, ProjectCategory } from '../data/portfolioData';

export function filterProjectsByCategory(
  projects: ProjectCaseStudy[],
  category: ProjectCategory
): ProjectCaseStudy[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function getProjectBySlug(
  projects: ProjectCaseStudy[],
  slug: string | undefined
): ProjectCaseStudy | undefined {
  if (!slug) return undefined;
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(
  projects: ProjectCaseStudy[],
  slug: string
): { previous: ProjectCaseStudy; next: ProjectCaseStudy } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length === 0) {
    return {
      previous: projects[0],
      next: projects[0],
    };
  }
  const previousIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;
  return {
    previous: projects[previousIndex],
    next: projects[nextIndex],
  };
}

export function getArticleBySlug(
  articles: JournalArticle[],
  slug: string | undefined
): JournalArticle | undefined {
  if (!slug) return undefined;
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  articles: JournalArticle[],
  currentSlug: string,
  limit = 3
): JournalArticle[] {
  return articles.filter((article) => article.slug !== currentSlug).slice(0, limit);
}

export function estimateReadingTimeMinutes(
  sections: JournalArticle['sections']
): number {
  const totalWords = sections.reduce((sum, section) => {
    const headingWords = section.heading.trim().split(/\s+/).filter(Boolean).length;
    const paragraphWords = section.paragraphs.reduce(
      (pSum, p) => pSum + p.trim().split(/\s+/).filter(Boolean).length,
      0
    );
    return sum + headingWords + paragraphWords;
  }, 0);
  return Math.max(1, Math.ceil(totalWords / 180));
}

export function formatEditionIndex(index: number): string {
  const normalized = Math.max(1, Math.floor(index));
  return normalized < 10 ? `0${normalized}` : `${normalized}`;
}
