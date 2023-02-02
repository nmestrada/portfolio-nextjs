import React from 'react'

export const Blog = ({content,title}) => (
    <article>
        <h3>{title}</h3>
        <p>{content}</p>
    </article>
)