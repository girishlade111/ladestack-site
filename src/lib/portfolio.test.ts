import test from 'node:test';
import assert from 'node:assert/strict';
import { JOURNAL_ARTICLES, PROJECTS } from '../data/portfolioData';
import {
  estimateReadingTimeMinutes,
  filterProjectsByCategory,
  formatEditionIndex,
  getAdjacentProjects,
  getArticleBySlug,
  getProjectBySlug,
  getRelatedArticles,
} from './portfolio';
import { createInquiryReference, validateContactForm } from './contactValidation';

test('filterProjectsByCategory returns all 8 projects for All and filters specific categories', () => {
  const all = filterProjectsByCategory(PROJECTS, 'All');
  assert.equal(all.length, 8);

  const docs = filterProjectsByCategory(PROJECTS, 'Document Utilities');
  assert.equal(docs.length, 4);
  assert.ok(docs.every((p) => p.category === 'Document Utilities'));

  const regional = filterProjectsByCategory(PROJECTS, 'Regional Tools');
  assert.equal(regional.length, 1);
  assert.equal(regional[0].slug, 'bharat-land-converter');
});

test('getProjectBySlug and getAdjacentProjects wrap cleanly around list boundaries', () => {
  const first = getProjectBySlug(PROJECTS, 'gb-coder');
  assert.ok(first);
  assert.equal(first.title, 'GB Coder');

  const adjFirst = getAdjacentProjects(PROJECTS, 'gb-coder');
  assert.equal(adjFirst.previous.slug, 'ladestack-platform');
  assert.equal(adjFirst.next.slug, 'ls-pdf');

  const adjLast = getAdjacentProjects(PROJECTS, 'ladestack-platform');
  assert.equal(adjLast.next.slug, 'gb-coder');
});

test('article helpers resolve slug, related articles, and reading time', () => {
  const article = getArticleBySlug(JOURNAL_ARTICLES, 'the-power-of-simplicity');
  assert.ok(article);
  assert.equal(article.category, 'Design Systems');

  const related = getRelatedArticles(JOURNAL_ARTICLES, 'the-power-of-simplicity', 3);
  assert.equal(related.length, 3);
  assert.ok(related.every((a) => a.slug !== 'the-power-of-simplicity'));

  const minutes = estimateReadingTimeMinutes(article.sections);
  assert.ok(minutes >= 1);
});

test('formatEditionIndex zero-pads single digits', () => {
  assert.equal(formatEditionIndex(1), '01');
  assert.equal(formatEditionIndex(10), '10');
});

test('validateContactForm rejects empty or invalid fields and accepts valid submissions', () => {
  const emptyResult = validateContactForm({
    firstName: '',
    lastName: '',
    email: 'invalid-email',
    service: 'Web Engineering',
    budget: '$5k–$15k',
    message: 'Too short',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.firstName);
  assert.ok(emptyResult.errors.lastName);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.message);

  const validResult = validateContactForm({
    firstName: 'Aarav',
    lastName: 'Mehta',
    email: 'aarav@example.com',
    service: 'Web Engineering',
    budget: '$5k–$15k',
    message: 'Looking to build a local-first web application with custom design system.',
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});

  const ref = createInquiryReference('aarav@example.com', 17000012345);
  assert.equal(ref, 'LS-AAR-12345');
});
