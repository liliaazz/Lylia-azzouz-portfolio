export type PathIcon = 'rocket' | 'puzzle' | 'book' | 'compass'
export type SocialPlatform = 'linkedin' | 'github' | 'instagram' | 'email'

export interface ContactLink {
  platform: SocialPlatform
  label:    string
  href:     string
}

export interface ContactPathData {
  id:          string
  title:       string
  icon:        PathIcon
  description: string
  links:       ContactLink[]
}

export interface SocialCardData {
  platform: SocialPlatform
  label:    string
  handle:   string
  href:     string
  color:    string
  bgColor:  string
}
