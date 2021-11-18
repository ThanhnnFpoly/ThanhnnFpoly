import Navbar from 'components/navbars/AdminNavbar'
import Sidebar from 'components/sidebar/Sidebar'
import React from 'react'

function AdminLayout() {
    return (
        <div>
            <Navbar />
        <div className="boxed ">
          <div id="content-container" className="bg-light">
            <main>{props.children}</main>
          </div>
        </div>
        <Sidebar />
        </div>
    )
}

export default AdminLayout
