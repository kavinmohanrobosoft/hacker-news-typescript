import React from 'react'
import { type } from 'os'

export type ParatextProps ={
    className?:string, 
    text:string
}

export type SpantextProps = {
    className?:string,
    text:string
}
export type PostsResult = {
    by?:string ,
    descendants?:number,
    id?:number ,
    kids?:Array<number>,
    score?: number ,
    time?: number ,
    title?: string ,
    type?: string ,
    url?: string ,
    text?:string
  }
  export type AskResult = {
    by?:string ,
    descendants?:number,
    id?:number ,
    kids?:Array<number>,
    score?: number ,
    time?: number ,
    title?: string ,
    type?: string ,
    url?: string ,
  }

export type IndividualPostsProps = {
    posts:Array<PostsResult>
  }

export type HeadingTextProps = {
    className?:string, 
    text:string
}

export type TextareaProps = {
    className?:string, 
    value?:string,
    onchange?:() =>void
}

export type InputTextProps = {
    className?:string, 
    value?:string,
    onChange?: () =>void
}

export type LinkProps = {
    className?:string, 
    url?:string,
    text:string,
    keyvalue?:number
}
type HeaderNavbarArray = {
    text: string,
    url?: string,
    className?: string
}
export type HeaderNavbarProps = {
    className?:string, 
    data: Array<HeaderNavbarArray>
}

export type HeaderNavbarData = {
    text: string,
    url?: string,
    className?: string
}

type FooterNavbarArray = {
    text: string,
    url?: string,
    className?: string
}
export type FooterNavbarProps = {
    className?:string, 
    data: Array<FooterNavbarArray>
}

export type FooterNavbarData = {
    text: string,
    url?: string,
    className?: string
}

export type LabelProps = {
    text: string,
    className?: string
}
type PostsublinePropsData = {
    descendants?: number,
    by?: string,
}
export type PostsublineProps = {
    className?: string
    data: Array<PostsublinePropsData>
}

export type OlListProps = {
    className?: string,
    start?: number,
    data: any
}

export type ListProps = {
    className?: string,
    data: any
}