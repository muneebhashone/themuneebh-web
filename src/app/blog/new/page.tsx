'use client';

import { useState } from 'react';
import { createDevToArticle } from '../../utils/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function NewBlogPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (!title || !content || !tags || !apiKey) {
        throw new Error('All fields are required');
      }

      const tagArray = tags.split(',').map(tag => tag.trim());
      const result = await createDevToArticle(title, content, tagArray, apiKey);

      if (!result) {
        throw new Error('Failed to create blog post');
      }

      // Redirect to the new post
      window.location.href = `/blog/${result.id}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container section">
        <h1 className="heading">Create New Blog Post</h1>

        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setIsPreview(false)}
            className={`px-4 py-2 rounded-md transition-colors ${
              !isPreview ? 'bg-accent text-background' : 'text-muted hover:text-accent'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => setIsPreview(true)}
            className={`px-4 py-2 rounded-md transition-colors ${
              isPreview ? 'bg-accent text-background' : 'text-muted hover:text-accent'
            }`}
          >
            Preview
          </button>
        </div>

        {!isPreview ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block mono text-sm mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                placeholder="Your blog post title"
              />
            </div>

            <div>
              <label htmlFor="content" className="block mono text-sm mb-2">
                Content (Markdown)
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-96 bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-accent font-mono"
                placeholder="Write your blog post in markdown..."
              />
            </div>

            <div>
              <label htmlFor="tags" className="block mono text-sm mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                placeholder="webdev, javascript, react"
              />
            </div>

            <div>
              <label htmlFor="apiKey" className="block mono text-sm mb-2">
                Dev.to API Key
              </label>
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                placeholder="Your Dev.to API key"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-background py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </button>
          </form>
        ) : (
          <div className="prose prose-invert prose-lg max-w-none">
            <h1>{title || 'Untitled Post'}</h1>
            <div className="flex gap-3 mb-8">
              {tags.split(',').map((tag, index) => (
                <span
                  key={index}
                  className="mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || '*No content yet*'}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
