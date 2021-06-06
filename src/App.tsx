import React, { FC } from 'react';
import classnames from 'classnames'
import styles from './App.module.scss';

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

const Rectangle: FC<rectangleProps> = ({className, width, height, x, y, setVisible}) => {
  function makeVisible() {
    setVisible(true)
  }

  return (
    <rect
      className={classnames(styles.svgElement, className)}
      width={width}
      height={height}
      x={x}
      y={y}
      strokeWidth="0.1%"
      onClick={makeVisible}
    />
  );
}

const Circle: FC<circleProps> = ({className, radius, centerX, centerY, setVisible}) => {
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

const App: FC = () => {
  return (
    <div className={styles.App}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <Rectangle width="1rem" height="1rem" x="0" y="0" setVisible={(noValue: boolean) => alert("rectangle clicked!")} />
        <Circle radius="1rem" centerX="3rem" centerY="3rem" setVisible={(noValue: boolean) => alert("Circle clicked!")} />
      </svg>
    </div>
  )
}
export default App;
