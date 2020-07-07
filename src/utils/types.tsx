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
type PostsResult = {
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
export type OlListProps = {
    className?: string,
    start?: number,
    data: Array<PostsResult>
}

export type IndividualPostsProps = {
    posts:Array<PostsResult>
  }

export type ListProps = {
    className?: string,
    data: HTMLElement
}

export type HeadingTextProps = {
    className?:string, 
    text:string
}

export type TextareaProps = {
    className?:string, 
    value?:string,
    onChange?: () =>void
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
