import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { CodeBlock } from './components/ui/code-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt, ...props }: any) => (
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={400}
        className="rounded-lg my-8"
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
    ...components,
  }
}