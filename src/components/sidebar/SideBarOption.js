import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FaUserAlt } from "react-icons/fa";

export default class SideBarOption extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        active: PropTypes.bool,
    }
    static defaultProps = {
        active:false,
    }
    render() {
        const { active, name } = this.props
        return (
            <div  className={`user ${active ? 'active':''}`}  >
                <div className="user-info">
                    <div className="name">{name} : <FaUserAlt  style={{color: '#00ff00'}}/></div>
                </div>
                
            </div>
        )
    }
}