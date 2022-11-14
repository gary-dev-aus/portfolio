import { writable } from "svelte/store"

export const projects = writable([
    {
        id: 1,
        name: "Project 1",
        description: "This is project 1",
    },
    {
        id: 2,
        name: "Project 2",
        description: "This is project 2",
    },
    {
        id: 3,
        name: "Project 3",
        description: "This is project 3",
    },
])
