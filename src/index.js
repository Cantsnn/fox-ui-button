import React from 'react'
import styles from './styles.module.css'


export const Button = (props)=>{
  return (<button className={styles[props.type?props.type:"default"]} style={{backgroundColor:props.backColor, color:props.textColor}} {...props}>
     {props.text}
  </button>)
}