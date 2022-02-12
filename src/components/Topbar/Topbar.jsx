import React from 'react'
import "./topbar.css"
import {NotificationsNone , Language , Settings} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                            <span className="logo">My Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                    <Settings/>
                    
                    </div>
                    <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" 
                    alt="" className="topAvatar" />
                
                </div>
            </div>
            
        </div>
    )
}
