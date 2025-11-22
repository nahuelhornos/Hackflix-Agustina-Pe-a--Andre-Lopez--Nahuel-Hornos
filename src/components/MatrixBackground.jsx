import { useEffect, useRef } from 'react'
import './MatrixBackground.css'

function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const fontSize = 16

    const drawStatic = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      const columns = Math.ceil(canvas.width / fontSize)
      const columnSpacing = 4

      for (let i = 0; i < columns; i += columnSpacing) {
        if (Math.random() > 0.6) continue
        
        const x = i * fontSize
        const columnLength = Math.random() * (canvas.height * 0.4) + (canvas.height * 0.15)
        const startY = Math.random() * (canvas.height * 0.5)
        
        const charsInColumn = Math.floor(columnLength / (fontSize * 1.2))
        
        for (let j = 0; j < charsInColumn; j++) {
          const text = chars[Math.floor(Math.random() * chars.length)]
          const y = startY + (j * fontSize * 1.2)
          
          if (y > canvas.height) break

          const isHead = j === 0
          const progress = (y - startY) / columnLength
          
          let redValue, greenBlueValue, opacity
          
          if (isHead) {
            redValue = 255
            greenBlueValue = 50
            opacity = 1
          } else {
            redValue = Math.floor(255 * (1 - progress * 0.9))
            greenBlueValue = Math.floor(15 * (1 - progress))
            opacity = Math.max(0.15, 1 - progress * 0.9)
          }
          
          ctx.fillStyle = `rgba(${redValue}, ${greenBlueValue}, ${greenBlueValue}, ${opacity})`
          ctx.fillText(text, x, y)
        }
      }
    }
    
    drawStatic()
    window.addEventListener('resize', drawStatic)

    return () => {
      window.removeEventListener('resize', drawStatic)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-background" />
}

export default MatrixBackground
