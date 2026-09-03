import { ReactNode } from "react"



const layout = ({ children}: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen flex-col w-full items-center justify-center">
      <div className="mt-12">{children}</div>

      <h2>Forever Young !!</h2>
    </div>
  )
}

export default layout
