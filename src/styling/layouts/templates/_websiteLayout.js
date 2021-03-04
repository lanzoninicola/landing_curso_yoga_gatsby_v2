import * as React from "react"
import PropTypes from "prop-types"
import { PancakeLayout } from "@templates/index"
import { useViewportInfo } from "@hooks"

// import Header from "../../../components/header/header"
// import Footer from "../../../components/footer/footer"

const WebsiteLayout = ({ children }) => {
  const { device } = useViewportInfo()

  return (
    <>
      <PancakeLayout gap="0">
        {/* <Header /> */}

        {children}
        {/* <Footer /> */}
      </PancakeLayout>
    </>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
