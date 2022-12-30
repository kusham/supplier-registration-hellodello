import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTruck } from '@fortawesome/free-brands-svg-icons'
const CompanyFeatures = () => {
  return (
    <div className='CompanyFeatures-container'>
<div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">
        {/* <FontAwesomeIcon icon={faTruck} /> */}
        <FontAwesomeIcon icon="fal fa-truck" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3"></div>
        <div className="col-sm-12 col-md-6 col-lg-3"></div>
        <div className="col-sm-12 col-md-6 col-lg-3"></div>
    </div>
</div>
    </div>
  )
}

export default CompanyFeatures