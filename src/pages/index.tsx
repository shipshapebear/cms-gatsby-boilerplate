import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Layout from "@/components/core/layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      Hello World
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
