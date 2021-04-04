import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'

const Home = () => {
    const {dataBlogs, name} = useSelector(state => state);
    const dispatch = useDispatch()
    console.log('data blog global: ', dataBlogs)
    useEffect(()=> {
        setTimeout(() => {
            dispatch({type:'UPDATE_NAME'})
        }, 3000)

        Axios.get('http://localhost:4000/v1/blog/posts?page=2')
        .then(result => {
            console.log('data API ', result.data);
            const responseAPI = result.data;

            dispatch({type:'UPDATE_DATA_BLOG', payload: responseAPI.data})
        })
        .catch(err => {
            console.log('Error: ', err);
        })
    }, [dispatch])
    const history = useHistory();
    return (
        <div className="home-wrapper">
            <div className="create-wrapper">
                <Button title="create blog"/>
            </div>
            <p>{name}</p>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlogs.map(blog => {
                    return <BlogItem key={blog._id} 
                    image={`http://localhost:4000/${blog.image}`} 
                    title={blog.title} 
                    body={blog.body}
                    name={blog.author.name}
                    date={blog.createdAt}
                    />
                })}
            </div>
            <div className="pagination">
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home
