import React from 'react'
import { LoginBg } from '../../../assets'
import './upload.scss'
const Upload = () => {
    return (
        <div className="upload">
            <img src={LoginBg} alt="preview" class="preview" />
            <input type="file" />
        </div>
    )
}

export default Upload
