import React, { useContext } from 'react';
import { GuidesContext, UserContext } from '../../contexts/index'
import HowToCard from '../Dashboard-page/HowToCard'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UserPageNewsfeed = props => {

    const [guides] = useContext(GuidesContext);
    const [user] = useContext(UserContext);

    console.log(user)
    if(user.type=='creator'){
        if(guides==undefined){
            return <h2>loading...</h2>
        }
        return(
            <div className='newsfeedContainer'>
                <div className='header'>
                    <Link to='/dashboard'>Home</Link>
                    <h2>Top How-Tos</h2>
                    <h1>Welcome {user.username}</h1>
                </div>
                <div className='nav'>
                <h2>Following</h2>
                <h2>Message Boards</h2>
                <h2>My Account</h2>
                <h2><Link to='/createhowto'>Create a How-to</Link></h2>
                </div>
                <div className='guidesList'>
                    {guides.map(guide=>
                    <HowToCard title={guide.title} steps={guide.description} />
                    )}
                </div>
            </div>
        );
    }
    return <Redirect to='/' />
}

export default UserPageNewsfeed