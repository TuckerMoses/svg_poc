import React, { FC } from 'react';
import classnames from 'classnames'
import styles from './Shapes.module.scss';

interface cardProps {
  className?: string
  isVisible: boolean
  setVisible: (visibility: boolean) => void
}

interface rectangleProps {
  className?: string
  width: string
  height: string
  x: string
  y: string
  setVisible: (visibility: boolean) => void
}

interface circleProps {
  className?: string
  radius: string
  centerX: string
  centerY: string
  setVisible: (visibility: boolean) => void
}

const Card: FC<cardProps> = ({className, isVisible, setVisible, children}) => {
  function makeVisible() {
    setVisible(true)
  }

  return (
    <div className={classnames(styles.card, {[styles.visibleCard]: isVisible})}>
      <span className={styles.close}>&times;</span>
      {children}
    </div>
  )
}

export const Rectangle: FC<rectangleProps> = ({className, width, height, x, y, setVisible}) => {
  function makeVisible() {
    setVisible(true)
  }

  return (
    <>
    <rect
      className={classnames(styles.svgElement, className)}
      width={width}
      height={height}
      x={x}
      y={y}
      strokeWidth="0.1%"
      onClick={makeVisible}
    />
    <foreignObject width="100%" height="100%">
      <div className={styles.specialDiv}>Hello World i am from here and there and everywhere!</div>
    </foreignObject>
    </>
  );
}

export const Circle: FC<circleProps> = ({className, radius, centerX, centerY, setVisible}) => {
  function makeVisible() {
    setVisible(true)
  }

  return (
    <circle
      className={classnames(styles.svgElement, className)}
      r={radius}
      cx={centerX}
      cy={centerY}
      strokeWidth="0.1%"
      onClick={makeVisible}
    />
  );
}
