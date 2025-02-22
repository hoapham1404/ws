'use client'

import { useEffect, useRef, useState } from 'react'
import dvdLogo from '@/public/dvd_logo.png'
import Image from 'next/image'

interface DVDScreensaverProps {
  speed?: number
  size?: number
}

const DVDScreensaver = ({ speed = 50, size = 50 }: DVDScreensaverProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const [direction, setDirection] = useState({ x: 3, y: 3 })

  // Calculate actual speed and size based on input values
  const actualSpeed = (speed / 50) * 4 // Scale speed from 0-100 to 0-8
  const actualSize = Math.max(30, (size / 100) * 200) // Scale size from 30-200px

  // Modify getRandomDirection to use actualSpeed
  const getRandomDirection = () => {
    const patterns = [
      { x: actualSpeed, y: actualSpeed },    // top-left to bottom-right
      { x: -actualSpeed, y: -actualSpeed },  // bottom-right to top-left
      { x: -actualSpeed, y: actualSpeed },   // top-right to bottom-left
      { x: actualSpeed, y: -actualSpeed }    // bottom-left to top-right
    ]

    // Randomly choose between diagonal patterns
    if (Math.random() > 0.5) {
      // top-left ↔ bottom-right pattern
      return Math.random() > 0.5 ? patterns[0] : patterns[1]
    } else {
      // top-right ↔ bottom-left pattern
      return Math.random() > 0.5 ? patterns[2] : patterns[3]
    }
  }

  // Set initial position when component mounts
  useEffect(() => {
    const initializePosition = () => {
      if (!containerRef.current || !logoRef.current || position) return
      
      const container = containerRef.current.getBoundingClientRect()
      const logo = logoRef.current.getBoundingClientRect()
      
      // Start from a corner
      const corners = [
        { x: 0, y: 0 },                                    // top-left
        { x: container.width - logo.width, y: 0 },         // top-right
        { x: 0, y: container.height - logo.height },       // bottom-left
        { x: container.width - logo.width, 
          y: container.height - logo.height }              // bottom-right
      ]
      
      const startCorner = corners[Math.floor(Math.random() * corners.length)]
      setPosition(startCorner)
      setDirection(getRandomDirection())
    }

    initializePosition()
    
    window.addEventListener('resize', initializePosition)
    return () => window.removeEventListener('resize', initializePosition)
  }, [position])

  useEffect(() => {
    if (!position || speed === 0) return // Don't animate if speed is 0

    const updatePosition = () => {
      if (!containerRef.current || !logoRef.current) return

      const container = containerRef.current.getBoundingClientRect()
      const logo = logoRef.current.getBoundingClientRect()

      setPosition(prevPos => {
        if (!prevPos) return prevPos

        const nextX = prevPos.x + direction.x
        const nextY = prevPos.y + direction.y

        // Check boundaries
        const hitRight = nextX + logo.width >= container.width
        const hitLeft = nextX <= 0
        const hitBottom = nextY + logo.height >= container.height
        const hitTop = nextY <= 0

        // Handle corner collisions with diagonal movement
        if ((hitLeft && hitTop) || 
            (hitRight && hitTop) || 
            (hitLeft && hitBottom) || 
            (hitRight && hitBottom)) {
          setDirection(getRandomDirection())
        } else {
          // Handle wall collisions
          if (hitLeft || hitRight) {
            setDirection(prev => ({ ...prev, x: -prev.x }))
          }
          if (hitTop || hitBottom) {
            setDirection(prev => ({ ...prev, y: -prev.y }))
          }
        }

        // Keep within bounds
        return {
          x: Math.max(0, Math.min(nextX, container.width - logo.width)),
          y: Math.max(0, Math.min(nextY, container.height - logo.height))
        }
      })

      animationRef.current = requestAnimationFrame(updatePosition)
    }

    animationRef.current = requestAnimationFrame(updatePosition)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [position, direction, speed]) // Add speed to dependencies

  // Update direction when speed changes
  useEffect(() => {
    if (speed === 0) {
      // Stop movement when speed is 0
      setDirection({ x: 0, y: 0 })
    } else {
      setDirection(prev => {
        const currentMagnitude = Math.sqrt(prev.x * prev.x + prev.y * prev.y)
        // If previously stopped (magnitude === 0), generate new direction
        if (currentMagnitude === 0) {
          return getRandomDirection()
        }
        // Otherwise scale the current direction
        return {
          x: (prev.x / currentMagnitude) * actualSpeed,
          y: (prev.y / currentMagnitude) * actualSpeed
        }
      })
    }
  }, [actualSpeed, speed])

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-black relative overflow-hidden rounded-lg"
    >
      <div
        ref={logoRef}
        style={{
          transform: `translate(${position?.x ?? 0}px, ${position?.y ?? 0}px)`,
          transition: speed === 0 ? 'none' : 'transform 0.016s linear' // Remove transition when paused
        }}
        className="absolute"
      >
        <Image
          src={dvdLogo}
          alt="DVD Logo"
          width={actualSize}
          height={actualSize / 2}
          priority
        />
      </div>
    </div>
  )
}

export default DVDScreensaver
