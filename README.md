# My Tech Blog

A modern, Medium-inspired tech blog built with Next.js 14, featuring App Router, MDX content, and a beautiful responsive design.

## 🚀 Features

- **Next.js 14 App Router**: Latest Next.js features with App Router architecture
- **MDX Content**: Write blog posts in Markdown with React components
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Syntax Highlighting**: Beautiful code blocks with copy functionality
- **Reading Progress**: Visual indicator showing reading progress
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and structured data for search engines
- **Performance**: Static generation, image optimization, and fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom typography
- **Content**: MDX with gray-matter for frontmatter
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Code Highlighting**: react-syntax-highlighter
- **Typography**: Inter font family

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-tech-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Blog Posts

Create new blog posts by adding `.mdx` files to the `posts/` directory:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: "2024-12-15"
author: "Your Name"
image: "https://example.com/image.jpg"
tags: ["tag1", "tag2", "tag3"]
---

Your blog post content goes here. You can use:

- Markdown syntax
- React components
- Code blocks with syntax highlighting
- Images and other media

```javascript
// Code blocks are automatically highlighted
function example() {
  return "Hello, World!"
}
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── [slug]/            # Dynamic blog post routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # UI components
│       ├── header.tsx    # Site header
│       ├── theme-toggle.tsx
│       ├── post-card.tsx
│       ├── code-block.tsx
│       └── reading-progress.tsx
├── lib/                  # Utility functions
│   ├── posts.ts         # Post loading utilities
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Helper functions
├── posts/               # MDX blog posts
│   ├── getting-started-nextjs-14.mdx
│   ├── building-scalable-apis.mdx
│   └── ai-web-development.mdx
└── public/              # Static assets
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      'medium-green': '#1a8917', // Customize accent color
    },
  },
},
```

### Typography
Modify typography in `app/globals.css`:

```css
.prose {
  font-size: 21px;           /* Body text size */
  line-height: 1.58;         /* Line height */
  letter-spacing: -0.003em;  /* Letter spacing */
}
```

### Layout
Adjust layout constraints in components:

```css
.max-w-680 {
  max-width: 680px; /* Content width */
}
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
The blog works on any platform supporting Next.js:
- Netlify
- Railway
- Docker
- Traditional hosting with Node.js

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have questions or need help, please open an issue in the repository.

---

Built with ❤️ using Next.js 14 and modern web technologies.