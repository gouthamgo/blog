import Image from 'next/image'
import { CodeBlock } from './ui/code-block'

export const MDXComponents = {
  img: ({ src, alt, ...props }: any) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg my-8 shadow-lg"
      {...props}
    />
  ),
  pre: ({ children, ...props }: any) => {
    const code = children?.props?.children || ''
    const language = children?.props?.className?.replace('language-', '') || 'text'

    return (
      <CodeBlock code={code} language={language} {...props} />
    )
  },
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p className="mb-6 text-gray-800 dark:text-gray-200" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }: any) => (
    <a href={href} className="text-medium-green hover:underline" {...props}>
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 italic text-gray-600 dark:text-gray-400 my-6" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1 py-0.5 rounded text-sm" {...props}>
      {children}
    </code>
  ),
}