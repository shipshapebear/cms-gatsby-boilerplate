import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
//import { Button, buttonVariants } from "@/components/button"
//import { cn } from "@/lib/utils"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>  
      
      {/* button usage */}
      {/* <Button>Test Button</Button>
      <Link to="/home" className={cn(buttonVariants({ variant: "destructive" }))}>Test</Link> */}
    </main> 
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
