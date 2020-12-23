import type { Icon as SimpleIcon } from "@icons-pack/react-simple-icons"
import type { Icon as FeatherIcon } from "react-feather"

import {
  Github,
  Twitter
} from "@icons-pack/react-simple-icons"

import {
  Mail
} from "react-feather"

interface SocialLink {
  href: string
  Icon: SimpleIcon | FeatherIcon
  title?: string
}

const socialLinks: SocialLink[] = [
  { href: "https://github.com/citycide", Icon: Github },
  { href: "https://twitter.com/ctycde", Icon: Twitter },
  { href: "mailto:bo@lingen.life", Icon: Mail, title: "Email" }
]

export default socialLinks
