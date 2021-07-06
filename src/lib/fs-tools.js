import fs from 'fs-extra'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const { readJSON, writeJSON, writeFile } = fs

const authorsJSONPath = join(dirname(fileURLToPath(import.meta.url)), "../data/authors.json")
const blogsJSONPath = join(dirname(fileURLToPath(import.meta.url)), "../data/blogs.json")

export const publicFolderPath = join(dirname(fileURLToPath(import.meta.url)), "../../public")

export const getAuthors = () => readJSON(authorsJSONPath)
export const getBlogs = () => readJSON(blogsJSONPath)

export const writeAuthors = content => writeJSON(authorsJSONPath, content)
export const writeBlogs = content => writeJSON(blogsJSONPath, content)

export const getCurrentFolderPath = currentFile => dirname(fileURLToPath(currentFile))

// export const writeUsersPicture = (fileName, content) => writeFile(join(authorsPublicFolderPath, fileName), content)