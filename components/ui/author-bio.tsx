import Image from 'next/image'
import { ExternalLink, Twitter, Github, Linkedin } from 'lucide-react'

interface AuthorBioProps {
  name: string
  bio?: string
  avatar?: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
    website?: string
  }
}

export function AuthorBio({ name, bio, avatar, social }: AuthorBioProps) {
  return (
    <div className="author-bio">
      <div className="author-header">
        {avatar ? (
          <Image
            src={avatar}
            alt={`${name} avatar`}
            width={80}
            height={80}
            className="author-avatar"
          />
        ) : (
          <div className="author-avatar-placeholder">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="author-info">
          <h3 className="author-name">{name}</h3>
          {bio && <p className="author-bio-text">{bio}</p>}
          {social && (
            <div className="author-social">
              {social.website && (
                <a
                  href={social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-link"
                  aria-label="Website"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {social.twitter && (
                <a
                  href={`https://twitter.com/${social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-link"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
              )}
              {social.github && (
                <a
                  href={`https://github.com/${social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-link"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={`https://linkedin.com/in/${social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}