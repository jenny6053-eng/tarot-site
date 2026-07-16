import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'content');

export interface Frontmatter {
  title: string;
  description: string;
  date?: string;
  category?: string;
  tags?: string[];
  thumbnail?: string;
  [key: string]: unknown;
}

export interface MDXPost {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

export function getPostBySlug(folder: 'cards' | 'blog', slug: string): MDXPost | null {
  try {
    const filePath = path.join(CONTENT_PATH, folder, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: data as Frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading MDX file for ${folder}/${slug}:`, error);
    return null;
  }
}

export function getAllPosts(folder: 'cards' | 'blog'): MDXPost[] {
  try {
    const dirPath = path.join(CONTENT_PATH, folder);
    if (!fs.existsSync(dirPath)) {
      return [];
    }
    
    const files = fs.readdirSync(dirPath);
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, '');
        const post = getPostBySlug(folder, slug);
        return post;
      })
      .filter((post): post is MDXPost => post !== null);
      
    // If it's blog posts, sort by date descending
    if (folder === 'blog') {
      return posts.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date || '');
        const dateB = new Date(b.frontmatter.date || '');
        return dateB.getTime() - dateA.getTime();
      });
    }
    
    return posts;
  } catch (error) {
    console.error(`Error reading MDX files directory for ${folder}:`, error);
    return [];
  }
}
