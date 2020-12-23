import React, { useEffect, useRef, useState } from "react"

export interface MessageData {
  text: string
  href?: string
}

export type MessageList = Array<string | MessageData>

interface Props {
  /** List of messages to cycle through */
  messages: MessageList
  /** Number of milliseconds between messages. */
  interval?: number
  /** Number of milliseconds between each typed character. */
  typingSpeed?: number
  /** Number of milliseconds between each deleted character. */
  deleteSpeed?: number
  /** Text typed before the message. */
  prefix?: string
  /** Text typed after the message. */
  suffix?: string
  /** Text prepended statically to the message. */
  staticPrefix?: string
  /** Text appended statically to the message. */
  staticSuffix?: string
  /** String of text to use as the cursor character. */
  cursor?: string
  /** `className` to apply to the static prefix text. */
  staticPrefixClass?: string
  /** `className` to apply to the static suffix text. */
  staticSuffixClass?: string
  /** `className` to apply to the main message text. */
  messageClass?: string
  /** `className` to apply to the cursor text. */
  cursorClass?: string
}

const getMessage = (messageOrData: string | MessageData): string =>
  typeof messageOrData === "string"
    ? messageOrData
    : messageOrData.text

const getLinkTarget = (messageOrData: string | MessageData): string =>
  typeof messageOrData === "string"
    ? "#"
    : messageOrData.href ?? "#"

const SkillCycle: React.FunctionComponent<Props> = ({
  messages = [],
  interval = 2000,
  prefix = "",
  suffix = "",
  staticPrefix = "",
  staticSuffix = "",
  typingSpeed = 60,
  deleteSpeed = 30,
  cursor = "",
  staticPrefixClass = "",
  staticSuffixClass = "",
  messageClass = "",
  cursorClass = ""
}) => {
  const [text, setText] = useState(getMessage(messages[0]))
  const [link, setLink] = useState(getLinkTarget(messages[0]))
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(typingSpeed)
  const [loop, setLoop] = useState(0)

  const innerTimer: React.MutableRefObject<NodeJS.Timeout | undefined> = useRef()

  const index = loop % messages.length
  const linkTarget = getLinkTarget(messages[index])
  const message = prefix + getMessage(messages[index]) + suffix

  const handleTyping = (): void => {
    if (isPaused) {
      return
    }

    const delta = isDeleting ? -1 : 1

    setText(message.substring(0, text.length + delta))
    setLink(linkTarget)
    setSpeed(isDeleting ? deleteSpeed : typingSpeed)

    if (!isDeleting && text === message) {
      innerTimer.current = setTimeout(() => setIsDeleting(true), interval)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setLoop(loop + 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, speed)

    return () => {
      if (innerTimer.current != null) {
        clearTimeout(innerTimer.current)
      }

      clearTimeout(timer)
    }
  })

  return (
    <span
      className={messageClass === "" ? messageClass : "typingMessage"}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <span className={staticPrefixClass === "" ? staticPrefixClass : "typingStaticPrefix"}>
        {staticPrefix}
      </span>

      {
        link === "#"
          ? <span>{text}</span>
          : <a href={link}>{text}</a>
      }

      <span className={staticSuffixClass === "" ? staticSuffixClass : "typingStaticSuffix"}>
        {staticSuffix}
      </span>

      <span className={cursorClass === "" ? cursorClass : "typingCursor"}>
        {cursor}
      </span>
    </span>
  )
}

export default SkillCycle
