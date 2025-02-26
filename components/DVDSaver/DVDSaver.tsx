"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from "react"
import dvdLogo from "@/public/dvd_logo.png"
import Image from "next/image"

interface DVDScreensaverProps {
  speed?: number
  size?: number
  className?: string
  changeColors?: boolean
  pausable?: boolean
  padding?: number
  startPosition?: "random" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
}

const LOGO_COLORS = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#ff8000",
  "#8000ff",
  "#0080ff",
  "#ff0080",
]

const DVDScreensaver = ({
  speed = 50,
  size = 50,
  className = "",
  changeColors = true,
  pausable = false,
  padding = 10,
  startPosition = "random",
}: DVDScreensaverProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [direction, setDirection] = useState({ x: 2, y: 2 })
  const [logoColor, setLogoColor] = useState(LOGO_COLORS[0])
  const [isPaused, setIsPaused] = useState(false)
  const [lastCollisionTime, setLastCollisionTime] = useState(0)
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 })
  const [logoDimensions, setLogoDimensions] = useState({ width: 0, height: 0 })

  const actualSpeed = useMemo(() => {
    if (isPaused) return 0
    return Math.max(0.5, (speed / 100) * 4)
  }, [speed, isPaused])

  const actualSize = useMemo(() => {
    return Math.max(30, Math.min((size / 100) * 200, 200))
  }, [size])

  const bounds = useMemo(() => {
    const safePadding = Math.min(padding, Math.min(containerBounds.width, containerBounds.height) / 4)
    return {
      minX: safePadding,
      maxX: containerBounds.width - logoDimensions.width - safePadding,
      minY: safePadding,
      maxY: containerBounds.height - logoDimensions.height - safePadding,
    }
  }, [containerBounds, logoDimensions, padding])

  const getRandomColor = useCallback(() => {
    if (!changeColors) return logoColor
    const filteredColors = LOGO_COLORS.filter((color) => color !== logoColor)
    return filteredColors[Math.floor(Math.random() * filteredColors.length)]
  }, [logoColor, changeColors])

  const getInitialDirection = useCallback(() => {
    if (isPaused) return { x: 0, y: 0 }
    const baseSpeed = actualSpeed
    const directions = [
      { x: baseSpeed, y: baseSpeed },
      { x: -baseSpeed, y: baseSpeed },
      { x: baseSpeed, y: -baseSpeed },
      { x: -baseSpeed, y: -baseSpeed },
    ]
    return directions[Math.floor(Math.random() * directions.length)]
  }, [actualSpeed, isPaused])

  const updateDimensions = useCallback(() => {
    if (!containerRef.current || !logoRef.current) return

    const container = containerRef.current.getBoundingClientRect()
    const logo = logoRef.current.getBoundingClientRect()

    setContainerBounds({ width: container.width, height: container.height })
    setLogoDimensions({ width: logo.width, height: logo.height })

    setPosition((prev) => {
      if (!prev) return prev
      const safePadding = Math.min(padding, Math.min(container.width, container.height) / 4)
      const safeMinX = safePadding
      const safeMaxX = container.width - logo.width - safePadding
      const safeMinY = safePadding
      const safeMaxY = container.height - logo.height - safePadding

      return {
        x: Math.max(safeMinX, Math.min(prev.x, safeMaxX)),
        y: Math.max(safeMinY, Math.min(prev.y, safeMaxY)),
      }
    })
  }, [padding])

  const getStartingPosition = useCallback(
    (container: DOMRect, logo: DOMRect, safePadding: number) => {
      const positions = {
        "top-left": { x: safePadding, y: safePadding },
        "top-right": { x: container.width - logo.width - safePadding, y: safePadding },
        "bottom-left": { x: safePadding, y: container.height - logo.height - safePadding },
        "bottom-right": {
          x: container.width - logo.width - safePadding,
          y: container.height - logo.height - safePadding,
        },
        center: { x: (container.width - logo.width) / 2, y: (container.height - logo.height) / 2 },
      }

      if (startPosition === "random") {
        const corners = ["top-left", "top-right", "bottom-left", "bottom-right"] as const
        const randomCorner = corners[Math.floor(Math.random() * corners.length)]
        return positions[randomCorner]
      }

      return positions[startPosition]
    },
    [startPosition],
  )

  useEffect(() => {
    const initializePosition = () => {
      if (!containerRef.current || !logoRef.current) return

      updateDimensions()

      const container = containerRef.current.getBoundingClientRect()
      const logo = logoRef.current.getBoundingClientRect()
      const safePadding = Math.min(padding, Math.min(container.width, container.height) / 4)
      const startPos = getStartingPosition(container, logo, safePadding)

      setPosition(startPos)
      setDirection(getInitialDirection())
    }

    initializePosition()

    const handleResize = () => {
      updateDimensions()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [getInitialDirection, padding, updateDimensions, getStartingPosition])

  useEffect(() => {
    if (!position || speed === 0 || isPaused) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }

    let lastTime = performance.now()
    const updatePosition = (currentTime: number) => {
      if (!containerRef.current || !logoRef.current) {
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current)
          animationRef.current = null
        }
        return
      }

      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      setPosition((prevPos) => {
        if (!prevPos) return prevPos

        const nextX = prevPos.x + direction.x * (deltaTime / 16)
        const nextY = prevPos.y + direction.y * (deltaTime / 16)

        const hitRight = nextX >= bounds.maxX
        const hitLeft = nextX <= bounds.minX
        const hitBottom = nextY >= bounds.maxY
        const hitTop = nextY <= bounds.minY

        const hasCollision = hitLeft || hitRight || hitTop || hitBottom
        const now = Date.now()

        if (hasCollision && now - lastCollisionTime > 200) {
          setLogoColor(getRandomColor())
          setLastCollisionTime(now)
        }

        const newDirection = { ...direction }

        if (hitLeft || hitRight) {
          newDirection.x = -direction.x
        }
        if (hitTop || hitBottom) {
          newDirection.y = -direction.y
        }

        if (newDirection.x !== direction.x || newDirection.y !== direction.y) {
          setDirection(newDirection)
        }

        return {
          x: Math.max(bounds.minX, Math.min(nextX, bounds.maxX)),
          y: Math.max(bounds.minY, Math.min(nextY, bounds.maxY)),
        }
      })

      animationRef.current = requestAnimationFrame(updatePosition)
    }

    animationRef.current = requestAnimationFrame(updatePosition)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [position, direction, speed, isPaused, getRandomColor, lastCollisionTime, bounds])

  useEffect(() => {
    if (speed === 0 || isPaused) {
      setDirection({ x: 0, y: 0 })
    } else if (!direction.x && !direction.y) {
      setDirection(getInitialDirection())
    } else {
      const dirX = direction.x !== 0 ? Math.sign(direction.x) * actualSpeed : 0
      const dirY = direction.y !== 0 ? Math.sign(direction.y) * actualSpeed : 0

      if (Math.abs(dirX) !== Math.abs(direction.x) || Math.abs(dirY) !== Math.abs(direction.y)) {
        setDirection({
          x: dirX,
          y: dirY,
        })
      }
    }
  }, [actualSpeed, speed, isPaused, getInitialDirection, direction.x, direction.y])

  const togglePause = useCallback(() => {
    if (pausable) {
      setIsPaused((prev) => !prev)
    }
  }, [pausable])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full bg-black relative overflow-hidden rounded-lg ${className}`}
      onClick={togglePause}
      style={{ cursor: pausable ? "pointer" : "default" }}
    >
      {pausable && isPaused && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-white text-2xl font-bold">PAUSED</div>
        </div>
      )}
      <div
        ref={logoRef}
        style={{
          position: "absolute",
          transform: `translate3d(${position?.x ?? 0}px, ${position?.y ?? 0}px, 0)`,
          willChange: "transform",
          filter: `drop-shadow(0 0 2px ${logoColor}) hue-rotate(${LOGO_COLORS.indexOf(logoColor) * 36}deg)`,
        }}
      >
        <Image
          src={dvdLogo || "/placeholder.svg"}
          alt="DVD Logo"
          width={actualSize}
          height={actualSize / 2}
          priority
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </div>
  )
}

export default DVDScreensaver

