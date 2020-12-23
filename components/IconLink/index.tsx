import React from "react"
import Link from "next/link"

import { Icon as SimpleIcon } from "@icons-pack/react-simple-icons"
import { Icon as FeatherIcon } from "react-feather"

interface Props {
  href: string
  Icon: SimpleIcon | FeatherIcon
  title?: string
  size?: string
}

const IconLink: React.FunctionComponent<Props> = ({
  href,
  Icon,
  title = "",
  size = "18"
}) =>
  <Link href={href}>
    <a className="icon" title={title}>
      <Icon size={size} />
    </a>
  </Link>

export default IconLink
