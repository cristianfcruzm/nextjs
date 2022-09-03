import React from 'react'
import { SVGIconProps } from './svg.types'

const About = ({ size = '48px', ...otherProps }: SVGIconProps) => {
  return (<svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <path
      fill="#2196F3"
      d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"
    />
    <g fill="#fff">
      <rect x="22" y="20" width="4" height="11" />
      <circle cx="24" cy="15" r="2" />
    </g>
  </svg>)
}

export default About