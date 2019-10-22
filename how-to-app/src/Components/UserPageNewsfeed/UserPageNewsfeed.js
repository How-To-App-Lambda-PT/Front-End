import React, { useContext } from 'react';
import { GuidesContext, UserContext } from '../../contexts/index'
import HowToCard from '../Dashboard-page/HowToCard'

const UserPageNewsfeed = props => {

    const [guides] = useContext(GuidesContext);
    const [user] = useContext(UserContext);
    console.log(guides)

    return(
        <div>
            {guides.map(guide=>
            <HowToCard title={guide} steps={guide.description} />
            )}
        </div>
    );
}

export default UserPageNewsfeed